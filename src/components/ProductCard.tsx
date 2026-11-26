import { ArrowRight } from 'lucide-react';
import { ProductPageData } from '../types/seo';
import { AppLink } from './AppLink';
import { SafeImage } from './SafeImage';

export function ProductCard({ product }: { product: ProductPageData }) {
  return (
    <AppLink
      to={product.path}
      className="group bg-white border border-slate-200 rounded-lg overflow-hidden hover:border-orange-700 transition-colors flex flex-col"
    >
      <div className="aspect-[16/10] bg-slate-100 overflow-hidden">
        <SafeImage
          src={product.image}
          alt={product.imageAlt}
          className="w-full h-full object-cover"
          fallbackTitle={product.name}
        />
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <p className="text-xs text-slate-500">{product.condition}</p>
        <h3 className="text-sm font-semibold text-slate-900 group-hover:text-orange-700">{product.name}</h3>
        <p className="text-xs text-slate-600 leading-relaxed flex-1">{product.summary}</p>
        <div className="flex items-center justify-between pt-1">
          <span className="text-sm font-bold font-mono tabular-nums text-orange-700">
            from ${product.priceFrom.toLocaleString('en-US')}
          </span>
          <ArrowRight className="w-4 h-4 text-slate-400" aria-hidden="true" />
        </div>
      </div>
    </AppLink>
  );
}
