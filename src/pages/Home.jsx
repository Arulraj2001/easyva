import { useEffect, useState } from 'react';
import { productsService } from '@/lib/products-service';
import PageLayout from '@/components/layout/PageLayout';
import HeroSection from '@/components/home/HeroSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import WhyEasyva from '@/components/home/WhyEasyva';
import Categories from '@/components/home/Categories';
import StatsSection from '@/components/home/StatsSection';
import WhatsAppBanner from '@/components/home/WhatsAppBanner';
import { SAMPLE_PRODUCTS } from '@/lib/products-data';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await productsService.getAll(50);
        if (data && data.length > 0) {
          setProducts(data);
        } else {
          setProducts(SAMPLE_PRODUCTS);
        }
      } catch (error) {
        console.error('Failed to load products:', error);
        setProducts(SAMPLE_PRODUCTS);
      }
    };

    loadProducts();
  }, []);

  return (
    <PageLayout>
      <HeroSection />
      <FeaturedProducts products={products} />
      <WhyEasyva />
      <Categories />
      <StatsSection />
      <WhatsAppBanner />
    </PageLayout>
  );
}