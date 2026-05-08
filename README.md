# Easyva Showcase

A modern e-commerce product showcase built with React, Vite, and Supabase.

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up your Supabase project:
   - Create a new project at [supabase.com](https://supabase.com)
   - Run the SQL schema from `supabase-schema.sql` in your Supabase SQL editor
   - Copy your project URL and anon key
4. Create a `.env` file with your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
5. Run the development server: `npm run dev`

## Features

- Product catalog with categories
- Product detail pages
- Admin panel for managing products
- WhatsApp integration
- Responsive design with Tailwind CSS
- Authentication with Supabase Auth

## Database Schema

The app uses a `products` table with the following structure:
- id (UUID, primary key)
- title, slug, price, category, etc.
- features (array), specifications (JSONB), images (array)
- featured, stock_status, sort_order

See `supabase-schema.sql` for the complete schema.

## Migration from Base44

This project has been migrated from Base44 to Supabase. All Base44 API calls have been replaced with Supabase client calls.
