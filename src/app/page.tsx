import type { Metadata } from 'next';
import { HOME_SEO } from '../data/categories';
import { clampDescription, clampTitle } from '../lib/site';
import { HomeView } from '../views/HomeView';

export const metadata: Metadata = {
  title: { absolute: clampTitle(HOME_SEO.title) },
  description: clampDescription(HOME_SEO.metaDescription),
  alternates: { canonical: '/' },
  openGraph: {
    title: clampTitle(HOME_SEO.title),
    description: clampDescription(HOME_SEO.metaDescription),
    url: '/',
  },
};

export default function HomePage() {
  return <HomeView />;
}
