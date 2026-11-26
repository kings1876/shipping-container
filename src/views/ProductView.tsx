import { ArrowRight, Check } from 'lucide-react';
import { AppLink } from '../components/AppLink';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ProductCard } from '../components/ProductCard';
import { SafeImage } from '../components/SafeImage';
import { SeoHead } from '../components/SeoHead';
import { SpecTable } from '../components/SpecTable';
import { CATEGORY_BY_PATH } from '../data/categories';
import { PRODUCT_BY_SLUG } from '../data/products';
import { ProductPageData } from '../types/seo';

export function ProductView({ product }: { product: ProductPageData }) {
  const category = CATEGORY_BY_PATH[product.categoryPath];
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products/' },
    ...(category ? [{ label: category.navLabel, path: category.path }] : []),
    { label: product.name, path: product.path },
  ];
  const related = product.relatedProducts.map((slug) => PRODUCT_BY_SLUG[slug]).filter(Boolean);

  return (
    <>
      <SeoHead
        title={product.title}
        description={product.metaDescription}
        path={product.path}
        breadcrumbs={breadcrumbs}
        productSchema={{
          name: product.name,
          description: product.metaDescription,
          lowPrice: product.priceFrom,
          image: product.image,
        }}
        faqs={product.faqs}
      />

      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <Breadcrumbs items={breadcrumbs} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <p className="text-xs font-medium text-slate-500 mb-2">{product.condition}</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                {product.h1}
              </h1>
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-2xl font-bold font-mono tabular-nums text-orange-700">
                  from ${product.priceFrom.toLocaleString('en-US')}
                </span>
                <span className="text-xs text-slate-500">Depot price · Outright purchase · No rental</span>
              </div>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">{product.summary}</p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <AppLink
                  to="/get-a-quote/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-orange-700 hover:bg-orange-800 rounded-md transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Request Delivered Quote</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </AppLink>
                {category && (
                  <AppLink
                    to={category.path}
                    className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors whitespace-nowrap shrink-0"
                  >
                    More {category.navLabel}
                  </AppLink>
                )}
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="h-full min-h-[260px] sm:min-h-[340px] rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                <SafeImage
                  src={product.image}
                  alt={product.imageAlt}
                  className="w-full h-full object-cover"
                  fallbackTitle={product.name}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.features.map((item) => (
              <div key={item.label} className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-2">
                  <Check className="w-4 h-4 text-orange-700 shrink-0" aria-hidden="true" />
                  <span>{item.label}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white border border-slate-200 rounded-lg p-6 sm:p-8 space-y-4">
              <h2 className="text-xl font-bold text-slate-900">About this {product.sizeLabel} container</h2>
              {product.description.map((para, i) => (
                <p key={i} className="text-base text-slate-600 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
              <h2 className="text-base font-bold text-slate-900 mb-4">Best for</h2>
              <ul className="space-y-2 text-sm text-slate-700">
                {product.bestFor.map((use) => (
                  <li key={use} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-orange-700 mt-0.5 shrink-0" aria-hidden="true" />
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <SpecTable specs={[product.spec]} caption={`${product.name} Specifications`} />

          {related.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-5">Related products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {related.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </div>
          )}

          <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-5">Common Questions</h2>
            <div className="divide-y divide-slate-200">
              {product.faqs.map((faq) => (
                <div key={faq.question} className="py-4 first:pt-0 last:pb-0">
                  <h3 className="text-sm font-semibold text-slate-900">{faq.question}</h3>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
