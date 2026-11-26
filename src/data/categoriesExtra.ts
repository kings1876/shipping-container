import { CategoryPageData } from '../types/seo';
import { SITE_IMAGES } from './images';
import { specRow } from './sizes';

// Product categories added from the keyword research (US volume >= 110, KD < 25).
// Prices are starting-price placeholders: confirm against current supplier quotes before launch.
export const EXTRA_CATEGORY_PAGES: CategoryPageData[] = [
  {
    path: '/storage-containers-for-sale/',
    group: 'core',
    navLabel: 'Storage Containers',
    h1: 'Storage Containers for Sale',
    title: 'Steel Storage Containers for Sale | From $1,950', // 47 chars
    metaDescription:
      'Buy steel storage containers in 10ft, 20ft and 40ft sizes from $1,950. Lockable, weatherproof and delivered across the USA. Sales only, no rentals.', // 147 chars
    primaryKeyword: 'storage containers for sale',
    keywordVolume: '14,800',
    keywordKd: '12',
    supportingKeywords: [
      'storage sea containers for sale',
      'storage cargo containers for sale',
      'storage unit containers for sale',
      'metal storage containers for sale',
      'cheap storage containers for sale',
      'storage containers for sale near me',
      'large storage containers',
      'extra large storage containers',
      'heavy duty storage containers',
    ],
    priceFrom: 1950,
    image: SITE_IMAGES.heroYard,
    imageAlt: 'Rows of steel storage containers on a gravel pad at a US container depot',
    kicker: 'Steel Storage Containers',
    summary:
      'Wind and watertight steel storage containers for homes, farms, jobsites and businesses. Buy outright, lock it, and keep your equipment, stock or tools dry and secure.',
    overviewParagraphs: [
      'A steel storage container is the same ISO shipping container that crosses oceans, so it is built to take weather, theft attempts and heavy loads. We sell 10ft, 20ft and 40ft units in used wind and watertight grade for the best price, or new one-trip grade for a cleaner finish.',
      'This page covers steel containers only. If you want a plastic bin or a garage shelving unit, a retail store is the better choice. If you want a lockable steel box that holds a vehicle, a workshop of tools or a full store room of stock, choose a size below and request a delivered quote.',
    ],
    highlights: [
      { label: 'Lockable Steel Security', detail: 'Corten steel walls and lockbox-ready door gear stop casual theft far better than a shed.' },
      { label: 'Weatherproof Grade', detail: 'Every used unit is light-tested and door-sealed so rain and snow stay outside.' },
      { label: 'Fast Delivery', detail: 'Tilt-bed delivery to your pad in 2 to 6 business days from our regional yards.' },
    ],
    specs: [
      specRow('10ft Storage Container (Used WWT)', 'Wind & Watertight', '10', 1950),
      specRow('20ft Storage Container (Used WWT)', 'Wind & Watertight', '20', 2100),
      specRow('40ft Storage Container (Used WWT)', 'Wind & Watertight', '40', 2900),
      specRow('40ft High Cube Storage Container', 'Wind & Watertight', '40hc', 3150),
    ],
    deliveryInfo: {
      method: 'Tilt-bed rollback truck for ground-level placement',
      leadTime: '2 to 6 business days from cleared order',
      clearanceRequired: '60 ft straight-line clearance for 20ft; 100 ft for 40ft tilt-bed',
      sitePrep: 'Level gravel, concrete blocks or a slab; keep the doors facing clear ground',
    },
    relatedCategories: [
      '/shipping-containers-for-sale/',
      '/used-shipping-containers-for-sale/',
      '/10ft-shipping-containers-for-sale/',
      '/20ft-shipping-containers-for-sale/',
    ],
    relatedGuides: [
      '/guides/shipping-container-sizes/',
      '/guides/shipping-container-delivery-and-site-prep/',
      '/guides/shipping-container-grades-explained/',
    ],
    faqs: [
      {
        question: 'Which size storage container should I buy?',
        answer:
          'A 10ft container suits tools and seasonal gear, a 20ft holds a small shop or the contents of a two-bedroom home, and a 40ft stores vehicles, bulk stock or a full jobsite. If you are unsure, go one size up.',
      },
      {
        question: 'Can I put a storage container on my own land?',
        answer:
          'Often yes, but some cities and HOAs require a permit or limit placement. Check local zoning before you order. Our permits guide lists the common rules by state.',
      },
    ],
  },
  {
    path: '/shipping-container-pools/',
    group: 'modified',
    navLabel: 'Container Pools',
    h1: 'Shipping Container Pools for Sale',
    title: 'Shipping Container Pools | Plunge & Swim Pools', // 46 chars
    metaDescription:
      'Buy a shipping container pool built from a 20ft or 40ft steel container. Above-ground and in-ground models with decks and windows, from $24,500.', // 146 chars
    primaryKeyword: 'shipping container pool',
    keywordVolume: '12,100',
    keywordKd: '4',
    supportingKeywords: [
      'shipping container swimming pool',
      'shipping container pool cost',
      'inground shipping container pool',
      'above ground shipping container pool',
      'shipping container pool with deck',
      'shipping container pool houses',
      'shipping container pool near me',
    ],
    priceFrom: 24500,
    image: SITE_IMAGES.modifiedWorkshop,
    imageAlt: 'Modified steel shipping container converted for use as a backyard pool shell',
    kicker: 'Modified Container Pools',
    summary:
      'A steel shipping container converted into a watertight pool shell. Choose a 20ft plunge pool or a 40ft swim pool, above ground or set into the ground, with optional deck, window and heater packages.',
    overviewParagraphs: [
      'We start with a one-trip ISO container, reinforce the walls, cut the top open and weld a continuous structural frame around the opening. The inside is lined and sealed with a pool-grade finish. The finished shell arrives on a flatbed and is set with a crane.',
      'A container pool installs faster than a poured concrete pool and needs far less excavation, which helps with tight lots and fast timelines. Pricing depends on the size, the finish and whether you want an in-ground or above-ground set.',
    ],
    highlights: [
      { label: 'Faster Than Concrete', detail: 'A delivered shell can be set and filled in days, not months.' },
      { label: 'Reinforced Steel Frame', detail: 'Boxed wall cutouts and a welded top frame carry the water load.' },
      { label: 'Plug-and-Play Options', detail: 'Add a viewing window, deck, steps, heater and filtration package.' },
    ],
    specs: [
      specRow('20ft Plunge Pool (Above Ground)', 'One-Trip Modified', '20', 24500),
      specRow('20ft Plunge Pool (In-Ground)', 'One-Trip Modified', '20', 28900),
      specRow('40ft Swim Pool with Deck', 'One-Trip Modified', '40', 36500),
      specRow('40ft Swim Pool (In-Ground)', 'One-Trip Modified', '40hc', 41500),
    ],
    deliveryInfo: {
      method: 'Flatbed delivery with crane set onto a prepared pad or excavation',
      leadTime: '8 to 12 weeks for fabrication, plus delivery',
      clearanceRequired: 'Crane access and overhead clearance; site survey recommended',
      sitePrep: 'Compacted level base for above-ground; engineered excavation for in-ground',
    },
    relatedCategories: [
      '/modified-shipping-containers/',
      '/shipping-container-homes-for-sale/',
      '/shipping-container-cabins/',
      '/shipping-container-offices/',
    ],
    relatedGuides: [
      '/guides/shipping-container-cost/',
      '/guides/shipping-container-permits-by-state/',
      '/guides/shipping-container-delivery-and-site-prep/',
    ],
    faqs: [
      {
        question: 'How much does a shipping container pool cost?',
        answer:
          'A finished 20ft container pool starts around $24,500 above ground and $28,900 in-ground, before site work, decking and equipment. A 40ft swim pool starts around $36,500. A site survey gives a firm price.',
      },
      {
        question: 'Do I need a permit for a container pool?',
        answer:
          'Almost always. Pools usually need a building permit, fencing and sometimes an engineer sign-off, even when the shell is a container. Check your city or county first.',
      },
    ],
  },
  {
    path: '/shipping-container-offices/',
    group: 'modified',
    navLabel: 'Container Offices',
    h1: 'Shipping Container Offices for Sale',
    title: 'Shipping Container Offices for Sale | From $11,400', // 50 chars
    metaDescription:
      'Buy a shipping container office, insulated and wired with HVAC, windows and a steel man door. 10ft, 20ft and 40ft units from $11,400. Delivered in the US.', // 152 chars
    primaryKeyword: 'shipping container office',
    keywordVolume: '2,400',
    keywordKd: '0',
    supportingKeywords: [
      'shipping container office for sale',
      'used shipping container office for sale',
      'shipping container office for sale near me',
    ],
    priceFrom: 11400,
    image: SITE_IMAGES.modifiedWorkshop,
    imageAlt: 'Insulated modified shipping container office with steel man door and windows',
    kicker: 'Turnkey Container Offices',
    summary:
      'Insulated, wired and climate-controlled office containers for jobsites, farms, schools and small businesses. Delivered ready to plug in.',
    overviewParagraphs: [
      'A container office gives you a secure, weather-tight workspace without a building permit for new construction in many areas. Each unit is built from a one-trip steel container with framed window and door cutouts, closed-cell spray foam, interior wall finishes, LED lighting and a mini-split heat and cool system.',
      'Choose a single-room 20ft office, a 40ft split office with a reception area, or a 10ft site cabin. We can add restroom, kitchenette and data wiring packages on request.',
    ],
    highlights: [
      { label: 'Insulated and Wired', detail: 'Closed-cell foam, NEC-style electrical package and LED lighting come standard.' },
      { label: 'Heat and Cool Ready', detail: 'Mini-split HVAC keeps the space comfortable in hot and cold climates.' },
      { label: 'Fast Setup', detail: 'Arrives on a flatbed, sits on piers or blocks, and plugs into a standard hookup.' },
    ],
    specs: [
      specRow('10ft Site Office', 'One-Trip Modified', '10', 8900),
      specRow('20ft Insulated Office', 'One-Trip Modified', '20', 11400),
      specRow('40ft Split Office', 'One-Trip Modified', '40', 21900),
    ],
    deliveryInfo: {
      method: 'Flatbed delivery with crane or forklift offload',
      leadTime: '4 to 8 weeks for fabrication, plus delivery',
      clearanceRequired: 'Crane or tilt-bed access depending on size',
      sitePrep: 'Level piers, blocks or a slab, plus an electrical hookup point',
    },
    relatedCategories: [
      '/modified-shipping-containers/',
      '/shipping-container-workshops/',
      '/shipping-container-garages/',
      '/20ft-shipping-containers-for-sale/',
    ],
    relatedGuides: [
      '/guides/shipping-container-cost/',
      '/guides/shipping-container-permits-by-state/',
      '/guides/shipping-container-delivery-and-site-prep/',
    ],
    faqs: [
      {
        question: 'How much does a shipping container office cost?',
        answer:
          'A finished insulated 20ft office starts around $11,400 delivered quote pending. A 40ft split office starts around $21,900. Extras such as restrooms and data cabling are quoted separately.',
      },
      {
        question: 'Can I use a container office on a jobsite?',
        answer:
          'Yes. Many customers use them as site offices, and they can be moved with a crane or tilt-bed when the project finishes.',
      },
    ],
  },
  {
    path: '/shipping-container-workshops/',
    group: 'modified',
    navLabel: 'Container Workshops',
    h1: 'Shipping Container Workshops for Sale',
    title: 'Shipping Container Workshops for Sale | From $13,200', // 52 chars
    metaDescription:
      'Buy a shipping container workshop with roll-up door, insulation, power and work lighting. 20ft and 40ft models from $13,200, delivered across the USA.', // 150 chars
    primaryKeyword: 'shipping container workshop',
    keywordVolume: '720',
    keywordKd: '0',
    supportingKeywords: ['workshop shipping container garage', 'shipping container workshop for sale'],
    priceFrom: 13200,
    image: SITE_IMAGES.modifiedWorkshop,
    imageAlt: 'Charcoal shipping container workshop with roll-up door and side windows',
    kicker: 'Container Workshops',
    summary:
      'A secure steel workshop with a roll-up door, insulation, power and bright work lighting. Place it behind the house, on a farm or at a jobsite.',
    overviewParagraphs: [
      'Workshop containers are fabricated from one-trip steel boxes. We cut a framed roll-up door opening, add a steel man door and windows, spray the interior with closed-cell foam and wire in outlets and high-bay LED lights.',
      'They suit woodworking, auto work, 3D printing, craft studios and tool storage. Pick the 20ft for a single bench and storage wall, or a 40ft for multiple stations and larger projects.',
    ],
    highlights: [
      { label: 'Roll-Up Door Access', detail: 'A framed 8ft roll-up door lets you load tools, vehicles and materials easily.' },
      { label: 'Power and Light', detail: 'Pre-wired outlets and LED work lighting ready for hookup.' },
      { label: 'Insulated Interior', detail: 'Closed-cell spray foam reduces condensation and keeps temperatures steadier.' },
    ],
    specs: [
      specRow('20ft Roll-Up Door Workshop', 'One-Trip Modified', '20', 13200),
      specRow('40ft Roll-Up Door Workshop', 'One-Trip Modified', '40', 22800),
    ],
    deliveryInfo: {
      method: 'Flatbed delivery with crane or tilt-bed offload',
      leadTime: '4 to 8 weeks for fabrication, plus delivery',
      clearanceRequired: 'Allow 60 to 100 ft straight-line clearance',
      sitePrep: 'Level pad, blocks or slab; plan a hookup point for power',
    },
    relatedCategories: [
      '/modified-shipping-containers/',
      '/shipping-container-offices/',
      '/shipping-container-garages/',
      '/shipping-container-sheds/',
    ],
    relatedGuides: ['/guides/shipping-container-cost/', '/guides/shipping-container-delivery-and-site-prep/'],
    faqs: [
      {
        question: 'Can I run power tools in a container workshop?',
        answer:
          'Yes. Units are wired with outlets and lighting. For heavy machinery we can add a larger panel and extra circuits. A licensed electrician should make the final hookup.',
      },
    ],
  },
  {
    path: '/shipping-container-garages/',
    group: 'modified',
    navLabel: 'Container Garages',
    h1: 'Shipping Container Garages for Sale',
    title: 'Shipping Container Garages for Sale | From $9,800', // 50 chars
    metaDescription:
      'Buy a shipping container garage with an 8ft roll-up door, steel man door and lighting. 20ft and 40ft garage containers from $9,800, delivered in the US.', // 151 chars
    primaryKeyword: 'shipping container garage',
    keywordVolume: '2,900',
    keywordKd: '0',
    supportingKeywords: ['workshop shipping container garage'],
    priceFrom: 9800,
    image: SITE_IMAGES.container40HcUsed,
    imageAlt: 'Used 40ft high cube steel container fitted with a roll-up garage door',
    kicker: 'Container Garages',
    summary:
      'A steel garage for cars, bikes, boats and tools. Choose a 20ft single-car garage or a 40ft double-depth garage with a roll-up door.',
    overviewParagraphs: [
      'A container garage is a cost-effective alternative to a stick-built garage. Each unit is a used or one-trip ISO container with a framed roll-up door cut into the end or side, plus a lockable steel man door if you want one.',
      'High cube 40ft containers give extra headroom for lifts, shelving and taller vehicles. Insulation, lighting and electrical are optional extras.',
    ],
    highlights: [
      { label: 'Roll-Up Door Install', detail: 'A framed and welded opening keeps the structure rigid.' },
      { label: 'Secure and Lockable', detail: 'Steel construction with lockable doors protects cars and tools.' },
      { label: 'Optional Power and Insulation', detail: 'Add foam, lights and outlets to turn it into a heated workspace.' },
    ],
    specs: [
      specRow('20ft Single-Car Garage', 'Modified Used WWT', '20', 9800),
      specRow('40ft High Cube Garage', 'Modified Used WWT', '40hc', 14900),
    ],
    deliveryInfo: {
      method: 'Tilt-bed delivery to ground level',
      leadTime: '3 to 6 weeks for modification, plus delivery',
      clearanceRequired: '60 ft clearance for 20ft; 100 ft for 40ft',
      sitePrep: 'Compacted gravel or concrete pad with a ramp area in front of the door',
    },
    relatedCategories: [
      '/modified-shipping-containers/',
      '/shipping-container-workshops/',
      '/storage-containers-for-sale/',
      '/shipping-container-ramps/',
    ],
    relatedGuides: ['/guides/shipping-container-delivery-and-site-prep/', '/guides/shipping-container-permits-by-state/'],
    faqs: [
      {
        question: 'Will a car fit in a 20ft container garage?',
        answer:
          'A compact or mid-size car fits lengthwise in a 20ft unit, but door width is limited to a standard container width. A 40ft high cube gives more room for larger vehicles and storage.',
      },
    ],
  },
  {
    path: '/shipping-container-cabins/',
    group: 'modified',
    navLabel: 'Container Cabins',
    h1: 'Shipping Container Cabins for Sale',
    title: 'Shipping Container Cabins for Sale | From $34,900', // 49 chars
    metaDescription:
      'Buy a shipping container cabin built from a 20ft or 40ft steel container. Insulated, wired and finished inside. Off-grid options, from $34,900.', // 143 chars
    primaryKeyword: 'shipping container cabin',
    keywordVolume: '1,300',
    keywordKd: '13',
    supportingKeywords: [
      'shipping container cabin for sale',
      'off-grid shipping container cabin',
      'hunting cabin shipping container',
    ],
    priceFrom: 34900,
    image: SITE_IMAGES.heroContainerHome,
    imageAlt: 'Finished shipping container cabin with large windows and timber deck',
    kicker: 'Container Cabins',
    summary:
      'A finished one-room or two-room cabin built from a steel container for hunting land, weekend retreats and guest quarters. Off-grid packages are available.',
    overviewParagraphs: [
      'Container cabins are insulated, framed and finished inside with durable wall and floor finishes. Windows and doors are boxed in structural steel, so the cabin stays stiff and weather-tight.',
      'Most buyers choose a 20ft cabin with a sleeping area, small kitchen and bath. A 40ft cabin gives a separate bedroom and living area. Add a solar, battery and water package for an off-grid site.',
    ],
    highlights: [
      { label: 'Insulated and Finished', detail: 'Foam insulation, interior walls and flooring are included.' },
      { label: 'Off-Grid Options', detail: 'Solar, battery, water and heating packages for remote land.' },
      { label: 'Steel Strength', detail: 'Corten steel shell resists weather, rot and pests.' },
    ],
    specs: [
      specRow('20ft Container Cabin', 'One-Trip Modified', '20', 34900),
      specRow('40ft Container Cabin', 'One-Trip Modified', '40hc', 58900),
    ],
    deliveryInfo: {
      method: 'Flatbed delivery with crane set onto piers',
      leadTime: '8 to 12 weeks for fabrication, plus delivery',
      clearanceRequired: 'Crane access and a clear approach for a flatbed',
      sitePrep: 'Level piers or a slab; plan for utilities or an off-grid package',
    },
    relatedCategories: [
      '/shipping-container-homes-for-sale/',
      '/tiny-house-container-homes/',
      '/prefab-shipping-container-homes/',
      '/modified-shipping-containers/',
    ],
    relatedGuides: ['/guides/shipping-container-cost/', '/guides/shipping-container-permits-by-state/'],
    faqs: [
      {
        question: 'Is a container cabin legal to live in?',
        answer:
          'That depends on local zoning and building codes. Many counties treat a finished cabin like any other small dwelling and require permits. Check with your local planning office before ordering.',
      },
    ],
  },
  {
    path: '/tiny-house-container-homes/',
    group: 'modified',
    navLabel: 'Tiny House Containers',
    h1: 'Tiny House Container Homes for Sale',
    title: 'Tiny House Container Homes for Sale | From $42,900', // 50 chars
    metaDescription:
      'Buy a tiny house container home built from a 20ft or 40ft steel container, finished inside with kitchen and bath. Prices from $42,900, delivered in the US.', // 153 chars
    primaryKeyword: 'tiny house container',
    keywordVolume: '1,900',
    keywordKd: '18',
    supportingKeywords: [
      'tiny house container homes',
      'container tiny house',
      'shipping container tiny house',
      'shipping container tiny house for sale',
    ],
    priceFrom: 42900,
    image: SITE_IMAGES.heroContainerHome,
    imageAlt: 'Finished tiny house built from a single steel shipping container',
    kicker: 'Tiny House Container Homes',
    summary:
      'Compact container tiny homes with a full kitchen, bathroom, sleeping area and living space, finished and delivered ready to connect to utilities.',
    overviewParagraphs: [
      'A tiny house container home is one container, finished inside to live in full time or use as a guest house or rental unit. Typical layouts fit a sleeping area, a bathroom and a compact kitchen in 160 to 320 square feet.',
      'You choose the size, window layout and finishes. We build the unit in our shop and ship it as a single module, so there is far less work on site than a conventional build.',
    ],
    highlights: [
      { label: 'Full Kitchen and Bath', detail: 'Each unit includes a kitchenette, bathroom and sleeping area.' },
      { label: 'Single-Module Delivery', detail: 'Arrives finished, so site work is limited to foundation and utilities.' },
      { label: 'Custom Layouts', detail: 'Choose window placement, finishes and optional loft or deck.' },
    ],
    specs: [
      specRow('20ft Tiny Container Home', 'One-Trip Modified', '20', 42900),
      specRow('40ft Tiny Container Home', 'One-Trip Modified', '40hc', 68500),
    ],
    deliveryInfo: {
      method: 'Flatbed delivery with crane set onto foundation',
      leadTime: '10 to 14 weeks for fabrication, plus delivery',
      clearanceRequired: 'Crane access and a clear approach',
      sitePrep: 'Foundation or piers, plus utility hookups',
    },
    relatedCategories: [
      '/shipping-container-homes-for-sale/',
      '/prefab-shipping-container-homes/',
      '/shipping-container-cabins/',
      '/3-bedroom-shipping-container-homes-for-sale/',
    ],
    relatedGuides: ['/guides/how-much-do-shipping-container-homes-cost/', '/guides/shipping-container-permits-by-state/'],
    faqs: [
      {
        question: 'How much does a tiny house container home cost?',
        answer:
          'Finished 20ft tiny container homes start around $42,900. A 40ft model starts around $68,500. Land, foundation and utility connections are extra.',
      },
    ],
  },
  {
    path: '/shipping-container-sheds/',
    group: 'modified',
    navLabel: 'Container Sheds',
    h1: 'Shipping Container Sheds for Sale',
    title: 'Shipping Container Sheds for Sale | From $4,950', // 47 chars
    metaDescription:
      'Buy a shipping container shed with a steel man door, vents and lockable doors. 10ft and 20ft container sheds from $4,950, delivered across the US.', // 146 chars
    primaryKeyword: 'container shed',
    keywordVolume: '1,000',
    keywordKd: '0',
    supportingKeywords: ['shipping container sheds for sale', 'container shed for sale'],
    priceFrom: 4950,
    image: SITE_IMAGES.heroYard,
    imageAlt: 'Painted steel shipping container used as a backyard storage shed',
    kicker: 'Container Sheds',
    summary:
      'A tougher alternative to a plastic or wood shed. Steel, lockable and weatherproof, in sizes that fit a backyard, farm or small business.',
    overviewParagraphs: [
      'A container shed is a small steel container, usually 10ft or 20ft, fitted with a steel man door, vents and shelving options. It will not rot, warp or attract termites the way a wooden shed can.',
      'Painted finishes, window options and solar-ready roof vents are available. If you just want plain storage, see our storage containers page instead.',
    ],
    highlights: [
      { label: 'Steel Man Door', detail: 'Add a walk-in door so you do not have to open the full cargo doors.' },
      { label: 'Vented and Weatherproof', detail: 'Roof and wall vents reduce moisture and heat build-up.' },
      { label: 'Low Maintenance', detail: 'Corten steel with a durable paint finish needs little care.' },
    ],
    specs: [
      specRow('10ft Container Shed', 'Modified Used WWT', '10', 4950),
      specRow('20ft Container Shed', 'Modified Used WWT', '20', 6350),
    ],
    deliveryInfo: {
      method: 'Tilt-bed delivery to ground level',
      leadTime: '2 to 4 weeks for modification, plus delivery',
      clearanceRequired: '60 ft straight-line clearance',
      sitePrep: 'Level gravel, blocks or a slab',
    },
    relatedCategories: [
      '/storage-containers-for-sale/',
      '/shipping-container-workshops/',
      '/shipping-container-barns/',
      '/10ft-shipping-containers-for-sale/',
    ],
    relatedGuides: ['/guides/shipping-container-delivery-and-site-prep/', '/guides/shipping-container-sizes/'],
    faqs: [
      {
        question: 'Do I need a permit for a container shed?',
        answer:
          'Many areas treat a container shed like any other accessory structure, and rules depend on size and placement. Check with your local building department.',
      },
    ],
  },
];
