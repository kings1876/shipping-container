import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allPaths, resolvePage, slugToPath } from '../../lib/routes';
import { clampDescription, clampTitle } from '../../lib/site';
import { CategoryView } from '../../views/CategoryView';
import { GuideView } from '../../views/GuideView';
import { LocationView } from '../../views/LocationView';
import { ProductView } from '../../views/ProductView';
import { ProductsIndexView } from '../../views/ProductsIndexView';
import { TrustView } from '../../views/TrustView';

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string[] }> };

export function generateStaticParams() {
  return allPaths().map((p) => ({ slug: p.split('/').filter(Boolean) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const path = slugToPath(slug);
  const page = resolvePage(path);
  if (!page) return {};
  const title = clampTitle(page.data.title);
  const description = clampDescription(page.data.metaDescription);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path },
    twitter: { title, description },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const page = resolvePage(slugToPath(slug));
  if (!page) notFound();

  switch (page.kind) {
    case 'category':
      return <CategoryView category={page.data} />;
    case 'location':
      return <LocationView location={page.data} />;
    case 'guide':
      return <GuideView guide={page.data} />;
    case 'trust':
      return <TrustView page={page.data} />;
    case 'product':
      return <ProductView product={page.data} />;
    case 'products-index':
      return <ProductsIndexView />;
  }
}
