import { CATEGORY_PAGES } from '../data/categories';
import { GUIDE_PAGES } from '../data/guides';
import { LOCATION_PAGES } from '../data/locations';
import { TRUST_PAGES } from '../data/trustPages';
import { AppLink } from './AppLink';

export function Footer() {
  const coreCategories = CATEGORY_PAGES.filter((c) => c.group === 'core');
  const modifiedCategories = CATEGORY_PAGES.filter((c) => c.group === 'modified');

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Summary */}
          <div className="lg:col-span-1 space-y-4">
            <AppLink to="/" className="text-lg font-bold text-white tracking-tight block">
              Steelridge Containers
            </AppLink>
            <p className="text-sm text-slate-400 leading-relaxed">
              Direct US sales of new one-trip, used Wind & Watertight, modified steel containers, and engineered container homes. Sales only—no rentals.
            </p>
            <div className="text-xs text-slate-400 space-y-1 font-mono tabular-nums">
              <div>(800) 555-0194</div>
              <div>sales@steelridgecontainers.com</div>
            </div>
          </div>

          {/* Core Container Categories */}
          <div>
            <h2 className="text-sm font-semibold text-white mb-4">Core Containers</h2>
            <ul className="space-y-2 text-sm">
              {coreCategories.map((cat) => (
                <li key={cat.path}>
                  <AppLink to={cat.path} className="text-slate-400 hover:text-white transition-colors">
                    {cat.navLabel}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Modified & Container Homes */}
          <div>
            <h2 className="text-sm font-semibold text-white mb-4">Modified & Homes</h2>
            <ul className="space-y-2 text-sm">
              {modifiedCategories.map((cat) => (
                <li key={cat.path}>
                  <AppLink to={cat.path} className="text-slate-400 hover:text-white transition-colors">
                    {cat.navLabel}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>

          {/* US Locations */}
          <div>
            <h2 className="text-sm font-semibold text-white mb-4">US Depot Locations</h2>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2 text-xs">
              {LOCATION_PAGES.map((loc) => (
                <li key={loc.slug}>
                  <AppLink to={loc.path} className="text-slate-400 hover:text-white transition-colors">
                    {loc.placeName}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Buyer Guides & Trust */}
          <div>
            <h2 className="text-sm font-semibold text-white mb-4">Guides & Company</h2>
            <ul className="space-y-2 text-sm mb-6">
              {GUIDE_PAGES.slice(0, 6).map((guide) => (
                <li key={guide.slug}>
                  <AppLink to={guide.path} className="text-slate-400 hover:text-white transition-colors">
                    {guide.navLabel}
                  </AppLink>
                </li>
              ))}
            </ul>
            <ul className="space-y-1.5 text-xs border-t border-slate-800 pt-4">
              {TRUST_PAGES.map((page) => (
                <li key={page.path}>
                  <AppLink to={page.path} className="text-slate-400 hover:text-white transition-colors">
                    {page.navLabel}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Steelridge Containers LLC. Direct US Container Sales.</p>
          <div className="flex flex-wrap items-center gap-4">
            <AppLink to="/privacy-policy/" className="hover:text-white">
              Privacy Policy
            </AppLink>
            <AppLink to="/terms/" className="hover:text-white">
              Terms of Sale
            </AppLink>
            <AppLink to="/shipping-returns/" className="hover:text-white">
              Shipping & Returns
            </AppLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
