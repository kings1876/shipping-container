'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { LOCATION_PAGES } from '../data/locations';

const QUOTE_MODELS = [
  { label: '20ft Used Wind & Watertight ($1,850+)', basePrice: 1850, category: 'Storage' },
  { label: '20ft One-Trip New ($3,290+)', basePrice: 3290, category: 'Storage' },
  { label: '40ft Standard Used WWT ($2,650+)', basePrice: 2650, category: 'Storage' },
  { label: '40ft High Cube Used WWT ($2,890+)', basePrice: 2890, category: 'Storage' },
  { label: '40ft High Cube One-Trip New ($4,950+)', basePrice: 4950, category: 'Storage' },
  { label: '10ft One-Trip Small Container ($2,450+)', basePrice: 2450, category: 'Storage' },
  { label: '20ft Side Door Open-Side ($5,400+)', basePrice: 5400, category: 'Specialty' },
  { label: '20ft Insulated Mobile Office ($11,400+)', basePrice: 11400, category: 'Modified' },
  { label: '20ft Dual-Container Ranch Barn ($16,900+)', basePrice: 16900, category: 'Barn' },
  { label: 'Ridge 160 Studio ADU Home ($48,500+)', basePrice: 48500, category: 'Home' },
  { label: 'Canyon 320 One-Bed Home ($72,900+)', basePrice: 72900, category: 'Home' },
  { label: 'Summit 1280 Three-Bed Home ($138,000+)', basePrice: 138000, category: 'Home' },
  { label: 'Commercial Forklift Container Ramp ($1,750+)', basePrice: 1750, category: 'Accessory' },
];

function matchDepotByZip(zip: string) {
  const firstDigit = zip.trim()[0];
  switch (firstDigit) {
    case '0':
      return LOCATION_PAGES.find((l) => l.slug === 'maine') || LOCATION_PAGES[0];
    case '1':
      return LOCATION_PAGES.find((l) => l.slug === 'new-york') || LOCATION_PAGES[0];
    case '2':
      return LOCATION_PAGES.find((l) => l.slug === 'charleston-sc') || LOCATION_PAGES[0];
    case '3':
      return LOCATION_PAGES.find((l) => l.slug === 'tampa-fl') || LOCATION_PAGES[0];
    case '4':
    case '6':
      return LOCATION_PAGES.find((l) => l.slug === 'chicago-il') || LOCATION_PAGES[0];
    case '5':
      return LOCATION_PAGES.find((l) => l.slug === 'minnesota') || LOCATION_PAGES[0];
    case '7':
      return LOCATION_PAGES.find((l) => l.slug === 'houston-tx') || LOCATION_PAGES[0];
    case '8':
      return LOCATION_PAGES.find((l) => l.slug === 'phoenix-az') || LOCATION_PAGES[0];
    case '9':
      return LOCATION_PAGES.find((l) => l.slug === 'los-angeles-ca') || LOCATION_PAGES[0];
    default:
      return LOCATION_PAGES[0];
  }
}

