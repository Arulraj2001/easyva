-- Create products table if it doesn't exist
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
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
  featured BOOLEAN DEFAULT FALSE,
  stock_status TEXT DEFAULT 'In Stock',
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add missing columns safely
ALTER TABLE products
ADD COLUMN IF NOT EXISTS seo_title TEXT,
ADD COLUMN IF NOT EXISTS seo_description TEXT,
ADD COLUMN IF NOT EXISTS seo_keywords TEXT,
ADD COLUMN IF NOT EXISTS seo_image TEXT;

-- Create indexes safely
CREATE INDEX IF NOT EXISTS idx_products_slug
ON products(slug);

CREATE INDEX IF NOT EXISTS idx_products_category
ON products(category);

CREATE INDEX IF NOT EXISTS idx_products_featured
ON products(featured);

CREATE INDEX IF NOT EXISTS idx_products_sort_order
ON products(sort_order);

-- Enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Create policies only if they don't already exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE schemaname='public'
        AND tablename='products'
        AND policyname='Allow public read access on products'
    ) THEN
        CREATE POLICY "Allow public read access on products"
        ON products
        FOR SELECT
        USING (true);
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE schemaname='public'
        AND tablename='products'
        AND policyname='Allow anonymous insert products'
    ) THEN
        CREATE POLICY "Allow anonymous insert products"
        ON products
        FOR INSERT
        WITH CHECK (true);
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE schemaname='public'
        AND tablename='products'
        AND policyname='Allow anonymous update products'
    ) THEN
        CREATE POLICY "Allow anonymous update products"
        ON products
        FOR UPDATE
        USING (true);
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE schemaname='public'
        AND tablename='products'
        AND policyname='Allow anonymous delete products'
    ) THEN
        CREATE POLICY "Allow anonymous delete products"
        ON products
        FOR DELETE
        USING (true);
    END IF;
END $$;

-- Create or replace trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger only if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_trigger
        WHERE tgname = 'update_products_updated_at'
    ) THEN
        CREATE TRIGGER update_products_updated_at
        BEFORE UPDATE ON products
        FOR EACH ROW
        EXECUTE FUNCTION update_updated_at_column();
    END IF;
END $$;