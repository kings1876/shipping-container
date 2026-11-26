import { Star, ShieldCheck, Truck } from 'lucide-react';
import { TRUSTPILOT_REVIEWS, TRUSTPILOT_SUMMARY } from '../data/reviews';

interface TrustpilotSectionProps {
  limit?: number;
  heading?: string;
}

export function TrustpilotSection({
  limit = 6,
  heading = 'Verified Container Home Buyer Reviews',
}: TrustpilotSectionProps) {
  const reviews = TRUSTPILOT_REVIEWS.slice(0, limit);

  return (
    <section aria-labelledby="trustpilot-heading" className="py-16 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-medium text-slate-500 mb-2">
              {TRUSTPILOT_SUMMARY.platform} Verified Buyer Feedback · {TRUSTPILOT_SUMMARY.totalReviews} Reviews
            </p>
            <h2 id="trustpilot-heading" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {heading}
            </h2>
          </div>

          <div className="flex items-center gap-4 border border-slate-200 rounded-lg px-4 py-3 bg-slate-50 shrink-0">
            <div className="flex items-center gap-0.5" aria-label="4.8 out of 5 stars on Trustpilot">
              {[1, 2, 3, 4, 5].map((n) => (
                <span
                  key={n}
                  className="inline-flex items-center justify-center w-6 h-6 bg-[#00B67A] text-white"
                >
                  <Star className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                </span>
              ))}
            </div>
            <div className="text-sm">
              <span className="font-bold text-slate-900 font-mono tabular-nums">{TRUSTPILOT_SUMMARY.score}</span>
              <span className="text-slate-600"> / 5.0 · {TRUSTPILOT_SUMMARY.label}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="flex flex-col justify-between bg-slate-50 border border-slate-200 rounded-lg p-6"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <span
                        key={idx}
                        className={`inline-flex items-center justify-center w-5 h-5 text-white ${
                          idx < review.rating ? 'bg-[#00B67A]' : 'bg-slate-300'
                        }`}
                      >
                        <Star className="w-3 h-3 fill-current" aria-hidden="true" />
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-slate-500">{review.verifiedDate}</span>
                </div>

                <h3 className="text-base font-semibold text-slate-900 mb-2 leading-snug">{review.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">{review.body}</p>
              </div>

              <div className="pt-4 border-t border-slate-200 space-y-2.5 text-xs">
                <div className="flex items-start gap-2 text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong className="font-medium text-slate-900">Build Quality:</strong> {review.buildQualityHighlight}
                  </span>
                </div>
                <div className="flex items-start gap-2 text-slate-700">
                  <Truck className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong className="font-medium text-slate-900">Delivery:</strong> {review.deliveryHighlight}
                  </span>
                </div>
                <div className="pt-2 text-slate-500 flex flex-wrap items-center gap-1.5">
                  <span className="font-semibold text-slate-900">{review.reviewerName}</span>
                  <span aria-hidden="true">·</span>
                  <span>{review.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>{review.modelPurchased}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
