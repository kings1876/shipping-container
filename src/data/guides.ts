import { GuidePageData } from '../types/seo';

export const GUIDE_PAGES: GuidePageData[] = [
  {
    slug: 'shipping-container-sizes',
    path: '/guides/shipping-container-sizes/',
    category: 'sizing-pricing',
    navLabel: 'Shipping Container Sizes',
    h1: 'Shipping Container Sizes & Dimensions Guide',
    title: 'Shipping Container Sizes & Dimensions Guide | Steelridge', // 56 chars
    metaDescription:
      'Compare standard 10ft, 20ft, 40ft, and 40ft High Cube shipping container dimensions, door openings, weights, and cubic capacities.', // 132 chars
    primaryKeyword: 'shipping container sizes',
    keywordMetrics: '5,400 / KD 0',
    supportingKeywords: [
      'shipping container dimensions',
      'sea container sizes',
      'standard shipping container sizes',
      'high cube shipping container sizes',
      'shipping container sizes and prices',
    ],
    readTime: '6 min read',
    updatedDate: 'November 2026',
    summary:
      'Exact exterior, interior, and door-opening dimensions for ISO shipping containers sold across the United States, plus payload limits and footprint planning.',
    sections: [
      {
        heading: 'Standard vs. High Cube ISO Dimensions',
        paragraphs: [
          'Every ocean-going ISO shipping container shares an identical 8-foot exterior width so ships, cranes, and semi-trailers lock seamlessly onto corner castings. Where models differ is length (10ft, 20ft, or 40ft) and exterior height: Standard boxes measure 8\'6" tall, while High Cube boxes measure 9\'6" tall.',
          'Because corrugated steel walls and interior wood flooring take up several inches, usable interior clearance is slightly smaller than exterior dimensions—especially at the rear door frame header.',
        ],
      },
      {
        heading: 'Which Container Size Fits Your Project?',
        paragraphs: [
          'Choose a 10ft (8×10) unit for urban alleys or tight residential driveways. Choose a 20ft standard unit when you want 160 sq ft of storage in a single parking stall.',
          'For bulk inventory, palletized commercial freight, or architectural container homes, step up to a 40ft High Cube. The extra vertical foot provides critical room for ceiling insulation, electrical conduit, and tall forklift masts.',
        ],
      },
    ],
    comparisonTable: {
      caption: 'US ISO Shipping Container Dimension & Weight Reference',
      headers: ['Container Size', 'Exterior (L × W × H)', 'Interior (L × W × H)', 'Door Opening (W × H)', 'Tare Weight', 'Typical From Price'],
      rows: [
        ['10ft Standard', `10'0" × 8'0" × 8'6"`, `9'3" × 7'8" × 7'10"`, `7'8" × 7'5"`, '2,890 lbs', '$2,450'],
        ['20ft Standard', `20'0" × 8'0" × 8'6"`, `19'4" × 7'8" × 7'10"`, `7'8" × 7'5"`, '4,916 lbs', '$1,850'],
        ['20ft High Cube', `20'0" × 8'0" × 9'6"`, `19'4" × 7'8" × 8'10"`, `7'8" × 8'5"`, '5,180 lbs', '$3,890'],
        ['40ft Standard', `40'0" × 8'0" × 8'6"`, `39'5" × 7'8" × 7'10"`, `7'8" × 7'5"`, '8,267 lbs', '$2,650'],
        ['40ft High Cube', `40'0" × 8'0" × 9'6"`, `39'5" × 7'8" × 8'10"`, `7'8" × 8'5"`, '8,775 lbs', '$2,890'],
      ],
    },
    relatedCategories: [
      '/20ft-shipping-containers-for-sale/',
      '/40ft-shipping-containers-for-sale/',
      '/40ft-high-cube-shipping-containers-for-sale/',
      '/10ft-shipping-containers-for-sale/',
    ],
    relatedGuides: ['/guides/shipping-container-cost/', '/guides/shipping-container-delivery-and-site-prep/'],
  },
  {
    slug: 'shipping-container-cost',
    path: '/guides/shipping-container-cost/',
    category: 'sizing-pricing',
    navLabel: 'Shipping Container Cost',
    h1: 'How Much Do Shipping Containers Cost?',
    title: 'Shipping Container Cost Guide (2026 USA Prices)', // 48 chars
    metaDescription:
      'Transparent 2026 US pricing for new one-trip and used shipping containers, plus tilt-bed delivery fees and modification cost ranges.', // 134 chars
    primaryKeyword: 'shipping container cost',
    keywordMetrics: '3,600 / KD 28',
    supportingKeywords: [
      'how much do used shipping containers cost',
      'shipping containers for sale cost',
      'delivered container prices usa',
    ],
    readTime: '5 min read',
    updatedDate: 'November 2026',
    summary:
      'Realistic US pricing ranges for 10ft, 20ft, and 40ft containers in Wind & Watertight, Cargo-Worthy, and One-Trip grades—plus what drives freight delivery cost.',
    sections: [
      {
        heading: 'Three Factors That Set Your Out-the-Door Price',
        paragraphs: [
          'Every container quote breaks down into three parts: the base steel unit at your nearest regional depot, any optional shop modifications (such as lockboxes, vents, or roll-up doors), and one-way truck transport from the yard to your property.',
          'Port-adjacent cities like Houston, Los Angeles, Charleston, and Seattle enjoy the lowest yard prices because containers finish ocean voyages right there. Inland cities carry modest rail repositioning costs.',
        ],
        bulletPoints: [
          'Used 20ft Wind & Watertight: $1,850 – $2,450 before delivery',
          'Used 40ft Standard / High Cube WWT: $2,650 – $3,350 before delivery',
          'New One-Trip 20ft Standard: $3,290 – $3,850 before delivery',
          'New One-Trip 40ft High Cube: $4,950 – $5,750 before delivery',
        ],
      },
      {
        heading: 'Understanding Delivery Fees',
        paragraphs: [
          'Local tilt-bed delivery within 50 miles of a major Steelridge depot typically adds $325 to $495. Long-distance rural deliveries are billed per loaded mile and return mile, making nearby regional depots the smartest way to save.',
        ],
      },
    ],
    comparisonTable: {
      caption: '2026 Typical US Shipping Container Cost Ranges (Depot Price)',
      headers: ['Size & Grade', 'Depot Price Range', 'Typical Local Delivery (≤50 mi)', 'Best Use Case'],
      rows: [
        ['20ft Used WWT', '$1,850 – $2,350', '$325 – $450', 'Economical dry farm & contractor storage'],
        ['20ft One-Trip New', '$3,290 – $3,790', '$325 – $450', 'Residential driveways, visible retail lots'],
        ['40ft Used WWT', '$2,650 – $3,150', '$425 – $595', 'Maximum bulk storage per dollar'],
        ['40ft HC One-Trip New', '$4,950 – $5,650', '$450 – $625', 'Home builds, tall palletized warehousing'],
        ['20ft Modified Office', '$11,400 – $16,500', '$375 – $550', 'Insulated jobsite & ranch workspace'],
      ],
    },
    relatedCategories: [
      '/used-shipping-containers-for-sale/',
      '/new-shipping-containers-for-sale/',
      '/shipping-containers-for-sale/',
    ],
    relatedGuides: ['/guides/one-trip-vs-used-shipping-containers/', '/guides/shipping-container-grades-explained/'],
  },
  {
    slug: 'how-much-do-shipping-container-homes-cost',
    path: '/guides/how-much-do-shipping-container-homes-cost/',
    category: 'container-homes',
    navLabel: 'Container Home Costs',
    h1: 'How Much Do Shipping Container Homes Cost?',
    title: 'How Much Are Shipping Container Homes? (2026 Cost)', // 50 chars
    metaDescription:
      'Complete turnkey and DIY budget breakdown for shipping container homes: shells, foundations, insulation, plumbing, crane set, and permits.', // 138 chars
    primaryKeyword: 'how much are shipping container homes',
    keywordMetrics: '480 / KD 7',
    supportingKeywords: [
      'how much does a shipping container home cost',
      'shipping container home price',
      'affordable shipping container homes',
    ],
    readTime: '7 min read',
    updatedDate: 'November 2026',
    summary:
      'Real-world budget expectations for building or buying a finished shipping container residence in the US—from $48,500 studio ADUs to $138,000+ three-bedroom homes.',
    sections: [
      {
        heading: 'Bare Steel Shell vs. Turnkey Finished Residence',
        paragraphs: [
          'A frequent misconception is that buying a $4,950 High Cube shell means you can build a house for $15,000. In reality, structural framing, closed-cell spray foam, licensed electrical and plumbing rough-in, windows, kitchens, and permitting account for roughly 80% of a livable home’s budget.',
          'Purchasing a factory-finished turnkey container home eliminates contractor scheduling surprises while keeping per-square-foot costs well below custom stick-built rural construction.',
        ],
      },
      {
        heading: 'Site Work & Soft Costs to Budget Separately',
        paragraphs: [
          'Beyond the prefabricated home price, homeowners should budget for site-specific infrastructure: geotechnical soil test, poured concrete pier footings, crane rental on delivery day ($1,500–$3,500), and utility hookups (water well, septic, and 200A meter drop).',
        ],
      },
    ],
    comparisonTable: {
      caption: '2026 Shipping Container Home Cost Benchmarks',
      headers: ['Home Footprint', 'Module Count', 'Turnkey Prefab Price', 'Est. Site / Pier / Crane Budget'],
      rows: [
        ['160 sq ft Studio ADU', '1 × 20ft HC', '$48,500 – $56,000', '$8,000 – $14,000'],
        ['320 sq ft 1-Bed Cabin', '1 × 40ft HC', '$72,900 – $86,000', '$12,000 – $18,000'],
        ['640 sq ft 2-Bed Home', '2 × 40ft HC', '$112,000 – $132,000', '$18,000 – $28,000'],
        ['1,280 sq ft 3-Bed Home', '3–4 × 40ft HC', '$138,000 – $179,500', '$24,000 – $38,000'],
      ],
    },
    relatedCategories: [
      '/shipping-container-homes-for-sale/',
      '/prefab-shipping-container-homes/',
      '/3-bedroom-shipping-container-homes-for-sale/',
    ],
    relatedGuides: ['/guides/shipping-container-home-plans/', '/guides/shipping-container-home-foundations/'],
  },
  {
    slug: 'shipping-container-home-plans',
    path: '/guides/shipping-container-home-plans/',
    category: 'container-homes',
    navLabel: 'Container Home Plans',
    h1: 'Building Plans & Blueprints for Shipping Container Homes',
    title: 'Shipping Container Home Plans & Blueprints | Steelridge', // 56 chars
    metaDescription:
      'Explore proven architectural floor plans for 1-bedroom, 2-bedroom, 3-bedroom, and 4-bedroom shipping container homes with structural spans.', // 140 chars
    primaryKeyword: 'building plans for shipping container homes',
    keywordMetrics: '3,600 / KD 0',
    supportingKeywords: [
      'shipping container home blueprints',
      '4 bedroom shipping container home plans',
      'modular container floor plans',
    ],
    readTime: '6 min read',
    updatedDate: 'November 2026',
    summary:
      'Floor plan geometry, marriage-line wall cutouts, and stamped structural blueprint essentials for single-box cabins through 4-bedroom family residences.',
    sections: [
      {
        heading: 'Designing Around the 8-Foot Structural Grid',
        paragraphs: [
          'The smartest container home blueprints respect ISO corner castings. Joining two 40ft High Cube modules side-by-side creates a 16ft × 40ft envelope; placing three side-by-side opens a 24ft span; and offsetting a 2nd-story module creates shaded porch cantilevers naturally.',
          'Keeping wet walls (kitchen sink, bath, laundry) clustered along one interior partition dramatically simplifies PEX plumbing and drain runs.',
        ],
      },
      {
        heading: '3-Bedroom & 4-Bedroom Multi-Module Layouts',
        paragraphs: [
          'Larger family blueprints—including 4-bedroom two-story layouts—typically join four to six 40ft High Cube containers around a central courtyard deck or stacked U-shape. Every wall opening wider than 6 feet requires an engineered HSS steel tube or W-beam lintel.',
        ],
      },
    ],
    relatedCategories: [
      '/3-bedroom-shipping-container-homes-for-sale/',
      '/prefab-shipping-container-homes/',
      '/shipping-container-homes/',
    ],
    relatedGuides: ['/guides/how-to-build-a-shipping-container-home/', '/guides/shipping-container-home-foundations/'],
  },
  {
    slug: 'how-to-build-a-shipping-container-home',
    path: '/guides/how-to-build-a-shipping-container-home/',
    category: 'container-homes',
    navLabel: 'How to Build a Container Home',
    h1: 'How to Build a Shipping Container Home Step-by-Step',
    title: 'How to Build a Shipping Container Home | Step-by-Step', // 54 chars
    metaDescription:
      'Step-by-step guide to turning shipping containers into homes: selecting one-trip shells, cutting steel, spray foam insulation, and permits.', // 142 chars
    primaryKeyword: 'how to build shipping container homes',
    keywordMetrics: '390 / KD 0',
    supportingKeywords: [
      'shipping container home construction',
      'diy shipping container home',
      'turning shipping containers into homes',
    ],
    readTime: '8 min read',
    updatedDate: 'November 2026',
    summary:
      'A practical construction sequence covering shell procurement, structural welding, thermal-break framing, MEP rough-in, and final municipal inspection.',
    sections: [
      {
        heading: 'Phase 1: Site Feasibility, Plans & One-Trip Shells',
        paragraphs: [
          'Start with local zoning verification before purchasing steel. Once approved, order clean one-trip 40ft High Cube containers so you avoid stripped marine paint or hazardous cargo unknowns on the subfloor.',
        ],
      },
      {
        heading: 'Phase 2: Structural Welding & Framing',
        paragraphs: [
          'Plasma-cut window and door openings, weld continuous square-tube reinforcement frames, and flash all exterior seams. Frame interior walls 1 inch off the corrugated steel with steel or pressure-treated furring so closed-cell spray foam forms an uninterrupted thermal break.',
        ],
      },
      {
        heading: 'Phase 3: Spray Foam, MEP & Exterior Cladding',
        paragraphs: [
          'Apply 2 inches of closed-cell polyurethane foam on walls and 3–4 inches on the roof ceiling to stop condensation cold. Complete licensed electrical, PEX plumbing, and mini-split HVAC rough-ins prior to hanging drywall or tongue-and-groove timber.',
        ],
      },
    ],
    relatedCategories: [
      '/40ft-high-cube-shipping-containers-for-sale/',
      '/new-shipping-containers-for-sale/',
      '/shipping-container-homes-for-sale/',
    ],
    relatedGuides: ['/guides/shipping-container-home-foundations/', '/guides/shipping-container-permits-by-state/'],
  },
  {
    slug: 'shipping-container-home-foundations',
    path: '/guides/shipping-container-home-foundations/',
    category: 'container-homes',
    navLabel: 'Container Home Foundations',
    h1: 'Foundations & Footings for Shipping Container Homes',
    title: 'Shipping Container Home Foundations & Footings Guide', // 53 chars
    metaDescription:
      'Compare concrete pier footings, perimeter stem walls, and slab-on-grade foundations for shipping container homes and heavy storage boxes.', // 138 chars
    primaryKeyword: 'foundations for shipping container homes',
    keywordMetrics: '140 / KD 5',
    supportingKeywords: [
      'shipping container home footings',
      'concrete piers for shipping containers',
      'container weld plate anchors',
    ],
    readTime: '5 min read',
    updatedDate: 'November 2026',
    summary:
      'Because ISO containers carry loads strictly at their four bottom corner castings, you do not need a full-footprint slab—unless soil or frost codes dictate otherwise.',
    sections: [
      {
        heading: '1. Concrete Pier Footings (Most Popular)',
        paragraphs: [
          'Six to eight poured sonotube concrete piers with embedded 8" × 8" steel weld plates elevate the container 18–24 inches above grade. This protects steel rails from standing water, leaves crawlspace access for plumbing runs, and dramatically reduces concrete excavation cost on sloped land.',
        ],
      },
      {
        heading: '2. Perimeter Stem Wall & Full Slab',
        paragraphs: [
          'For two-story homes, coastal hurricane zones, or regions requiring enclosed basements/crawlspaces, a poured perimeter concrete stem wall with anchor bolts provides continuous support and clean exterior skirting.',
        ],
      },
    ],
    relatedCategories: [
      '/shipping-container-homes-for-sale/',
      '/prefab-shipping-container-homes/',
      '/40ft-high-cube-shipping-containers-for-sale/',
    ],
    relatedGuides: ['/guides/how-to-build-a-shipping-container-home/', '/guides/shipping-container-delivery-and-site-prep/'],
  },
  {
    slug: 'shipping-container-home-ideas',
    path: '/guides/shipping-container-home-ideas/',
    category: 'container-homes',
    navLabel: 'Container Home Ideas',
    h1: 'Modern Shipping Container Home Design Ideas',
    title: 'Shipping Container Home Ideas: Modern & Off-Grid', // 49 chars
    metaDescription:
      'Architectural ideas for modern, two-story, luxury, and off-grid shipping container homes—from clerestory glazing to cedar deck cantilevers.', // 137 chars
    primaryKeyword: 'shipping container homes ideas',
    keywordMetrics: '480 / KD 16',
    supportingKeywords: [
      'modern shipping container homes',
      'luxury container home interior',
      'two story container home',
      'off grid shipping container home',
    ],
    readTime: '5 min read',
    updatedDate: 'November 2026',
    summary:
      'Proven architectural layout concepts that transform industrial steel boxes into warm, sunlit modern residences.',
    sections: [
      {
        heading: 'Cantilevered Two-Story & Courtyard Layouts',
        paragraphs: [
          'Setting an upper 40ft High Cube perpendicular across two lower ground modules instantly creates a dramatic covered carport or sunset porch beneath the cantilever—with zero extra roof framing required.',
        ],
      },
      {
        heading: 'Warm Interior Material Pairings & Off-Grid Systems',
        paragraphs: [
          'Balance matte charcoal corrugated exteriors with warm cedar soffits, white oak cabinetry, and floor-to-ceiling low-E glass sliders. For off-grid acreage, flat container roofs easily carry 6–10 kW of ballasted solar panels wired to indoor utility closets.',
        ],
      },
    ],
    relatedCategories: [
      '/shipping-container-homes-for-sale/',
      '/3-bedroom-shipping-container-homes-for-sale/',
      '/shipping-container-homes/',
    ],
    relatedGuides: ['/guides/shipping-container-home-plans/', '/guides/pros-and-cons-of-shipping-container-homes/'],
  },
  {
    slug: 'pros-and-cons-of-shipping-container-homes',
    path: '/guides/pros-and-cons-of-shipping-container-homes/',
    category: 'container-homes',
    navLabel: 'Pros & Cons of Container Homes',
    h1: 'Pros and Cons of Shipping Container Homes',
    title: 'Pros and Cons of Shipping Container Homes | Honest Guide', // 57 chars
    metaDescription:
      'An honest engineering look at the advantages and trade-offs of living in a shipping container home: speed, steel durability, insulation, and width.', // 146 chars
    primaryKeyword: 'pros and cons of shipping container homes',
    keywordMetrics: '140 / KD 0',
    supportingKeywords: [
      'are shipping container homes worth it',
      'container house disadvantages',
      'corten steel home longevity',
    ],
    readTime: '6 min read',
    updatedDate: 'November 2026',
    summary:
      'Before committing to steel modular construction, weigh the genuine structural strengths against insulation, permitting, and width trade-offs.',
    sections: [
      {
        heading: 'Where Container Homes Excel',
        paragraphs: [
          'High-speed factory assembly, unmatched wildfire and wind-load resistance, and structural ease on pier foundations make container homes ideal for remote acreage and tight rural build seasons.',
        ],
      },
      {
        heading: 'Real Trade-Offs to Plan Around',
        paragraphs: [
          'Bare steel conducts heat rapidly—making closed-cell spray foam mandatory rather than fiberglass batts. Single 8ft-wide boxes also feel narrow unless paired with expansive glass or joined side-by-side into 16ft–24ft rooms.',
        ],
      },
    ],
    relatedCategories: [
      '/prefab-shipping-container-homes/',
      '/shipping-container-homes-for-sale/',
      '/shipping-container-homes/',
    ],
    relatedGuides: ['/guides/how-much-do-shipping-container-homes-cost/', '/guides/shipping-container-permits-by-state/'],
  },
  {
    slug: 'buying-a-used-shipping-container-checklist',
    path: '/guides/buying-a-used-shipping-container-checklist/',
    category: 'buying-delivery',
    navLabel: 'Used Container Checklist',
    h1: 'Checklist for Buying a Used Shipping Container',
    title: 'Buying a Used Shipping Container Checklist | Steelridge', // 56 chars
    metaDescription:
      'Inspect used shipping containers like a depot pro: light-leak roof checks, door gasket seals, floor cross-members, and avoiding broker scams.', // 142 chars
    primaryKeyword: 'where to buy used shipping containers',
    keywordMetrics: '170 / KD 28',
    supportingKeywords: [
      'used shipping container inspection checklist',
      'how to inspect a used conex',
      'avoiding shipping container scams',
    ],
    readTime: '6 min read',
    updatedDate: 'November 2026',
    summary:
      'Seven non-negotiable physical checks before accepting delivery of a used steel container, plus red flags to watch for when comparing US suppliers.',
    sections: [
      {
        heading: 'The 5-Minute Physical Inspection at Delivery',
        paragraphs: [
          'Step inside the container before the driver leaves and pull the cargo doors shut. Zero pinpoints of daylight should appear along the roof ribs, corner posts, or rubber gaskets. Test both doors through a full swing to verify the frame is square—if the pad is unlevel, steel frames flex slightly ("racking") until shimmed.',
        ],
        bulletPoints: [
          'Roof panels: Check for pooling dents or past patch welds that leak',
          'Door EPDM seals: Rubber should remain pliable, not brittle or torn',
          'Marine plywood floor: Look for soft rot, oil stains, or delamination',
          'Structural rails: Bottom side rails and corner castings must be straight',
        ],
      },
    ],
    relatedCategories: [
      '/used-shipping-containers-for-sale/',
      '/20ft-shipping-containers-for-sale/',
      '/40ft-shipping-containers-for-sale/',
    ],
    relatedGuides: ['/guides/one-trip-vs-used-shipping-containers/', '/guides/shipping-container-grades-explained/'],
  },
  {
    slug: 'one-trip-vs-used-shipping-containers',
    path: '/guides/one-trip-vs-used-shipping-containers/',
    category: 'buying-delivery',
    navLabel: 'One-Trip vs Used',
    h1: 'One-Trip vs. Used Shipping Containers: Which Should You Buy?',
    title: 'One-Trip vs Used Shipping Containers | Comparison Guide', // 56 chars
    metaDescription:
      'Compare new one-trip shipping containers against used Wind & Watertight boxes on price, cosmetic appearance, lockboxes, and resale value.', // 138 chars
    primaryKeyword: 'one trip vs used shipping containers',
    keywordMetrics: '320 / KD 4',
    supportingKeywords: [
      'new vs used shipping container',
      'is a one trip container worth it',
      'conex condition comparison',
    ],
    readTime: '5 min read',
    updatedDate: 'November 2026',
    summary:
      'When to save $1,400–$2,000 with an inspected used box—and when spending more on a factory one-trip unit pays off immediately.',
    sections: [
      {
        heading: 'When Used Wind & Watertight Wins',
        paragraphs: [
          'If the container sits on a farm, ranch, or gated construction yard where surface scratches and fading paint do not matter, a Wind & Watertight used container delivers identical Corten steel strength at roughly 40% lower cost.',
        ],
      },
      {
        heading: 'When One-Trip New Is Worth Every Dollar',
        paragraphs: [
          'For residential driveways, HOA-visible properties, food/furniture storage, or custom home builds, a one-trip container provides crisp neutral paint, zero chemical cargo history, factory lockboxes, and effortless waist-high door latches.',
        ],
      },
    ],
    comparisonTable: {
      caption: 'One-Trip New vs. Used Wind & Watertight',
      headers: ['Feature', 'New One-Trip', 'Used Wind & Watertight (WWT)'],
      rows: [
        ['Age', 'Under 1 year (1 ocean voyage)', '8–14 years ocean service'],
        ['Cosmetic Appearance', 'Clean neutral gray, beige, or charcoal', 'Shipping logos, surface rust, minor dents'],
        ['Security Lockbox', 'Factory welded included', 'Optional add-on'],
        ['Door Handles', 'High-mounted easy-open handles', 'Standard lower cargo latches'],
        ['20ft Starting Price', 'From $3,290', 'From $1,850'],
      ],
    },
    relatedCategories: [
      '/new-shipping-containers-for-sale/',
      '/used-shipping-containers-for-sale/',
      '/20ft-shipping-containers-for-sale/',
    ],
    relatedGuides: ['/guides/shipping-container-grades-explained/', '/guides/shipping-container-cost/'],
  },
  {
    slug: 'shipping-container-delivery-and-site-prep',
    path: '/guides/shipping-container-delivery-and-site-prep/',
    category: 'buying-delivery',
    navLabel: 'Delivery & Site Prep',
    h1: 'Shipping Container Delivery & Site Prep Guide',
    title: 'Shipping Container Delivery & Site Prep | Clearance Specs', // 58 chars
    metaDescription:
      'Prepare your property for shipping container delivery: tilt-bed truck clearance, gravel pad depth, leveling blocks, and door orientation.', // 138 chars
    primaryKeyword: 'shipping container delivery and site prep',
    keywordMetrics: '260 / KD 6',
    supportingKeywords: [
      'tilt bed shipping container delivery',
      'how to level a shipping container',
      'clearance for 40ft container delivery',
    ],
    readTime: '5 min read',
    updatedDate: 'November 2026',
    summary:
      'Exact truck approach distances, overhead wire clearances, and simple gravel/block pad prep so your tilt-bed drop goes smoothly on the first try.',
    sections: [
      {
        heading: 'Straight-Line Truck Clearance Math',
        paragraphs: [
          'A hydraulic tilt-bed truck backs up to your pad, elevates its bed, and slowly pulls forward while sliding the container off the rear rollers. Because the truck must pull straight ahead, you need 60 feet of straight clearance for a 20ft unit and 100–110 feet for a 40ft unit, plus 14 feet vertical clearance free of oak limbs or utility drops.',
        ],
      },
      {
        heading: 'Confirming Door Direction Before Dispatch',
        paragraphs: [
          'Tell your dispatcher whether you want the cargo doors facing toward the cab (loaded doors-first, opening away from the road) or facing the rear of the trailer (opening toward the truck approach) before loading at the depot.',
        ],
      },
    ],
    relatedCategories: [
      '/shipping-containers-for-sale/',
      '/20ft-shipping-containers-for-sale/',
      '/40ft-shipping-containers-for-sale/',
    ],
    relatedGuides: ['/guides/shipping-container-sizes/', '/guides/buying-a-used-shipping-container-checklist/'],
  },
  {
    slug: 'shipping-container-permits-by-state',
    path: '/guides/shipping-container-permits-by-state/',
    category: 'buying-delivery',
    navLabel: 'Permits by State',
    h1: 'Shipping Container Permits & Zoning Rules by State',
    title: 'Shipping Container Permits & Zoning by State | Steelridge', // 58 chars
    metaDescription:
      'Understand US county zoning, accessory storage limits, HOA restrictions, and IRC residential building permits for shipping containers.', // 135 chars
    primaryKeyword: 'shipping container permits by state',
    keywordMetrics: '480 / KD 14',
    supportingKeywords: [
      'do you need a permit for a shipping container',
      'shipping container zoning laws',
      'container home building codes',
    ],
    readTime: '6 min read',
    updatedDate: 'November 2026',
    summary:
      'How US counties classify temporary jobsite boxes, permanent backyard storage containers, agricultural barns, and permitted container residences.',
    sections: [
      {
        heading: 'Storage Boxes vs. Inhabited Structures',
        paragraphs: [
          'Permit rules split cleanly into two tracks. Uninhabited storage boxes on rural, agricultural, or industrial zoning typically require no building permit if kept outside property-line setbacks (though many suburban cities cap shed footprints at 120–200 sq ft).',
          'Any shipping container converted into an ADU, office, or primary home always requires local building department permits, stamped structural engineering, septic/utility approval, and state energy-code compliance.',
        ],
      },
      {
        heading: 'State-by-State Highlights',
        paragraphs: [
          'Texas, Oklahoma, Maine, and New Mexico offer wide flexibility across unincorporated rural counties. California (Title 24 + Seismic) and Florida (FBC 150 mph wind-load) mandate strict engineered drawings—which Steelridge provides with our turnkey residential models.',
        ],
      },
    ],
    relatedCategories: [
      '/shipping-container-homes-for-sale/',
      '/10ft-shipping-containers-for-sale/',
      '/shipping-containers-for-sale/',
    ],
    relatedGuides: ['/guides/shipping-container-home-foundations/', '/guides/how-to-build-a-shipping-container-home/'],
  },
  {
    slug: 'shipping-container-grades-explained',
    path: '/guides/shipping-container-grades-explained/',
    category: 'buying-delivery',
    navLabel: 'Container Grades Explained',
    h1: 'Shipping Container Grades Explained: New, CW, WWT & As-Is',
    title: 'Shipping Container Grades Explained: One-Trip vs WWT vs CW', // 59 chars
    metaDescription:
      'Decode shipping container grades before buying: New One-Trip, IICL, Cargo-Worthy (CW), Wind & Watertight (WWT), and As-Is retired units.', // 139 chars
    primaryKeyword: 'shipping container grades explained',
    keywordMetrics: '390 / KD 8',
    supportingKeywords: [
      'cargo worthy vs wind and watertight',
      'one trip container meaning',
      'shipping container condition grades',
    ],
    readTime: '5 min read',
    updatedDate: 'November 2026',
    summary:
      'Clear definitions of every industry grading standard used in US container depots so you never overpay for ocean certification you do not need.',
    sections: [
      {
        heading: 'Matching Grade to Your Real-World Use',
        paragraphs: [
          'Every container leaving an ocean fleet is graded by structural soundness, door seal condition, and cosmetic appearance. Buying Cargo-Worthy only makes sense if you intend to export freight internationally or stack heavy loads; for ground-level ranch or jobsite storage, Wind & Watertight gives you the exact same dry seal at a lower price.',
        ],
      },
    ],
    comparisonTable: {
      caption: 'US Shipping Container Grade Hierarchy',
      headers: ['Grade', 'Weatherproof?', 'Ocean Export Certified?', 'Best For'],
      rows: [
        ['New / One-Trip', 'Yes (factory new)', 'Yes (5-yr CSC plate)', 'Homes, visible driveways, modifications'],
        ['IICL-5 / Premium Used', 'Yes', 'Yes (strictest used standard)', 'Commercial export & high-end conversions'],
        ['Cargo-Worthy (CW)', 'Yes', 'Yes (surveyable)', 'Heavy stacking, overseas shipping'],
        ['Wind & Watertight (WWT)', 'Yes (light-tested)', 'No (ground storage only)', 'Best-value dry farm, tool & yard storage'],
        ['As-Is / Damaged', 'Not guaranteed', 'No', 'Scrap steel, cut-apart fencing (not recommended for dry storage)'],
      ],
    },
    relatedCategories: [
      '/used-shipping-containers-for-sale/',
      '/new-shipping-containers-for-sale/',
      '/conex-boxes-for-sale/',
    ],
    relatedGuides: ['/guides/buying-a-used-shipping-container-checklist/', '/guides/one-trip-vs-used-shipping-containers/'],
  },
];

export const GUIDE_BY_SLUG: Record<string, GuidePageData> = Object.fromEntries(
  GUIDE_PAGES.map((g) => [g.slug, g]),
);
