const SITE_NAME = 'Easyva';
const SITE_URL = 'https://easyva.in';
const DEFAULT_TITLE = 'Easyva | Home and Kitchen, Decor, Craft and Embroidery Kits';
const DEFAULT_DESCRIPTION =
  'Shop Easyva for home and kitchen products, home decor, art and craft supplies, and embroidery kits in India.';
const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&q=90';

const getOrigin = () => {
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin;
  }

  return SITE_URL;
};

export const buildAbsoluteUrl = (path = '/') => {
  try {
    return new URL(path, getOrigin()).toString();
  } catch {
    return SITE_URL;
  }
};

export const buildCanonicalUrl = (path = '/') => buildAbsoluteUrl(path);

export const buildSeoTitle = (title) => title || DEFAULT_TITLE;

export const buildSeoDescription = (description) =>
  description || DEFAULT_DESCRIPTION;

export const buildSeoKeywords = (keywords) => {
  if (Array.isArray(keywords)) {
    return keywords.filter(Boolean).join(', ');
  }

  return keywords || '';
};

export const buildFallbackProductSeo = (product = {}, path = '/') => {
  const title = product.seo_title || `${product.title || 'Product'} | Easyva`;
  const description =
    product.seo_description ||
    product.short_description ||
    product.full_description?.slice(0, 160) ||
    DEFAULT_DESCRIPTION;
  const image = product.seo_image || product.images?.[0] || DEFAULT_IMAGE;
  const keywords =
    product.seo_keywords ||
    [product.title, product.category, 'Easyva', 'home and craft products']
      .filter(Boolean)
      .join(', ');

  return {
    title,
    description,
    canonicalPath: path,
    image,
    keywords,
    ogType: 'product',
  };
};

export const buildProductStructuredData = (product, canonicalUrl) => {
  if (!product) return null;

  const availabilityMap = {
    'In Stock': 'https://schema.org/InStock',
    'Limited Stock': 'https://schema.org/LimitedAvailability',
    'Out of Stock': 'https://schema.org/OutOfStock',
  };

  const imageList = (product.images?.length ? product.images : [DEFAULT_IMAGE]).map((image) =>
    buildAbsoluteUrl(image),
  );

  const productData = {
    '@type': 'Product',
    name: product.title,
    description: product.seo_description || product.short_description || product.full_description,
    image: imageList,
    sku: product.slug,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: SITE_NAME,
    },
    offers: {
      '@type': 'Offer',
      url: canonicalUrl,
      priceCurrency: 'INR',
      price: product.price,
      availability: availabilityMap[product.stock_status] || 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
    },
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      productData,
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: buildAbsoluteUrl('/'),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Products',
            item: buildAbsoluteUrl('/products'),
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: product.title,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };
};

export const buildFaqStructuredData = (questions = []) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: questions.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
});

export const buildContactStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Easyva',
  url: buildAbsoluteUrl('/contact'),
  description: DEFAULT_DESCRIPTION,
});

export const DEFAULT_SITE_NAME = SITE_NAME;
export const DEFAULT_SITE_URL = SITE_URL;
export const DEFAULT_SEO_TITLE = DEFAULT_TITLE;
export const DEFAULT_SEO_DESCRIPTION = DEFAULT_DESCRIPTION;
export const DEFAULT_SEO_IMAGE = DEFAULT_IMAGE;
