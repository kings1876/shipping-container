'use client';

import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { AppLink } from '../components/AppLink';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { QuoteForm } from '../components/QuoteForm';
import { SafeImage } from '../components/SafeImage';
import { SeoHead } from '../components/SeoHead';
import { TrustpilotSection } from '../components/TrustpilotSection';
import { SITE_IMAGES } from '../data/images';
import { FaqItem, TrustPageData } from '../types/seo';

interface TrustViewProps {
  page: TrustPageData;
}

const GENERAL_FAQS: (FaqItem & { topic: 'buying' | 'delivery' | 'homes' })[] = [
  {
    topic: 'buying',
    question: 'Do you rent or lease shipping containers?',
    answer:
      'No. Steelridge Containers sells new one-trip, used Wind & Watertight, modified units, and shipping container homes strictly for outright purchase.',
  },
  {
    topic: 'buying',
    question: 'What is the cheapest shipping container size for sale?',
    answer:
      'Used 20ft Wind & Watertight containers start at $1,850 at Gulf and West Coast port depots. Used 40ft units start at $2,650 and offer twice the floor space.',
  },
  {
    topic: 'delivery',
    question: 'How much room does a tilt-bed truck need to unload?',
    answer:
      'Allow 60 feet of straight-line ground clearance for a 20ft unit and 100–110 feet for a 40ft container, with 12–14 feet width and 14 feet overhead clearance.',
  },
  {
    topic: 'delivery',
    question: 'Do I need concrete before my storage container arrives?',
    answer:
      'Not necessarily. Compacted 3/4-inch crushed gravel or four corner concrete blocks/railroad ties on firm level ground work well for storage containers.',
  },
  {
    topic: 'homes',
    question: 'Are your shipping container homes built from new or used containers?',
    answer:
      'All residential container homes and insulated offices are built exclusively from brand-new one-trip High Cube ISO steel modules.',
  },
  {
    topic: 'homes',
    question: 'Do you provide stamped plans for local building permits?',
    answer:
      'Yes. Turnkey container home orders include architectural floor plans, MEP schematics, and state-stamped structural engineering calculations.',
  },
];

