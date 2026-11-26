import { AppLink } from '../components/AppLink';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ProductCard } from '../components/ProductCard';
import { SeoHead } from '../components/SeoHead';
import { CATEGORY_BY_PATH } from '../data/categories';
import { PRODUCT_PAGES } from '../data/products';

export function ProductsIndexView() {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products/' },
  ];
  const groups = PRODUCT_PAGES.reduce<Record<string, typeof PRODUCT_PAGES>>((acc, p) => {
    (acc[p.categoryPath] = acc[p.categoryPath] || []).push(p);
    return acc;
  }, {});

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
            Every container we sell, grouped by category. Prices are depot starting prices. Request a delivered quote for your ZIP code.
          </p>
        </div>
      </section>
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {Object.entries(groups).map(([catPath, products]) => {
            const cat = CATEGORY_BY_PATH[catPath];
            return (
              <div key={catPath}>
                <div className="flex items-baseline justify-between mb-5">
                  <h2 className="text-xl font-bold text-slate-900">{cat ? cat.navLabel : 'Containers'}</h2>
                  {cat && (
                    <AppLink to={cat.path} className="text-sm font-medium text-orange-700 hover:underline">
                      View category
                    </AppLink>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {products.map((p) => (
                    <ProductCard key={p.slug} product={p} />
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
