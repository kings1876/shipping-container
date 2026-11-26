import { CATEGORY_PAGES, CATEGORY_BY_PATH } from '../data/categories';
import { GUIDE_PAGES, GUIDE_BY_SLUG } from '../data/guides';
import { LOCATION_PAGES, LOCATION_BY_SLUG } from '../data/locations';
import { TRUST_PAGES, TRUST_BY_PATH } from '../data/trustPages';
import type {
  CategoryPageData,
  GuidePageData,
  LocationPageData,
  TrustPageData,
} from '../types/seo';

export type ResolvedPage =
  | { kind: 'category'; data: CategoryPageData }
  | { kind: 'location'; data: LocationPageData }
  | { kind: 'guide'; data: GuidePageData }
  | { kind: 'trust'; data: TrustPageData };

export function slugToPath(slug: string[]): string {
  return `/${slug.join('/').toLowerCase()}/`;
}

export function resolvePage(path: string): ResolvedPage | null {
  const category = CATEGORY_BY_PATH[path];
  if (category) return { kind: 'category', data: category };

  if (path.startsWith('/shipping-containers-for-sale/')) {
    const slug = path.replace('/shipping-containers-for-sale/', '').replace(/\/$/, '');
    const location = LOCATION_BY_SLUG[slug];
    if (location) return { kind: 'location', data: location };
  }

  if (path.startsWith('/guides/')) {
    const guide = GUIDE_BY_SLUG[path.replace('/guides/', '').replace(/\/$/, '')];
    if (guide) return { kind: 'guide', data: guide };
  }

  const trust = TRUST_BY_PATH[path];
  if (trust) return { kind: 'trust', data: trust };

  return null;
}

export function allPaths(): string[] {
  return [
    ...CATEGORY_PAGES.map((p) => p.path),
    ...LOCATION_PAGES.map((p) => p.path),
    ...GUIDE_PAGES.map((p) => p.path),
    ...TRUST_PAGES.map((p) => p.path),
  ];
}
