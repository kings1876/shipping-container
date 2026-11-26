import { ChevronRight } from 'lucide-react';
import { BreadcrumbItem } from '../types/seo';
import { AppLink } from './AppLink';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  darkSurface?: boolean;
}

export function Breadcrumbs({ items, darkSurface = false }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol
        className={`flex flex-wrap items-center gap-1.5 text-xs ${
          darkSurface ? 'text-slate-300' : 'text-slate-600'
        }`}
      >
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {idx > 0 && <ChevronRight className="w-3.5 h-3.5 opacity-60 shrink-0" aria-hidden="true" />}
              {isLast ? (
                <span
                  aria-current="page"
                  className={`font-medium ${darkSurface ? 'text-white' : 'text-slate-900'}`}
                >
                  {item.label}
                </span>
              ) : (
                <AppLink
                  to={item.path}
                  className={`hover:underline underline-offset-4 transition-colors ${
                    darkSurface ? 'hover:text-white' : 'hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </AppLink>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
