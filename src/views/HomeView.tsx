'use client';

import { useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { AppLink } from '../components/AppLink';
import { SafeImage } from '../components/SafeImage';
import { SeoHead } from '../components/SeoHead';
import { SpecTable } from '../components/SpecTable';
import { TrustpilotSection } from '../components/TrustpilotSection';
import { CATEGORY_PAGES, HOME_SEO } from '../data/categories';
import { GUIDE_PAGES } from '../data/guides';
import { SITE_IMAGES } from '../data/images';
import { LOCATION_PAGES } from '../data/locations';

type FilterTab = 'all' | 'core' | 'modified' | 'homes';

export function HomeView() {
  const [activeTab, setActiveTab] = useState<FilterTab>('all');

  const featuredCards = CATEGORY_PAGES.filter((cat) => {
    if (cat.path === '/wooden-shipping-containers-for-sale/') return false;
    if (activeTab === 'core') return cat.group === 'core';
    if (activeTab === 'modified') {
      return (
        cat.path === '/modified-shipping-containers/' ||
        cat.path === '/shipping-container-barns/' ||
        cat.path === '/shipping-container-ramps/'
      );
    }
    if (activeTab === 'homes') {
      return (
        cat.path === '/shipping-container-homes-for-sale/' ||
        cat.path === '/prefab-shipping-container-homes/' ||
        cat.path === '/3-bedroom-shipping-container-homes-for-sale/' ||
        cat.path === '/shipping-container-homes/'
      );
    }
    return [
      '/used-shipping-containers-for-sale/',
      '/new-shipping-containers-for-sale/',
      '/20ft-shipping-containers-for-sale/',
      '/40ft-high-cube-shipping-containers-for-sale/',
      '/shipping-container-homes-for-sale/',
      '/modified-shipping-containers/',
    ].includes(cat.path);
  });

  const homeSpecs = CATEGORY_PAGES[0].specs;

  return (
    <>
      <SeoHead
        title={HOME_SEO.title}
        description={HOME_SEO.metaDescription}
        path="/"
        breadcrumbs={[{ label: 'Home', path: '/' }]}
        productSchema={{
          name: 'ISO Steel Shipping Containers for Sale',
          description: HOME_SEO.metaDescription,
          lowPrice: 1850,
          highPrice: 179500,
          image: SITE_IMAGES.heroYard,
        }}
      />

      {/* Section 1: Storefront Hero */}
      <section className="bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <p className="text-xs font-medium text-orange-400 mb-3">
                Direct US Container Sales · No Rentals
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1] max-w-xl">
                {HOME_SEO.h1}
              </h1>
              <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                Buy inspected used Wind & Watertight, brand-new one-trip ISO steel containers, custom modified workshops, and turnkey shipping container homes delivered directly from 19 US regional yards.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <AppLink
                  to="/get-a-quote/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-orange-700 hover:bg-orange-600 rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                >
                  <span>Get a Delivered Quote</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </AppLink>
                <AppLink
                  to="/shipping-containers-for-sale/"
                  className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 rounded-md transition-colors whitespace-nowrap shrink-0"
                >
                  Browse Full Catalog
                </AppLink>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="h-full min-h-[280px] sm:min-h-[360px] rounded-lg overflow-hidden border border-slate-800 bg-slate-900">
                <SafeImage
                  src={SITE_IMAGES.heroYard}
                  alt="Rows of new one-trip and used Corten steel shipping containers at a US supply yard"
                  className="w-full h-full object-cover"
                  fallbackTitle="Steelridge Regional Container Supply Yard"
                />
              </div>
            </div>
          </div>

          {/* 4-column proof strip below hero */}
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pt-8 border-t border-slate-800">
            <div>
              <dt className="text-xs text-slate-400">Used 20ft WWT Starting Price</dt>
              <dd className="text-xl font-bold font-mono tabular-nums text-white mt-1">from $1,850</dd>
            </div>
            <div>
              <dt className="text-xs text-slate-400">Turnkey Container Homes</dt>
              <dd className="text-xl font-bold font-mono tabular-nums text-white mt-1">from $48,500</dd>
            </div>
            <div>
              <dt className="text-xs text-slate-400">Regional US Supply Depots</dt>
              <dd className="text-xl font-bold font-mono tabular-nums text-white mt-1">19 Metro Hubs</dd>
            </div>
            <div>
              <dt className="text-xs text-slate-400">Standard Tilt-Bed Dispatch</dt>
              <dd className="text-xl font-bold font-mono tabular-nums text-white mt-1">2–6 Business Days</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Section 2: Featured Inventory & Category Collection */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <p className="text-xs font-medium text-slate-500 mb-1.5">Outright Purchase Inventory</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                New, Used & Modified Containers
              </h2>
            </div>

            <div className="inline-flex items-center gap-1 p-1 bg-slate-200/75 rounded-lg self-start md:self-auto overflow-x-auto max-w-full">
              {(
                [
                  { id: 'all', label: 'Featured' },
                  { id: 'core', label: 'Storage Units' },
                  { id: 'homes', label: 'Container Homes' },
                  { id: 'modified', label: 'Modified & Barns' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCards.map((cat) => (
              <AppLink
                key={cat.path}
                to={cat.path}
                className="group bg-white border border-slate-200 rounded-lg overflow-hidden hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-150 flex flex-col"
              >
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                  <SafeImage
                    src={cat.image}
                    alt={cat.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200"
                    fallbackTitle={cat.navLabel}
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <p className="text-xs text-slate-500 mb-1.5">{cat.kicker}</p>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-700 transition-colors">
                      {cat.navLabel}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 line-clamp-2 leading-relaxed">{cat.summary}</p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-sm">
                    <span className="font-mono font-semibold tabular-nums text-slate-900">
                      {cat.priceFrom ? `from $${cat.priceFrom.toLocaleString()}` : 'Architecture Guide Hub'}
                    </span>
                    <span className="text-xs font-semibold text-orange-700 inline-flex items-center gap-1">
                      View Specs <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </AppLink>
            ))}
          </div>

          <div className="mt-12">
            <SpecTable specs={homeSpecs} caption="Standard ISO Container Sizes & Starting Prices" />
          </div>
        </div>
      </section>

      {/* Section 3: Verified Trustpilot Container Home Buyer Reviews */}
      <TrustpilotSection />

      {/* Section 4: US Depots & Engineering Guides */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* 19 US Locations */}
          <div className="lg:col-span-7">
            <p className="text-xs font-medium text-slate-500 mb-1.5">Regional Yard Network</p>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-3">
              Shipping Containers for Sale Near You
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Select your state or metro yard below for local depot inventory, tilt-bed delivery lead times, municipal permit summaries, and regional starting prices.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {LOCATION_PAGES.map((loc) => (
                <AppLink
                  key={loc.slug}
                  to={loc.path}
                  className="flex items-center justify-between px-3.5 py-2.5 bg-white border border-slate-200 hover:border-orange-700 rounded-md text-sm text-slate-800 hover:text-orange-800 transition-colors"
                >
                  <span className="flex items-center gap-2 truncate">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                    <span className="truncate font-medium">{loc.placeName}</span>
                  </span>
                  <span className="font-mono text-xs tabular-nums text-slate-500 ml-2 shrink-0">
                    ${loc.priceFrom20ftUsed.toLocaleString()}
                  </span>
                </AppLink>
              ))}
            </div>
          </div>

          {/* Essential Buyer Guides */}
          <div className="lg:col-span-5">
            <p className="text-xs font-medium text-slate-500 mb-1.5">Engineering & Purchasing Resources</p>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-3">
              Buyer Guides & Blueprints
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Review exact dimensions, permit rules, foundation specs, and used inspection checklists before placing an order.
            </p>
            <div className="bg-white border border-slate-200 rounded-lg divide-y divide-slate-200">
              {GUIDE_PAGES.slice(0, 7).map((guide) => (
                <AppLink
                  key={guide.slug}
                  to={guide.path}
                  className="flex items-center justify-between px-4 py-3 hover:bg-slate-50 transition-colors group"
                >
                  <div>
                    <div className="text-sm font-medium text-slate-900 group-hover:text-orange-700">
                      {guide.navLabel}
                    </div>
                    <div className="text-xs text-slate-500">{guide.readTime}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-orange-700 shrink-0" aria-hidden="true" />
                </AppLink>
              ))}
              <AppLink
                to="/shipping-container-homes/"
                className="flex items-center justify-between px-4 py-3 bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-orange-800"
              >
                <span>Explore Container Homes Guide Hub & All 13 Guides</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </AppLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
