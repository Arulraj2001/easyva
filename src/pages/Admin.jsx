import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/lib/AuthContext';
import { Plus, Edit2, Trash2, X, Check, Image, Package, ChevronDown, AlertCircle, Search, LogOut } from 'lucide-react';
import { SAMPLE_PRODUCTS } from '@/lib/products-data';

const CATEGORIES = ['Bathroom Essentials', 'Kitchen Organizers', 'Premium Dispensers', 'Magnetic Storage Systems'];
const STOCK_OPTIONS = ['In Stock', 'Limited Stock', 'Out of Stock'];

const emptyForm = {
  title: '', slug: '', price: '', original_price: '', category: CATEGORIES[0],
  badge: '', short_description: '', full_description: '',
  features: [''], specifications: [{ label: '', value: '' }],
  material: '', dimensions: '', package_contents: '',
  images: [''], featured: false, stock_status: 'In Stock', sort_order: 0
};

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function FormField({ label, children }) {
  return (
    <div className="space-y-1.5">
      <label className="micro-label text-ethereal/40">{label}</label>
      {children}
    </div>
  );
}

function GradientInput({ className = '', ...props }) {
  return (
    <input
      {...props}
      className={`w-full bg-lustre/50 rounded-xl px-4 py-3 text-sm text-ethereal placeholder:text-ethereal/20 border border-white/10 focus:border-iris/60 focus:shadow-[0_0_20px_rgba(124,58,237,0.3)] focus:outline-none transition-all duration-300 ${className}`}
    />
  );
}

function GradientTextarea({ className = '', ...props }) {
  return (
    <textarea
      {...props}
      className={`w-full bg-lustre/50 rounded-xl px-4 py-3 text-sm text-ethereal placeholder:text-ethereal/20 border border-white/10 focus:border-iris/60 focus:shadow-[0_0_20px_rgba(124,58,237,0.3)] focus:outline-none transition-all duration-300 resize-none ${className}`}
    />
  );
}

