'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { AppLink } from './AppLink';


const NAV_LINKS = [
  { label: 'Containers', path: '/shipping-containers-for-sale/' },
  { label: 'Container Homes', path: '/shipping-container-homes-for-sale/' },
  { label: 'Modified', path: '/modified-shipping-containers/' },
  { label: 'Catalog', path: '/products/' },
  { label: 'Locations', path: '/shipping-containers-for-sale/texas/' },
  { label: 'Guides', path: '/guides/shipping-container-sizes/' },
];

export function Header() {
  const currentPath = usePathname() || '/';
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <AppLink
          to="/"
          className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-700 rounded"
        >
          Steelridge Containers
        </AppLink>

        {/* Zone 2: 5 concise single-line nav links */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          {NAV_LINKS.map((link) => {
            const active =
              currentPath === link.path ||
              (link.path === '/guides/shipping-container-sizes/' && currentPath.startsWith('/guides/'));
            return (
              <AppLink
                key={link.path}
                to={link.path}
                className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-700 ${
                  active
                    ? 'text-slate-900 border-orange-700'
                    : 'border-transparent hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {link.label}
              </AppLink>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary CTA action */}
        <div className="flex items-center gap-3 shrink-0">
          <AppLink
            to="/get-a-quote/"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-orange-700 hover:bg-orange-800 rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-700"
          >
            Get a Quote
          </AppLink>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-700"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-2">
          {NAV_LINKS.map((link) => (
            <AppLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 px-3 text-sm font-medium text-slate-800 hover:bg-slate-100 rounded-md"
            >
              {link.label}
            </AppLink>
          ))}
          <AppLink
            to="/delivery/"
            onClick={() => setMobileOpen(false)}
            className="block py-2.5 px-3 text-sm font-medium text-slate-800 hover:bg-slate-100 rounded-md"
          >
            Delivery & Site Prep
          </AppLink>
          <AppLink
            to="/get-a-quote/"
            onClick={() => setMobileOpen(false)}
            className="block mt-2 text-center py-2.5 px-4 text-sm font-semibold text-white bg-orange-700 rounded-md"
          >
            Get a Quote
          </AppLink>
        </div>
      )}
    </header>
  );
}
