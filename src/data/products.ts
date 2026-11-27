import { ProductPageData } from '../types/seo';
import { SITE_IMAGES } from './images';
import { SizeKey, specRow } from './sizes';

// Product pages target a distinct keyword each (US volume >= 110, KD < 25).
// Prices are starting-price placeholders: confirm against current supplier quotes before launch.

type ConditionKey = 'new' | 'wwt' | 'cw' | 'mod';

const CONDITION: Record<ConditionKey, { label: string; grade: string; features: { label: string; detail: string }[] }> = {
  new: {
    label: 'New / One-Trip',
    grade: 'New / One-Trip',
    features: [
      { label: 'One-Trip Condition', detail: 'A single ocean voyage, so panels, paint and door seals are in near-new condition.' },
      { label: 'Clean Corten Steel Finish', detail: 'Minimal dents and no structural repairs. Suited to painting and conversion.' },
      { label: 'Full ISO 1496-1 Certification', detail: 'Stacking and lifting points are intact and meet ISO container standards.' },
    ],
  },
  wwt: {
    label: 'Used Wind & Watertight',
    grade: 'Wind & Watertight',
    features: [
      { label: 'Inspected Wind & Watertight', detail: 'Dark-room light test and door-seal check on every unit.' },
      { label: 'Best Value Grade', detail: 'Cosmetic dents and surface rust are normal; the structure is sound and the roof does not leak.' },
      { label: 'Solid Floor', detail: 'Marine-grade plywood subfloor on steel cross-members, load-checked.' },
    ],
  },
  cw: {
    label: 'Used Cargo-Worthy',
    grade: 'Cargo-Worthy',
    features: [
      { label: 'Cargo-Worthy Certified', detail: 'Passed a structural survey, so it can be shipped by sea or rail if you ever need to.' },
      { label: 'Higher Grade Than WWT', detail: 'Straighter panels and better door gear than standard used boxes.' },
      { label: 'Solid Floor and Seals', detail: 'Inspected floor and gaskets keep contents dry.' },
    ],
  },
  mod: {
    label: 'Modified, Built to Order',
    grade: 'One-Trip Modified',
    features: [
      { label: 'Fabricated in Our US Shops', detail: 'Every cutout is boxed in structural steel tubing and seam-welded.' },
      { label: 'Insulated and Finished', detail: 'Closed-cell spray foam and interior finishes, depending on the model.' },
      { label: 'Delivered Ready to Place', detail: 'Arrives on a flatbed and sets onto piers, blocks or a slab.' },
    ],
  },
};

interface ProductInput {
  slug: string;
  categoryPath: string;
  name: string; // e.g. "20ft Used Wind & Watertight Container"
  size: SizeKey;
  cond: ConditionKey;
  price: number;
  kw: string;
  vol: string;
  kd: string;
  support?: string[];
  image: string;
  imageAlt: string;
  summary: string;
  description: string[];
  bestFor: string[];
  related: string[];
  faq: { question: string; answer: string };
  titleOverride?: string;
  descOverride?: string;
}

function build(p: ProductInput): ProductPageData {
  const cond = CONDITION[p.cond];
  const priceText = `$${p.price.toLocaleString('en-US')}`;
  const longTitle = `${p.name} for Sale | From ${priceText}`;
  const title = p.titleOverride ?? (longTitle.length <= 60 ? longTitle : `${p.name} | From ${priceText}`);
  const metaDescription =
    p.descOverride ??
    `Buy a ${p.name} from ${priceText}. ${cond.label} steel container, delivered in the US. Sales only. Get a delivered quote.`;
  return {
    slug: p.slug,
    path: `/products/${p.slug}/`,
    categoryPath: p.categoryPath,
    name: p.name,
    h1: p.name,
    title,
    metaDescription,
    primaryKeyword: p.kw,
    keywordVolume: p.vol,
    keywordKd: p.kd,
    supportingKeywords: p.support ?? [],
    condition: cond.label,
    sizeLabel: p.name.split(' ')[0],
    priceFrom: p.price,
    image: p.image,
    imageAlt: p.imageAlt,
    summary: p.summary,
    description: p.description,
    features: cond.features,
    bestFor: p.bestFor,
    spec: specRow(p.name, cond.grade, p.size, p.price),
    relatedProducts: p.related,
    faqs: [
      p.faq,
      {
        question: 'Is delivery included in the starting price?',
        answer:
          'The starting price is the depot price. Delivery is quoted separately based on your ZIP code and site access. Request a delivered quote to see the full price.',
      },
    ],
  };
}

