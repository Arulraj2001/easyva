import { useEffect } from 'react';
import {
  buildAbsoluteUrl,
  buildSeoDescription,
  buildSeoKeywords,
  buildSeoTitle,
  DEFAULT_SEO_DESCRIPTION,
  DEFAULT_SEO_IMAGE,
  DEFAULT_SITE_NAME,
} from '@/lib/seo';

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      element.setAttribute(key, value);
    }
  });

  return element;
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      element.setAttribute(key, value);
    }
  });

  return element;
}

export default function Seo({
  title,
  description,
  keywords,
  canonicalPath,
  canonicalUrl,
  image = DEFAULT_SEO_IMAGE,
  noindex = false,
  ogType = 'website',
  structuredData = null,
  siteName = DEFAULT_SITE_NAME,
}) {
  useEffect(() => {
    if (typeof document === 'undefined') return undefined;

    const finalTitle = buildSeoTitle(title);
    const finalDescription = buildSeoDescription(description);
    const finalKeywords = buildSeoKeywords(keywords);
    const finalCanonical = canonicalUrl || buildAbsoluteUrl(canonicalPath || '/');
    const finalImage = image || DEFAULT_SEO_IMAGE;
    const robots = noindex ? 'noindex, nofollow' : 'index, follow';

    document.title = finalTitle;

    upsertMeta('meta[name="title"]', { name: 'title', content: finalTitle });
    upsertMeta('meta[name="description"]', { name: 'description', content: finalDescription });
    upsertMeta('meta[name="keywords"]', { name: 'keywords', content: finalKeywords });
    upsertMeta('meta[name="robots"]', { name: 'robots', content: robots });
    upsertMeta('meta[name="author"]', { name: 'author', content: siteName });
    upsertMeta('meta[name="theme-color"]', { name: 'theme-color', content: '#0F172A' });

    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: ogType });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: finalCanonical });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: finalTitle });
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: finalDescription,
    });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: finalImage });
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: siteName });

    upsertMeta('meta[property="twitter:card"]', {
      property: 'twitter:card',
      content: 'summary_large_image',
    });
    upsertMeta('meta[property="twitter:url"]', { property: 'twitter:url', content: finalCanonical });
    upsertMeta('meta[property="twitter:title"]', { property: 'twitter:title', content: finalTitle });
    upsertMeta('meta[property="twitter:description"]', {
      property: 'twitter:description',
      content: finalDescription,
    });
    upsertMeta('meta[property="twitter:image"]', {
      property: 'twitter:image',
      content: finalImage,
    });

    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: finalCanonical });

    const existingScript = document.getElementById('seo-structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    if (structuredData) {
      const script = document.createElement('script');
      script.id = 'seo-structured-data';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return undefined;
  }, [title, description, keywords, canonicalPath, canonicalUrl, image, noindex, ogType, structuredData, siteName]);

  return null;
}
