'use client';

import { useState } from 'react';
import { SafeImage } from './SafeImage';

interface ProductGalleryProps {
  images: { src: string; alt: string }[];
  fallbackTitle: string;
}

export function ProductGallery({ images, fallbackTitle }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  return (
    <div className="h-full flex flex-col gap-3">
      <div className="flex-1 min-h-[260px] sm:min-h-[340px] rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
        <SafeImage
          key={current.src}
          src={current.src}
          alt={current.alt}
          className="w-full h-full object-cover"
          fallbackTitle={fallbackTitle}
        />
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-2" role="group" aria-label="Product photos">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show photo ${i + 1} of ${images.length}`}
              aria-pressed={i === active}
              className={`aspect-[4/3] rounded-md overflow-hidden border-2 bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-700 ${
                i === active ? 'border-orange-700' : 'border-transparent hover:border-slate-300'
              }`}
            >
              <SafeImage src={img.src} alt="" className="w-full h-full object-cover" fallbackTitle={fallbackTitle} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
