import { CategoryPageData } from '../types/seo';
import { SITE_IMAGES } from './images';

export const HOME_SEO = {
  path: '/',
  h1: 'Shipping Containers for Sale',
  title: 'Shipping Containers for Sale USA | Steelridge Containers', // 56 chars
  metaDescription:
    'Buy new one-trip, used cargo-worthy, and modified shipping containers or container homes across the USA with direct tilt-bed delivery.', // 138 chars
  primaryKeyword: 'shipping container',
  keywordVolume: '60,500',
  keywordKd: '37',
  supportingKeywords: [
    'buy shipping containers',
    'new and used shipping containers',
    'shipping containers for sale near me',
  ],
};

export const CATEGORY_PAGES: CategoryPageData[] = [
  {
    path: '/shipping-containers-for-sale/',
    group: 'core',
    isHub: true,
    navLabel: 'All Shipping Containers',
    h1: 'Shipping Containers for Sale',
    title: 'Shipping Containers for Sale | Steelridge Direct USA', // 52 chars
    metaDescription:
      'Browse new one-trip, used WWT, 10ft, 20ft, 40ft, and High Cube ISO shipping containers for sale nationwide. Direct depot pricing from $1,850.', // 143 chars
    primaryKeyword: 'shipping containers for sale',
    keywordVolume: '40,500',
    keywordKd: '31',
    supportingKeywords: [
      'buy shipping containers',
      'steel storage containers for sale',
      'cargo containers for sale',
    ],
    priceFrom: 1850,
    image: SITE_IMAGES.heroYard,
    imageAlt: 'Rows of new and used Corten steel shipping containers stocked at a US supply depot',
    kicker: 'National Inventory Hub',
    summary:
      'Direct-sale ISO 1496-1 Corten steel shipping containers stocked across 19 US regional yards. Every unit is inspected for structural integrity, intact door gaskets, and weather-tight flooring prior to dispatch.',
    overviewParagraphs: [
      'Steelridge Containers sells new one-trip and inspected used ISO steel containers directly to commercial contractors, farms, municipalities, and residential landowners across all 48 contiguous states. We operate strictly as a container sales and custom fabrication supplier—we do not offer short-term rentals or equipment leasing.',
      'All standard dry-van containers are engineered from 14-gauge Corten A weathering steel with 1-1/8 inch marine-grade hardwood or bamboo subflooring over heavy structural cross-members. Select by length, height, door configuration, or condition grade below.',
    ],
    highlights: [
      { label: 'Sales-Only Direct Pricing', detail: 'Buy outright with transparent depot pricing from $1,850 and zero rental markups.' },
      { label: 'Multi-Point WWT Inspection', detail: 'Every used unit passes a dark-room light test, door seal check, and floor load audit.' },
      { label: 'Tilt-Bed & Flatbed Dispatch', detail: 'Delivered directly to your gravel pad, concrete slab, or jobsite in 2–6 business days.' },
    ],
    specs: [
      {
        model: '10ft One-Trip New',
        grade: 'New / One-Trip',
        extDimensions: `10'0" × 8'0" × 8'6"`,
        intDimensions: `9'3" × 7'8" × 7'10"`,
        doorOpening: `7'8" × 7'5"`,
        cubicVolume: '560 cu ft',
        tareWeight: '2,890 lbs',
        maxPayload: '22,050 lbs',
        priceFrom: 2450,
      },
      {
        model: '20ft Standard Used (WWT)',
        grade: 'Wind & Watertight',
        extDimensions: `20'0" × 8'0" × 8'6"`,
        intDimensions: `19'4" × 7'8" × 7'10"`,
        doorOpening: `7'8" × 7'5"`,
        cubicVolume: '1,172 cu ft',
        tareWeight: '4,916 lbs',
        maxPayload: '62,280 lbs',
        priceFrom: 1850,
      },
      {
        model: '20ft One-Trip New',
        grade: 'New / One-Trip',
        extDimensions: `20'0" × 8'0" × 8'6"`,
        intDimensions: `19'4" × 7'8" × 7'10"`,
        doorOpening: `7'8" × 7'5"`,
        cubicVolume: '1,172 cu ft',
        tareWeight: '4,850 lbs',
        maxPayload: '62,350 lbs',
        priceFrom: 3290,
      },
      {
        model: '40ft Standard Used (WWT)',
        grade: 'Wind & Watertight',
        extDimensions: `40'0" × 8'0" × 8'6"`,
        intDimensions: `39'5" × 7'8" × 7'10"`,
        doorOpening: `7'8" × 7'5"`,
        cubicVolume: '2,390 cu ft',
        tareWeight: '8,267 lbs',
        maxPayload: '58,930 lbs',
        priceFrom: 2650,
      },
      {
        model: '40ft High Cube Used (WWT)',
        grade: 'Wind & Watertight',
        extDimensions: `40'0" × 8'0" × 9'6"`,
        intDimensions: `39'5" × 7'8" × 8'10"`,
        doorOpening: `7'8" × 8'5"`,
        cubicVolume: '2,700 cu ft',
        tareWeight: '8,775 lbs',
        maxPayload: '58,425 lbs',
        priceFrom: 2890,
      },
    ],
    deliveryInfo: {
      method: 'Tilt-bed rollback truck (20ft/40ft) or flatbed for crane offload',
      leadTime: '2 to 6 business days from cleared order',
      clearanceRequired: '60 ft straight-line clearance for 20ft; 100 ft for 40ft tilt-bed',
      sitePrep: 'Level compacted gravel, asphalt, concrete slab, or treated timber skids',
    },
    relatedCategories: [
      '/used-shipping-containers-for-sale/',
      '/new-shipping-containers-for-sale/',
      '/20ft-shipping-containers-for-sale/',
      '/40ft-high-cube-shipping-containers-for-sale/',
    ],
    relatedGuides: [
      '/guides/shipping-container-sizes/',
      '/guides/shipping-container-cost/',
      '/guides/shipping-container-grades-explained/',
    ],
    faqs: [
      {
        question: 'Do you rent or lease shipping containers?',
        answer:
          'No. Steelridge Containers sells new, used, and modified shipping containers outright. Buying eliminates recurring monthly rental fees and gives you full ownership to paint, anchor, or modify your unit.',
      },
      {
        question: 'How fast can you deliver after purchase?',
        answer:
          'Standard tilt-bed deliveries from our 19 regional US depots typically arrive within 2 to 6 business days depending on distance and site access.',
      },
    ],
  },
  {
    path: '/used-shipping-containers-for-sale/',
    group: 'core',
    navLabel: 'Used Containers',
    h1: 'Used Shipping Containers for Sale',
    title: 'Used Shipping Containers for Sale | From $1,850', // 48 chars
    metaDescription:
      'Buy inspected Wind & Watertight and Cargo-Worthy used shipping containers from $1,850. 20ft and 40ft 2nd hand steel units delivered across the US.', // 146 chars
    primaryKeyword: 'used shipping containers for sale',
    keywordVolume: '6,600',
    keywordKd: '17',
    supportingKeywords: [
      'used shipping containers',
      '2nd hand shipping containers for sale',
      'cheap used shipping containers for sale',
      'old shipping containers for sale',
      'where to buy used shipping containers',
      'used shipping containers near me',
    ],
    priceFrom: 1850,
    image: SITE_IMAGES.container40HcUsed,
    imageAlt: 'Used 40ft Corten steel shipping container inspected for Wind & Watertight grade',
    kicker: 'Wind & Watertight · Cargo-Worthy',
    summary:
      'Retired ocean-freight 20ft and 40ft steel containers inspected and certified Wind & Watertight (WWT) or Cargo-Worthy (CW). Built from heavy Corten steel to outlast wooden sheds by decades.',
    overviewParagraphs: [
      'Used shipping containers offer the lowest cost per square foot of lockable, rodent-proof, weather-resistant storage anywhere in the United States. Typically 8 to 14 years old after completing marine cargo service, each unit features surface patina and minor cosmetic dings while maintaining structurally sound corner castings, roof panels, and rubber door gaskets.',
      'Before any 2nd hand shipping container leaves our yard, our technicians close the cargo doors and conduct a complete interior light-leak inspection. Any worn EPDM gaskets or pinholes are sealed and verified dry.',
    ],
    highlights: [
      { label: 'Dark-Room Light Tested', detail: 'Zero daylight penetration through roof, side walls, or door perimeter seals.' },
      { label: 'Cargo-Worthy Option', detail: 'Available with valid CSC structural integrity rating for heavy loads or export.' },
      { label: 'Immediate Yard Stock', detail: 'In stock across Texas, California, Florida, Illinois, and 15 other US hubs.' },
    ],
    specs: [
      {
        model: '20ft Used WWT',
        grade: 'Wind & Watertight',
        extDimensions: `20'0" × 8'0" × 8'6"`,
        intDimensions: `19'4" × 7'8" × 7'10"`,
        doorOpening: `7'8" × 7'5"`,
        cubicVolume: '1,172 cu ft',
        tareWeight: '4,916 lbs',
        maxPayload: '62,280 lbs',
        priceFrom: 1850,
      },
      {
        model: '20ft Used Cargo-Worthy',
        grade: 'Cargo-Worthy (CW)',
        extDimensions: `20'0" × 8'0" × 8'6"`,
        intDimensions: `19'4" × 7'8" × 7'10"`,
        doorOpening: `7'8" × 7'5"`,
        cubicVolume: '1,172 cu ft',
        tareWeight: '4,916 lbs',
        maxPayload: '62,280 lbs',
        priceFrom: 2150,
      },
      {
        model: '40ft Standard Used WWT',
        grade: 'Wind & Watertight',
        extDimensions: `40'0" × 8'0" × 8'6"`,
        intDimensions: `39'5" × 7'8" × 7'10"`,
        doorOpening: `7'8" × 7'5"`,
        cubicVolume: '2,390 cu ft',
        tareWeight: '8,267 lbs',
        maxPayload: '58,930 lbs',
        priceFrom: 2650,
      },
      {
        model: '40ft High Cube Used WWT',
        grade: 'Wind & Watertight',
        extDimensions: `40'0" × 8'0" × 9'6"`,
        intDimensions: `39'5" × 7'8" × 8'10"`,
        doorOpening: `7'8" × 8'5"`,
        cubicVolume: '2,700 cu ft',
        tareWeight: '8,775 lbs',
        maxPayload: '58,425 lbs',
        priceFrom: 2890,
      },
    ],
    deliveryInfo: {
      method: 'Hydraulic tilt-bed trailer slide-off',
      leadTime: '2 to 5 business days',
      clearanceRequired: '14 ft overhead, 12 ft width, 60–100 ft straight pull-out',
      sitePrep: 'Firm, dry surface with 4 corner blocking pads or gravel bed',
    },
    relatedCategories: [
      '/20ft-shipping-containers-for-sale/',
      '/40ft-shipping-containers-for-sale/',
      '/new-shipping-containers-for-sale/',
      '/conex-boxes-for-sale/',
    ],
    relatedGuides: [
      '/guides/buying-a-used-shipping-container-checklist/',
      '/guides/one-trip-vs-used-shipping-containers/',
      '/guides/shipping-container-grades-explained/',
    ],
    faqs: [
      {
        question: 'What is the difference between Wind & Watertight and Cargo-Worthy?',
        answer:
          'Wind & Watertight (WWT) containers are inspected for dry ground storage with intact floors and seals. Cargo-Worthy (CW) units meet stricter ISO structural standards suitable for stacking and ocean export.',
      },
      {
        question: 'Can I inspect or choose my used container before delivery?',
        answer:
          'Yes. Upon quote confirmation, our depot coordinator can provide yard inspection photos or schedule a depot walkthrough at your nearest Steelridge facility.',
      },
    ],
  },
  {
    path: '/new-shipping-containers-for-sale/',
    group: 'core',
    navLabel: 'New / One-Trip Containers',
    h1: 'New Shipping Containers for Sale',
    title: 'New One-Trip Shipping Containers for Sale | From $3,290', // 56 chars
    metaDescription:
      'Shop new one-trip shipping containers with factory lockboxes, waist-high door handles, and pristine marine paint. Direct US delivery from $3,290.', // 143 chars
    primaryKeyword: 'new shipping containers for sale',
    keywordVolume: '880',
    keywordKd: '30',
    supportingKeywords: [
      'one trip shipping containers for sale',
      'cheap shipping containers for sale',
      'brand new cargo containers',
    ],
    priceFrom: 3290,
    image: SITE_IMAGES.container20New,
    imageAlt: 'New one-trip 20ft light gray steel shipping container with open cargo doors',
    kicker: 'One-Trip Factory Grade',
    summary:
      'Factory-new one-trip ISO shipping containers manufactured for a single inbound cargo voyage to the US. Supplied in neutral beige, light gray, or charcoal with integrated lockboxes and easy-open door handles.',
    overviewParagraphs: [
      'One-trip shipping containers are the cleanest units available in the North American market. Built overseas to ISO specifications and shipped across the Pacific with a single dry commercial load, they arrive at our US depots virtually free of dents, rust, or floor wear.',
      'Unlike older used containers, one-trip units include factory-welded steel security lockboxes, high-mounted ergonomic door handles, additional side vents to reduce condensation, and forklift pockets on 20ft models.',
    ],
    highlights: [
      { label: 'Factory Security Lockbox', detail: 'Recessed steel shroud protects heavy-duty puck padlocks from bolt cutters.' },
      { label: 'Architectural Neutral Paint', detail: 'Available in RAL 7035 Light Gray, RAL 1015 Beige, and Dark Charcoal.' },
      { label: 'Home & Modification Ready', detail: 'Zero hazardous cargo history and straight panels ideal for structural framing.' },
    ],
    specs: [
      {
        model: '10ft One-Trip New',
        grade: 'New / One-Trip',
        extDimensions: `10'0" × 8'0" × 8'6"`,
        intDimensions: `9'3" × 7'8" × 7'10"`,
        doorOpening: `7'8" × 7'5"`,
        cubicVolume: '560 cu ft',
        tareWeight: '2,890 lbs',
        maxPayload: '22,050 lbs',
        priceFrom: 2450,
      },
      {
        model: '20ft One-Trip New',
        grade: 'New / One-Trip',
        extDimensions: `20'0" × 8'0" × 8'6"`,
        intDimensions: `19'4" × 7'8" × 7'10"`,
        doorOpening: `7'8" × 7'5"`,
        cubicVolume: '1,172 cu ft',
        tareWeight: '4,850 lbs',
        maxPayload: '62,350 lbs',
        priceFrom: 3290,
      },
      {
        model: '20ft High Cube One-Trip',
        grade: 'New / One-Trip',
        extDimensions: `20'0" × 8'0" × 9'6"`,
        intDimensions: `19'4" × 7'8" × 8'10"`,
        doorOpening: `7'8" × 8'5"`,
        cubicVolume: '1,320 cu ft',
        tareWeight: '5,180 lbs',
        maxPayload: '61,900 lbs',
        priceFrom: 3890,
      },
      {
        model: '40ft High Cube One-Trip',
        grade: 'New / One-Trip',
        extDimensions: `40'0" × 8'0" × 9'6"`,
        intDimensions: `39'5" × 7'8" × 8'10"`,
        doorOpening: `7'8" × 8'5"`,
        cubicVolume: '2,700 cu ft',
        tareWeight: '8,640 lbs',
        maxPayload: '58,560 lbs',
        priceFrom: 4950,
      },
    ],
    deliveryInfo: {
      method: 'Tilt-bed rollback or lowboy step-deck trailer',
      leadTime: '2 to 4 business days',
      clearanceRequired: '60 ft straight-line for 20ft; 100 ft for 40ft units',
      sitePrep: 'Concrete pad, asphalt, or compacted 3/4" crushed stone',
    },
    relatedCategories: [
      '/20ft-shipping-containers-for-sale/',
      '/40ft-high-cube-shipping-containers-for-sale/',
      '/side-door-shipping-containers/',
      '/modified-shipping-containers/',
    ],
    relatedGuides: [
      '/guides/one-trip-vs-used-shipping-containers/',
      '/guides/shipping-container-cost/',
      '/guides/shipping-container-delivery-and-site-prep/',
    ],
    faqs: [
      {
        question: 'Why are new shipping containers called "one-trip" units?',
        answer:
          'Instead of shipping empty steel boxes from Asia at high freight cost, manufacturers load them once with dry retail goods bound for US ports, then sell the nearly brand-new containers domestically.',
      },
    ],
  },
  {
    path: '/20ft-shipping-containers-for-sale/',
    group: 'core',
    navLabel: '20ft Containers',
    h1: 'Used & New 20ft Shipping Containers for Sale',
    title: 'Used 20 Foot Shipping Containers for Sale | From $1,850', // 56 chars
    metaDescription:
      'Shop used 20 foot shipping containers and new one-trip 20ft steel boxes from $1,850. Fits a single parking stall with 1,172 cu ft dry storage.', // 143 chars
    primaryKeyword: 'used 20 foot shipping containers',
    keywordVolume: '3,600',
    keywordKd: '0',
    supportingKeywords: [
      'used 20 foot shipping containers for sale',
      '20ft used shipping containers for sale',
      '20 shipping container for sale',
    ],
    priceFrom: 1850,
    image: SITE_IMAGES.container20New,
    imageAlt: '20ft steel shipping container positioned on flat concrete pad with open doors',
    kicker: '20-Foot Standard & High Cube',
    summary:
      'Our most requested footprint across residential lots, farms, and construction sites. A 20ft shipping container fits comfortably inside a standard driveway or single parking space while holding the contents of a 2–3 bedroom home.',
    overviewParagraphs: [
      'Whether you are looking for an economical used 20 foot shipping container for tool and ATV storage or a one-trip 20ft unit for an off-grid cabin build, the 20-foot standard module offers unmatched maneuverability. Tilt-bed trucks require roughly 60 feet of straight clearance to slide a 20ft unit off safely.',
      'Standard 20ft containers measure 8\'6" tall, while 20ft High Cube models add a full vertical foot (9\'6") for tall racking, HVAC clearance, or workshop conversions.',
    ],
    highlights: [
      { label: 'Compact 160 sq ft Footprint', detail: 'Fits easily on residential driveways, urban infill lots, and tight job sites.' },
      { label: 'Integrated Forklift Pockets', detail: 'Built-in bottom pockets allow easy on-site repositioning when empty.' },
      { label: '2–4 Day Tilt-Bed Dispatch', detail: 'Stocked deeply across every regional depot for immediate delivery.' },
    ],
    specs: [
      {
        model: '20ft Used WWT',
        grade: 'Wind & Watertight',
        extDimensions: `20'0" × 8'0" × 8'6"`,
        intDimensions: `19'4" × 7'8" × 7'10"`,
        doorOpening: `7'8" × 7'5"`,
        cubicVolume: '1,172 cu ft',
        tareWeight: '4,916 lbs',
        maxPayload: '62,280 lbs',
        priceFrom: 1850,
      },
      {
        model: '20ft Used Cargo-Worthy',
        grade: 'Cargo-Worthy',
        extDimensions: `20'0" × 8'0" × 8'6"`,
        intDimensions: `19'4" × 7'8" × 7'10"`,
        doorOpening: `7'8" × 7'5"`,
        cubicVolume: '1,172 cu ft',
        tareWeight: '4,916 lbs',
        maxPayload: '62,280 lbs',
        priceFrom: 2150,
      },
      {
        model: '20ft One-Trip New',
        grade: 'New / One-Trip',
        extDimensions: `20'0" × 8'0" × 8'6"`,
        intDimensions: `19'4" × 7'8" × 7'10"`,
        doorOpening: `7'8" × 7'5"`,
        cubicVolume: '1,172 cu ft',
        tareWeight: '4,850 lbs',
        maxPayload: '62,350 lbs',
        priceFrom: 3290,
      },
      {
        model: '20ft High Cube One-Trip',
        grade: 'New / One-Trip',
        extDimensions: `20'0" × 8'0" × 9'6"`,
        intDimensions: `19'4" × 7'8" × 8'10"`,
        doorOpening: `7'8" × 8'5"`,
        cubicVolume: '1,320 cu ft',
        tareWeight: '5,180 lbs',
        maxPayload: '61,900 lbs',
        priceFrom: 3890,
      },
    ],
    deliveryInfo: {
      method: 'Single-axle or tandem rollback tilt-bed truck',
      leadTime: '2 to 4 business days',
      clearanceRequired: '60 ft straight approach, 12 ft width, 14 ft overhead',
      sitePrep: 'Four level concrete blocks or compacted gravel pad',
    },
    relatedCategories: [
      '/used-shipping-containers-for-sale/',
      '/new-shipping-containers-for-sale/',
      '/10ft-shipping-containers-for-sale/',
      '/40ft-shipping-containers-for-sale/',
    ],
    relatedGuides: [
      '/guides/shipping-container-sizes/',
      '/guides/buying-a-used-shipping-container-checklist/',
      '/guides/shipping-container-delivery-and-site-prep/',
    ],
    faqs: [
      {
        question: 'Can a regular 20ft container hold a car or tractor?',
        answer:
          'Yes. With a 7\'8" interior width and 7\'5" door height, a 20ft container accommodates most sedans, compact tractors, UTVs, and side-by-sides. Pair it with our steel container ramp for easy drive-in loading.',
      },
    ],
  },
  {
    path: '/40ft-shipping-containers-for-sale/',
    group: 'core',
    navLabel: '40ft Containers',
    h1: 'Used & New 40ft Shipping Containers for Sale',
    title: 'Used 40 Foot Shipping Containers for Sale | From $2,650', // 56 chars
    metaDescription:
      'Buy used 40 foot shipping containers and new 40ft units from $2,650. 320 sq ft of lockable Corten steel storage with direct flatbed or tilt delivery.', // 147 chars
    primaryKeyword: 'used 40 foot shipping containers for sale',
    keywordVolume: '320',
    keywordKd: '0',
    supportingKeywords: [
      '40ft used shipping containers for sale',
      '40ft shipping containers for sale near me',
      '40 foot cargo container',
    ],
    priceFrom: 2650,
    image: SITE_IMAGES.container40HcUsed,
    imageAlt: '40ft used steel shipping container ready for commercial dispatch',
    kicker: '40-Foot Standard Height (8\'6")',
    summary:
      'Maximize your storage dollar per square foot. A 40ft standard shipping container provides 320 square feet of secure floor space—twice the capacity of a 20ft unit for roughly 35–40% more investment.',
    overviewParagraphs: [
      'Used 40 foot shipping containers are the backbone of commercial inventory warehousing, agricultural feed storage, and long-span structural container builds. Every unit features 14-gauge corrugated Corten steel walls and heavy-duty double cargo doors on the end frame.',
      'Because 40ft containers require a longer rollback trailer, our dispatch coordinators verify driveway turning radii and 100-foot straight drop clearance prior to scheduling delivery.',
    ],
    highlights: [
      { label: '320 sq ft Interior Floor', detail: 'Lowest cost per square foot in industrial steel storage.' },
      { label: 'Double-Door & Open-End', detail: 'Full 7\'8" wide rear access; double-door tunnel variants also available.' },
      { label: 'Tested Weather Seals', detail: 'Zero-leak guarantee on all WWT and Cargo-Worthy 40ft stock.' },
    ],
    specs: [
      {
        model: '40ft Standard Used (WWT)',
        grade: 'Wind & Watertight',
        extDimensions: `40'0" × 8'0" × 8'6"`,
        intDimensions: `39'5" × 7'8" × 7'10"`,
        doorOpening: `7'8" × 7'5"`,
        cubicVolume: '2,390 cu ft',
        tareWeight: '8,267 lbs',
        maxPayload: '58,930 lbs',
        priceFrom: 2650,
      },
      {
        model: '40ft Standard Cargo-Worthy',
        grade: 'Cargo-Worthy',
        extDimensions: `40'0" × 8'0" × 8'6"`,
        intDimensions: `39'5" × 7'8" × 7'10"`,
        doorOpening: `7'8" × 7'5"`,
        cubicVolume: '2,390 cu ft',
        tareWeight: '8,267 lbs',
        maxPayload: '58,930 lbs',
        priceFrom: 2890,
      },
      {
        model: '40ft Standard One-Trip',
        grade: 'New / One-Trip',
        extDimensions: `40'0" × 8'0" × 8'6"`,
        intDimensions: `39'5" × 7'8" × 7'10"`,
        doorOpening: `7'8" × 7'5"`,
        cubicVolume: '2,390 cu ft',
        tareWeight: '8,150 lbs',
        maxPayload: '59,050 lbs',
        priceFrom: 4650,
      },
    ],
    deliveryInfo: {
      method: '40ft tilt-bed semi-trailer or step-deck flatbed',
      leadTime: '3 to 6 business days',
      clearanceRequired: '100 to 110 ft straight clearance, 14 ft vertical clearance',
      sitePrep: 'Compacted gravel pad or 6 concrete pier pads along the bottom rails',
    },
    relatedCategories: [
      '/40ft-high-cube-shipping-containers-for-sale/',
      '/used-shipping-containers-for-sale/',
      '/20ft-shipping-containers-for-sale/',
      '/shipping-container-ramps/',
    ],
    relatedGuides: [
      '/guides/shipping-container-sizes/',
      '/guides/shipping-container-delivery-and-site-prep/',
      '/guides/shipping-container-cost/',
    ],
    faqs: [
      {
        question: 'How much space does a truck need to unload a 40ft container?',
        answer:
          'A tilt-bed semi carrying a 40ft container needs at least 100 to 110 feet of straight clearance in front of the drop spot, plus wide gate access (minimum 12–14 feet) for turning.',
      },
    ],
  },
  {
    path: '/40ft-high-cube-shipping-containers-for-sale/',
    group: 'core',
    navLabel: '40ft High Cube',
    h1: '40ft High Cube Shipping Containers for Sale',
    title: '40ft High Cube Shipping Container for Sale | From $2,890', // 58 chars
    metaDescription:
      'Shop 40ft High Cube shipping containers (9\'6" tall) in used WWT and new one-trip grades. Ideal for pallet racking, equipment, and container homes.', // 146 chars
    primaryKeyword: '40ft high cube shipping container for sale',
    keywordVolume: '1,900',
    keywordKd: '12',
    supportingKeywords: [
      'high cube shipping container sizes',
      '40ft hc shipping container',
      '9ft 6in tall shipping container',
    ],
    priceFrom: 2890,
    image: SITE_IMAGES.container40HcUsed,
    imageAlt: '40ft High Cube 9ft 6in tall steel shipping container in depot yard',
    kicker: '9\'6" Extra-Height Architectural Grade',
    summary:
      'Standing 9\'6" tall externally—one full foot taller than standard boxes—the 40ft High Cube is the #1 choice for shipping container home builders, multi-tier warehouse racking, and tall machinery storage.',
    overviewParagraphs: [
      'That extra 12 inches of ceiling height transforms usability. For residential and commercial conversions, an 8\'10" raw interior height leaves generous clearance for closed-cell spray foam ceiling insulation, subfloor framing, and recessed LED lighting while still yielding a comfortable 8\'0"+ finished ceiling.',
      'In palletized warehousing, High Cube doors open to 8\'5" tall—accommodating tall forklifts, lifted utility vehicles, and double-stacked standard pallets without scraping the header.',
    ],
    highlights: [
      { label: '8\'10" Interior Ceiling', detail: 'Essential headroom for insulated container homes, offices, and tall racking.' },
      { label: '2,700 Cubic Feet', detail: 'Provides 310 cubic feet more volume than a standard 8\'6" 40ft container.' },
      { label: 'Used & One-Trip Stock', detail: 'Available in affordable WWT used ($2,890+) or crisp one-trip new ($4,950+).' },
    ],
    specs: [
      {
        model: '40ft High Cube Used (WWT)',
        grade: 'Wind & Watertight',
        extDimensions: `40'0" × 8'0" × 9'6"`,
        intDimensions: `39'5" × 7'8" × 8'10"`,
        doorOpening: `7'8" × 8'5"`,
        cubicVolume: '2,700 cu ft',
        tareWeight: '8,775 lbs',
        maxPayload: '58,425 lbs',
        priceFrom: 2890,
      },
      {
        model: '40ft High Cube Cargo-Worthy',
        grade: 'Cargo-Worthy',
        extDimensions: `40'0" × 8'0" × 9'6"`,
        intDimensions: `39'5" × 7'8" × 8'10"`,
        doorOpening: `7'8" × 8'5"`,
        cubicVolume: '2,700 cu ft',
        tareWeight: '8,775 lbs',
        maxPayload: '58,425 lbs',
        priceFrom: 3150,
      },
      {
        model: '40ft High Cube One-Trip New',
        grade: 'New / One-Trip',
        extDimensions: `40'0" × 8'0" × 9'6"`,
        intDimensions: `39'5" × 7'8" × 8'10"`,
        doorOpening: `7'8" × 8'5"`,
        cubicVolume: '2,700 cu ft',
        tareWeight: '8,640 lbs',
        maxPayload: '58,560 lbs',
        priceFrom: 4950,
      },
    ],
    deliveryInfo: {
      method: 'Low-profile step-deck tilt-bed truck (high cube height clearance)',
      leadTime: '2 to 5 business days',
      clearanceRequired: '14\'6" overhead bridge/tree clearance along route and 105 ft straight drop',
      sitePrep: 'Laser-leveled concrete piers or crushed limestone pad',
    },
    relatedCategories: [
      '/40ft-shipping-containers-for-sale/',
      '/shipping-container-homes-for-sale/',
      '/prefab-shipping-container-homes/',
      '/modified-shipping-containers/',
    ],
    relatedGuides: [
      '/guides/shipping-container-sizes/',
      '/guides/how-to-build-a-shipping-container-home/',
      '/guides/shipping-container-home-foundations/',
    ],
    faqs: [
      {
        question: 'Should I choose a 40ft High Cube over a standard 40ft container for a home build?',
        answer:
          'Yes—almost all residential container homes use 40ft High Cube modules because standard 8\'6" boxes feel cramped once floor joists, roof insulation, and drywall are installed.',
      },
    ],
  },
  {
    path: '/10ft-shipping-containers-for-sale/',
    group: 'core',
    navLabel: '10ft Small Containers',
    h1: '10ft & Small Shipping Containers for Sale',
    title: 'Small & 10ft Shipping Containers for Sale | From $2,450', // 55 chars
    metaDescription:
      'Buy compact 10ft and 8x10 small shipping containers for sale. Heavy Corten steel security for tight urban lots, tool cribs, and pump houses.', // 140 chars
    primaryKeyword: 'small shipping containers for sale',
    keywordVolume: '720',
    keywordKd: '16',
    supportingKeywords: [
      '10 shipping containers for sale',
      '8x10 shipping containers for sale',
      'mini steel storage container',
    ],
    priceFrom: 2450,
    image: SITE_IMAGES.container20New,
    imageAlt: 'Compact 10ft one-trip steel shipping container on flat concrete pad',
    kicker: 'Compact 8×10 Urban Footprint',
    summary:
      'Purpose-built 10ft (8×10) steel shipping containers engineered for tight commercial alleyways, HOA-restricted driveways, solar battery enclosures, and jobsite tool cribs where a 20ft unit cannot fit.',
    overviewParagraphs: [
      'True 10ft ISO shipping containers are fabricated in smaller production batches than 20ft boxes and are commonly sold as new one-trip or precision-cut ISO-certified units with welded heavy-gauge end frames.',
      'At 80 square feet of interior floor space, an 8×10 shipping container fits inside half a parking space while maintaining full Corten steel pry-resistance and factory lockboxes.',
    ],
    highlights: [
      { label: '80 sq ft Compact Footprint', detail: 'Deliverable via tight-access rollback trucks or telehandlers.' },
      { label: 'Permit-Friendly Size', detail: 'Falls under accessory shed thresholds (under 120 sq ft) in many US counties.' },
      { label: 'Forklift & Crane Ready', detail: 'Includes 4-way corner castings and reinforced base forklift pockets.' },
    ],
    specs: [
      {
        model: '8ft × 10ft One-Trip New',
        grade: 'New / One-Trip',
        extDimensions: `10'0" × 8'0" × 8'6"`,
        intDimensions: `9'3" × 7'8" × 7'10"`,
        doorOpening: `7'8" × 7'5"`,
        cubicVolume: '560 cu ft',
        tareWeight: '2,890 lbs',
        maxPayload: '22,050 lbs',
        priceFrom: 2450,
      },
      {
        model: '10ft Custom Cut-Down (Refurbished)',
        grade: 'Refurbished WWT',
        extDimensions: `10'0" × 8'0" × 8'6"`,
        intDimensions: `9'3" × 7'8" × 7'10"`,
        doorOpening: `7'8" × 7'5"`,
        cubicVolume: '560 cu ft',
        tareWeight: '2,950 lbs',
        maxPayload: '20,000 lbs',
        priceFrom: 2290,
      },
    ],
    deliveryInfo: {
      method: 'Compact rollback tow/tilt truck',
      leadTime: '3 to 5 business days',
      clearanceRequired: '40 ft straight clearance, 10 ft width',
      sitePrep: 'Concrete slab, pavers, or compacted gravel',
    },
    relatedCategories: [
      '/20ft-shipping-containers-for-sale/',
      '/new-shipping-containers-for-sale/',
      '/conex-boxes-for-sale/',
      '/modified-shipping-containers/',
    ],
    relatedGuides: [
      '/guides/shipping-container-sizes/',
      '/guides/shipping-container-permits-by-state/',
      '/guides/shipping-container-delivery-and-site-prep/',
    ],
    faqs: [
      {
        question: 'Why does a 10ft container sometimes cost close to a 20ft container?',
        answer:
          'Standard ocean freight ships 20ft and 40ft containers in massive volume. 10ft units must either be custom-manufactured in small runs or fabricated from 20ft units with new welded end walls.',
      },
    ],
  },
  {
    path: '/side-door-shipping-containers/',
    group: 'core',
    navLabel: 'Side Door Containers',
    h1: 'Side Door Shipping Containers for Sale',
    title: 'Side Door Shipping Containers for Sale | From $5,400', // 54 chars
    metaDescription:
      'Buy 20ft and 40ft open-side shipping containers with full-length bi-fold side doors for pallet forklift access and pop-up retail conversions.', // 142 chars
    primaryKeyword: 'side door shipping containers for sale',
    keywordVolume: '170',
    keywordKd: '0',
    supportingKeywords: [
      'open side shipping container',
      'full side access container',
      'bi-fold side door conex',
    ],
    priceFrom: 5400,
    image: SITE_IMAGES.modifiedWorkshop,
    imageAlt: 'Side-opening shipping container configured for wide forklift and workshop access',
    kicker: 'Full-Length Bi-Fold Access',
    summary:
      'Open-side shipping containers feature full-length folding steel doors along the entire 20ft or 40ft sidewall in addition to standard end cargo doors—eliminating the need to unload front items to reach the back.',
    overviewParagraphs: [
      'Built exclusively as new one-trip factory units with reinforced top side rails, side door shipping containers open completely along one 20ft or 40ft side. Forklifts can load wide lumber packs, generators, and palletized stock directly from the side.',
      'They are also heavily favored for mobile retail kiosks, concession stands, and event stages where a wide open facade is required.',
    ],
    highlights: [
      { label: 'Dual Entry Points', detail: 'Full 19\' or 39\' bi-fold side doors plus standard 8ft end cargo doors.' },
      { label: 'Reinforced Top Header', detail: 'Heavy I-beam top rail carries full structural roof load without center posts.' },
      { label: 'One-Trip Factory Condition', detail: 'Includes lockboxes, marine-grade flooring, and multi-cam weather seals.' },
    ],
    specs: [
      {
        model: '20ft Full Open-Side One-Trip',
        grade: 'New / One-Trip',
        extDimensions: `20'0" × 8'0" × 8'6"`,
        intDimensions: `19'3" × 7'6" × 7'8"`,
        doorOpening: `18'8" × 7'1" (Side)`,
        cubicVolume: '1,105 cu ft',
        tareWeight: '6,850 lbs',
        maxPayload: '60,350 lbs',
        priceFrom: 5400,
      },
      {
        model: '40ft High Cube Open-Side One-Trip',
        grade: 'New / One-Trip',
        extDimensions: `40'0" × 8'0" × 9'6"`,
        intDimensions: `39'4" × 7'6" × 8'8"`,
        doorOpening: `38'4" × 8'1" (Side)`,
        cubicVolume: '2,550 cu ft',
        tareWeight: '11,900 lbs',
        maxPayload: '55,300 lbs',
        priceFrom: 9600,
      },
    ],
    deliveryInfo: {
      method: 'Tilt-bed or crane-assisted flatbed',
      leadTime: '4 to 7 business days',
      clearanceRequired: '60–105 ft straight clearance plus side swing room',
      sitePrep: 'Strict level pad required so multi-leaf side doors align smoothly',
    },
    relatedCategories: [
      '/new-shipping-containers-for-sale/',
      '/modified-shipping-containers/',
      '/20ft-shipping-containers-for-sale/',
      '/shipping-container-ramps/',
    ],
    relatedGuides: [
      '/guides/shipping-container-sizes/',
      '/guides/shipping-container-delivery-and-site-prep/',
    ],
    faqs: [
      {
        question: 'Do side-door shipping containers leak in heavy rain?',
        answer:
          'No. Factory open-side containers use heavy compression EPDM gaskets around every folding leaf and top drip gutters to keep water completely out.',
      },
    ],
  },
  {
    path: '/conex-boxes-for-sale/',
    group: 'core',
    navLabel: 'Conex Boxes',
    h1: 'Conex Shipping Containers for Sale',
    title: 'Conex Boxes & Shipping Containers for Sale | From $1,950', // 58 chars
    metaDescription:
      'Buy heavy-duty steel Conex boxes for sale in 10ft, 20ft, and 40ft lengths. Jobsite tool security and weatherproof ground storage shipped US-wide.', // 144 chars
    primaryKeyword: 'conex shipping containers for sale',
    keywordVolume: '140',
    keywordKd: '28',
    supportingKeywords: [
      'conex box for sale',
      'steel conex storage boxes',
      'jobsite conex container',
    ],
    priceFrom: 1950,
    image: SITE_IMAGES.heroYard,
    imageAlt: 'Commercial steel Conex boxes lined up for direct jobsite delivery',
    kicker: 'Commercial Jobsite & Industrial Storage',
    summary:
      'Originating from US military Container Express (CONEX) steel boxes, modern ISO Conex containers give general contractors, utilities, and industrial plants an impenetrable steel vault directly at ground level.',
    overviewParagraphs: [
      'Whether your crew calls them Conex boxes, sea cans, or milvans, our commercial-grade steel containers resist break-ins, jobsite impacts, and severe weather far better than light-gauge trailers.',
      'Available in used WWT and factory one-trip grades, every Conex box can be equipped with optional factory lockboxes, heavy-duty shelving brackets, and turbine roof vents before leaving our yard.',
    ],
    highlights: [
      { label: '14-Gauge Corten Security', detail: 'Solid welded steel walls with tamper-resistant locking bars.' },
      { label: 'Jobsite Fleet Ready', detail: 'Multi-unit volume discounts for commercial contractors and infrastructure bids.' },
      { label: 'Zero Monthly Rental Fees', detail: 'Own your jobsite Conex box outright and move it project to project.' },
    ],
    specs: [
      {
        model: '20ft Jobsite Conex (Used WWT)',
        grade: 'Wind & Watertight',
        extDimensions: `20'0" × 8'0" × 8'6"`,
        intDimensions: `19'4" × 7'8" × 7'10"`,
        doorOpening: `7'8" × 7'5"`,
        cubicVolume: '1,172 cu ft',
        tareWeight: '4,916 lbs',
        maxPayload: '62,280 lbs',
        priceFrom: 1950,
      },
      {
        model: '20ft Jobsite Conex (One-Trip + Lockbox)',
        grade: 'New / One-Trip',
        extDimensions: `20'0" × 8'0" × 8'6"`,
        intDimensions: `19'4" × 7'8" × 7'10"`,
        doorOpening: `7'8" × 7'5"`,
        cubicVolume: '1,172 cu ft',
        tareWeight: '4,850 lbs',
        maxPayload: '62,350 lbs',
        priceFrom: 3350,
      },
      {
        model: '40ft Jobsite Conex (Used WWT)',
        grade: 'Wind & Watertight',
        extDimensions: `40'0" × 8'0" × 8'6"`,
        intDimensions: `39'5" × 7'8" × 7'10"`,
        doorOpening: `7'8" × 7'5"`,
        cubicVolume: '2,390 cu ft',
        tareWeight: '8,267 lbs',
        maxPayload: '58,930 lbs',
        priceFrom: 2750,
      },
    ],
    deliveryInfo: {
      method: 'Direct jobsite tilt-bed offload',
      leadTime: '2 to 4 business days',
      clearanceRequired: '60 ft (20ft) or 100 ft (40ft) unobstructed approach',
      sitePrep: 'Compacted gravel pad or firm jobsite grade',
    },
    relatedCategories: [
      '/used-shipping-containers-for-sale/',
      '/20ft-shipping-containers-for-sale/',
      '/10ft-shipping-containers-for-sale/',
      '/shipping-container-ramps/',
    ],
    relatedGuides: [
      '/guides/buying-a-used-shipping-container-checklist/',
      '/guides/shipping-container-cost/',
    ],
    faqs: [
      {
        question: 'Can you add a puck lockbox to a used Conex box?',
        answer:
          'Yes. Our fabrication bay can weld a heavy steel shrouded lockbox onto any used Conex container prior to dispatch.',
      },
    ],
  },
  {
    path: '/wooden-shipping-containers-for-sale/',
    group: 'core',
    navLabel: 'Wooden Containers',
    h1: 'Wooden Shipping Containers for Sale',
    title: 'Wooden Shipping Containers & ISPM-15 Crates | Steelridge', // 58 chars
    metaDescription:
      'Buy ISPM-15 heat-treated wooden shipping containers and export timber crates for palletized freight, machinery, and indoor warehouse storage.', // 142 chars
    primaryKeyword: 'wooden shipping containers for sale',
    keywordVolume: '260',
    keywordKd: '0',
    supportingKeywords: [
      'wood shipping crates for sale',
      'ispm 15 wooden cargo containers',
      'collapsible wooden pallet boxes',
    ],
    priceFrom: 1250,
    image: SITE_IMAGES.container20New,
    imageAlt: 'Commercial freight container interior with treated hardwood and plywood decking',
    kicker: 'ISPM-15 Export Timber & Hybrid Units',
    summary:
      'Heavy-duty ISPM-15 certified wooden shipping containers and timber-lined export crates built for indoor warehouse racking, delicate machinery crating, and international freight forwarding.',
    overviewParagraphs: [
      'While outdoor permanent storage demands welded Corten steel, many indoor manufacturing facilities and freight exporters prefer lighter-weight wooden shipping containers or steel-framed collapsible timber crates.',
      'All wooden export containers meet IPPC ISPM-15 heat-treatment standards for international customs compliance and are available in standard 8ft, 10ft, and custom machinery dimensions.',
    ],
    highlights: [
      { label: 'ISPM-15 Heat Treated', detail: 'Stamped and compliant for international ocean and air export customs.' },
      { label: 'Reduced Tare Weight', detail: 'Up to 60% lighter than all-steel units for indoor freight and warehouse stacking.' },
      { label: 'Custom Timber Framing', detail: 'Built with structural plywood walls and 4-way forklift skid bases.' },
    ],
    specs: [
      {
        model: '8ft × 8ft × 8ft Export Timber Container',
        grade: 'ISPM-15 New',
        extDimensions: `8'0" × 8'0" × 8'0"`,
        intDimensions: `7'8" × 7'8" × 7'6"`,
        doorOpening: `7'6" × 7'4"`,
        cubicVolume: '440 cu ft',
        tareWeight: '1,180 lbs',
        maxPayload: '12,000 lbs',
        priceFrom: 1250,
      },
      {
        model: '10ft Heavy Timber Freight Box',
        grade: 'ISPM-15 New',
        extDimensions: `10'0" × 8'0" × 8'0"`,
        intDimensions: `9'8" × 7'8" × 7'6"`,
        doorOpening: `7'6" × 7'4"`,
        cubicVolume: '555 cu ft',
        tareWeight: '1,420 lbs',
        maxPayload: '15,000 lbs',
        priceFrom: 1590,
      },
    ],
    deliveryInfo: {
      method: 'LTL / Flatbed palletized freight with liftgate or forklift offload',
      leadTime: '4 to 7 business days',
      clearanceRequired: 'Standard commercial dock or residential forklift/pallet jack access',
      sitePrep: 'Covered indoor floor or weather-protected pad',
    },
    relatedCategories: [
      '/10ft-shipping-containers-for-sale/',
      '/shipping-containers-for-sale/',
      '/conex-boxes-for-sale/',
    ],
    relatedGuides: ['/guides/shipping-container-sizes/', '/guides/shipping-container-cost/'],
    faqs: [
      {
        question: 'Are wooden shipping containers weatherproof for outdoor storage?',
        answer:
          'Wooden shipping containers are engineered for indoor warehousing and containerized export transit. For long-term uncovered outdoor storage, choose a Corten steel container.',
      },
    ],
  },

  // 3. MODIFIED CONTAINERS & HOMES
  {
    path: '/modified-shipping-containers/',
    group: 'modified',
    isHub: true,
    navLabel: 'Modified Containers',
    h1: 'Modified Shipping Containers',
    title: 'Modified Shipping Containers | Offices, Barns & Workshops', // 59 chars
    metaDescription:
      'Custom modified shipping containers built to order: insulated mobile offices, workshops, roll-up doors, electrical packages, barns, and ramps.', // 143 chars
    primaryKeyword: 'modified shipping containers',
    keywordVolume: '1,600',
    keywordKd: '19',
    supportingKeywords: [
      'container offices',
      'shipping container workshops',
      'storage container conversions',
    ],
    priceFrom: 7800,
    image: SITE_IMAGES.modifiedWorkshop,
    imageAlt: 'Custom modified charcoal shipping container workshop with roll-up door and windows',
    kicker: 'Custom Fabrication & Turnkey Conversions',
    summary:
      'Turnkey modified shipping containers fabricated in our US welding shops from one-trip ISO steel cores. Configured with steel man-doors, insulated framing, NEC-compliant electrical packages, mini-split HVAC, and roll-up garage doors.',
    overviewParagraphs: [
      'Every cutout made in a corrugated Corten wall compromises structural rigidity unless properly boxed with heavy structural steel tubing. Our fabrication teams weld continuous structural headers around every window, roll-up door, and HVAC sleeve.',
      'From 20ft jobsite field offices and solar equipment enclosures to multi-container agricultural barns and finished residential homes, we build to your exact blueprint before shipping nationwide.',
    ],
    highlights: [
      { label: 'Framed Steel Cutouts', detail: 'Every door and window frame is boxed in structural steel tubing and seam-welded.' },
      { label: 'Closed-Cell Spray Foam', detail: 'R-14 to R-21 closed-cell polyurethane insulation eliminates interior condensation.' },
      { label: '200A / 100A Electrical', detail: 'Pre-wired EMT conduit, GFCI outlets, and high-bay LED fixtures ready for hookup.' },
    ],
    specs: [
      {
        model: '20ft Insulated Mobile Office',
        grade: 'One-Trip Modified',
        extDimensions: `20'0" × 8'0" × 8'6"`,
        intDimensions: `19'0" × 7'2" × 7'5"`,
        doorOpening: `36" Steel Man Door`,
        cubicVolume: '1,010 cu ft',
        tareWeight: '5,900 lbs',
        maxPayload: '18,000 lbs',
        priceFrom: 11400,
      },
      {
        model: '20ft Roll-Up Door Workshop',
        grade: 'One-Trip Modified',
        extDimensions: `20'0" × 8'0" × 8'6"`,
        intDimensions: `19'3" × 7'8" × 7'10"`,
        doorOpening: `8'0" × 7'0" Roll-Up`,
        cubicVolume: '1,160 cu ft',
        tareWeight: '5,250 lbs',
        maxPayload: '40,000 lbs',
        priceFrom: 7800,
      },
      {
        model: '40ft HC Split Office / Storage',
        grade: 'One-Trip Modified',
        extDimensions: `40'0" × 8'0" × 9'6"`,
        intDimensions: `38'10" × 7'2" × 8'2"`,
        doorOpening: `36" Man + Cargo End`,
        cubicVolume: '2,280 cu ft',
        tareWeight: '10,400 lbs',
        maxPayload: '35,000 lbs',
        priceFrom: 18900,
      },
    ],
    deliveryInfo: {
      method: 'Tilt-bed rollback or air-ride flatbed for finished builds',
      leadTime: '3 to 6 weeks fabrication + 3–5 days transit',
      clearanceRequired: '60–105 ft straight line clearance',
      sitePrep: 'Level concrete slab or engineered corner piers',
    },
    relatedCategories: [
      '/shipping-container-homes-for-sale/',
      '/shipping-container-barns/',
      '/shipping-container-ramps/',
      '/side-door-shipping-containers/',
    ],
    relatedGuides: [
      '/guides/shipping-container-cost/',
      '/guides/shipping-container-permits-by-state/',
    ],
    faqs: [
      {
        question: 'Can I customize door placement, windows, and paint color?',
        answer:
          'Yes. During quoting, you specify exact wall locations for man doors, roll-up doors, low-E windows, electrical panels, and Sherwin-Williams DTM exterior paint colors.',
      },
    ],
  },
  {
    path: '/shipping-container-homes-for-sale/',
    group: 'modified',
    navLabel: 'Container Homes for Sale',
    h1: 'Shipping Container Homes for Sale',
    title: 'Shipping Container Homes for Sale | Turnkey From $48,500', // 59 chars
    metaDescription:
      'Shop turnkey shipping container homes for sale from $48,500. Studio ADUs, 1-bedroom cabins, and multi-module family homes delivered US-wide.', // 140 chars
    primaryKeyword: 'shipping container homes for sale',
    keywordVolume: '8,100',
    keywordKd: '14',
    supportingKeywords: [
      'container homes for sale near me',
      'tiny shipping container homes for sale',
      'turnkey steel container cabins',
    ],
    priceFrom: 48500,
    image: SITE_IMAGES.heroContainerHome,
    imageAlt: 'Turnkey modern steel shipping container home on concrete piers at dusk',
    kicker: 'Turnkey Residential Modules',
    summary:
      'Code-engineered residential shipping container homes built in our climate-controlled US facility from brand-new 20ft and 40ft High Cube Corten modules. Delivered 95% complete and ready for foundation anchoring and utility tie-in.',
    overviewParagraphs: [
      'Every Steelridge container home is built on virgin one-trip High Cube steel modules—never retired chemical or unknown-cargo used boxes. Walls are framed with galvanized steel studs, insulated with closed-cell spray foam, and finished with low-E dual-pane tempered glass, quartz counters, and high-efficiency mini-split HVAC.',
      'We supply stamped structural and MEP plan sets for local county building permit review prior to fabrication.',
    ],
    highlights: [
      { label: 'IRC / IBC Engineered Plans', detail: 'Stamped structural calculations and MEP drawings included for permit sign-off.' },
      { label: 'High-R Closed-Cell Foam', detail: 'Seamless vapor-barrier insulation rated for extreme Texas heat and Northern winters.' },
      { label: 'Delivered 95% Finished', detail: 'Kitchen cabinetry, bathroom tile, lighting, and plumbing arrive pre-installed.' },
    ],
    specs: [
      {
        model: 'Ridge 160 Studio ADU (1 × 20ft HC)',
        grade: 'Turnkey Residential',
        extDimensions: `20'0" × 8'0" × 9'6"`,
        intDimensions: `160 sq ft Living`,
        doorOpening: `72" Glass Slider`,
        cubicVolume: 'Studio / 1 Bath',
        tareWeight: '9,800 lbs',
        maxPayload: 'Turnkey Unit',
        priceFrom: 48500,
      },
      {
        model: 'Canyon 320 One-Bed (1 × 40ft HC)',
        grade: 'Turnkey Residential',
        extDimensions: `40'0" × 8'0" × 9'6"`,
        intDimensions: `320 sq ft Living`,
        doorOpening: `96" Sliding Patio`,
        cubicVolume: '1 Bed / 1 Bath',
        tareWeight: '15,400 lbs',
        maxPayload: 'Turnkey Unit',
        priceFrom: 72900,
      },
      {
        model: 'Timberline 640 Two-Bed (2 × 40ft HC)',
        grade: 'Turnkey Residential',
        extDimensions: `40'0" × 16'0" × 9'6"`,
        intDimensions: `640 sq ft Living`,
        doorOpening: `Double Glass Entry`,
        cubicVolume: '2 Bed / 1.5 Bath',
        tareWeight: '29,600 lbs',
        maxPayload: 'Turnkey Dual-Module',
        priceFrom: 112000,
      },
      {
        model: 'Summit 1280 Three-Bed (4 × 40ft HC)',
        grade: 'Turnkey Residential',
        extDimensions: `40'0" × 32'0" × 9'6"`,
        intDimensions: `1,280 sq ft Living`,
        doorOpening: `Architectural Glass`,
        cubicVolume: '3 Bed / 2 Bath',
        tareWeight: '54,000 lbs',
        maxPayload: 'Turnkey 4-Module',
        priceFrom: 138000,
      },
    ],
    deliveryInfo: {
      method: 'Dedicated step-deck transport + local crane set onto piers',
      leadTime: '8 to 14 weeks fabrication + scheduled crane set',
      clearanceRequired: 'Crane pad & wide-load highway access verified during site audit',
      sitePrep: 'Engineered reinforced concrete piers or perimeter stem wall',
    },
    relatedCategories: [
      '/prefab-shipping-container-homes/',
      '/3-bedroom-shipping-container-homes-for-sale/',
      '/shipping-container-homes/',
      '/40ft-high-cube-shipping-containers-for-sale/',
    ],
    relatedGuides: [
      '/guides/how-much-do-shipping-container-homes-cost/',
      '/guides/shipping-container-home-foundations/',
      '/guides/shipping-container-permits-by-state/',
    ],
    faqs: [
      {
        question: 'Can a shipping container home qualify for traditional financing?',
        answer:
          'When permanently anchored to an engineered concrete foundation and permitted under local IRC residential codes, our homes qualify for construction-to-permanent and chattel lending programs.',
      },
    ],
  },
  {
    path: '/prefab-shipping-container-homes/',
    group: 'modified',
    navLabel: 'Prefab Container Homes',
    h1: 'Prefab & Modular Shipping Container Homes',
    title: 'Prefab Shipping Container Homes | Modular Builds From $54k', // 59 chars
    metaDescription:
      'Prebuilt prefab shipping container homes engineered in a controlled US factory. Pre-plumbed, wired, insulated modular homes shipped ready to set.', // 146 chars
    primaryKeyword: 'prefab shipping container homes',
    keywordVolume: '1,900',
    keywordKd: '19',
    supportingKeywords: [
      'prefabricated container homes',
      'modular shipping container homes',
      'prefab container homes for sale',
      'premade shipping container homes',
      'prebuilt shipping container homes',
    ],
    priceFrom: 54000,
    image: SITE_IMAGES.heroContainerHome,
    imageAlt: 'Prefabricated modular shipping container home erected on piers with timber deck',
    kicker: 'Factory-Built Modular Construction',
    summary:
      'Avoid multi-month rural contractor delays. Our prebuilt modular container homes undergo structural welding, rough-in MEP inspections, insulation, and interior finishes indoors before shipping directly to your prepared piers.',
    overviewParagraphs: [
      'Traditional stick-built construction on remote acreage faces unpredictable labor costs and weather exposure. Prefabricated shipping container homes compress on-site assembly down to 1–3 days of crane placement and utility tie-in.',
      'Each prebuilt module arrives pre-wired to a 200-amp main panel, pre-plumbed with PEX-A manifold lines, and tested for air-tight thermal performance.',
    ],
    highlights: [
      { label: 'Fixed Factory Pricing', detail: 'Zero surprise subcontractor change orders once engineering specs are locked.' },
      { label: '2-Day Crane Set', detail: 'Multi-module homes bolt and weld at engineered marriage lines in 48 hours.' },
      { label: 'Off-Grid Ready Option', detail: 'Pre-wired for roof-mounted solar arrays, LiFePO4 battery banks, and mini-splits.' },
    ],
    specs: [
      {
        model: 'Prefab 20ft Guest Suite',
        grade: 'Modular Factory Built',
        extDimensions: `20'0" × 8'0" × 9'6"`,
        intDimensions: `160 sq ft Finished`,
        doorOpening: `60" Insulated Entry`,
        cubicVolume: 'Studio + Bath',
        tareWeight: '10,100 lbs',
        maxPayload: 'Single Crane Pick',
        priceFrom: 54000,
      },
      {
        model: 'Prefab 40ft Single-Module Cabin',
        grade: 'Modular Factory Built',
        extDimensions: `40'0" × 8'0" × 9'6"`,
        intDimensions: `320 sq ft Finished`,
        doorOpening: `96" Multi-Slide`,
        cubicVolume: '1 Bed / 1 Bath',
        tareWeight: '15,800 lbs',
        maxPayload: 'Single Crane Pick',
        priceFrom: 74900,
      },
      {
        model: 'Prefab Dual-40ft Courtyard',
        grade: 'Modular Factory Built',
        extDimensions: `40'0" × 16'0" × 9'6"`,
        intDimensions: `640 sq ft Finished`,
        doorOpening: `Custom Glazing`,
        cubicVolume: '2 Bed / 2 Bath',
        tareWeight: '30,500 lbs',
        maxPayload: 'Dual Crane Pick',
        priceFrom: 116500,
      },
    ],
    deliveryInfo: {
      method: 'Specialized lowboy transport with scheduled local crane rig',
      leadTime: '8 to 12 weeks factory build',
      clearanceRequired: 'Verified truck route + 45-ton crane outrigger pad',
      sitePrep: 'Site-ready concrete piers with embedded steel weld plates',
    },
    relatedCategories: [
      '/shipping-container-homes-for-sale/',
      '/3-bedroom-shipping-container-homes-for-sale/',
      '/shipping-container-homes/',
      '/modified-shipping-containers/',
    ],
    relatedGuides: [
      '/guides/how-much-do-shipping-container-homes-cost/',
      '/guides/shipping-container-home-plans/',
      '/guides/pros-and-cons-of-shipping-container-homes/',
    ],
    faqs: [
      {
        question: 'What is included with a prefab shipping container home?',
        answer:
          'Every prefab model includes finished hardwood-look LVP flooring, drywall or shiplap walls, tiled shower, kitchen cabinets with quartz counters, appliances, mini-split HVAC, and water heater.',
      },
    ],
  },
  {
    path: '/shipping-container-homes/',
    group: 'modified',
    isGuideHub: true,
    navLabel: 'Container Homes Guide Hub',
    h1: 'Shipping Container Homes',
    title: 'Shipping Container Homes: Architecture, Costs & Guides', // 55 chars
    metaDescription:
      'Complete architectural resource for shipping container homes: engineering plans, foundation piers, insulation R-values, costs, and turnkey models.', // 143 chars
    primaryKeyword: 'shipping container homes',
    keywordVolume: '40,500',
    keywordKd: '17',
    supportingKeywords: [
      'container home architecture',
      'cargo container home guide',
      'steel modular residences',
    ],
    priceFrom: null,
    image: SITE_IMAGES.heroContainerHome,
    imageAlt: 'Two-story architectural shipping container residence with cantilevered deck',
    kicker: 'Architecture & Engineering Resource Hub',
    summary:
      'Everything homeowners, owner-builders, and architects need to evaluate, permit, fund, and construct steel shipping container residences across the United States.',
    overviewParagraphs: [
      'Shipping container homes pair industrial Corten steel structural frames with modern prefabricated comfort. Because ISO corners carry immense vertical point loads—up to 190,000 pounds per post when stacked—containers allow dramatic cantilevers and fast erection on remote pier foundations.',
      'Use this hub to explore our architectural planning guides, compare DIY container builds against factory-finished prefab homes, and review regional permitting realities before purchasing steel modules.',
    ],
    highlights: [
      { label: 'Structural Engineering First', detail: 'Learn how welded steel frames transfer roof and snow loads to concrete piers.' },
      { label: 'Honest Cost Breakdowns', detail: 'Compare bare container pricing against site work, crane sets, and MEP finish costs.' },
      { label: 'Turnkey Models Available', detail: 'Ready to buy finished? Browse our turnkey and 3-bedroom homes for sale.' },
    ],
    specs: [
      {
        model: 'Single-Module 20ft HC Shell',
        grade: 'DIY Structural Shell',
        extDimensions: `20'0" × 8'0" × 9'6"`,
        intDimensions: `160 sq ft Shell`,
        doorOpening: `Custom Cutouts`,
        cubicVolume: 'ADU / Cabin Base',
        tareWeight: '5,180 lbs',
        maxPayload: 'Bare One-Trip',
        priceFrom: 3890,
      },
      {
        model: 'Single-Module 40ft HC Shell',
        grade: 'DIY Structural Shell',
        extDimensions: `40'0" × 8'0" × 9'6"`,
        intDimensions: `320 sq ft Shell`,
        doorOpening: `Custom Cutouts`,
        cubicVolume: '1-Bed Cabin Base',
        tareWeight: '8,640 lbs',
        maxPayload: 'Bare One-Trip',
        priceFrom: 4950,
      },
      {
        model: 'Turnkey Container Homes',
        grade: 'Finished Residences',
        extDimensions: `20' to 40' Multi-Box`,
        intDimensions: `160–1,600+ sq ft`,
        doorOpening: `Architectural Glass`,
        cubicVolume: 'Studio to 3-Bed',
        tareWeight: '9,800–54,000 lbs',
        maxPayload: 'Delivered Finished',
        priceFrom: 48500,
      },
    ],
    deliveryInfo: {
      method: 'DIY shells via tilt-bed; turnkey residences via flatbed + crane',
      leadTime: '3 days (bare shells) to 12 weeks (finished homes)',
      clearanceRequired: 'Verified site grade and crane placement access',
      sitePrep: 'Geotech soil test + engineered concrete piers or slab',
    },
    relatedCategories: [
      '/shipping-container-homes-for-sale/',
      '/prefab-shipping-container-homes/',
      '/3-bedroom-shipping-container-homes-for-sale/',
      '/40ft-high-cube-shipping-containers-for-sale/',
    ],
    relatedGuides: [
      '/guides/how-much-do-shipping-container-homes-cost/',
      '/guides/shipping-container-home-plans/',
      '/guides/how-to-build-a-shipping-container-home/',
      '/guides/shipping-container-home-foundations/',
      '/guides/shipping-container-home-ideas/',
      '/guides/pros-and-cons-of-shipping-container-homes/',
    ],
    faqs: [
      {
        question: 'Is this page for buying bare containers or finished homes?',
        answer:
          'This hub organizes our full architectural guides and planning resources. To view finished residences with itemized pricing, visit Shipping Container Homes for Sale or Prefab Container Homes.',
      },
    ],
  },
  {
    path: '/3-bedroom-shipping-container-homes-for-sale/',
    group: 'modified',
    navLabel: '3-Bedroom Container Homes',
    h1: '3-Bedroom Shipping Container Homes for Sale',
    title: '3 Bedroom Shipping Container Homes for Sale | From $138k', // 58 chars
    metaDescription:
      'Shop spacious 3-bedroom shipping container homes for sale from $138,000. Multi-module 1,280 to 1,600 sq ft layouts with 2 full baths and decks.', // 143 chars
    primaryKeyword: '3 bedroom shipping container homes for sale',
    keywordVolume: '1,000',
    keywordKd: '0',
    supportingKeywords: [
      '3 bed container home floor plan',
      'multi container family home',
      '40ft 3 bedroom container house',
    ],
    priceFrom: 138000,
    image: SITE_IMAGES.heroContainerHome,
    imageAlt: 'Multi-module 3 bedroom shipping container family residence with deck and glass walls',
    kicker: 'Full-Size Family Residences (1,280–1,600 sq ft)',
    summary:
      'Engineered from three or four joined 40ft High Cube Corten modules, our 3-bedroom shipping container homes deliver genuine family livability—featuring open-span living rooms, primary suites, walk-in closets, and two full baths.',
    overviewParagraphs: [
      'Single-container homes work well for studios and weekend retreats, but full-time family living benefits from joining multiple 40ft High Cube modules side-by-side or in an L-shaped courtyard layout. Removing interior sidewalls with welded I-beam headers opens up 16-foot-wide living and kitchen spans.',
      'Available in single-story Ranch (3 × 40ft HC) and two-story Cantilever (4 × 40ft HC) configurations, each 3-bedroom home includes stamped engineering for wind and snow loads nationwide.',
    ],
    highlights: [
      { label: '1,280–1,600 sq ft Plans', detail: 'Split-bedroom layouts with private primary suite and laundry mudroom.' },
      { label: 'Wide-Span Steel Headers', detail: 'Seamless 16ft+ kitchen and living areas without narrow corridor feel.' },
      { label: 'Multi-Zone Mini-Split HVAC', detail: 'Individual room climate control across all three bedrooms and great room.' },
    ],
    specs: [
      {
        model: 'Brazos 1280 (3-Bed / 2-Bath Ranch)',
        grade: '3 × 40ft High Cube',
        extDimensions: `40'0" × 24'0" × 9'6"`,
        intDimensions: `960–1,280 sq ft`,
        doorOpening: `12ft Glass Stacking`,
        cubicVolume: '3 Bed / 2 Bath',
        tareWeight: '41,200 lbs',
        maxPayload: '3-Module Set',
        priceFrom: 138000,
      },
      {
        model: 'Summit 1600 (3-Bed / 2.5-Bath Two-Story)',
        grade: '4 × 40ft High Cube',
        extDimensions: `40'0" × 32'0" × 19'0"`,
        intDimensions: `1,600 sq ft + Deck`,
        doorOpening: `Architectural Glazing`,
        cubicVolume: '3 Bed / 2.5 Bath',
        tareWeight: '54,000 lbs',
        maxPayload: '4-Module Set',
        priceFrom: 179500,
      },
    ],
    deliveryInfo: {
      method: 'Multi-truck convoy + 2-day certified crane & marriage-line welding crew',
      leadTime: '10 to 16 weeks fabrication',
      clearanceRequired: 'Verified highway wide-load route + crane pad',
      sitePrep: 'Engineered reinforced concrete piers or slab-on-grade stem wall',
    },
    relatedCategories: [
      '/shipping-container-homes-for-sale/',
      '/prefab-shipping-container-homes/',
      '/shipping-container-homes/',
    ],
    relatedGuides: [
      '/guides/shipping-container-home-plans/',
      '/guides/how-much-do-shipping-container-homes-cost/',
      '/guides/shipping-container-home-foundations/',
    ],
    faqs: [
      {
        question: 'Does a 3-bedroom shipping container home feel narrow inside?',
        answer:
          'Not when built with side-by-side modules. Removing the shared interior steel walls creates a 16-foot or 24-foot open great room indistinguishable from modern steel-frame architecture.',
      },
    ],
  },
  {
    path: '/shipping-container-barns/',
    group: 'modified',
    navLabel: 'Container Barns',
    h1: 'Shipping Container Barns for Sale',
    title: 'Shipping Container Barns & Ag Shelters | From $16,900', // 56 chars
    metaDescription:
      'Shop steel shipping container barns for tractors, livestock feed, hay, and workshops. Dual-container truss canopy kits and welded steel shops.', // 141 chars
    primaryKeyword: 'shipping container barn',
    keywordVolume: '1,600',
    keywordKd: '0',
    supportingKeywords: [
      'shipping container barn kits',
      'shipping container truss shelter',
      'farm equipment container barn',
    ],
    priceFrom: 16900,
    image: SITE_IMAGES.modifiedWorkshop,
    imageAlt: 'Steel shipping container barn with covered equipment bay and roll-up shop doors',
    kicker: 'Agricultural & Ranch Outbuildings',
    summary:
      'Combine two lockable steel shipping containers with a heavy-gauge arched or gable galvanized steel roof truss to create an instant, hurricane-rated ranch barn, tractor bay, and secure tack room.',
    overviewParagraphs: [
      'Traditional pole barns require extensive perimeter excavation and leave tools vulnerable to theft and rodents. A shipping container barn anchors two 20ft or 40ft containers parallel to one another (typically 20 to 30 feet apart) and spans the center bay with an engineered steel roof system.',
      'You gain two completely fire-resistant, rodent-proof enclosed workshops or tack rooms flanking a shaded 800 to 1,200 square foot covered equipment bay for tractors, RVs, and hay.',
    ],
    highlights: [
      { label: 'No Concrete Slab Required', detail: 'Container bases act as heavy structural ballasts when anchored on gravel pads.' },
      { label: 'Rodent-Proof Tack & Feed', detail: 'Keep saddles, grain, welders, and power tools locked inside solid Corten steel.' },
      { label: '20ft to 40ft Clear-Span', detail: 'Available in 20ft, 30ft, and 40ft truss widths with optional gable end enclosure.' },
    ],
    specs: [
      {
        model: '20ft Dual-Container Ranch Barn (20ft Bay)',
        grade: '2 × 20ft + Steel Roof',
        extDimensions: `20'0" × 36'0" × 15'0"`,
        intDimensions: `720 sq ft Total Covered`,
        doorOpening: `20' Clear-Span Center`,
        cubicVolume: '320 sq ft Locked',
        tareWeight: '13,200 lbs',
        maxPayload: 'Wind Rated 130 mph',
        priceFrom: 16900,
      },
      {
        model: '40ft Dual-Container Ag Barn (24ft Bay)',
        grade: '2 × 40ft + Steel Roof',
        extDimensions: `40'0" × 40'0" × 17'0"`,
        intDimensions: `1,600 sq ft Total Covered`,
        doorOpening: `24' Clear-Span Center`,
        cubicVolume: '640 sq ft Locked',
        tareWeight: '22,400 lbs',
        maxPayload: 'Wind Rated 130 mph',
        priceFrom: 24800,
      },
    ],
    deliveryInfo: {
      method: 'Containers delivered via tilt-bed + palletized truss roof kit',
      leadTime: '2 to 3 weeks',
      clearanceRequired: '100 ft straight approach for 40ft container setup',
      sitePrep: 'Compacted crushed gravel or level compacted earth pad',
    },
    relatedCategories: [
      '/modified-shipping-containers/',
      '/40ft-shipping-containers-for-sale/',
      '/20ft-shipping-containers-for-sale/',
      '/shipping-container-ramps/',
    ],
    relatedGuides: [
      '/guides/shipping-container-delivery-and-site-prep/',
      '/guides/shipping-container-cost/',
    ],
    faqs: [
      {
        question: 'Can a shipping container barn handle heavy snow loads?',
        answer:
          'Yes. We supply northern snow-load engineered steel trusses rated up to 65 psf for Montana, Minnesota, Maine, and mountain states.',
      },
    ],
  },
  {
    path: '/shipping-container-ramps/',
    group: 'modified',
    navLabel: 'Container Ramps',
    h1: 'Heavy-Duty Shipping Container Ramps for Sale',
    title: 'Shipping Container Ramps for Sale | 15,000–30,000 lb Cap', // 59 chars
    metaDescription:
      'Shop steel shipping container ramps for forklifts, tractors, and pallet jacks. Serrated diamond-plate loading ramps rated up to 30,000 lbs.', // 140 chars
    primaryKeyword: 'shipping container ramp',
    keywordVolume: '1,000',
    keywordKd: '0',
    supportingKeywords: [
      'forklift shipping container ramp',
      'steel conex loading ramp',
      'heavy duty container ramp',
    ],
    priceFrom: 1190,
    image: SITE_IMAGES.deliveryTiltBed,
    imageAlt: 'Heavy steel container loading ramp engineered for forklifts and equipment',
    kicker: 'Forklift & Equipment Loading Accessories',
    summary:
      'Bridge the 6.5-inch step into any ground-level shipping container safely. Our all-welded steel container ramps hook directly into the container door lock bar or frame sill with anti-slip serrated traction.',
    overviewParagraphs: [
      'Standard ISO containers sit roughly 6.5 inches above ground level on their structural bottom side rails. Driving a loaded forklift, skid steer, or lawn tractor over makeshift timber planks risks tipping and floor damage.',
      'Steelridge container ramps are fabricated from heavy structural steel angle and diamond-plate or bar-grating decking, rated from 15,000 lbs for pallet jacks and utility tractors up to 30,000 lbs for commercial warehouse forklifts.',
    ],
    highlights: [
      { label: 'Anti-Slip Serrated Deck', detail: 'High-traction steel tread works safely in rain, mud, and snow.' },
      { label: 'Lock-In Safety Chains', detail: 'Includes dual steel safety chains and hook pins to prevent ramp kick-out.' },
      { label: 'Shipped Alongside Containers', detail: 'Add a ramp to your container order to eliminate separate LTL freight.' },
    ],
    specs: [
      {
        model: '70" × 48" Utility & ATV Ramp',
        grade: '15,000 lb Capacity',
        extDimensions: `70" W × 48" L × 6.5" H`,
        intDimensions: 'Two-Piece Split',
        doorOpening: 'Fits 8ft Container Sill',
        cubicVolume: 'Diamond Plate',
        tareWeight: '310 lbs',
        maxPayload: '15,000 lbs',
        priceFrom: 1190,
      },
      {
        model: '70" × 60" Commercial Forklift Ramp',
        grade: '25,000 lb Capacity',
        extDimensions: `70" W × 60" L × 6.5" H`,
        intDimensions: 'Forklift Pocket Built-In',
        doorOpening: 'Self-Leveling Lip',
        cubicVolume: 'Bar Grating',
        tareWeight: '485 lbs',
        maxPayload: '25,000 lbs',
        priceFrom: 1750,
      },
      {
        model: '84" × 72" Heavy Industrial Ramp',
        grade: '30,000 lb Capacity',
        extDimensions: `84" W × 72" L × 6.5" H`,
        intDimensions: 'Wide-Track Dual Wheel',
        doorOpening: 'Full Door Span',
        cubicVolume: 'Reinforced Grid',
        tareWeight: '690 lbs',
        maxPayload: '30,000 lbs',
        priceFrom: 2390,
      },
    ],
    deliveryInfo: {
      method: 'Loaded inside container delivery or LTL liftgate freight',
      leadTime: '2 to 4 business days',
      clearanceRequired: 'Fits inside 20ft/40ft unit when ordered together',
      sitePrep: 'Firm level apron directly in front of cargo doors',
    },
    relatedCategories: [
      '/20ft-shipping-containers-for-sale/',
      '/40ft-shipping-containers-for-sale/',
      '/conex-boxes-for-sale/',
      '/modified-shipping-containers/',
    ],
    relatedGuides: [
      '/guides/shipping-container-delivery-and-site-prep/',
      '/guides/shipping-container-sizes/',
    ],
    faqs: [
      {
        question: 'Can the container doors still close with the ramp in place?',
        answer:
          'Detachable lip ramps slide away in under 60 seconds using forklift pockets so your cargo doors swing shut and latch cleanly.',
      },
    ],
  },
];

export const CATEGORY_BY_PATH: Record<string, CategoryPageData> = Object.fromEntries(
  CATEGORY_PAGES.map((c) => [c.path, c]),
);