export default function Admin() {
  const { logout } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(null);
  const [search, setSearch] = useState('');
  const [toast, setToast] = useState(null);

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const loadProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('sort_order', { ascending: true });

    if (error) {
      console.error('Error loading products:', error);
      showToast('Failed to load products.', 'error');
    } else {
      setProducts(data || []);
    }
    setLoading(false);
  };

  useEffect(() => { loadProducts(); }, []);

  const openCreate = () => {
    setEditing(null);
    setForm(emptyForm);
    setShowForm(true);
  };

  const openEdit = (p) => {
    setEditing(p.id);
    setForm({
      ...emptyForm, ...p,
      features: p.features?.length ? p.features : [''],
      specifications: p.specifications?.length ? p.specifications : [{ label: '', value: '' }],
      images: p.images?.length ? p.images : [''],
    });
    setShowForm(true);
  };

  const handleSave = async () => {
    if (!form.title || !form.price) return showToast('Title and price are required.', 'error');
    setSaving(true);
    try {
      const data = {
        ...form,
        slug: form.slug || slugify(form.title),
        price: Number(form.price),
        original_price: form.original_price ? Number(form.original_price) : null,
        sort_order: Number(form.sort_order) || 0,
        features: form.features.filter(f => f.trim()),
        specifications: form.specifications.filter(s => s.label.trim()),
        images: form.images.filter(i => i.trim()),
      };

      let result;
      if (editing) {
        result = await supabase
          .from('products')
          .update(data)
          .eq('id', editing)
          .select()
          .single();
      } else {
        result = await supabase
          .from('products')
          .insert([data])
          .select()
          .single();
      }

      if (result.error) {
        throw result.error;
      }

      setSaving(false);
      setShowForm(false);
      showToast(editing ? 'Product updated!' : 'Product created!');
      loadProducts();
    } catch (error) {
      console.error('Error saving product:', error);
      setSaving(false);
      showToast('Failed to save product.', 'error');
    }
  };

  const handleDelete = async (id) => {
    setDeleting(id);
    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setDeleting(null);
      showToast('Product deleted.');
      loadProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
      setDeleting(null);
      showToast('Failed to delete product.', 'error');
    }
  };

  const seedSamples = async () => {
    setSaving(true);
    try {
      const { error } = await supabase
        .from('products')
        .insert(SAMPLE_PRODUCTS);

      if (error) throw error;
      showToast('Sample products added!');
      loadProducts();
    } catch (error) {
      console.error('Error seeding samples:', error);
      showToast('Failed to add sample products.', 'error');
    } finally {
      setSaving(false);
    }
  };

  const filtered = products.filter(p =>
    !search || p.title?.toLowerCase().includes(search.toLowerCase())
  );

  const updateList = (key, idx, val) => {
    const arr = [...form[key]];
    arr[idx] = val;
    setForm(f => ({ ...f, [key]: arr }));
  };

  const updateSpec = (idx, field, val) => {
    const arr = [...form.specifications];
    arr[idx] = { ...arr[idx], [field]: val };
    setForm(f => ({ ...f, specifications: arr }));
  };

  return (
    <div className="min-h-screen bg-void text-ethereal">
      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            className={`fixed top-6 left-1/2 z-[100] px-6 py-3 rounded-xl flex items-center gap-3 shadow-2xl ${
              toast.type === 'error' ? 'bg-red-500/20 border border-red-500/40 text-red-300' : 'bg-biolume/20 border border-biolume/40 text-biolume'
            }`}
          >
            {toast.type === 'error' ? <AlertCircle size={16} /> : <Check size={16} />}
            <span className="text-sm font-medium">{toast.msg}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="sticky top-0 z-40 glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-iris to-biolume flex items-center justify-center">
              <span className="font-poppins font-black text-void text-sm">E</span>
            </div>
            <div>
              <span className="font-poppins font-bold text-lg">easy<span className="gradient-text">va</span></span>
              <span className="text-ethereal/30 text-xs ml-2">Admin</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ethereal/30" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="bg-lustre/50 rounded-xl pl-9 pr-4 py-2 text-sm text-ethereal placeholder:text-ethereal/20 border border-white/10 focus:border-iris/50 focus:outline-none transition-colors w-48"
              />
            </div>
            <motion.button
              onClick={openCreate}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-iris text-ethereal text-sm font-semibold glow-purple"
            >
              <Plus size={15} />
              Add Product
            </motion.button>
            <motion.button
              onClick={logout}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/20 border border-red-500/40 text-red-300 text-sm font-semibold transition-colors hover:bg-red-500/30"
            >
              <LogOut size={15} />
              Logout
            </motion.button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: 'Total Products', value: products.length },
            { label: 'Featured', value: products.filter(p => p.featured).length },
            { label: 'In Stock', value: products.filter(p => p.stock_status === 'In Stock').length },
            { label: 'Categories', value: new Set(products.map(p => p.category)).size },
          ].map(s => (
            <div key={s.label} className="glass rounded-2xl p-5 border border-white/8">
              <p className="font-poppins font-bold text-3xl gradient-text">{s.value}</p>
              <p className="micro-label text-ethereal/40 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {!loading && products.length === 0 && (
          <div className="text-center py-20">
            <Package size={48} className="text-iris/30 mx-auto mb-4" />
            <p className="font-poppins text-xl text-ethereal/40 mb-4">No products yet</p>
            <div className="flex gap-3 justify-center">
              <motion.button
                onClick={openCreate}
                whileHover={{ scale: 1.04 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-iris text-ethereal font-semibold glow-purple"
              >
                <Plus size={16} /> Add First Product
              </motion.button>
              <motion.button
                onClick={seedSamples}
                disabled={saving}
                whileHover={{ scale: 1.04 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-biolume/30 text-biolume font-semibold"
              >
                {saving ? 'Loading...' : 'Load Sample Products'}
              </motion.button>
            </div>
          </div>
        )}

        {/* Products Table */}
        {filtered.length > 0 && (
          <div className="glass rounded-2xl border border-white/8 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/8">
                    <th className="text-left px-5 py-4 micro-label text-ethereal/40">Product</th>
                    <th className="text-left px-5 py-4 micro-label text-ethereal/40 hidden md:table-cell">Category</th>
                    <th className="text-left px-5 py-4 micro-label text-ethereal/40">Price</th>
                    <th className="text-left px-5 py-4 micro-label text-ethereal/40 hidden md:table-cell">Stock</th>
                    <th className="text-left px-5 py-4 micro-label text-ethereal/40 hidden md:table-cell">Featured</th>
                    <th className="text-right px-5 py-4 micro-label text-ethereal/40">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((p, i) => (
                    <motion.tr
                      key={p.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.04 }}
                      className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          {p.images?.[0] ? (
                            <img src={p.images[0]} alt="" className="w-10 h-10 rounded-lg object-cover bg-lustre" />
                          ) : (
                            <div className="w-10 h-10 rounded-lg bg-iris/10 flex items-center justify-center">
                              <Image size={14} className="text-iris/40" />
                            </div>
                          )}
                          <div>
                            <p className="font-medium text-sm text-ethereal">{p.title}</p>
                            <p className="text-xs text-ethereal/30">{p.slug}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4 hidden md:table-cell">
                        <span className="micro-label text-iris-light">{p.category}</span>
                      </td>
                      <td className="px-5 py-4">
                        <span className="font-semibold text-sm text-ethereal">₹{p.price?.toLocaleString('en-IN')}</span>
                      </td>
                      <td className="px-5 py-4 hidden md:table-cell">
                        <span className={`micro-label px-2 py-1 rounded-lg ${
                          p.stock_status === 'In Stock' ? 'bg-biolume/10 text-biolume' :
                          p.stock_status === 'Limited Stock' ? 'bg-orange-500/10 text-orange-300' :
                          'bg-red-500/10 text-red-300'
                        }`}>{p.stock_status}</span>
                      </td>
                      <td className="px-5 py-4 hidden md:table-cell">
                        {p.featured ? <Check size={16} className="text-biolume" /> : <span className="text-ethereal/20">—</span>}
                      </td>
                      <td className="px-5 py-4 text-right">
                        <div className="flex items-center gap-2 justify-end">
                          <motion.button
                            onClick={() => openEdit(p)}
                            whileHover={{ scale: 1.1 }}
                            className="w-8 h-8 rounded-lg bg-iris/10 flex items-center justify-center text-iris-light hover:bg-iris/20 transition-colors"
                          >
                            <Edit2 size={13} />
                          </motion.button>
                          <motion.button
                            onClick={() => handleDelete(p.id)}
                            disabled={deleting === p.id}
                            whileHover={{ scale: 1.1 }}
                            className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 hover:bg-red-500/20 transition-colors"
                          >
                            {deleting === p.id ? (
                              <div className="w-3 h-3 border border-red-400 border-t-transparent rounded-full animate-spin" />
                            ) : (
                              <Trash2 size={13} />
                            )}
                          </motion.button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Product Form Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center p-4 overflow-y-auto bg-void/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-2xl my-8 glass rounded-3xl border border-iris/20 overflow-hidden shadow-2xl shadow-iris/20"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <h2 className="font-poppins font-bold text-xl text-ethereal">
                  {editing ? 'Edit Product' : 'Add New Product'}
                </h2>
                <button onClick={() => setShowForm(false)} className="w-8 h-8 rounded-lg glass flex items-center justify-center text-ethereal/50 hover:text-ethereal transition-colors">
                  <X size={16} />
                </button>
              </div>

              {/* Form */}
              <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField label="Product Title *">
                    <GradientInput
                      type="text"
                      value={form.title}
                      onChange={e => setForm(f => ({ ...f, title: e.target.value, slug: slugify(e.target.value) }))}
                      placeholder="Premium Glass Soap Dispenser"
                    />
                  </FormField>
                  <FormField label="Slug (auto)">
                    <GradientInput
                      type="text"
                      value={form.slug}
                      onChange={e => setForm(f => ({ ...f, slug: e.target.value }))}
                      placeholder="premium-glass-soap-dispenser"
                    />
                  </FormField>
                  <FormField label="Price (INR) *">
                    <GradientInput
                      type="number"
                      value={form.price}
                      onChange={e => setForm(f => ({ ...f, price: e.target.value }))}
                      placeholder="1299"
                    />
                  </FormField>
                  <FormField label="Original Price (for discount)">
                    <GradientInput
                      type="number"
                      value={form.original_price}
                      onChange={e => setForm(f => ({ ...f, original_price: e.target.value }))}
                      placeholder="1899"
                    />
                  </FormField>
                  <FormField label="Category">
                    <select
                      value={form.category}
                      onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                      className="w-full bg-lustre/50 rounded-xl px-4 py-3 text-sm text-ethereal border border-white/10 focus:border-iris/60 focus:outline-none transition-all duration-300"
                    >
                      {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </FormField>
                  <FormField label="Stock Status">
                    <select
                      value={form.stock_status}
                      onChange={e => setForm(f => ({ ...f, stock_status: e.target.value }))}
                      className="w-full bg-lustre/50 rounded-xl px-4 py-3 text-sm text-ethereal border border-white/10 focus:border-iris/60 focus:outline-none transition-all duration-300"
                    >
                      {STOCK_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </FormField>
                  <FormField label="Badge (optional)">
                    <GradientInput
                      type="text"
                      value={form.badge}
                      onChange={e => setForm(f => ({ ...f, badge: e.target.value }))}
                      placeholder="Bestseller"
                    />
                  </FormField>
                  <FormField label="Sort Order">
                    <GradientInput
                      type="number"
                      value={form.sort_order}
                      onChange={e => setForm(f => ({ ...f, sort_order: e.target.value }))}
                      placeholder="1"
                    />
                  </FormField>
                </div>

                {/* Featured toggle */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setForm(f => ({ ...f, featured: !f.featured }))}
                    className={`w-12 h-6 rounded-full transition-all duration-300 relative ${form.featured ? 'bg-biolume' : 'bg-lustre border border-white/20'}`}
                  >
                    <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${form.featured ? 'left-7' : 'left-1'}`} />
                  </button>
                  <span className="text-sm text-ethereal/70">Feature on homepage</span>
                </div>

                {/* Short Description */}
                <FormField label="Short Description">
                  <GradientTextarea
                    rows={2}
                    value={form.short_description}
                    onChange={e => setForm(f => ({ ...f, short_description: e.target.value }))}
                    placeholder="Brief product summary..."
                  />
                </FormField>

                {/* Full Description */}
                <FormField label="Full Description">
                  <GradientTextarea
                    rows={4}
                    value={form.full_description}
                    onChange={e => setForm(f => ({ ...f, full_description: e.target.value }))}
                    placeholder="Detailed product description..."
                  />
                </FormField>

                {/* Material / Dimensions / Package */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField label="Material">
                    <GradientInput type="text" value={form.material} onChange={e => setForm(f => ({ ...f, material: e.target.value }))} placeholder="Borosilicate Glass" />
                  </FormField>
                  <FormField label="Dimensions">
                    <GradientInput type="text" value={form.dimensions} onChange={e => setForm(f => ({ ...f, dimensions: e.target.value }))} placeholder="22cm H × 8cm Ø" />
                  </FormField>
                  <FormField label="Package Contents">
                    <GradientInput type="text" value={form.package_contents} onChange={e => setForm(f => ({ ...f, package_contents: e.target.value }))} placeholder="1× Dispenser, 1× Pump..." />
                  </FormField>
                </div>

                {/* Images */}
                <FormField label="Image URLs">
                  <div className="space-y-2">
                    {form.images.map((img, i) => (
                      <div key={i} className="flex gap-2">
                        <GradientInput
                          type="url"
                          value={img}
                          onChange={e => updateList('images', i, e.target.value)}
                          placeholder="https://..."
                          className="flex-1"
                        />
                        {form.images.length > 1 && (
                          <button onClick={() => setForm(f => ({ ...f, images: f.images.filter((_, j) => j !== i) }))} className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center hover:bg-red-500/20 transition-colors">
                            <X size={14} />
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      onClick={() => setForm(f => ({ ...f, images: [...f.images, ''] }))}
                      className="flex items-center gap-2 text-xs text-iris-light hover:text-biolume transition-colors"
                    >
                      <Plus size={12} /> Add image URL
                    </button>
                  </div>
                </FormField>

                {/* Features */}
                <FormField label="Features">
                  <div className="space-y-2">
                    {form.features.map((feat, i) => (
                      <div key={i} className="flex gap-2">
                        <GradientInput
                          type="text"
                          value={feat}
                          onChange={e => updateList('features', i, e.target.value)}
                          placeholder="Feature description..."
                          className="flex-1"
                        />
                        {form.features.length > 1 && (
                          <button onClick={() => setForm(f => ({ ...f, features: f.features.filter((_, j) => j !== i) }))} className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center hover:bg-red-500/20 transition-colors">
                            <X size={14} />
                          </button>
                        )}
                      </div>
                    ))}
                    <button onClick={() => setForm(f => ({ ...f, features: [...f.features, ''] }))} className="flex items-center gap-2 text-xs text-iris-light hover:text-biolume transition-colors">
                      <Plus size={12} /> Add feature
                    </button>
                  </div>
                </FormField>

                {/* Specifications */}
                <FormField label="Specifications">
                  <div className="space-y-2">
                    {form.specifications.map((spec, i) => (
                      <div key={i} className="flex gap-2">
                        <GradientInput type="text" value={spec.label} onChange={e => updateSpec(i, 'label', e.target.value)} placeholder="Label" className="w-1/3" />
                        <GradientInput type="text" value={spec.value} onChange={e => updateSpec(i, 'value', e.target.value)} placeholder="Value" className="flex-1" />
                        {form.specifications.length > 1 && (
                          <button onClick={() => setForm(f => ({ ...f, specifications: f.specifications.filter((_, j) => j !== i) }))} className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center hover:bg-red-500/20 transition-colors">
                            <X size={14} />
                          </button>
                        )}
                      </div>
                    ))}
                    <button onClick={() => setForm(f => ({ ...f, specifications: [...f.specifications, { label: '', value: '' }] }))} className="flex items-center gap-2 text-xs text-iris-light hover:text-biolume transition-colors">
                      <Plus size={12} /> Add spec
                    </button>
                  </div>
                </FormField>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-white/10 flex gap-3">
                <button onClick={() => setShowForm(false)} className="flex-1 py-3 rounded-xl glass border border-white/10 text-ethereal/60 text-sm font-medium hover:text-ethereal transition-colors">
                  Cancel
                </button>
                <motion.button
                  onClick={handleSave}
                  disabled={saving}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 py-3 rounded-xl bg-iris text-ethereal font-semibold text-sm flex items-center justify-center gap-2 glow-purple disabled:opacity-50"
                >
                  {saving ? (
                    <div className="w-4 h-4 border-2 border-ethereal/30 border-t-ethereal rounded-full animate-spin" />
                  ) : (
                    <><Check size={15} /> {editing ? 'Save Changes' : 'Create Product'}</>
                  )}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}