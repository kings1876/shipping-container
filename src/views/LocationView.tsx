import { ArrowRight, MapPin, ShieldCheck, Truck } from 'lucide-react';
import { AppLink } from '../components/AppLink';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SafeImage } from '../components/SafeImage';
import { SeoHead } from '../components/SeoHead';
import { SpecTable } from '../components/SpecTable';
import { SITE_IMAGES } from '../data/images';
import { LOCATION_PAGES } from '../data/locations';
import { ContainerSpecRow, LocationPageData } from '../types/seo';

interface LocationViewProps {
  location: LocationPageData;
}

export function LocationView({ location }: LocationViewProps) {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Shipping Containers for Sale', path: '/shipping-containers-for-sale/' },
    { label: location.placeName, path: location.path },
  ];

  const localSpecs: ContainerSpecRow[] = [
    {
      model: `20ft Used WWT (${location.placeName})`,
      grade: 'Wind & Watertight',
      extDimensions: `20'0" × 8'0" × 8'6"`,
      intDimensions: `19'4" × 7'8" × 7'10"`,
      doorOpening: `7'8" × 7'5"`,
      cubicVolume: '1,172 cu ft',
      tareWeight: '4,916 lbs',
      maxPayload: '62,280 lbs',
      priceFrom: location.priceFrom20ftUsed,
    },
    {
      model: `20ft One-Trip New (${location.placeName})`,
      grade: 'New / One-Trip',
      extDimensions: `20'0" × 8'0" × 8'6"`,
      intDimensions: `19'4" × 7'8" × 7'10"`,
      doorOpening: `7'8" × 7'5"`,
      cubicVolume: '1,172 cu ft',
      tareWeight: '4,850 lbs',
      maxPayload: '62,350 lbs',
      priceFrom: location.priceFrom20ftNew,
    },
    {
      model: `40ft Standard Used WWT (${location.placeName})`,
      grade: 'Wind & Watertight',
      extDimensions: `40'0" × 8'0" × 8'6"`,
      intDimensions: `39'5" × 7'8" × 7'10"`,
      doorOpening: `7'8" × 7'5"`,
      cubicVolume: '2,390 cu ft',
      tareWeight: '8,267 lbs',
      maxPayload: '58,930 lbs',
      priceFrom: location.priceFrom40ftUsed,
    },
    {
      model: `40ft High Cube One-Trip (${location.placeName})`,
      grade: 'New / One-Trip',
      extDimensions: `40'0" × 8'0" × 9'6"`,
      intDimensions: `39'5" × 7'8" × 8'10"`,
      doorOpening: `7'8" × 8'5"`,
      cubicVolume: '2,700 cu ft',
      tareWeight: '8,640 lbs',
      maxPayload: '58,560 lbs',
      priceFrom: location.priceFrom40ftHcNew,
    },
  ];

  return (
    <>
      <SeoHead
        title={location.title}
        description={location.metaDescription}
        path={location.path}
        breadcrumbs={breadcrumbs}
        productSchema={{
          name: location.h1,
          description: location.metaDescription,
          lowPrice: location.priceFrom20ftUsed,
          highPrice: location.priceFrom40ftHcNew,
          image: SITE_IMAGES.deliveryTiltBed,
        }}
        faqs={location.faqs}
      />

      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <Breadcrumbs items={breadcrumbs} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <p className="text-xs font-medium text-slate-500 mb-2">
                {location.depotName} · {location.depotCity}
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                {location.h1}
              </h1>
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-2xl font-bold font-mono tabular-nums text-orange-700">
                  from ${location.priceFrom20ftUsed.toLocaleString()}
                </span>
                <span className="text-xs text-slate-500">Local yard pricing · {location.deliveryDays}</span>
              </div>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">{location.localSummary}</p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <AppLink
                  to="/get-a-quote/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-orange-700 hover:bg-orange-800 rounded-md transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Check {location.placeName} Delivery Rate</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </AppLink>
                <AppLink
                  to="/used-shipping-containers-for-sale/"
                  className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors whitespace-nowrap shrink-0"
                >
                  Compare Used vs One-Trip
                </AppLink>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="h-full min-h-[260px] sm:min-h-[340px] rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                <SafeImage
                  src={SITE_IMAGES.deliveryTiltBed}
                  alt={`Tilt-bed delivery of a 40ft steel shipping container serving ${location.placeName}`}
                  className="w-full h-full object-cover"
                  fallbackTitle={`${location.placeName} Container Dispatch`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Depot Details, Permits & Climate */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <MapPin className="w-4 h-4 text-orange-700 shrink-0" aria-hidden="true" />
                <span>Regional Supply Yard</span>
              </div>
              <p className="text-sm font-semibold text-slate-900">{location.depotName}</p>
              <p className="text-xs font-mono text-slate-600">{location.depotAddress}</p>
              <p className="text-xs text-slate-600">
                Tilt-bed dispatch radius: <span className="font-mono tabular-nums font-medium">{location.serviceRadiusMiles} miles</span> · {location.deliveryDays}
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <ShieldCheck className="w-4 h-4 text-orange-700 shrink-0" aria-hidden="true" />
                <span>{location.placeName} Permits & Zoning</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{location.permitSummary}</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <Truck className="w-4 h-4 text-orange-700 shrink-0" aria-hidden="true" />
                <span>Local Site & Climate Prep</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{location.climateAndSiteNote}</p>
            </div>
          </div>

          <SpecTable specs={localSpecs} caption={`${location.placeName} Yard Inventory & Starting Prices`} />

          {/* Local Stock Highlights & Corridors */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-3">
                {location.placeName} Stock & Dispatch Highlights
              </h2>
              <ul className="space-y-2.5 text-sm text-slate-600">
                {location.localInventoryNotes.map((note) => (
                  <li key={note} className="flex items-start gap-2">
                    <span className="text-orange-700 font-bold" aria-hidden="true">·</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-3">
                Cities & Corridors Served from {location.depotCity}
              </h2>
              <p className="text-sm text-slate-600 mb-4">
                Direct flatbed and rollback delivery routes run daily across surrounding communities:
              </p>
              <div className="text-sm text-slate-800 font-medium">
                {location.nearbyCorridors.join(' · ')}
              </div>
              <div className="mt-5 pt-4 border-t border-slate-200 flex flex-wrap gap-4 text-xs font-semibold text-orange-800">
                <AppLink to="/guides/shipping-container-delivery-and-site-prep/" className="hover:underline">
                  Delivery Clearance Guide →
                </AppLink>
                <AppLink to="/guides/shipping-container-permits-by-state/" className="hover:underline">
                  State Permit Guide →
                </AppLink>
              </div>
            </div>
          </div>

          {/* Local FAQs */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
            <h2 className="text-lg font-bold text-slate-900 mb-4">{location.placeName} Container Buying FAQs</h2>
            <div className="divide-y divide-slate-200">
              {location.faqs.map((faq) => (
                <div key={faq.question} className="py-3.5 first:pt-0 last:pb-0">
                  <h3 className="text-sm font-semibold text-slate-900">{faq.question}</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* All 19 US Depots Switcher */}
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h2 className="text-base font-bold text-slate-900 mb-4">All US Steelridge Depot Locations</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2.5 text-xs">
              {LOCATION_PAGES.map((loc) => (
                <AppLink
                  key={loc.slug}
                  to={loc.path}
                  className={`px-3 py-2 rounded border transition-colors ${
                    loc.slug === location.slug
                      ? 'bg-slate-900 text-white border-slate-900 font-semibold'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-orange-700'
                  }`}
                >
                  {loc.placeName}
                </AppLink>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
