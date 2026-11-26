import { ArrowRight, Check, Truck } from 'lucide-react';
import { AppLink } from '../components/AppLink';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SafeImage } from '../components/SafeImage';
import { SeoHead } from '../components/SeoHead';
import { SpecTable } from '../components/SpecTable';
import { TrustpilotSection } from '../components/TrustpilotSection';
import { CATEGORY_BY_PATH, CATEGORY_PAGES } from '../data/categories';
import { GUIDE_PAGES } from '../data/guides';
import { CategoryPageData } from '../types/seo';

interface CategoryViewProps {
  category: CategoryPageData;
}

export function CategoryView({ category }: CategoryViewProps) {
  const breadcrumbs =
    category.group === 'core'
      ? category.isHub
        ? [
            { label: 'Home', path: '/' },
            { label: category.navLabel, path: category.path },
          ]
        : [
            { label: 'Home', path: '/' },
            { label: 'Shipping Containers for Sale', path: '/shipping-containers-for-sale/' },
            { label: category.navLabel, path: category.path },
          ]
      : category.isHub
      ? [
          { label: 'Home', path: '/' },
          { label: category.navLabel, path: category.path },
        ]
      : [
          { label: 'Home', path: '/' },
          { label: 'Modified & Homes', path: '/modified-shipping-containers/' },
          { label: category.navLabel, path: category.path },
        ];

  const relatedCatObjs = category.relatedCategories
    .map((path) => CATEGORY_BY_PATH[path])
    .filter(Boolean);

  const relatedGuideObjs = category.relatedGuides
    .map((path) => GUIDE_PAGES.find((g) => g.path === path))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  const isHomeRelated =
    category.path.includes('container-home') ||
    category.path.includes('3-bedroom');

  return (
    <>
      <SeoHead
        title={category.title}
        description={category.metaDescription}
        path={category.path}
        breadcrumbs={breadcrumbs}
        productSchema={
          category.priceFrom
            ? {
                name: category.h1,
                description: category.metaDescription,
                lowPrice: category.priceFrom,
                image: category.image,
              }
            : undefined
        }
        faqs={category.faqs}
      />

      {/* Category Header / Product Module */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <Breadcrumbs items={breadcrumbs} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <p className="text-xs font-medium text-slate-500 mb-2">{category.kicker}</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                {category.h1}
              </h1>

              {category.priceFrom !== null && (
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="text-2xl font-bold font-mono tabular-nums text-orange-700">
                    from ${category.priceFrom.toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-500">Outright purchase · No rental</span>
                </div>
              )}

              <p className="mt-4 text-base text-slate-600 leading-relaxed">{category.summary}</p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <AppLink
                  to="/get-a-quote/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-orange-700 hover:bg-orange-800 rounded-md transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Request Delivered Quote</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </AppLink>
                <AppLink
                  to="/delivery/"
                  className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors whitespace-nowrap shrink-0"
                >
                  Delivery & Site Prep
                </AppLink>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="h-full min-h-[260px] sm:min-h-[340px] rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                <SafeImage
                  src={category.image}
                  alt={category.imageAlt}
                  className="w-full h-full object-cover"
                  fallbackTitle={category.h1}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights & Narrative */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {category.highlights.map((item) => (
              <div key={item.label} className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-2">
                  <Check className="w-4 h-4 text-orange-700 shrink-0" aria-hidden="true" />
                  <span>{item.label}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Overview & Construction Standards</h2>
            {category.overviewParagraphs.map((para, i) => (
              <p key={i} className="text-base text-slate-600 leading-relaxed max-w-4xl">
                {para}
              </p>
            ))}
          </div>

          {/* Size & Pricing Spec Table */}
          <SpecTable specs={category.specs} caption={`${category.navLabel} Size & Pricing Specifications`} />

          {/* Delivery Info & Site Prep */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-5">
              <Truck className="w-5 h-5 text-orange-700" aria-hidden="true" />
              <h2 className="text-xl font-bold text-slate-900">Delivery & Site Clearance Details</h2>
            </div>
            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
              <div>
                <dt className="text-xs text-slate-500 mb-1">Offload Method</dt>
                <dd className="font-medium text-slate-900">{category.deliveryInfo.method}</dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500 mb-1">Estimated Lead Time</dt>
                <dd className="font-medium text-slate-900">{category.deliveryInfo.leadTime}</dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500 mb-1">Required Clearance</dt>
                <dd className="font-medium text-slate-900">{category.deliveryInfo.clearanceRequired}</dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500 mb-1">Recommended Pad</dt>
                <dd className="font-medium text-slate-900">{category.deliveryInfo.sitePrep}</dd>
              </div>
            </dl>
          </div>

          {/* Hub Directory if Hub or Guide Hub */}
          {(category.isHub || category.isGuideHub) && (
            <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-5">
                {category.isGuideHub
                  ? 'All Shipping Container Home Guides & Models'
                  : `Browse All ${category.group === 'core' ? 'Core Container' : 'Modified & Home'} Categories`}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {(category.isGuideHub
                  ? GUIDE_PAGES.filter((g) => g.category === 'container-homes')
                  : CATEGORY_PAGES.filter((c) => c.group === category.group && c.path !== category.path)
                ).map((item) => (
                  <AppLink
                    key={item.path}
                    to={item.path}
                    className="p-4 border border-slate-200 rounded-md hover:border-orange-700 transition-colors flex items-center justify-between"
                  >
                    <span className="text-sm font-semibold text-slate-900">{item.navLabel}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
                  </AppLink>
                ))}
              </div>
            </div>
          )}

          {/* Related Categories & Guides (guides -> categories -> products -> quote) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h2 className="text-base font-bold text-slate-900 mb-4">Related Container Categories</h2>
              <div className="space-y-2.5">
                {relatedCatObjs.map((rel) => (
                  <AppLink
                    key={rel.path}
                    to={rel.path}
                    className="flex items-center justify-between py-2 border-b border-slate-100 last:border-b-0 text-sm text-slate-700 hover:text-orange-700"
                  >
                    <span className="font-medium">{rel.navLabel}</span>
                    <span className="font-mono text-xs tabular-nums text-slate-500">
                      {rel.priceFrom ? `from $${rel.priceFrom.toLocaleString()}` : 'View Hub'}
                    </span>
                  </AppLink>
                ))}
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h2 className="text-base font-bold text-slate-900 mb-4">Buyer & Engineering Guides</h2>
              <div className="space-y-2.5">
                {relatedGuideObjs.map((guide) => (
                  <AppLink
                    key={guide.path}
                    to={guide.path}
                    className="flex items-center justify-between py-2 border-b border-slate-100 last:border-b-0 text-sm text-slate-700 hover:text-orange-700"
                  >
                    <span className="font-medium">{guide.navLabel}</span>
                    <span className="text-xs text-slate-500">{guide.readTime}</span>
                  </AppLink>
                ))}
              </div>
            </div>
          </div>

          {/* FAQs */}
          {category.faqs.length > 0 && (
            <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-5">Common Questions</h2>
              <div className="divide-y divide-slate-200">
                {category.faqs.map((faq) => (
                  <div key={faq.question} className="py-4 first:pt-0 last:pb-0">
                    <h3 className="text-sm font-semibold text-slate-900">{faq.question}</h3>
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {isHomeRelated && <TrustpilotSection limit={3} heading="Trustpilot Reviews from Container Home Buyers" />}
    </>
  );
}