export function TrustView({ page }: TrustViewProps) {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: page.navLabel, path: page.path },
  ];

  // Financing Calculator State
  const [loanAmount, setLoanAmount] = useState(54000);
  const [termMonths, setTermMonths] = useState(60);
  const apr = 0.079;
  const monthlyRate = apr / 12;
  const monthlyEstimate = Math.round(
    (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termMonths)),
  );

  // FAQ Filter State
  const [faqTopic, setFaqTopic] = useState<'all' | 'buying' | 'delivery' | 'homes'>('all');

  // Contact Form State
  const [contactSent, setContactSent] = useState(false);
  const [contactEmail, setContactEmail] = useState('');
  const [contactMsg, setContactMsg] = useState('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactEmail.includes('@') || !contactMsg.trim()) return;
    setContactSent(true);
  };

  return (
    <>
      <SeoHead
        title={page.title}
        description={page.metaDescription}
        path={page.path}
        breadcrumbs={breadcrumbs}
        faqs={page.path === '/faq/' ? GENERAL_FAQS : undefined}
      />

      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-xs font-medium text-slate-500 mb-2">{page.kicker}</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight max-w-3xl">
            {page.h1}
          </h1>
          <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-3xl">{page.summary}</p>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {page.path === '/get-a-quote/' && <QuoteForm />}

          {page.path === '/delivery/' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-6 rounded-lg overflow-hidden border border-slate-200 bg-white min-h-[280px]">
                <SafeImage
                  src={SITE_IMAGES.deliveryTiltBed}
                  alt="Rollback tilt-bed delivery truck setting a 40ft container onto concrete pads"
                  className="w-full h-full object-cover"
                  fallbackTitle="Tilt-Bed Container Delivery"
                />
              </div>
              <div className="lg:col-span-6 bg-white border border-slate-200 rounded-lg p-6 sm:p-8 flex flex-col justify-center space-y-4">
                <h2 className="text-xl font-bold text-slate-900">Quick Clearance Reference</h2>
                <dl className="grid grid-cols-2 gap-4 text-sm border-t border-slate-200 pt-4">
                  <div>
                    <dt className="text-xs text-slate-500">20ft Tilt-Bed Length</dt>
                    <dd className="font-mono font-semibold tabular-nums text-slate-900 mt-1">60 ft straight</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-slate-500">40ft Tilt-Bed Length</dt>
                    <dd className="font-mono font-semibold tabular-nums text-slate-900 mt-1">100–110 ft straight</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-slate-500">Minimum Gate Width</dt>
                    <dd className="font-mono font-semibold tabular-nums text-slate-900 mt-1">12 ft clear</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-slate-500">Overhead Wire Clearance</dt>
                    <dd className="font-mono font-semibold tabular-nums text-slate-900 mt-1">14 ft 6 in</dd>
                  </div>
                </dl>
              </div>
            </div>
          )}

          {page.path === '/financing/' && (
            <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Estimated Monthly Ownership Payment Calculator
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                <div>
                  <label htmlFor="fin-amt" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Financed Container / Home Amount ($)
                  </label>
                  <input
                    id="fin-amt"
                    type="number"
                    min={3000}
                    max={250000}
                    step={500}
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Math.max(3000, Number(e.target.value) || 3000))}
                    className="w-full h-11 px-3 font-mono tabular-nums text-sm border border-slate-300 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="fin-term" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Repayment Term
                  </label>
                  <select
                    id="fin-term"
                    value={termMonths}
                    onChange={(e) => setTermMonths(Number(e.target.value))}
                    className="w-full h-11 px-3 text-sm border border-slate-300 rounded-md"
                  >
                    <option value={24}>24 Months</option>
                    <option value={36}>36 Months</option>
                    <option value={48}>48 Months</option>
                    <option value={60}>60 Months</option>
                    <option value={120}>120 Months (Container Homes)</option>
                  </select>
                </div>
                <div className="bg-slate-900 text-white rounded-md p-4">
                  <div className="text-xs text-slate-400">Est. Payment (7.9% APR sample)</div>
                  <div className="text-2xl font-bold font-mono tabular-nums text-orange-400">
                    ${monthlyEstimate.toLocaleString()}/mo
                  </div>
                </div>
              </div>
            </div>
          )}

          {page.path === '/faq/' && (
            <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                {(
                  [
                    { id: 'all', label: 'All Topics' },
                    { id: 'buying', label: 'Purchasing & Grades' },
                    { id: 'delivery', label: 'Delivery & Pads' },
                    { id: 'homes', label: 'Container Homes' },
                  ] as const
                ).map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setFaqTopic(t.id)}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-md cursor-pointer transition-colors ${
                      faqTopic === t.id
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <div className="divide-y divide-slate-200">
                {GENERAL_FAQS.filter((f) => faqTopic === 'all' || f.topic === faqTopic).map((f) => (
                  <div key={f.question} className="py-4">
                    <h2 className="text-base font-semibold text-slate-900">{f.question}</h2>
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {page.path === '/contact/' && (
            <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 max-w-2xl">
              {contactSent ? (
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Message Sent to Dispatch</h2>
                    <p className="text-sm text-slate-600 mt-1">
                      Our regional sales desk will reply to {contactEmail} within 2 business hours.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <h2 className="text-lg font-bold text-slate-900">Send a Message to Sales & Dispatch</h2>
                  <div>
                    <label htmlFor="c-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full h-11 px-3 text-sm border border-slate-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-msg" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Inquiry Details
                    </label>
                    <textarea
                      id="c-msg"
                      rows={4}
                      required
                      value={contactMsg}
                      onChange={(e) => setContactMsg(e.target.value)}
                      className="w-full p-3 text-sm border border-slate-300 rounded-md"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-sm font-semibold text-white bg-orange-700 hover:bg-orange-800 rounded-md cursor-pointer"
                  >
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>
          )}

          {page.sections.map((sec) => (
            <div key={sec.heading} className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 space-y-3">
              <h2 className="text-xl font-bold text-slate-900">{sec.heading}</h2>
              {sec.paragraphs.map((p, i) => (
                <p key={i} className="text-base text-slate-600 leading-relaxed max-w-4xl">
                  {p}
                </p>
              ))}
              {sec.bullets && (
                <ul className="space-y-2 pt-2 text-sm text-slate-700">
                  {sec.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="text-orange-700 font-bold" aria-hidden="true">·</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {page.path !== '/get-a-quote/' && (
            <div className="flex flex-wrap gap-4">
              <AppLink
                to="/get-a-quote/"
                className="px-6 py-3 text-sm font-semibold text-white bg-orange-700 hover:bg-orange-800 rounded-md"
              >
                Request a Delivered Quote
              </AppLink>
              <AppLink
                to="/shipping-containers-for-sale/"
                className="px-5 py-3 text-sm font-medium text-slate-800 bg-white border border-slate-200 hover:border-slate-300 rounded-md"
              >
                Browse All Containers
              </AppLink>
            </div>
          )}
        </div>
      </section>

      {page.path === '/about/' && <TrustpilotSection limit={3} />}
    </>
  );
}
