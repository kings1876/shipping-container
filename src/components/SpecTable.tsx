'use client';

import { ContainerSpecRow } from '../types/seo';
import { useRouter } from 'next/navigation';

interface SpecTableProps {
  specs: ContainerSpecRow[];
  caption?: string;
}

export function SpecTable({ specs, caption = 'Container Dimensions, Weight & Starting Prices' }: SpecTableProps) {
  const router = useRouter();
  const handleQuoteModel = (model: string) => {
    try {
      sessionStorage.setItem('steelridge_quote_model', model);
    } catch {
      // Ignore storage errors in restricted environments
    }
    router.push('/get-a-quote/');
  };

  return (
    <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h2 className="text-base font-semibold text-slate-900">{caption}</h2>
        <span className="text-xs text-slate-500">Sales only · USD depot starting prices</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-600">
              <th className="py-3 px-4">Model / Configuration</th>
              <th className="py-3 px-4">Grade</th>
              <th className="py-3 px-4">Exterior (L × W × H)</th>
              <th className="py-3 px-4">Interior / Footprint</th>
              <th className="py-3 px-4">Tare Weight</th>
              <th className="py-3 px-4">Price From</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {specs.map((row) => (
              <tr key={row.model} className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3.5 px-4 font-medium text-slate-900">{row.model}</td>
                <td className="py-3.5 px-4 text-slate-600">{row.grade}</td>
                <td className="py-3.5 px-4 font-mono text-xs tabular-nums text-slate-700 whitespace-nowrap">
                  {row.extDimensions}
                </td>
                <td className="py-3.5 px-4 font-mono text-xs tabular-nums text-slate-700 whitespace-nowrap">
                  {row.intDimensions}
                </td>
                <td className="py-3.5 px-4 font-mono text-xs tabular-nums text-slate-700 whitespace-nowrap">
                  {row.tareWeight}
                </td>
                <td className="py-3.5 px-4 font-mono font-semibold tabular-nums text-slate-900 whitespace-nowrap">
                  from ${row.priceFrom.toLocaleString()}
                </td>
                <td className="py-3.5 px-4 text-right">
                  <button
                    type="button"
                    onClick={() => handleQuoteModel(row.model)}
                    className="inline-flex items-center justify-center px-3 py-1.5 text-xs font-semibold text-orange-800 bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-700"
                  >
                    Quote Unit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
