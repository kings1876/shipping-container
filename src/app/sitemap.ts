import type { MetadataRoute } from 'next';
import { allPaths } from '../lib/routes';
import { SITE_URL } from '../lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', ...allPaths()].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }));
}
