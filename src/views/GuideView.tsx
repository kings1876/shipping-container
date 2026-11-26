import { ArrowRight } from 'lucide-react';
import { AppLink } from '../components/AppLink';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHead } from '../components/SeoHead';
import { CATEGORY_BY_PATH } from '../data/categories';
import { GUIDE_PAGES } from '../data/guides';
import { GuidePageData } from '../types/seo';

interface GuideViewProps {
  guide: GuidePageData;
}

export function GuideView({ guide }: GuideViewProps) {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    {
      label: guide.category === 'container-homes' ? 'Shipping Container Homes' : 'Buyer Guides',
      path:
        guide.category === 'container-homes'
          ? '/shipping-container-homes/'
          : '/guides/shipping-container-sizes/',
    },
    { label: guide.navLabel, path: guide.path },
  ];

  const relatedCategories = guide.relatedCategories
    .map((p) => CATEGORY_BY_PATH[p])
    .filter(Boolean);

  const relatedGuides = guide.relatedGuides
    .map((p) => GUIDE_PAGES.find((g) => g.path === p))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  return (
    <>
      <SeoHead
        title={guide.title}
        description={guide.metaDescription}
        path={guide.path}
        breadcrumbs={breadcrumbs}
        articleHeadline={guide.h1}
      />

      <article className="bg-slate-50 py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Editorial Column */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-10">
                <Breadcrumbs items={breadcrumbs} />
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-3">
                  <span>Engineering & Buyer Guide</span>
                  <span aria-hidden="true">·</span>
                  <span>Updated {guide.updatedDate}</span>
                  <span aria-hidden="true">·</span>
                  <span>{guide.readTime}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  {guide.h1}
                </h1>
                <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                  {guide.summary}
                </p>

                <div className="mt-8 space-y-8 border-t border-slate-200 pt-8">
                  {guide.sections.map((section) => (
                    <section key={section.heading} className="space-y-3">
                      <h2 className="text-xl font-bold text-slate-900">{section.heading}</h2>
                      {section.paragraphs.map((p, idx) => (
                        <p key={idx} className="text-base text-slate-700 leading-relaxed">
                          {p}
                        </p>
                      ))}
                      {section.bulletPoints && (
                        <ul className="space-y-2 pt-2 text-sm text-slate-700">
                          {section.bulletPoints.map((bp) => (
                            <li key={bp} className="flex items-start gap-2">
                              <span className="text-orange-700 font-bold" aria-hidden="true">·</span>
                              <span>{bp}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </section>
                  ))}
                </div>
              </div>

              {/* Optional Spec / Cost Comparison Table */}
              {guide.comparisonTable && (
                <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
                  <div className="px-6 py-4 border-b border-slate-200">
                    <h2 className="text-base font-bold text-slate-900">{guide.comparisonTable.caption}</h2>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-600">
                          {guide.comparisonTable.headers.map((h) => (
                            <th key={h} className="py-3 px-4 whitespace-nowrap">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {guide.comparisonTable.rows.map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/70">
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`py-3 px-4 ${
                                  cIdx === 0
                                    ? 'font-semibold text-slate-900'
                                    : 'font-mono text-xs tabular-nums text-slate-700'
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Guides -> Categories -> Quote funnel block */}
              <div className="bg-slate-900 text-white rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <h2 className="text-lg font-bold">Ready to Price Your Container or Home Build?</h2>
                  <p className="text-sm text-slate-300 mt-1">
                    Compare in-stock depot units and lock direct delivery pricing to your ZIP code.
                  </p>
                </div>
                <AppLink
                  to="/get-a-quote/"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-orange-700 hover:bg-orange-600 rounded-md transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </AppLink>
              </div>
            </div>

            {/* Sidebar: Categories & All 13 Guides */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h2 className="text-sm font-bold text-slate-900 mb-3">Shop Related Categories</h2>
                <div className="space-y-2.5">
                  {relatedCategories.map((cat) => (
                    <AppLink
                      key={cat.path}
                      to={cat.path}
                      className="flex items-center justify-between py-2 border-b border-slate-100 last:border-b-0 text-sm text-slate-700 hover:text-orange-700"
                    >
                      <span className="font-medium">{cat.navLabel}</span>
                      <span className="font-mono text-xs tabular-nums text-slate-500">
                        {cat.priceFrom ? `from $${cat.priceFrom.toLocaleString()}` : 'View'}
                      </span>
                    </AppLink>
                  ))}
                </div>
              </div>

              {relatedGuides.length > 0 && (
                <div className="bg-white border border-slate-200 rounded-lg p-6">
                  <h2 className="text-sm font-bold text-slate-900 mb-3">Recommended Next Guides</h2>
                  <div className="space-y-2.5">
                    {relatedGuides.map((g) => (
                      <AppLink
                        key={g.path}
                        to={g.path}
                        className="block py-1.5 text-sm font-medium text-slate-700 hover:text-orange-700"
                      >
                        {g.navLabel} →
                      </AppLink>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h2 className="text-sm font-bold text-slate-900 mb-3">All 13 Container Guides</h2>
                <ul className="space-y-1.5 text-xs">
                  {GUIDE_PAGES.map((g) => (
                    <li key={g.slug}>
                      <AppLink
                        to={g.path}
                        className={`block py-1.5 px-2.5 rounded transition-colors ${
                          g.slug === guide.slug
                            ? 'bg-slate-900 text-white font-semibold'
                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                        }`}
                      >
                        {g.navLabel}
                      </AppLink>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
