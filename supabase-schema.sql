-- Create products table for Easyva showcase
CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  price INTEGER NOT NULL,
  original_price INTEGER,
  category TEXT NOT NULL,
  badge TEXT,
  short_description TEXT,
  full_description TEXT,
  features TEXT[],
  specifications JSONB,
  material TEXT,
  dimensions TEXT,
  package_contents TEXT,
  images TEXT[],
  featured BOOLEAN DEFAULT false,
  stock_status TEXT DEFAULT 'In Stock',
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(featured);
CREATE INDEX IF NOT EXISTS idx_products_sort_order ON products(sort_order);

-- Enable Row Level Security (RLS)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access on products" ON products
  FOR SELECT USING (true);

-- TEMPORARY: Allow anonymous operations for development
-- TODO: Replace with proper authentication when auth is set up
CREATE POLICY "Allow anonymous insert products" ON products
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow anonymous update products" ON products
  FOR UPDATE USING (true);

CREATE POLICY "Allow anonymous delete products" ON products
  FOR DELETE USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();