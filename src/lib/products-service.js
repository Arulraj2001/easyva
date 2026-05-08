import { supabase } from '@/lib/supabase';

export const productsService = {
  // Get all products
  async getAll(limit = 100, orderBy = 'sort_order') {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order(orderBy, { ascending: true })
      .limit(limit);

    if (error) throw error;
    return data;
  },

  // Get featured products
  async getFeatured(limit = 4) {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('featured', true)
      .order('sort_order', { ascending: true })
      .limit(limit);

    if (error) throw error;
    return data;
  },

  // Get product by slug
  async getBySlug(slug) {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) throw error;
    return data;
  },

  // Get products by category
  async getByCategory(category) {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('category', category)
      .order('sort_order', { ascending: true });

    if (error) throw error;
    return data;
  },

  // Create product (admin only)
  async create(product) {
    const { data, error } = await supabase
      .from('products')
      .insert(product)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Update product (admin only)
  async update(id, updates) {
    const { data, error } = await supabase
      .from('products')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Delete product (admin only)
  async delete(id) {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },

  // Search products
  async search(query) {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .or(`title.ilike.%${query}%,short_description.ilike.%${query}%,full_description.ilike.%${query}%`)
      .order('sort_order', { ascending: true });

    if (error) throw error;
    return data;
  }
};