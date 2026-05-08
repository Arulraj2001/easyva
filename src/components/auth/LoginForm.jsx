import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';
import { motion } from 'framer-motion';
import { Mail, Lock } from 'lucide-react';

export default function LoginForm() {
  const { signIn, authError } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [localError, setLocalError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLocalError('');
    setLoading(true);

    try {
      if (!email || !password) {
        setLocalError('Email and password are required');
        return;
      }

      await signIn(email, password);

      navigate('/admin');
    } catch (error) {
      setLocalError(error.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-void text-ethereal p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md glass rounded-3xl p-8 shadow-2xl"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Admin Sign In</h1>
          <p className="text-ethereal/60 mt-2">
            Sign in to access the admin page.
          </p>
        </div>

        {(localError || authError) && (
          <div className="mb-6 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-200">
            {localError || authError?.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="block text-sm text-ethereal/70">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ethereal/40" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-lustre/50 px-12 py-3 text-ethereal placeholder:text-ethereal/30 focus:border-iris/50 focus:outline-none"
                placeholder="admin@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-ethereal/70">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ethereal/40" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-lustre/50 px-12 py-3 text-ethereal placeholder:text-ethereal/30 focus:border-iris/50 focus:outline-none"
                placeholder="Enter password"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-iris px-4 py-3 text-sm font-semibold text-ethereal transition hover:bg-iris-light disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? 'Please wait...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-ethereal/60">
          Only pre-approved admin users may sign in. Create admin users directly inside Supabase Auth.
        </div>
      </motion.div>
    </div>
  );
}
