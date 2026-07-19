import { useEffect, useState } from 'react';
import { productsService } from '@/lib/products-service';
import PageLayout from '@/components/layout/PageLayout';
import HeroSection from '@/components/home/HeroSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import WhyEasyva from '@/components/home/WhyEasyva';
import Categories from '@/components/home/Categories';
import StatsSection from '@/components/home/StatsSection';
import WhatsAppBanner from '@/components/home/WhatsAppBanner';
import Testimonials from '@/components/home/Testimonials';
import { SAMPLE_PRODUCTS } from '@/lib/products-data';
import { buildAbsoluteUrl } from '@/lib/seo';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await productsService.getAll(50);
        setProducts(data && data.length > 0 ? data : SAMPLE_PRODUCTS);
      } catch (error) {
        console.error('Failed to load products:', error);
        setProducts(SAMPLE_PRODUCTS);
      }
    };

    loadProducts();
  }, []);

  return (
    <PageLayout
      seo={{
        title: 'Easyva | Home and Kitchen, Home Decor, Art and Craft, Embroidery Kits',
        description:
          'Shop Easyva for home and kitchen products, home decor, art and craft supplies, and beginner-friendly embroidery kits made for Indian homes and creative makers.',
        keywords: 'home and kitchen products, home decor, art and craft supplies, embroidery kit, kitchen organizers, Easyva India',
        canonicalPath: '/',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Easyva',
          url: buildAbsoluteUrl('/'),
          potentialAction: {
            '@type': 'SearchAction',
            target: `${buildAbsoluteUrl('/products')}?search={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
        },
      }}
    >
      <HeroSection />
      <FeaturedProducts products={products} />
      <WhyEasyva />
      <Categories />
      <StatsSection />
      <Testimonials />
      <WhatsAppBanner />
    </PageLayout>
  );
}
