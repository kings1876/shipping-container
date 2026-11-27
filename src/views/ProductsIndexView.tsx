import { AppLink } from '../components/AppLink';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ProductCard } from '../components/ProductCard';
import { SeoHead } from '../components/SeoHead';
import { CATEGORY_BY_PATH } from '../data/categories';
import { CATEGORY_GROUPS } from '../data/groups';
import { PRODUCT_PAGES } from '../data/products';

export function ProductsIndexView() {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products/' },
  ];

  return (
    <>
      <SeoHead
        description="Browse every container we sell, with starting prices."
        path="/products/"
        breadcrumbs={breadcrumbs}
      />
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Container Catalog</h1>
          <p className="mt-3 text-base text-slate-600 max-w-3xl">
            Everything we sell, in four groups. Prices are depot starting prices. Request a delivered quote for your ZIP code.
          </p>
          <nav aria-label="Catalog groups" className="mt-5 flex flex-wrap gap-2">
            {CATEGORY_GROUPS.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="px-3 py-1.5 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full"
              >
                {g.title}
              </a>
            ))}
          </nav>
        </div>
      </section>
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {CATEGORY_GROUPS.map((group) => {
            const subs = group.categoryPaths
              .map((p) => ({ path: p, cat: CATEGORY_BY_PATH[p], products: PRODUCT_PAGES.filter((x) => x.categoryPath === p) }))
              .filter((s) => s.cat);
            const withProducts = subs.filter((s) => s.products.length > 0);
            return (
              <div key={group.id} id={group.id} className="scroll-mt-24">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="text-2xl font-bold text-slate-900">{group.title}</h2>
                  <AppLink to={group.hubPath} className="text-sm font-medium text-orange-700 hover:underline">
                    View all {group.title.toLowerCase()}
                  </AppLink>
                </div>
                <p className="mt-1 text-slate-600 max-w-3xl">{group.blurb}</p>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  {subs.map((s) => (
                    <AppLink key={s.path} to={s.path} className="text-slate-600 hover:text-orange-700 hover:underline">
                      {s.cat.navLabel}
                    </AppLink>
                  ))}
                </div>
                <div className="mt-6 space-y-8">
                  {withProducts.map((s) => (
                    <div key={s.path}>
                      <h3 className="text-base font-semibold text-slate-800 mb-3">{s.cat.navLabel}</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {s.products.map((p) => (
                          <ProductCard key={p.slug} product={p} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