export function QuoteForm() {
  const [selectedModel, setSelectedModel] = useState(QUOTE_MODELS[0].label);
  const [quantity, setQuantity] = useState(1);
  const [zipCode, setZipCode] = useState('77013');
  const [deliveryMethod, setDeliveryMethod] = useState<'tilt-bed' | 'crane-flatbed' | 'yard-pickup'>('tilt-bed');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    try {
      const preselected = sessionStorage.getItem('steelridge_quote_model');
      if (preselected) {
        const match = QUOTE_MODELS.find((m) =>
          m.label.toLowerCase().includes(preselected.toLowerCase().slice(0, 14)),
        );
        if (match) setSelectedModel(match.label);
        sessionStorage.removeItem('steelridge_quote_model');
      }
    } catch {
      // Ignore storage access errors
    }
  }, []);

  const currentModelObj = useMemo(
    () => QUOTE_MODELS.find((m) => m.label === selectedModel) || QUOTE_MODELS[0],
    [selectedModel],
  );

  const matchedDepot = useMemo(() => matchDepotByZip(zipCode), [zipCode]);

  const estimatedFreight =
    deliveryMethod === 'yard-pickup' ? 0 : deliveryMethod === 'crane-flatbed' ? 1450 : 395;

  const estimatedSubtotal = currentModelObj.basePrice * quantity + estimatedFreight;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name or company contact.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMsg('Please enter a valid email address so we can send your itemized PDF quote.');
      return;
    }
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 10) {
      setErrorMsg('Please enter a 10-digit US phone number for delivery clearance verification.');
      return;
    }
    if (!/^\d{5}$/.test(zipCode.trim())) {
      setErrorMsg('Please enter a valid 5-digit US delivery ZIP code.');
      return;
    }

    const refCode = `SR-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRef(refCode);
  };

  if (submittedRef) {
    return (
      <div className="bg-white border border-slate-200 rounded-lg p-8">
        <div className="flex items-start gap-3 mb-4">
          <CheckCircle2 className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <h2 className="text-xl font-bold text-slate-900">Quote Request Received · {submittedRef}</h2>
            <p className="text-sm text-slate-600 mt-1">
              Assigned to {matchedDepot.depotName} ({matchedDepot.depotCity}). A regional sales specialist will confirm exact unit serial photos and freight for ZIP {zipCode} within 2 business hours.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-200 pt-5 mt-5 text-sm">
          <div>
            <div className="text-xs text-slate-500">Selected Unit</div>
            <div className="font-medium text-slate-900 mt-0.5">{quantity} × {currentModelObj.label}</div>
          </div>
          <div>
            <div className="text-xs text-slate-500">Estimated Total</div>
            <div className="font-mono font-semibold tabular-nums text-slate-900 mt-0.5">
              from ${estimatedSubtotal.toLocaleString()}
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-500">Lead Time</div>
            <div className="font-medium text-slate-900 mt-0.5">{matchedDepot.deliveryDays}</div>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setSubmittedRef(null)}
          className="mt-6 px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
        >
          Configure Another Quote
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-7 bg-white border border-slate-200 rounded-lg p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-slate-900">Configure Purchase & Delivery</h2>

        {errorMsg && (
          <div
            role="alert"
            className="flex items-start gap-2.5 p-3.5 text-sm text-red-900 bg-red-50 border border-red-200 rounded-md"
          >
            <AlertCircle className="w-4 h-4 text-red-700 shrink-0 mt-0.5" aria-hidden="true" />
            <span>{errorMsg}</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="sm:col-span-3">
            <label htmlFor="quote-model" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Container or Home Model
            </label>
            <select
              id="quote-model"
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="w-full h-11 px-3 text-sm bg-white border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-700"
            >
              {QUOTE_MODELS.map((m) => (
                <option key={m.label} value={m.label}>
                  {m.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="quote-qty" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Quantity
            </label>
            <input
              id="quote-qty"
              type="number"
              min={1}
              max={25}
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, Number(e.target.value) || 1))}
              className="w-full h-11 px-3 text-sm font-mono tabular-nums bg-white border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-700"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="quote-zip" className="block text-xs font-semibold text-slate-700 mb-1.5">
              US Delivery ZIP Code
            </label>
            <input
              id="quote-zip"
              type="text"
              maxLength={5}
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value.replace(/\D/g, ''))}
              placeholder="e.g. 77013"
              className="w-full h-11 px-3 text-sm font-mono tabular-nums bg-white border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-700"
            />
          </div>

          <div>
            <label htmlFor="quote-delivery" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Offload Method
            </label>
            <select
              id="quote-delivery"
              value={deliveryMethod}
              onChange={(e) => setDeliveryMethod(e.target.value as 'tilt-bed' | 'crane-flatbed' | 'yard-pickup')}
              className="w-full h-11 px-3 text-sm bg-white border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-700"
            >
              <option value="tilt-bed">Tilt-Bed Rollback Drop (Ground Level)</option>
              <option value="crane-flatbed">Flatbed + Crane Set (Homes / Piers)</option>
              <option value="yard-pickup">Customer Flatbed Yard Pickup ($0)</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-slate-200">
          <div>
            <label htmlFor="quote-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Full Name / Business
            </label>
            <input
              id="quote-name"
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Jordan Alvarez"
              className="w-full h-11 px-3 text-sm bg-white border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-700"
            />
          </div>

          <div>
            <label htmlFor="quote-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Email Address
            </label>
            <input
              id="quote-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              className="w-full h-11 px-3 text-sm bg-white border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-700"
            />
          </div>

          <div>
            <label htmlFor="quote-phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Phone Number
            </label>
            <input
              id="quote-phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(555) 234-5678"
              className="w-full h-11 px-3 text-sm bg-white border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-700"
            />
          </div>
        </div>

        <div>
          <label htmlFor="quote-notes" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Site Access, Door Orientation & Modification Notes (Optional)
          </label>
          <textarea
            id="quote-notes"
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="e.g. Gravel driveway with 80ft clearance, doors facing road, need lockbox installed."
            className="w-full p-3 text-sm bg-white border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-700"
          />
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-orange-700 hover:bg-orange-800 rounded-md transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-700"
        >
          Lock Delivered Quote
        </button>
      </div>

      {/* Live Estimate Summary */}
      <aside className="lg:col-span-5 space-y-6">
        <div className="bg-slate-900 text-white rounded-lg p-6 sm:p-8 space-y-5">
          <div>
            <p className="text-xs text-slate-400 mb-1">Preliminary Purchase Estimate</p>
            <h3 className="text-lg font-bold">{currentModelObj.label}</h3>
          </div>

          <dl className="space-y-3 text-sm border-t border-slate-800 pt-4">
            <div className="flex items-center justify-between">
              <dt className="text-slate-400">Unit Base ({quantity}×)</dt>
              <dd className="font-mono tabular-nums font-medium">
                ${(currentModelObj.basePrice * quantity).toLocaleString()}
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-slate-400">Est. Freight ({deliveryMethod})</dt>
              <dd className="font-mono tabular-nums font-medium">
                {estimatedFreight === 0 ? '$0 (Yard Pickup)' : `from $${estimatedFreight.toLocaleString()}`}
              </dd>
            </div>
            <div className="flex items-center justify-between border-t border-slate-800 pt-3 text-base font-bold">
              <dt>Estimated Total From</dt>
              <dd className="font-mono tabular-nums text-orange-400">
                ${estimatedSubtotal.toLocaleString()}
              </dd>
            </div>
          </dl>

          <div className="border-t border-slate-800 pt-4 text-xs text-slate-300 space-y-1.5">
            <div>
              <strong className="text-white">Nearest Matched Yard:</strong> {matchedDepot.depotName} ({matchedDepot.depotCity})
            </div>
            <div>
              <strong className="text-white">Typical Delivery Window:</strong> {matchedDepot.deliveryDays}
            </div>
            <div className="text-slate-400 pt-1">
              Outright purchase only. Zero monthly rental fees. Exact freight confirmed upon street address audit.
            </div>
          </div>
        </div>
      </aside>
    </form>
  );
}
