import type { MetadataRoute } from 'next';
import { PRODUCT_PAGES } from '../data/products';
import { allPaths } from '../lib/routes';
import { SITE_URL } from '../lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const hidden = new Set(PRODUCT_PAGES.filter((p) => p.noindex).map((p) => p.path));
  return ['/', ...allPaths().filter((p) => !hidden.has(p))].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }));
}