const I = SITE_IMAGES;

export const PRODUCT_PAGES: ProductPageData[] = [
  build({
    slug: '10ft-one-trip-shipping-container',
    categoryPath: '/10ft-shipping-containers-for-sale/',
    name: '10ft One-Trip Shipping Container',
    size: '10', cond: 'new', price: 2450,
    kw: '10 foot container for sale', vol: '320', kd: '0',
    support: ['10 ft container for sale', '10ft containers for sale'],
    image: I.prod10New, imageAlt: 'Blue steel shipping container with open doors and cardboard boxes on pallets inside',
    summary: 'A compact new 10ft steel container for tight sites, small yards and urban lots.',
    description: [
      'The 10ft one-trip container is the smallest standard ISO box we sell. It fits where a 20ft cannot go and can often be placed by a smaller truck.',
      'Because it is new, the paint and door seals are clean, which makes it a good base for a small office, a shed or a secure tool store.',
    ],
    bestFor: ['Tool and equipment storage', 'Small site offices', 'Urban and tight-access lots'],
    related: ['10ft-used-shipping-container', '20ft-one-trip-shipping-container', '10ft-storage-container'],
    faq: { question: 'How much can a 10ft container hold?', answer: 'About 560 cubic feet inside, which is roughly the contents of a one-bedroom apartment, or a full set of tools and seasonal gear.' },
  }),
  build({
    slug: '10ft-used-shipping-container',
    categoryPath: '/10ft-shipping-containers-for-sale/',
    name: '10ft Used Shipping Container',
    size: '10', cond: 'wwt', price: 1750,
    kw: '8x10 shipping containers for sale', vol: '170', kd: '0',
    image: I.container20New, imageAlt: 'Grey 10ft used steel shipping container with its doors open on a paved yard',
    summary: 'An inspected used 10ft container at our lowest entry price.',
    description: [
      'A 10ft used wind and watertight container is the cheapest way to get a lockable steel box on your property.',
      'Cosmetic dents and surface marks are normal at this grade. Every unit is light-tested so the roof and walls do not leak.',
    ],
    bestFor: ['Low-cost secure storage', 'Backyard and garden storage', 'Hobby workshops'],
    related: ['10ft-one-trip-shipping-container', '10ft-storage-container', '20ft-used-shipping-container'],
    faq: { question: 'What does wind and watertight mean?', answer: 'It means the container has no holes or leaks and the doors close and seal properly. It may have cosmetic dents and surface rust.' },
  }),
  build({
    slug: '20ft-used-shipping-container',
    categoryPath: '/20ft-shipping-containers-for-sale/',
    name: '20ft Used Shipping Container',
    size: '20', cond: 'wwt', price: 1850,
    kw: 'used 20 foot container for sale', vol: '170', kd: '0',
    support: ['second hand 20 foot containers for sale', '20ft container for sale used'],
    image: I.container20New, imageAlt: 'Grey 20ft used steel shipping container with its doors open on a paved yard',
    summary: 'Our best-selling used 20ft container: inspected, sealed and ready for delivery.',
    description: [
      'The used 20ft container is the standard choice for storage, jobsites and farm use. At 1,172 cubic feet inside it holds a small workshop or the contents of a two-bedroom home.',
      'We inspect every unit for floor condition, roof leaks and door operation before dispatch.',
    ],
    bestFor: ['Home and farm storage', 'Jobsite storage', 'Container conversions on a budget'],
    related: ['20ft-cargo-worthy-shipping-container', '20ft-one-trip-shipping-container', '40ft-used-shipping-container'],
    faq: { question: 'Can a used 20ft container be modified?', answer: 'Yes. A wind and watertight unit is a good base for a shed, workshop or garage. Ask about our modified options for roll-up doors, windows and insulation.' },
  }),
  build({
    slug: '20ft-cargo-worthy-shipping-container',
    categoryPath: '/20ft-shipping-containers-for-sale/',
    name: '20ft Cargo-Worthy Shipping Container',
    size: '20', cond: 'cw', price: 2250,
    kw: '20 foot cargo containers for sale', vol: '140', kd: '0',
    image: I.container20New, imageAlt: 'Grey 20ft cargo-worthy steel shipping container with its doors open on a paved yard',
    summary: 'A used 20ft container surveyed to cargo-worthy standard for shipping or long-term storage.',
    description: [
      'A cargo-worthy container has passed a structural survey, which makes it suitable for shipping by sea or rail as well as storage.',
      'If you plan to ship goods, move the container later or want a higher grade than standard used, choose this one.',
    ],
    bestFor: ['Shipping goods by sea or rail', 'Long-term secure storage', 'Resale and relocation'],
    related: ['20ft-used-shipping-container', '20ft-one-trip-shipping-container', '20ft-high-cube-shipping-container'],
    faq: { question: 'Can I ship goods in a cargo-worthy container?', answer: 'Yes, it has been surveyed for transport use. Check with your shipping line or freight forwarder for their specific requirements.' },
  }),
  build({
    slug: '20ft-one-trip-shipping-container',
    categoryPath: '/20ft-shipping-containers-for-sale/',
    name: '20ft One-Trip Shipping Container',
    size: '20', cond: 'new', price: 3290,
    kw: '20 shipping container for sale', vol: '390', kd: '2',
    support: ['20ft shipping container for sale near me'],
    image: I.container20New, imageAlt: 'New one-trip 20ft steel shipping container with clean paint',
    summary: 'A new one-trip 20ft container in near-new condition, ideal for painting or conversion.',
    description: [
      'One-trip containers have crossed the ocean once and are sold in almost new condition. Paint, panels and seals are clean.',
      'This is the preferred base for office, cabin and workshop conversions because the steel is straight and there is minimal rust to treat.',
    ],
    bestFor: ['Conversions and builds', 'Premium storage', 'Painted or branded units'],
    related: ['20ft-used-shipping-container', '20ft-high-cube-shipping-container', '20ft-container-office'],
    faq: { question: 'What is the difference between new and one-trip?', answer: 'A one-trip container made a single ocean voyage and is sold as new. It has nearly no wear compared with a used unit.' },
  }),
  build({
    slug: '20ft-high-cube-shipping-container',
    categoryPath: '/20ft-shipping-containers-for-sale/',
    name: '20ft High Cube Shipping Container',
    size: '20hc', cond: 'new', price: 3850,
    kw: '20ft high cube container', vol: '320', kd: '0',
    support: ['20 ft high cube shipping container for sale'],
    image: I.container20New, imageAlt: 'New one-trip 20ft high cube steel container with extra height',
    summary: 'A 9ft 6in tall 20ft container with an extra foot of headroom.',
    description: [
      'High cube containers are one foot taller than standard. That extra headroom helps with insulation, ceilings, shelving and taller equipment.',
      'This is the best 20ft base for homes, offices and workshops where interior height matters.',
    ],
    bestFor: ['Offices and workshops', 'Container homes', 'Tall equipment and racking'],
    related: ['20ft-one-trip-shipping-container', '40ft-high-cube-used-shipping-container', '20ft-container-office'],
    faq: { question: 'How tall is a 20ft high cube container?', answer: 'The exterior height is 9ft 6in. The interior height is about 8ft 10in, roughly a foot taller than a standard container.' },
  }),
  build({
    slug: '40ft-used-shipping-container',
    categoryPath: '/40ft-shipping-containers-for-sale/',
    name: '40ft Used Shipping Container',
    size: '40', cond: 'wwt', price: 2650,
    kw: '40ft used container for sale', vol: '110', kd: '0',
    support: ['40ft used shipping containers for sale'],
    image: I.container20New, imageAlt: 'Grey 40ft used steel shipping container with its doors open on a paved yard',
    summary: 'Double the space of a 20ft for around 40 percent more money.',
    description: [
      'A used 40ft container holds 2,390 cubic feet and is the standard choice for vehicles, bulk stock and large jobsites.',
      'We deliver 40ft units on tilt-bed trucks, so you do not need a crane when you have a clear approach.',
    ],
    bestFor: ['Vehicles and machinery', 'Bulk stock and inventory', 'Large jobsites'],
    related: ['40ft-cargo-worthy-shipping-container', '40ft-high-cube-used-shipping-container', '20ft-used-shipping-container'],
    faq: { question: 'How much clearance does a 40ft delivery need?', answer: 'Plan for about 100 feet of straight-line clearance for a tilt-bed delivery, plus enough width for the truck to maneuver.' },
  }),
  build({
    slug: '40ft-one-trip-shipping-container',
    categoryPath: '/40ft-shipping-containers-for-sale/',
    name: '40ft One-Trip Shipping Container',
    size: '40', cond: 'new', price: 4350,
    kw: 'buy 40 foot shipping container', vol: '1,900', kd: '1',
    support: ['buy shipping container 40ft', 'buy 40 ft shipping container'],
    image: I.container20New, imageAlt: 'New one-trip 40ft steel shipping container',
    summary: 'A near-new 40ft container for buyers who want the best condition.',
    description: [
      'This is a one-trip 40ft container in almost new condition. It suits premium storage and any project that starts with a clean steel shell.',
      'Request a delivered quote to see the full price with your ZIP code and site details.',
    ],
    bestFor: ['Premium storage', 'Large conversions', 'Branded and painted units'],
    related: ['40ft-used-shipping-container', '40ft-high-cube-one-trip-shipping-container', '40ft-cargo-worthy-shipping-container'],
    faq: { question: 'Should I buy a new or used 40ft container?', answer: 'Buy used if you only need secure storage and want the lowest price. Buy one-trip if you plan to convert, paint or resell it.' },
  }),
  build({
    slug: '40ft-cargo-worthy-shipping-container',
    categoryPath: '/40ft-shipping-containers-for-sale/',
    name: '40ft Cargo-Worthy Shipping Container',
    size: '40', cond: 'cw', price: 3100,
    kw: '40 containers for sale', vol: '320', kd: '1',
    image: I.container40HcUsed, imageAlt: 'Used 40ft cargo-worthy steel shipping container',
    summary: 'A surveyed 40ft container suitable for storage or shipment.',
    description: [
      'A cargo-worthy 40ft container is a step above wind and watertight. It passed a structural survey and is suitable for transport as well as storage.',
      'It is a good mid-price option when you want a straighter, better-condition box without paying one-trip prices.',
    ],
    bestFor: ['Storage with a resale plan', 'Shipping goods', 'Quality-conscious buyers'],
    related: ['40ft-used-shipping-container', '40ft-one-trip-shipping-container', '40ft-storage-container'],
    faq: { question: 'Can I move a cargo-worthy container later?', answer: 'Yes. Because it is surveyed for transport, you can sell or ship it later without re-inspection in most cases.' },
  }),
  build({
    slug: '40ft-high-cube-used-shipping-container',
    categoryPath: '/40ft-high-cube-shipping-containers-for-sale/',
    name: '40ft High Cube Used Shipping Container',
    size: '40hc', cond: 'wwt', price: 2890,
    kw: '40ft high cube container for sale', vol: '260', kd: '8',
    support: ['40ft high cube shipping container for sale', '40 ft high cube container'],
    image: I.container40HcUsed, imageAlt: 'Used 40ft high cube steel shipping container',
    summary: 'The most popular 40ft size: 2,700 cubic feet and 9ft 6in tall.',
    description: [
      'The 40ft high cube is the workhorse of container buyers. The extra foot of height adds about 13 percent more cubic volume than a standard 40ft.',
      'It is the preferred shell for garages, workshops and container homes.',
    ],
    bestFor: ['Garages and workshops', 'Container homes', 'High-volume storage'],
    related: ['40ft-high-cube-one-trip-shipping-container', '40ft-used-shipping-container', '40ft-storage-container'],
    faq: { question: 'How tall is a 40ft high cube?', answer: 'The exterior height is 9ft 6in and the interior height is about 8ft 10in.' },
    descOverride: 'Buy a 40ft High Cube used container from $2,890. Inspected wind and watertight steel, 2,700 cu ft, delivered in the US. Sales only. Get a quote.',
  }),
  build({
    slug: '40ft-high-cube-one-trip-shipping-container',
    categoryPath: '/40ft-high-cube-shipping-containers-for-sale/',
    name: '40ft High Cube One-Trip Shipping Container',
    size: '40hc', cond: 'new', price: 4950,
    kw: '40 ft high cube shipping container for sale', vol: '210', kd: '0',
    support: ['high cube container for sale'],
    image: I.container20New, imageAlt: 'New one-trip 40ft high cube steel container',
    summary: 'A near-new 40ft high cube, the best starting point for container homes and offices.',
    description: [
      'This one-trip 40ft high cube is the premium shell for conversions. Straight panels and clean paint reduce prep time.',
      'The taller interior leaves space for insulation and a standard ceiling while still giving comfortable headroom.',
    ],
    bestFor: ['Container homes', 'Premium garages and offices', 'Retail pop-ups'],
    related: ['40ft-high-cube-used-shipping-container', '40ft-one-trip-shipping-container', '20ft-high-cube-shipping-container'],
    faq: { question: 'Is a high cube worth the extra cost?', answer: 'If you plan to insulate or build out the interior, yes. The extra height gives you usable headroom after finishes are added.' },
  }),
  build({
    slug: '53ft-high-cube-shipping-container',
    categoryPath: '/shipping-containers-for-sale/',
    name: '53ft High Cube Shipping Container',
    size: '53hc', cond: 'wwt', price: 6900,
    kw: '53 ft container for sale', vol: '170', kd: '0',
    image: I.container40HcUsed, imageAlt: 'Used 53ft high cube steel container',
    summary: 'The longest standard box we sell: 3,800 cubic feet of secure steel space.',
    description: [
      'A 53ft container is the domestic trailer length. It gives the largest single storage volume available and is a good fit for warehouses, retail overflow and big farms.',
      'Delivery needs more clearance than a 40ft, so we recommend a site survey before you order.',
    ],
    bestFor: ['Warehouse overflow', 'Large farms and ranches', 'Long-run storage'],
    related: ['40ft-high-cube-used-shipping-container', '40ft-used-shipping-container', '40ft-storage-container'],
    faq: { question: 'Can a 53ft container be delivered anywhere?', answer: 'Not always. It needs a long, wide approach and a flat pad. A site survey will confirm access before delivery.' },
  }),
  build({
    slug: '10ft-storage-container',
    categoryPath: '/storage-containers-for-sale/',
    name: '10ft Storage Container',
    size: '10', cond: 'wwt', price: 1950,
    kw: '10ft storage containers for sale', vol: '110', kd: '0',
    image: I.heroYard, imageAlt: '10ft steel storage container with lockable doors',
    summary: 'A small lockable steel storage container for homes, farms and small businesses.',
    description: [
      'A 10ft storage container fits where space is limited and offers steel security for tools, seasonal gear and stock.',
      'Add a lockbox for extra protection against bolt cutters.',
    ],
    bestFor: ['Home storage', 'Small business stock', 'Tools and seasonal gear'],
    related: ['10ft-used-shipping-container', '20ft-storage-container', '10ft-one-trip-shipping-container'],
    faq: { question: 'How do I lock a storage container?', answer: 'Use a heavy-duty padlock with a lock box or a purpose-made container lock. Our team can recommend options when you order.' },
  }),
  build({
    slug: '20ft-storage-container',
    categoryPath: '/storage-containers-for-sale/',
    name: '20ft Storage Container',
    size: '20', cond: 'wwt', price: 2100,
    kw: 'metal storage containers for sale', vol: '320', kd: '0',
    support: ['steel storage containers for sale', 'storage cargo containers for sale'],
    image: I.detailLock, imageAlt: 'Close-up of a steel shipping container door latch with a padlock',
    summary: 'The standard 20ft steel storage container: secure, weatherproof and delivered.',
    description: [
      'A 20ft storage container is a common choice for storing furniture, equipment, vehicles or stock. It holds 1,172 cubic feet inside.',
      'We inspect every unit for leaks and door operation, then deliver it to your pad on a tilt-bed truck.',
    ],
    bestFor: ['Household moves and storage', 'Equipment and stock', 'Farm and ranch use'],
    related: ['20ft-used-shipping-container', '40ft-storage-container', '10ft-storage-container'],
    faq: { question: 'Will water get into a steel storage container?', answer: 'Not if it is wind and watertight and sits on a level base. Raise it slightly on blocks so water drains away from the floor.' },
  }),
  build({
    slug: '40ft-storage-container',
    categoryPath: '/storage-containers-for-sale/',
    name: '40ft Storage Container',
    size: '40', cond: 'wwt', price: 2900,
    kw: '40ft storage containers for sale', vol: '170', kd: '0',
    image: I.container40HcUsed, imageAlt: '40ft steel storage container delivered to a gravel pad',
    summary: 'A 40ft steel storage container for vehicles, machinery and bulk stock.',
    description: [
      'A 40ft storage container gives 2,390 cubic feet of secure space. It holds vehicles, boats, machinery or entire warehouse lots.',
      'Choose the high cube version if you need more height for racking or tall loads.',
    ],
    bestFor: ['Vehicles and boats', 'Machinery', 'Bulk inventory'],
    related: ['40ft-used-shipping-container', '20ft-storage-container', '40ft-high-cube-used-shipping-container'],
    faq: { question: 'Can I store a vehicle in a 40ft container?', answer: 'Yes. A standard car or pickup fits easily. Use a ramp if the container floor is above ground level.' },
  }),
  build({
    slug: '20ft-container-office',
    categoryPath: '/shipping-container-offices/',
    name: '20ft Container Office',
    size: '20', cond: 'mod', price: 11400,
    kw: 'shipping container office for sale', vol: '590', kd: '0',
    image: I.modifiedWorkshop, imageAlt: 'Insulated 20ft shipping container office with windows and steel door',
    summary: 'A finished and insulated 20ft office container with HVAC, power and lighting.',
    description: [
      'This 20ft office container is built from a one-trip steel box, insulated with closed-cell spray foam and finished inside with durable walls and flooring.',
      'It comes with windows, a steel man door, LED lighting, outlets and a mini-split heat and cool system.',
    ],
    bestFor: ['Jobsite offices', 'Farm and ranch offices', 'Small business and school use'],
    related: ['20ft-high-cube-shipping-container', '20ft-roll-up-door-workshop', '20ft-container-cabin'],
    faq: { question: 'Does the office come with HVAC?', answer: 'Yes. A mini-split heat and cool system is included as standard. You supply electrical power to the hookup point.' },
    titleOverride: '20ft Container Office for Sale | From $11,400',
  }),
  build({
    slug: '20ft-roll-up-door-workshop',
    categoryPath: '/shipping-container-workshops/',
    name: '20ft Roll-Up Door Workshop',
    size: '20', cond: 'mod', price: 13200,
    kw: 'workshop shipping container garage', vol: '210', kd: '0',
    image: I.modifiedWorkshop, imageAlt: 'Charcoal 20ft container workshop with roll-up door',
    summary: 'A 20ft workshop container with an 8ft roll-up door, power and work lighting.',
    description: [
      'A framed roll-up door makes this container easy to load and unload. Inside you get insulation, outlets and LED work lights.',
      'Add a workbench, shelving or a compressor and you have a secure workspace anywhere you can place a truck.',
    ],
    bestFor: ['Woodworking and hobby work', 'Auto and bike repair', 'Tool storage with a workbench'],
    related: ['20ft-container-office', '40ft-roll-up-door-garage', '20ft-container-shed'],
    faq: { question: 'Is the roll-up door lockable?', answer: 'Yes. The door has a lock bar and a steel man door provides separate lockable access.' },
    titleOverride: '20ft Roll-Up Door Workshop Container | From $13,200',
  }),
  build({
    slug: '40ft-roll-up-door-garage',
    categoryPath: '/shipping-container-garages/',
    name: '40ft High Cube Garage Container',
    size: '40hc', cond: 'mod', price: 14900,
    kw: 'shipping container garage', vol: '2,900', kd: '0',
    image: I.container40HcUsed, imageAlt: '40ft high cube container fitted with a roll-up garage door',
    summary: 'A 40ft high cube garage with a roll-up door, built for vehicles and workshop use.',
    description: [
      'This garage is a used 40ft high cube container with a framed roll-up door and a lockable steel man door. The taller interior leaves room for lifts and shelves.',
      'Add lighting, outlets and insulation to turn it into a heated workspace.',
    ],
    bestFor: ['Cars, trucks and bikes', 'Boats and trailers', 'Heated workshop use'],
    related: ['20ft-roll-up-door-workshop', '40ft-high-cube-used-shipping-container', '40ft-storage-container'],
    faq: { question: 'Can I add electricity to the garage?', answer: 'Yes. Lighting, outlets and a breaker panel can be added. A licensed electrician should complete the final hookup.' },
    titleOverride: '40ft Container Garage for Sale | From $14,900',
  }),
  build({
    slug: '20ft-container-shed',
    categoryPath: '/shipping-container-sheds/',
    name: '20ft Container Shed',
    size: '20', cond: 'mod', price: 6350,
    kw: 'shipping container sheds for sale', vol: '320', kd: '9',
    support: ['container shed for sale'],
    image: I.heroYard, imageAlt: '20ft steel container shed with steel man door',
    summary: 'A durable 20ft steel shed with a man door, vents and shelving options.',
    description: [
      'This container shed is a 20ft used steel box with a framed man door and roof and wall vents. It will not rot or warp like a wooden shed.',
      'Add shelving, a window or a custom paint finish to match your property.',
    ],
    bestFor: ['Yard and garden storage', 'Farm tools and feed', 'Small business stock'],
    related: ['10ft-container-shed', '20ft-storage-container', '20ft-roll-up-door-workshop'],
    faq: { question: 'Will a container shed get hot in summer?', answer: 'Steel can get warm in direct sun. Vents, a light paint color and shade reduce heat. Insulation is an option for working spaces.' },
    titleOverride: '20ft Container Shed for Sale | From $6,350',
  }),
  build({
    slug: '10ft-container-shed',
    categoryPath: '/shipping-container-sheds/',
    name: '10ft Container Shed',
    size: '10', cond: 'mod', price: 4950,
    kw: 'container shed for sale', vol: '110', kd: '0',
    image: I.heroYard, imageAlt: '10ft steel container shed with man door',
    summary: 'A compact 10ft steel shed for small yards and urban lots.',
    description: [
      'The 10ft container shed fits a backyard or garden where space is tight. It has a steel man door and roof vents.',
      'Choose a painted finish for a clean look in a residential setting.',
    ],
    bestFor: ['Backyard storage', 'Garden tools', 'Small business stock'],
    related: ['20ft-container-shed', '10ft-storage-container', '10ft-used-shipping-container'],
    faq: { question: 'Can a 10ft container shed be placed in a backyard?', answer: 'Often yes, but rules vary. Some HOAs and cities regulate accessory structures. Check local requirements first.' },
    titleOverride: '10ft Container Shed for Sale | From $4,950',
  }),
  build({
    slug: '20ft-container-cabin',
    categoryPath: '/shipping-container-cabins/',
    name: '20ft Container Cabin',
    size: '20', cond: 'mod', price: 34900,
    kw: 'shipping container cabin for sale', vol: '140', kd: '0',
    image: I.prodCabin, imageAlt: 'Two-story container-style cabin with large windows in a yellow rapeseed field',
    summary: 'A finished 20ft cabin with a sleeping area, kitchenette and bath.',
    description: [
      'This 20ft container cabin is finished inside and ready for utility hookups. It suits hunting land, weekend retreats and guest quarters.',
      'Add an off-grid package with solar, battery storage and a water system for remote sites.',
    ],
    bestFor: ['Hunting land and recreation', 'Guest quarters', 'Off-grid retreats'],
    related: ['20ft-tiny-container-home', '20ft-container-office', '20ft-high-cube-shipping-container'],
    faq: { question: 'Can the cabin run off-grid?', answer: 'Yes. A solar, battery, water and heating package can be added for properties without utilities.' },
    titleOverride: '20ft Container Cabin for Sale | From $34,900',
  }),
  build({
    slug: '20ft-tiny-container-home',
    categoryPath: '/tiny-house-container-homes/',
    name: '20ft Tiny Container Home',
    size: '20', cond: 'mod', price: 42900,
    kw: 'shipping container tiny house', vol: '1,600', kd: '14',
    support: ['container tiny house', 'tiny house container homes'],
    image: I.prodTiny, imageAlt: 'Turquoise shipping container home with large glass windows',
    summary: 'A 160-square-foot tiny container home with kitchen, bath and sleeping area.',
    description: [
      'This single-module tiny home is built from a one-trip steel container and finished inside. It has a full bathroom, a compact kitchen and a sleeping area.',
      'It arrives ready to connect to utilities, so site work is limited to the foundation and hookups.',
    ],
    bestFor: ['Primary tiny living', 'Guest houses and ADUs', 'Short-term rentals'],
    related: ['20ft-container-cabin', '20ft-container-office', '40ft-high-cube-one-trip-shipping-container'],
    faq: { question: 'Is this a legal dwelling?', answer: 'It depends on your local zoning and building codes. Many areas allow accessory dwellings with the right permits. Check with your planning office.' },
    titleOverride: '20ft Tiny Container Home for Sale | From $42,900',
  }),
  build({
    slug: '20ft-container-pool',
    categoryPath: '/shipping-container-pools/',
    name: '20ft Container Plunge Pool',
    size: '20', cond: 'mod', price: 24500,
    kw: 'above ground shipping container pool', vol: '210', kd: '6',
    support: ['shipping container pool with deck'],
    image: I.modifiedWorkshop, imageAlt: '20ft modified steel container used as an above-ground plunge pool',
    summary: 'A 20ft steel container converted into an above-ground plunge pool.',
    description: [
      'This plunge pool starts with a one-trip container, reinforced and sealed with a pool-grade lining. It is delivered ready to place on a prepared pad.',
      'Add a deck, steps, a viewing window or a heater package from the options list.',
    ],
    bestFor: ['Small backyards', 'Plunge and cooling pools', 'Quick installation projects'],
    related: ['40ft-container-swim-pool', '20ft-container-cabin', '20ft-container-office'],
    faq: { question: 'How long does it take to install?', answer: 'Once the shell is delivered and the pad is ready, set and fill can take just a few days. Fabrication takes 8 to 12 weeks.' },
    titleOverride: '20ft Container Plunge Pool | From $24,500',
  }),
  build({
    slug: '40ft-container-swim-pool',
    categoryPath: '/shipping-container-pools/',
    name: '40ft Container Swim Pool',
    size: '40', cond: 'mod', price: 36500,
    kw: 'inground shipping container pool', vol: '260', kd: '2',
    support: ['in-ground shipping container pool'],
    image: I.modifiedWorkshop, imageAlt: '40ft modified steel container used as a swim pool',
    summary: 'A 40ft steel swim pool with space for lap swimming, set above or in the ground.',
    description: [
      'The 40ft swim pool gives you a full 40 feet of water length. It can be set above ground with a deck, or recessed into the ground for a flush finish.',
      'A site survey and engineer review are recommended for in-ground installs.',
    ],
    bestFor: ['Lap swimming', 'Family backyard pools', 'Resort and rental properties'],
    related: ['20ft-container-pool', '20ft-container-cabin', '20ft-tiny-container-home'],
    faq: { question: 'Can the pool be set into the ground?', answer: 'Yes. In-ground installs need excavation, drainage and an engineered base. We recommend a site survey before ordering.' },
    titleOverride: '40ft Container Swim Pool | From $36,500',
  }),
];

export const PRODUCT_BY_SLUG: Record<string, ProductPageData> = Object.fromEntries(
  PRODUCT_PAGES.map((p) => [p.slug, p]),
);
