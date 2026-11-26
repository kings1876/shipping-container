import { useEffect, useState } from 'react';
import { AppLink } from './components/AppLink';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { SeoHead } from './components/SeoHead';
import { CATEGORY_BY_PATH } from './data/categories';
import { GUIDE_BY_SLUG } from './data/guides';
import { LOCATION_BY_SLUG } from './data/locations';
import { TRUST_BY_PATH } from './data/trustPages';
import { normalizePath } from './utils/navigation';
import { CategoryView } from './views/CategoryView';
import { GuideView } from './views/GuideView';
import { HomeView } from './views/HomeView';
import { LocationView } from './views/LocationView';
import { TrustView } from './views/TrustView';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() =>
    normalizePath(typeof window !== 'undefined' ? window.location.pathname : '/'),
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderPage = () => {
    if (currentPath === '/') {
      return <HomeView />;
    }

    // Core Categories, Modified Categories, & Homes
    const category = CATEGORY_BY_PATH[currentPath];
    if (category) {
      return <CategoryView category={category} />;
    }

    // Location Pages: /shipping-containers-for-sale/{place}/
    if (currentPath.startsWith('/shipping-containers-for-sale/')) {
      const slug = currentPath
        .replace('/shipping-containers-for-sale/', '')
        .replace(/\/$/, '');
      const location = LOCATION_BY_SLUG[slug];
      if (location) {
        return <LocationView location={location} />;
      }
    }

    // Guide Pages: /guides/{slug}/
    if (currentPath.startsWith('/guides/')) {
      const slug = currentPath.replace('/guides/', '').replace(/\/$/, '');
      const guide = GUIDE_BY_SLUG[slug];
      if (guide) {
        return <GuideView guide={guide} />;
      }
    }

    // Trust & Conversion Pages
    const trustPage = TRUST_BY_PATH[currentPath];
    if (trustPage) {
      return <TrustView page={trustPage} />;
    }

    // Clean 404 Route Fallback
    return (
      <>
        <SeoHead
          title="Page Not Found | Steelridge Containers"
          description="The requested shipping container page was not found. Browse our US inventory of new, used, and modified containers."
          path={currentPath}
          breadcrumbs={[{ label: 'Home', path: '/' }]}
        />
        <section className="py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
            <h1 className="text-3xl font-bold text-slate-900">Page Not Found</h1>
            <p className="text-base text-slate-600">
              We could not locate a container catalog or guide page at{' '}
              <code className="font-mono text-sm text-slate-800">{currentPath}</code>.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <AppLink
                to="/"
                className="px-5 py-2.5 text-sm font-semibold text-white bg-orange-700 hover:bg-orange-800 rounded-md"
              >
                Return Home
              </AppLink>
              <AppLink
                to="/shipping-containers-for-sale/"
                className="px-5 py-2.5 text-sm font-medium text-slate-800 bg-white border border-slate-300 rounded-md"
              >
                Browse All Containers
              </AppLink>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Header currentPath={currentPath} />
      <main className="flex-1">{renderPage()}</main>
      <Footer />
    </div>
  );
}
