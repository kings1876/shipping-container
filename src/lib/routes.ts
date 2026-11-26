import { CATEGORY_PAGES, CATEGORY_BY_PATH } from '../data/categories';
import { GUIDE_PAGES, GUIDE_BY_SLUG } from '../data/guides';
import { LOCATION_PAGES, LOCATION_BY_SLUG } from '../data/locations';
import { PRODUCT_BY_SLUG, PRODUCT_PAGES } from '../data/products';
import { TRUST_PAGES, TRUST_BY_PATH } from '../data/trustPages';
import type {
  CategoryPageData,
  GuidePageData,
  LocationPageData,
  ProductPageData,
  TrustPageData,
} from '../types/seo';

export const PRODUCTS_INDEX_SEO = {
  path: '/products/',
  title: 'Container Catalog | Sizes, Grades & Prices',
  metaDescription:
    'Browse every container we sell: 10ft to 53ft steel containers, storage units, offices, workshops, cabins and pools. Starting prices listed. Sales only.',
};

export type ResolvedPage =
  | { kind: 'category'; data: CategoryPageData }
  | { kind: 'location'; data: LocationPageData }
  | { kind: 'guide'; data: GuidePageData }
  | { kind: 'trust'; data: TrustPageData }
  | { kind: 'product'; data: ProductPageData }
  | { kind: 'products-index'; data: { title: string; metaDescription: string } };

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

  if (path === PRODUCTS_INDEX_SEO.path) {
    return { kind: 'products-index', data: PRODUCTS_INDEX_SEO };
  }

  if (path.startsWith('/products/')) {
    const product = PRODUCT_BY_SLUG[path.replace('/products/', '').replace(/\/$/, '')];
    if (product) return { kind: 'product', data: product };
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
    PRODUCTS_INDEX_SEO.path,
    ...PRODUCT_PAGES.map((p) => p.path),
  ];
}
