import { ProductPageData } from '../types/seo';

// Catalog products imported from the supplier catalog (Atlas Container Supply).
// Descriptions are written in our own words from the listed features. Prices are the supplier's listed prices:
// confirm before launch. Rows with a kw have their own researched primary keyword (US volume >= 110, KD < 25,
// transactional or commercial) and are indexable; rows without one stay noindex and out of the sitemap.

interface CatalogRow {
  slug: string;
  categoryPath: string;
  name: string;
  shortName: string;
  condition: string;
  price: number;
  sizeLabel: string;
  typeLabel: string;
  image: string;
  gallery: string[];
  summary: string;
  description: string[];
  features: { label: string; detail: string }[];
  bestFor: string[];
  related: string[];
  kw?: string;
  vol?: string;
  kd?: string;
}

const ROWS: CatalogRow[] = [
  {
    "slug": "luxury-3-bedroom-prefabricated-modular-container-home-villa",
    "categoryPath": "/shipping-container-homes-for-sale/",
    "name": "Luxury 3 Bedroom Modular Container Home Villa",
    "shortName": "Luxury 3 Bedroom Container Home Villa",
    "condition": "New, Built to Order",
    "price": 95700,
    "sizeLabel": "container home",
    "typeLabel": "container home",
    "image": "/images/atlas-luxury-3-bedroom-prefabricated-modular-container-home-villa.webp",
    "gallery": [
      "/images/atlas-g-1432-1.webp",
      "/images/atlas-g-1432-2.webp",
      "/images/atlas-g-1432-3.webp",
      "/images/atlas-g-1432-4.webp"
    ],
    "summary": "Luxury 3 Bedroom. Includes 3 bedroom layout, insulated walls, large windows. From $95,700, sales only.",
    "description": [
      "The Luxury 3 Bedroom Prefabricated Modular Container Home Villa is a container home you can buy outright for delivery across the lower 48 states. The starting price of $95,700 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include 3 bedroom layout, insulated walls, large windows, furnishings. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Prefab Container Build",
        "detail": "Built off site, so installation on your property is quicker than a standard build."
      },
      {
        "label": "Insulated Living Space",
        "detail": "Fitted with insulation and interior finishes as described in the specification."
      },
      {
        "label": "Permits Apply",
        "detail": "Local zoning and building codes decide where it can be placed. Check with your planning office."
      }
    ],
    "bestFor": [
      "Tiny and guest homes",
      "Short-term rentals",
      "Accessory dwellings (check permits)"
    ],
    "related": [
      "luxury-1bhk-duplex-container-home-with-spacious-outdoor-deck",
      "4-bedroom-2-story-luxury-modular-container-home-villa",
      "modern-single-storey-container-house-with-spacious-deck"
    ],
    "kw": "3 bedroom container home",
    "vol": "390",
    "kd": "0"
  },
  {
    "slug": "luxury-1bhk-duplex-container-home-with-spacious-outdoor-deck",
    "categoryPath": "/shipping-container-homes-for-sale/",
    "name": "Luxury 1BHK Duplex Container Home with Spacious Outdoor Deck",
    "shortName": "Luxury 1BHK Duplex Container Home",
    "condition": "New, Built to Order",
    "price": 54999,
    "sizeLabel": "container home",
    "typeLabel": "container home",
    "image": "/images/atlas-luxury-1bhk-duplex-container-home-with-spacious-outdoor-deck.webp",
    "gallery": [
      "/images/atlas-g-1426-1.webp",
      "/images/atlas-g-1426-2.webp",
      "/images/atlas-g-1426-3.webp",
      "/images/atlas-g-1426-4.webp"
    ],
    "summary": "Luxury 1BHK Duplex Container Home. Includes 1 bedroom layout, insulated walls, an outdoor deck or balcony. From $54,999, sales only.",
    "description": [
      "The Luxury 1BHK Duplex Container Home with Spacious Outdoor Deck is a container home you can buy outright for delivery across the lower 48 states. The starting price of $54,999 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include 1 bedroom layout, insulated walls, an outdoor deck or balcony, furnishings, a two-storey layout. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Prefab Container Build",
        "detail": "Built off site, so installation on your property is quicker than a standard build."
      },
      {
        "label": "Insulated Living Space",
        "detail": "Fitted with insulation and interior finishes as described in the specification."
      },
      {
        "label": "Permits Apply",
        "detail": "Local zoning and building codes decide where it can be placed. Check with your planning office."
      }
    ],
    "bestFor": [
      "Tiny and guest homes",
      "Short-term rentals",
      "Accessory dwellings (check permits)"
    ],
    "related": [
      "luxury-3-bedroom-prefabricated-modular-container-home-villa",
      "4-bedroom-2-story-luxury-modular-container-home-villa",
      "modern-single-storey-container-house-with-spacious-deck"
    ],
    "kw": "1 bedroom container home",
    "vol": "140",
    "kd": "0"
  },
  {
    "slug": "4-bedroom-2-story-luxury-modular-container-home-villa",
    "categoryPath": "/shipping-container-homes-for-sale/",
    "name": "4 Bedroom 2-Story Modular Container Home",
    "shortName": "4 Bedroom 2-Story Container Home",
    "condition": "New, Built to Order",
    "price": 48000,
    "sizeLabel": "container home",
    "typeLabel": "container home",
    "image": "/images/atlas-4-bedroom-2-story-luxury-modular-container-home-villa.webp",
    "gallery": [
      "/images/atlas-g-1419-1.webp",
      "/images/atlas-g-1419-2.webp",
      "/images/atlas-g-1419-3.webp",
      "/images/atlas-g-1419-4.webp"
    ],
    "summary": "4 Bedroom 2 Story. Includes 4 bedroom layout, insulated walls, an outdoor deck or balcony. From $48,000, sales only.",
    "description": [
      "The 4 Bedroom 2 Story Luxury Modular Container Home Villa is a container home you can buy outright for delivery across the lower 48 states. The starting price of $48,000 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include 4 bedroom layout, insulated walls, an outdoor deck or balcony, furnishings, a two-storey layout. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Prefab Container Build",
        "detail": "Built off site, so installation on your property is quicker than a standard build."
      },
      {
        "label": "Insulated Living Space",
        "detail": "Fitted with insulation and interior finishes as described in the specification."
      },
      {
        "label": "Permits Apply",
        "detail": "Local zoning and building codes decide where it can be placed. Check with your planning office."
      }
    ],
    "bestFor": [
      "Tiny and guest homes",
      "Short-term rentals",
      "Accessory dwellings (check permits)"
    ],
    "related": [
      "luxury-3-bedroom-prefabricated-modular-container-home-villa",
      "luxury-1bhk-duplex-container-home-with-spacious-outdoor-deck",
      "modern-single-storey-container-house-with-spacious-deck"
    ],
    "kw": "4 bedroom container home",
    "vol": "320",
    "kd": "0"
  },
  {
    "slug": "modern-single-storey-container-house-with-spacious-deck",
    "categoryPath": "/shipping-container-homes-for-sale/",
    "name": "Modern Single-Storey Container House with Spacious Deck",
    "shortName": "Modern Single-Storey Container House",
    "condition": "New, Built to Order",
    "price": 46000,
    "sizeLabel": "container home",
    "typeLabel": "container home",
    "image": "/images/atlas-modern-single-storey-container-house-with-spacious-deck.webp",
    "gallery": [
      "/images/atlas-g-1410-1.webp",
      "/images/atlas-g-1410-2.webp",
      "/images/atlas-g-1410-3.webp",
      "/images/atlas-g-1410-4.webp"
    ],
    "summary": "Modern Single-Storey Container House. Includes insulated walls, an outdoor deck or balcony, off-grid options. From $46,000, sales only.",
    "description": [
      "The Modern Single-Storey Container House with Spacious Deck is a container home you can buy outright for delivery across the lower 48 states. The starting price of $46,000 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include insulated walls, an outdoor deck or balcony, off-grid options, furnishings. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Prefab Container Build",
        "detail": "Built off site, so installation on your property is quicker than a standard build."
      },
      {
        "label": "Insulated Living Space",
        "detail": "Fitted with insulation and interior finishes as described in the specification."
      },
      {
        "label": "Permits Apply",
        "detail": "Local zoning and building codes decide where it can be placed. Check with your planning office."
      }
    ],
    "bestFor": [
      "Tiny and guest homes",
      "Short-term rentals",
      "Accessory dwellings (check permits)"
    ],
    "related": [
      "luxury-3-bedroom-prefabricated-modular-container-home-villa",
      "luxury-1bhk-duplex-container-home-with-spacious-outdoor-deck",
      "4-bedroom-2-story-luxury-modular-container-home-villa"
    ],
    "kw": "container house",
    "vol": "14800",
    "kd": "14"
  },
  {
    "slug": "luxury-1-bedroom-tiny-home-with-rooftop-deck",
    "categoryPath": "/tiny-house-container-homes/",
    "name": "Luxury 1 Bedroom Tiny Home with Rooftop Deck",
    "shortName": "Luxury 1 Bedroom Tiny Home with Rooftop Deck",
    "condition": "New, Built to Order",
    "price": 34999,
    "sizeLabel": "tiny home",
    "typeLabel": "tiny home",
    "image": "/images/atlas-luxury-1-bedroom-tiny-home-with-rooftop-deck.webp",
    "gallery": [
      "/images/atlas-g-1402-1.webp",
      "/images/atlas-g-1402-2.webp",
      "/images/atlas-g-1402-3.webp",
      "/images/atlas-g-1402-4.webp"
    ],
    "summary": "Luxury 1 Bedroom Tiny Home with Rooftop Deck. Includes 1 bedroom layout, insulated walls, a bathroom. From $34,999, sales only.",
    "description": [
      "The Luxury 1 Bedroom Tiny Home with Rooftop Deck is a tiny home you can buy outright for delivery across the lower 48 states. The starting price of $34,999 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include 1 bedroom layout, insulated walls, a bathroom, an outdoor deck or balcony, large windows. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Prefab Container Build",
        "detail": "Built off site, so installation on your property is quicker than a standard build."
      },
      {
        "label": "Insulated Living Space",
        "detail": "Fitted with insulation and interior finishes as described in the specification."
      },
      {
        "label": "Permits Apply",
        "detail": "Local zoning and building codes decide where it can be placed. Check with your planning office."
      }
    ],
    "bestFor": [
      "Tiny and guest homes",
      "Short-term rentals",
      "Accessory dwellings (check permits)"
    ],
    "related": [],
    "kw": "tiny container home",
    "vol": "1900",
    "kd": "14"
  },
  {
    "slug": "luxury-40ft-prefab-container-house-with-easy-folding-sandwich-panels",
    "categoryPath": "/shipping-container-homes-for-sale/",
    "name": "Luxury 40ft prefab container house with easy-folding sandwich panels",
    "shortName": "Luxury 40ft prefab container house",
    "condition": "New, Built to Order",
    "price": 30490,
    "sizeLabel": "40ft",
    "typeLabel": "container home",
    "image": "/images/atlas-luxury-40ft-prefab-container-house-with-easy-folding-sandwic.webp",
    "gallery": [
      "/images/atlas-g-1396-1.webp",
      "/images/atlas-g-1396-2.webp",
      "/images/atlas-g-1396-3.webp",
      "/images/atlas-g-1396-4.webp"
    ],
    "summary": "Luxury 40ft prefab container house. From $30,490, sales only.",
    "description": [
      "The Luxury 40ft prefab container house with easy-folding sandwich panels is a container home you can buy outright for delivery across the lower 48 states. The starting price of $30,490 is the depot price, with delivery quoted for your ZIP code.",
      "Full specifications are confirmed on your quote. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Prefab Container Build",
        "detail": "Built off site, so installation on your property is quicker than a standard build."
      },
      {
        "label": "Insulated Living Space",
        "detail": "Fitted with insulation and interior finishes as described in the specification."
      },
      {
        "label": "Permits Apply",
        "detail": "Local zoning and building codes decide where it can be placed. Check with your planning office."
      }
    ],
    "bestFor": [
      "Tiny and guest homes",
      "Short-term rentals",
      "Accessory dwellings (check permits)"
    ],
    "related": [
      "luxury-3-bedroom-prefabricated-modular-container-home-villa",
      "luxury-1bhk-duplex-container-home-with-spacious-outdoor-deck",
      "4-bedroom-2-story-luxury-modular-container-home-villa"
    ],
    "kw": "luxury container home",
    "vol": "1000",
    "kd": "6"
  },
  {
    "slug": "customized-40ft-shipping-container-made-into-luxurious-1-bedroom",
    "categoryPath": "/shipping-container-homes-for-sale/",
    "name": "Customized 40ft Container Home, 1 Bedroom",
    "shortName": "Customized 40ft Container Home",
    "condition": "New, Built to Order",
    "price": 14549,
    "sizeLabel": "40ft",
    "typeLabel": "container home",
    "image": "/images/atlas-customized-40ft-shipping-container-made-into-luxurious-1-bed.webp",
    "gallery": [
      "/images/atlas-g-1391-1.webp",
      "/images/atlas-g-1391-2.webp",
      "/images/atlas-g-1391-3.webp"
    ],
    "summary": "Customized 40ft Shipping. Includes 1 bedroom layout, insulated walls, a kitchen. From $14,549, sales only.",
    "description": [
      "The Customized 40ft Shipping Container Made into Luxurious 1 Bedroom is a container home you can buy outright for delivery across the lower 48 states. The starting price of $14,549 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include 1 bedroom layout, insulated walls, a kitchen, a bathroom, off-grid options. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Prefab Container Build",
        "detail": "Built off site, so installation on your property is quicker than a standard build."
      },
      {
        "label": "Insulated Living Space",
        "detail": "Fitted with insulation and interior finishes as described in the specification."
      },
      {
        "label": "Permits Apply",
        "detail": "Local zoning and building codes decide where it can be placed. Check with your planning office."
      }
    ],
    "bestFor": [
      "Tiny and guest homes",
      "Short-term rentals",
      "Accessory dwellings (check permits)"
    ],
    "related": [
      "luxury-3-bedroom-prefabricated-modular-container-home-villa",
      "luxury-1bhk-duplex-container-home-with-spacious-outdoor-deck",
      "4-bedroom-2-story-luxury-modular-container-home-villa"
    ],
    "kw": "40ft container home",
    "vol": "720",
    "kd": "0"
  },
  {
    "slug": "40ft-ready-made-villa-design-container-house",
    "categoryPath": "/shipping-container-homes-for-sale/",
    "name": "40ft Ready Made Villa Design Container House",
    "shortName": "40ft Ready Made Villa Design Container House",
    "condition": "New, Built to Order",
    "price": 8440,
    "sizeLabel": "40ft",
    "typeLabel": "container home",
    "image": "/images/atlas-40ft-ready-made-villa-design-container-house.webp",
    "gallery": [
      "/images/atlas-g-1371-1.webp",
      "/images/atlas-g-1371-2.webp",
      "/images/atlas-g-1371-3.webp",
      "/images/atlas-g-1371-4.webp"
    ],
    "summary": "40ft Ready Made Villa Design Container House. Includes insulated walls, an outdoor deck or balcony, large windows. From $8,440, sales only.",
    "description": [
      "The 40ft Ready Made Villa Design Container House is a container home you can buy outright for delivery across the lower 48 states. The starting price of $8,440 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include insulated walls, an outdoor deck or balcony, large windows, off-grid options, furnishings. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Prefab Container Build",
        "detail": "Built off site, so installation on your property is quicker than a standard build."
      },
      {
        "label": "Insulated Living Space",
        "detail": "Fitted with insulation and interior finishes as described in the specification."
      },
      {
        "label": "Permits Apply",
        "detail": "Local zoning and building codes decide where it can be placed. Check with your planning office."
      }
    ],
    "bestFor": [
      "Tiny and guest homes",
      "Short-term rentals",
      "Accessory dwellings (check permits)"
    ],
    "related": [
      "luxury-3-bedroom-prefabricated-modular-container-home-villa",
      "luxury-1bhk-duplex-container-home-with-spacious-outdoor-deck",
      "4-bedroom-2-story-luxury-modular-container-home-villa"
    ],
    "kw": "shipping container house for sale",
    "vol": "8100",
    "kd": "6"
  },
  {
    "slug": "custom-40ft-shipping-container-house",
    "categoryPath": "/shipping-container-homes-for-sale/",
    "name": "Custom 40ft Shipping Container House",
    "shortName": "Custom 40ft Shipping Container House",
    "condition": "New, Built to Order",
    "price": 7549,
    "sizeLabel": "40ft",
    "typeLabel": "container home",
    "image": "/images/atlas-custom-40ft-shipping-container-house.webp",
    "gallery": [
      "/images/atlas-g-1347-1.webp",
      "/images/atlas-g-1347-2.webp",
      "/images/atlas-g-1347-3.webp",
      "/images/atlas-g-1347-4.webp"
    ],
    "summary": "Custom 40ft Shipping Container House. Includes a kitchen, a bathroom, off-grid options. From $7,549, sales only.",
    "description": [
      "The Custom 40ft Shipping Container House is a container home you can buy outright for delivery across the lower 48 states. The starting price of $7,549 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include a kitchen, a bathroom, off-grid options, furnishings. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Prefab Container Build",
        "detail": "Built off site, so installation on your property is quicker than a standard build."
      },
      {
        "label": "Insulated Living Space",
        "detail": "Fitted with insulation and interior finishes as described in the specification."
      },
      {
        "label": "Permits Apply",
        "detail": "Local zoning and building codes decide where it can be placed. Check with your planning office."
      }
    ],
    "bestFor": [
      "Tiny and guest homes",
      "Short-term rentals",
      "Accessory dwellings (check permits)"
    ],
    "related": [
      "luxury-3-bedroom-prefabricated-modular-container-home-villa",
      "luxury-1bhk-duplex-container-home-with-spacious-outdoor-deck",
      "4-bedroom-2-story-luxury-modular-container-home-villa"
    ],
    "kw": "40ft container house",
    "vol": "720",
    "kd": "0"
  },
  {
    "slug": "custom-20ft-cozy-cabin-container-house",
    "categoryPath": "/shipping-container-cabins/",
    "name": "Custom 20ft Cozy Cabin Container House",
    "shortName": "Custom 20ft Cozy Cabin Container House",
    "condition": "New, Built to Order",
    "price": 7149,
    "sizeLabel": "20ft",
    "typeLabel": "container cabin",
    "image": "/images/atlas-custom-20ft-cozy-cabin-container-house.webp",
    "gallery": [
      "/images/atlas-g-1338-1.webp",
      "/images/atlas-g-1338-2.webp",
      "/images/atlas-g-1338-3.webp",
      "/images/atlas-g-1338-4.webp"
    ],
    "summary": "Custom 20ft Cozy Cabin Container House. Includes insulated walls, a kitchen, a bathroom. From $7,149, sales only.",
    "description": [
      "The Custom 20ft Cozy Cabin Container House is a container cabin you can buy outright for delivery across the lower 48 states. The starting price of $7,149 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include insulated walls, a kitchen, a bathroom, off-grid options. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Prefab Container Build",
        "detail": "Built off site, so installation on your property is quicker than a standard build."
      },
      {
        "label": "Insulated Living Space",
        "detail": "Fitted with insulation and interior finishes as described in the specification."
      },
      {
        "label": "Permits Apply",
        "detail": "Local zoning and building codes decide where it can be placed. Check with your planning office."
      }
    ],
    "bestFor": [
      "Tiny and guest homes",
      "Short-term rentals",
      "Accessory dwellings (check permits)"
    ],
    "related": [
      "1-bedroom-portable-cabin-with-verandah"
    ],
    "kw": "container cabin for sale",
    "vol": "140",
    "kd": "0"
  },
  {
    "slug": "fully-equipped-20ft-shipping-container-home",
    "categoryPath": "/shipping-container-homes-for-sale/",
    "name": "Fully Equipped 20ft Shipping Container Home",
    "shortName": "Fully Equipped 20ft Shipping Container Home",
    "condition": "New, Built to Order",
    "price": 6900,
    "sizeLabel": "20ft",
    "typeLabel": "container home",
    "image": "/images/atlas-fully-equipped-20ft-shipping-container-home.webp",
    "gallery": [
      "/images/atlas-g-1328-1.webp",
      "/images/atlas-g-1328-2.webp",
      "/images/atlas-g-1328-3.webp",
      "/images/atlas-g-1328-4.webp"
    ],
    "summary": "Fully Equipped 20ft Shipping Container Home. Includes heating, a kitchen, a bathroom. From $6,900, sales only.",
    "description": [
      "The Fully Equipped 20ft Shipping Container Home is a container home you can buy outright for delivery across the lower 48 states. The starting price of $6,900 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include heating, a kitchen, a bathroom, large windows, LED lighting. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Prefab Container Build",
        "detail": "Built off site, so installation on your property is quicker than a standard build."
      },
      {
        "label": "Insulated Living Space",
        "detail": "Fitted with insulation and interior finishes as described in the specification."
      },
      {
        "label": "Permits Apply",
        "detail": "Local zoning and building codes decide where it can be placed. Check with your planning office."
      }
    ],
    "bestFor": [
      "Tiny and guest homes",
      "Short-term rentals",
      "Accessory dwellings (check permits)"
    ],
    "related": [
      "luxury-3-bedroom-prefabricated-modular-container-home-villa",
      "luxury-1bhk-duplex-container-home-with-spacious-outdoor-deck",
      "4-bedroom-2-story-luxury-modular-container-home-villa"
    ],
    "kw": "20ft container home",
    "vol": "880",
    "kd": "0"
  },
  {
    "slug": "high-quality-20ft-prefab-shipping-container-house",
    "categoryPath": "/shipping-container-homes-for-sale/",
    "name": "20ft Prefab Shipping Container Home",
    "shortName": "20ft Prefab Container Home",
    "condition": "New, Built to Order",
    "price": 6430,
    "sizeLabel": "20ft",
    "typeLabel": "container home",
    "image": "/images/atlas-high-quality-20ft-prefab-shipping-container-house.webp",
    "gallery": [
      "/images/atlas-g-1323-1.webp",
      "/images/atlas-g-1323-2.webp",
      "/images/atlas-g-1323-3.webp"
    ],
    "summary": "High Quality 20ft Prefab Shipping. From $6,430, sales only.",
    "description": [
      "The High Quality 20ft Prefab Shipping Container House is a container home you can buy outright for delivery across the lower 48 states. The starting price of $6,430 is the depot price, with delivery quoted for your ZIP code.",
      "Full specifications are confirmed on your quote. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Prefab Container Build",
        "detail": "Built off site, so installation on your property is quicker than a standard build."
      },
      {
        "label": "Insulated Living Space",
        "detail": "Fitted with insulation and interior finishes as described in the specification."
      },
      {
        "label": "Permits Apply",
        "detail": "Local zoning and building codes decide where it can be placed. Check with your planning office."
      }
    ],
    "bestFor": [
      "Tiny and guest homes",
      "Short-term rentals",
      "Accessory dwellings (check permits)"
    ],
    "related": [
      "luxury-3-bedroom-prefabricated-modular-container-home-villa",
      "luxury-1bhk-duplex-container-home-with-spacious-outdoor-deck",
      "4-bedroom-2-story-luxury-modular-container-home-villa"
    ],
    "kw": "container home kit",
    "vol": "390",
    "kd": "5"
  },
  {
    "slug": "40ft-luxury-good-quality-prefab-modern-container-home",
    "categoryPath": "/shipping-container-homes-for-sale/",
    "name": "40ft Luxury Prefab Modern Container Home",
    "shortName": "40ft Luxury Prefab Container Home",
    "condition": "New, Built to Order",
    "price": 6349,
    "sizeLabel": "40ft",
    "typeLabel": "container home",
    "image": "/images/atlas-40ft-luxury-good-quality-prefab-modern-container-home.webp",
    "gallery": [
      "/images/atlas-g-1318-1.webp",
      "/images/atlas-g-1318-2.webp",
      "/images/atlas-g-1318-3.webp"
    ],
    "summary": "40ft Luxury Good Quality Prefab Modern. Includes insulated walls. From $6,349, sales only.",
    "description": [
      "The 40ft Luxury Good Quality Prefab Modern Container Home is a container home you can buy outright for delivery across the lower 48 states. The starting price of $6,349 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include insulated walls. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Prefab Container Build",
        "detail": "Built off site, so installation on your property is quicker than a standard build."
      },
      {
        "label": "Insulated Living Space",
        "detail": "Fitted with insulation and interior finishes as described in the specification."
      },
      {
        "label": "Permits Apply",
        "detail": "Local zoning and building codes decide where it can be placed. Check with your planning office."
      }
    ],
    "bestFor": [
      "Tiny and guest homes",
      "Short-term rentals",
      "Accessory dwellings (check permits)"
    ],
    "related": [
      "luxury-3-bedroom-prefabricated-modular-container-home-villa",
      "luxury-1bhk-duplex-container-home-with-spacious-outdoor-deck",
      "4-bedroom-2-story-luxury-modular-container-home-villa"
    ],
    "kw": "modular container home",
    "vol": "5400",
    "kd": "17"
  },
  {
    "slug": "custom-20ft-shipping-container-home-with-water-tank",
    "categoryPath": "/shipping-container-homes-for-sale/",
    "name": "Custom 20ft Shipping Container Home With Water Tank",
    "shortName": "Custom 20ft Shipping Container Home",
    "condition": "New, Built to Order",
    "price": 4549,
    "sizeLabel": "20ft",
    "typeLabel": "container home",
    "image": "/images/atlas-custom-20ft-shipping-container-home-with-water-tank.webp",
    "gallery": [
      "/images/atlas-g-1307-1.webp",
      "/images/atlas-g-1307-2.webp",
      "/images/atlas-g-1307-3.webp",
      "/images/atlas-g-1307-4.webp"
    ],
    "summary": "Custom 20ft Shipping Container Home. Includes a kitchen, a bathroom, a water tank. From $4,549, sales only.",
    "description": [
      "The Custom 20ft Shipping Container Home With Water Tank is a container home you can buy outright for delivery across the lower 48 states. The starting price of $4,549 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include a kitchen, a bathroom, a water tank, off-grid options. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Prefab Container Build",
        "detail": "Built off site, so installation on your property is quicker than a standard build."
      },
      {
        "label": "Insulated Living Space",
        "detail": "Fitted with insulation and interior finishes as described in the specification."
      },
      {
        "label": "Permits Apply",
        "detail": "Local zoning and building codes decide where it can be placed. Check with your planning office."
      }
    ],
    "bestFor": [
      "Tiny and guest homes",
      "Short-term rentals",
      "Accessory dwellings (check permits)"
    ],
    "related": [
      "luxury-3-bedroom-prefabricated-modular-container-home-villa",
      "luxury-1bhk-duplex-container-home-with-spacious-outdoor-deck",
      "4-bedroom-2-story-luxury-modular-container-home-villa"
    ],
    "kw": "20ft shipping container home",
    "vol": "480",
    "kd": "0"
  },
  {
    "slug": "custom-20ft-shipping-container-house",
    "categoryPath": "/shipping-container-homes-for-sale/",
    "name": "Custom 20ft Shipping Container House",
    "shortName": "Custom 20ft Shipping Container House",
    "condition": "New, Built to Order",
    "price": 4049,
    "sizeLabel": "20ft",
    "typeLabel": "container home",
    "image": "/images/atlas-custom-20ft-shipping-container-house.webp",
    "gallery": [
      "/images/atlas-g-1301-1.webp",
      "/images/atlas-g-1301-2.webp",
      "/images/atlas-g-1301-3.webp",
      "/images/atlas-g-1301-4.webp"
    ],
    "summary": "Custom 20ft Shipping Container House. Includes insulated walls, air conditioning, heating. From $4,049, sales only.",
    "description": [
      "The Custom 20ft Shipping Container House is a container home you can buy outright for delivery across the lower 48 states. The starting price of $4,049 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include insulated walls, air conditioning, heating, a bathroom, large windows. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Prefab Container Build",
        "detail": "Built off site, so installation on your property is quicker than a standard build."
      },
      {
        "label": "Insulated Living Space",
        "detail": "Fitted with insulation and interior finishes as described in the specification."
      },
      {
        "label": "Permits Apply",
        "detail": "Local zoning and building codes decide where it can be placed. Check with your planning office."
      }
    ],
    "bestFor": [
      "Tiny and guest homes",
      "Short-term rentals",
      "Accessory dwellings (check permits)"
    ],
    "related": [
      "luxury-3-bedroom-prefabricated-modular-container-home-villa",
      "luxury-1bhk-duplex-container-home-with-spacious-outdoor-deck",
      "4-bedroom-2-story-luxury-modular-container-home-villa"
    ]
  },
  {
    "slug": "20ft-modified-container-house",
    "categoryPath": "/shipping-container-homes-for-sale/",
    "name": "20ft Modified Container House",
    "shortName": "20ft Modified Container House",
    "condition": "New, Built to Order",
    "price": 13038,
    "sizeLabel": "20ft",
    "typeLabel": "container home",
    "image": "/images/atlas-20ft-modified-container-house.webp",
    "gallery": [
      "/images/atlas-g-880-1.webp",
      "/images/atlas-g-880-2.webp",
      "/images/atlas-g-880-3.webp",
      "/images/atlas-g-880-4.webp"
    ],
    "summary": "20ft Modified Container House. Includes a bathroom. From $13,038, sales only.",
    "description": [
      "The 20ft Modified Container House is a container home you can buy outright for delivery across the lower 48 states. The starting price of $13,038 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include a bathroom. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Prefab Container Build",
        "detail": "Built off site, so installation on your property is quicker than a standard build."
      },
      {
        "label": "Insulated Living Space",
        "detail": "Fitted with insulation and interior finishes as described in the specification."
      },
      {
        "label": "Permits Apply",
        "detail": "Local zoning and building codes decide where it can be placed. Check with your planning office."
      }
    ],
    "bestFor": [
      "Tiny and guest homes",
      "Short-term rentals",
      "Accessory dwellings (check permits)"
    ],
    "related": [
      "luxury-3-bedroom-prefabricated-modular-container-home-villa",
      "luxury-1bhk-duplex-container-home-with-spacious-outdoor-deck",
      "4-bedroom-2-story-luxury-modular-container-home-villa"
    ],
    "kw": "modified shipping container",
    "vol": "390",
    "kd": "0"
  },
  {
    "slug": "40ft-modified-container-house",
    "categoryPath": "/shipping-container-homes-for-sale/",
    "name": "40ft Modified Container House",
    "shortName": "40ft Modified Container House",
    "condition": "New, Built to Order",
    "price": 35100,
    "sizeLabel": "40ft",
    "typeLabel": "container home",
    "image": "/images/atlas-40ft-modified-container-house.webp",
    "gallery": [
      "/images/atlas-g-869-1.webp",
      "/images/atlas-g-869-2.webp",
      "/images/atlas-g-869-3.webp",
      "/images/atlas-g-869-4.webp"
    ],
    "summary": "40ft Modified Container House. Includes a bathroom. From $35,100, sales only.",
    "description": [
      "The 40ft Modified Container House is a container home you can buy outright for delivery across the lower 48 states. The starting price of $35,100 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include a bathroom. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Prefab Container Build",
        "detail": "Built off site, so installation on your property is quicker than a standard build."
      },
      {
        "label": "Insulated Living Space",
        "detail": "Fitted with insulation and interior finishes as described in the specification."
      },
      {
        "label": "Permits Apply",
        "detail": "Local zoning and building codes decide where it can be placed. Check with your planning office."
      }
    ],
    "bestFor": [
      "Tiny and guest homes",
      "Short-term rentals",
      "Accessory dwellings (check permits)"
    ],
    "related": [
      "luxury-3-bedroom-prefabricated-modular-container-home-villa",
      "luxury-1bhk-duplex-container-home-with-spacious-outdoor-deck",
      "4-bedroom-2-story-luxury-modular-container-home-villa"
    ]
  },
  {
    "slug": "2-story-shipping-container-home-with-rooftop-deck",
    "categoryPath": "/shipping-container-homes-for-sale/",
    "name": "2-Story Shipping Container Home with Rooftop Deck",
    "shortName": "2-Story Shipping Container Home",
    "condition": "New, Built to Order",
    "price": 17000,
    "sizeLabel": "container home",
    "typeLabel": "container home",
    "image": "/images/atlas-2-story-shipping-container-home-with-rooftop-deck.webp",
    "gallery": [
      "/images/atlas-g-155-1.webp",
      "/images/atlas-g-155-2.webp",
      "/images/atlas-g-155-3.webp"
    ],
    "summary": "2-Story Shipping Container Home. Includes an outdoor deck or balcony, a two-storey layout. From $17,000, sales only.",
    "description": [
      "The 2-Story Shipping Container Home with Rooftop Deck is a container home you can buy outright for delivery across the lower 48 states. The starting price of $17,000 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include an outdoor deck or balcony, a two-storey layout. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Prefab Container Build",
        "detail": "Built off site, so installation on your property is quicker than a standard build."
      },
      {
        "label": "Insulated Living Space",
        "detail": "Fitted with insulation and interior finishes as described in the specification."
      },
      {
        "label": "Permits Apply",
        "detail": "Local zoning and building codes decide where it can be placed. Check with your planning office."
      }
    ],
    "bestFor": [
      "Tiny and guest homes",
      "Short-term rentals",
      "Accessory dwellings (check permits)"
    ],
    "related": [
      "luxury-3-bedroom-prefabricated-modular-container-home-villa",
      "luxury-1bhk-duplex-container-home-with-spacious-outdoor-deck",
      "4-bedroom-2-story-luxury-modular-container-home-villa"
    ],
    "kw": "two story container home",
    "vol": "880",
    "kd": "0"
  },
  {
    "slug": "20ft-custom-container-office-and-tiny-home",
    "categoryPath": "/shipping-container-offices/",
    "name": "20ft Custom Container Office & Tiny Home",
    "shortName": "20ft Custom Container Office & Tiny Home",
    "condition": "New, Built to Order",
    "price": 10000,
    "sizeLabel": "20ft",
    "typeLabel": "container building",
    "image": "/images/atlas-20ft-custom-container-office-and-tiny-home.webp",
    "gallery": [
      "/images/atlas-g-150-1.webp",
      "/images/atlas-g-150-2.webp",
      "/images/atlas-g-150-3.webp"
    ],
    "summary": "20ft Custom Container Office & Tiny Home. Includes extra height (9ft 6in), large windows. From $10,000, sales only.",
    "description": [
      "The 20ft Custom Container Office & Tiny Home is a container building you can buy outright for delivery across the lower 48 states. The starting price of $10,000 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include extra height (9ft 6in), large windows. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Ready to Work In",
        "detail": "Fitted out as a workspace, with the equipment listed on the spec sheet."
      },
      {
        "label": "Insulated Steel Shell",
        "detail": "A steel container structure with insulation for year-round use."
      },
      {
        "label": "Portable",
        "detail": "Moves by flatbed and can be relocated if your plans change."
      }
    ],
    "bestFor": [
      "Job-site offices",
      "Cafes and pop-up businesses",
      "Backyard workspaces"
    ],
    "related": [
      "21ft-x-8ft-custom-cabin-office-canteen",
      "modified-20ft-container-office-with-glass-door-and-ac",
      "7ft-x-7ft-shipping-container-office"
    ]
  },
  {
    "slug": "20ft-pre-assembled-container-home",
    "categoryPath": "/shipping-container-homes-for-sale/",
    "name": "20ft Pre-Assembled Container Home",
    "shortName": "20ft Pre-Assembled Container Home",
    "condition": "New, Built to Order",
    "price": 8999,
    "sizeLabel": "20ft",
    "typeLabel": "container home",
    "image": "/images/atlas-20ft-pre-assembled-container-home.webp",
    "gallery": [
      "/images/atlas-g-145-1.webp",
      "/images/atlas-g-145-2.webp",
      "/images/atlas-g-145-3.webp"
    ],
    "summary": "20ft Pre-Assembled Container Home. Includes a kitchen, large windows, off-grid options. From $8,999, sales only.",
    "description": [
      "The 20ft Pre-Assembled Container Home is a container home you can buy outright for delivery across the lower 48 states. The starting price of $8,999 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include a kitchen, large windows, off-grid options. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Prefab Container Build",
        "detail": "Built off site, so installation on your property is quicker than a standard build."
      },
      {
        "label": "Insulated Living Space",
        "detail": "Fitted with insulation and interior finishes as described in the specification."
      },
      {
        "label": "Permits Apply",
        "detail": "Local zoning and building codes decide where it can be placed. Check with your planning office."
      }
    ],
    "bestFor": [
      "Tiny and guest homes",
      "Short-term rentals",
      "Accessory dwellings (check permits)"
    ],
    "related": [
      "luxury-3-bedroom-prefabricated-modular-container-home-villa",
      "luxury-1bhk-duplex-container-home-with-spacious-outdoor-deck",
      "4-bedroom-2-story-luxury-modular-container-home-villa"
    ],
    "kw": "off grid container home",
    "vol": "1000",
    "kd": "2"
  },
  {
    "slug": "21ft-x-8ft-custom-cabin-office-canteen",
    "categoryPath": "/shipping-container-offices/",
    "name": "21ft x 8ft Custom Cabin Office / Canteen",
    "shortName": "21ft x 8ft Custom Cabin Office / Canteen",
    "condition": "New, Built to Order",
    "price": 9090,
    "sizeLabel": "21ft",
    "typeLabel": "container building",
    "image": "/images/atlas-21ft-x-8ft-custom-cabin-office-canteen.webp",
    "gallery": [
      "/images/atlas-g-1378-1.webp",
      "/images/atlas-g-1378-2.webp",
      "/images/atlas-g-1378-3.webp",
      "/images/atlas-g-1378-4.webp"
    ],
    "summary": "21ft x 8ft Custom Cabin Office / Canteen. Includes insulated walls, large windows. From $9,090, sales only.",
    "description": [
      "The 21ft x 8ft Custom Cabin Office / Canteen is a container building you can buy outright for delivery across the lower 48 states. The starting price of $9,090 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include insulated walls, large windows. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Ready to Work In",
        "detail": "Fitted out as a workspace, with the equipment listed on the spec sheet."
      },
      {
        "label": "Insulated Steel Shell",
        "detail": "A steel container structure with insulation for year-round use."
      },
      {
        "label": "Portable",
        "detail": "Moves by flatbed and can be relocated if your plans change."
      }
    ],
    "bestFor": [
      "Job-site offices",
      "Cafes and pop-up businesses",
      "Backyard workspaces"
    ],
    "related": [
      "20ft-custom-container-office-and-tiny-home",
      "modified-20ft-container-office-with-glass-door-and-ac",
      "7ft-x-7ft-shipping-container-office"
    ]
  },
  {
    "slug": "converted-40ft-shipping-container",
    "categoryPath": "/40ft-shipping-containers-for-sale/",
    "name": "Converted 40ft Shipping Container",
    "shortName": "Converted 40ft Shipping Container",
    "condition": "New",
    "price": 7849,
    "sizeLabel": "40ft",
    "typeLabel": "shipping container",
    "image": "/images/atlas-converted-40ft-shipping-container.webp",
    "gallery": [
      "/images/atlas-g-1357-1.webp",
      "/images/atlas-g-1357-2.webp",
      "/images/atlas-g-1357-3.webp",
      "/images/atlas-g-1357-4.webp"
    ],
    "summary": "Converted 40ft Shipping Container. Includes insulated walls, heating, large windows. From $7,849, sales only.",
    "description": [
      "The Converted 40ft Shipping Container is a shipping container you can buy outright for delivery across the lower 48 states. The starting price of $7,849 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include insulated walls, heating, large windows, LED lighting. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Build",
        "detail": "Corten steel shell with ISO corner castings, suited to storage, transport or conversion."
      },
      {
        "label": "Secure Doors",
        "detail": "Lockable door gear to protect what you store."
      },
      {
        "label": "Delivered in the Lower 48",
        "detail": "We arrange flatbed or tilt-bed delivery to your site."
      }
    ],
    "bestFor": [
      "Secure storage",
      "Job-site and farm use",
      "Conversion projects"
    ],
    "related": [
      "used-40ft-shipping-container",
      "40ft-new-shipping-container",
      "40ft-storage-container-with-roll-up-side-doors"
    ]
  },
  {
    "slug": "modified-20ft-container-office-with-glass-door-and-ac",
    "categoryPath": "/shipping-container-offices/",
    "name": "Modified 20ft container office with Glass door & AC",
    "shortName": "Modified 20ft container office",
    "condition": "New, Built to Order",
    "price": 5549,
    "sizeLabel": "20ft",
    "typeLabel": "container building",
    "image": "/images/atlas-modified-20ft-container-office-with-glass-door-and-ac.webp",
    "gallery": [
      "/images/atlas-g-1313-1.webp",
      "/images/atlas-g-1313-2.webp",
      "/images/atlas-g-1313-3.webp"
    ],
    "summary": "Modified 20ft container office. Includes air conditioning, large windows. From $5,549, sales only.",
    "description": [
      "The Modified 20ft container office with Glass door & AC is a container building you can buy outright for delivery across the lower 48 states. The starting price of $5,549 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include air conditioning, large windows. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Ready to Work In",
        "detail": "Fitted out as a workspace, with the equipment listed on the spec sheet."
      },
      {
        "label": "Insulated Steel Shell",
        "detail": "A steel container structure with insulation for year-round use."
      },
      {
        "label": "Portable",
        "detail": "Moves by flatbed and can be relocated if your plans change."
      }
    ],
    "bestFor": [
      "Job-site offices",
      "Cafes and pop-up businesses",
      "Backyard workspaces"
    ],
    "related": [
      "20ft-custom-container-office-and-tiny-home",
      "21ft-x-8ft-custom-cabin-office-canteen",
      "7ft-x-7ft-shipping-container-office"
    ],
    "kw": "20ft container office",
    "vol": "320",
    "kd": "0"
  },
  {
    "slug": "7ft-x-7ft-shipping-container-office",
    "categoryPath": "/shipping-container-offices/",
    "name": "7ft x 7ft Shipping Container Office",
    "shortName": "7ft x 7ft Shipping Container Office",
    "condition": "New, Built to Order",
    "price": 2889,
    "sizeLabel": "7ft",
    "typeLabel": "container building",
    "image": "/images/atlas-7ft-x-7ft-shipping-container-office.webp",
    "gallery": [
      "/images/atlas-g-1293-1.webp",
      "/images/atlas-g-1293-2.webp",
      "/images/atlas-g-1293-3.webp",
      "/images/atlas-g-1293-4.webp"
    ],
    "summary": "7ft x 7ft Shipping Container Office. Includes insulated walls, air conditioning, off-grid options. From $2,889, sales only.",
    "description": [
      "The 7ft x 7ft Shipping Container Office is a container building you can buy outright for delivery across the lower 48 states. The starting price of $2,889 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include insulated walls, air conditioning, off-grid options, LED lighting. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Ready to Work In",
        "detail": "Fitted out as a workspace, with the equipment listed on the spec sheet."
      },
      {
        "label": "Insulated Steel Shell",
        "detail": "A steel container structure with insulation for year-round use."
      },
      {
        "label": "Portable",
        "detail": "Moves by flatbed and can be relocated if your plans change."
      }
    ],
    "bestFor": [
      "Job-site offices",
      "Cafes and pop-up businesses",
      "Backyard workspaces"
    ],
    "related": [
      "20ft-custom-container-office-and-tiny-home",
      "21ft-x-8ft-custom-cabin-office-canteen",
      "modified-20ft-container-office-with-glass-door-and-ac"
    ]
  },
  {
    "slug": "10ft-modibox-portable-office-container",
    "categoryPath": "/shipping-container-offices/",
    "name": "10ft ModiBox Portable Office Container",
    "shortName": "10ft ModiBox Portable Office Container",
    "condition": "New, Built to Order",
    "price": 3308,
    "sizeLabel": "10ft",
    "typeLabel": "container building",
    "image": "/images/atlas-10ft-modibox-portable-office-container.webp",
    "gallery": [
      "/images/atlas-g-1021-1.webp",
      "/images/atlas-g-1021-2.webp",
      "/images/atlas-g-1021-3.webp",
      "/images/atlas-g-1021-4.webp"
    ],
    "summary": "10ft ModiBox Portable Office Container. Includes insulated walls, air conditioning, LED lighting. From $3,308, sales only.",
    "description": [
      "The 10ft ModiBox Portable Office Container is a container building you can buy outright for delivery across the lower 48 states. The starting price of $3,308 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include insulated walls, air conditioning, LED lighting. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Ready to Work In",
        "detail": "Fitted out as a workspace, with the equipment listed on the spec sheet."
      },
      {
        "label": "Insulated Steel Shell",
        "detail": "A steel container structure with insulation for year-round use."
      },
      {
        "label": "Portable",
        "detail": "Moves by flatbed and can be relocated if your plans change."
      }
    ],
    "bestFor": [
      "Job-site offices",
      "Cafes and pop-up businesses",
      "Backyard workspaces"
    ],
    "related": [
      "20ft-custom-container-office-and-tiny-home",
      "21ft-x-8ft-custom-cabin-office-canteen",
      "modified-20ft-container-office-with-glass-door-and-ac"
    ],
    "kw": "portable office container",
    "vol": "170",
    "kd": "0"
  },
  {
    "slug": "15ft-modibox-office",
    "categoryPath": "/shipping-container-offices/",
    "name": "15ft ModiBox Office",
    "shortName": "15ft ModiBox Office",
    "condition": "New, Built to Order",
    "price": 2565,
    "sizeLabel": "15ft",
    "typeLabel": "container building",
    "image": "/images/atlas-15ft-modibox-office.webp",
    "gallery": [
      "/images/atlas-g-1014-1.webp",
      "/images/atlas-g-1014-2.webp",
      "/images/atlas-g-1014-3.webp",
      "/images/atlas-g-1014-4.webp"
    ],
    "summary": "15ft ModiBox Office. Includes insulated walls, large windows. From $2,565, sales only.",
    "description": [
      "The 15ft ModiBox Office is a container building you can buy outright for delivery across the lower 48 states. The starting price of $2,565 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include insulated walls, large windows. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Ready to Work In",
        "detail": "Fitted out as a workspace, with the equipment listed on the spec sheet."
      },
      {
        "label": "Insulated Steel Shell",
        "detail": "A steel container structure with insulation for year-round use."
      },
      {
        "label": "Portable",
        "detail": "Moves by flatbed and can be relocated if your plans change."
      }
    ],
    "bestFor": [
      "Job-site offices",
      "Cafes and pop-up businesses",
      "Backyard workspaces"
    ],
    "related": [
      "20ft-custom-container-office-and-tiny-home",
      "21ft-x-8ft-custom-cabin-office-canteen",
      "modified-20ft-container-office-with-glass-door-and-ac"
    ]
  },
  {
    "slug": "20ft-modibox-office",
    "categoryPath": "/shipping-container-offices/",
    "name": "20ft ModiBox Office",
    "shortName": "20ft ModiBox Office",
    "condition": "New, Built to Order",
    "price": 3429,
    "sizeLabel": "20ft",
    "typeLabel": "container building",
    "image": "/images/atlas-20ft-modibox-office.webp",
    "gallery": [
      "/images/atlas-g-1003-1.webp",
      "/images/atlas-g-1003-2.webp",
      "/images/atlas-g-1003-3.webp",
      "/images/atlas-g-1003-4.webp"
    ],
    "summary": "20ft ModiBox Office. Includes insulated walls. From $3,429, sales only.",
    "description": [
      "The 20ft ModiBox Office is a container building you can buy outright for delivery across the lower 48 states. The starting price of $3,429 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include insulated walls. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Ready to Work In",
        "detail": "Fitted out as a workspace, with the equipment listed on the spec sheet."
      },
      {
        "label": "Insulated Steel Shell",
        "detail": "A steel container structure with insulation for year-round use."
      },
      {
        "label": "Portable",
        "detail": "Moves by flatbed and can be relocated if your plans change."
      }
    ],
    "bestFor": [
      "Job-site offices",
      "Cafes and pop-up businesses",
      "Backyard workspaces"
    ],
    "related": [
      "20ft-custom-container-office-and-tiny-home",
      "21ft-x-8ft-custom-cabin-office-canteen",
      "modified-20ft-container-office-with-glass-door-and-ac"
    ]
  },
  {
    "slug": "30ft-modibox-office",
    "categoryPath": "/shipping-container-offices/",
    "name": "30ft ModiBox Office",
    "shortName": "30ft ModiBox Office",
    "condition": "New, Built to Order",
    "price": 3690,
    "sizeLabel": "30ft",
    "typeLabel": "container building",
    "image": "/images/atlas-30ft-modibox-office.webp",
    "gallery": [
      "/images/atlas-g-992-1.webp",
      "/images/atlas-g-992-2.webp",
      "/images/atlas-g-992-3.webp",
      "/images/atlas-g-992-4.webp"
    ],
    "summary": "30ft ModiBox Office. Includes insulated walls, large windows. From $3,690, sales only.",
    "description": [
      "The 30ft ModiBox Office is a container building you can buy outright for delivery across the lower 48 states. The starting price of $3,690 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include insulated walls, large windows. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Ready to Work In",
        "detail": "Fitted out as a workspace, with the equipment listed on the spec sheet."
      },
      {
        "label": "Insulated Steel Shell",
        "detail": "A steel container structure with insulation for year-round use."
      },
      {
        "label": "Portable",
        "detail": "Moves by flatbed and can be relocated if your plans change."
      }
    ],
    "bestFor": [
      "Job-site offices",
      "Cafes and pop-up businesses",
      "Backyard workspaces"
    ],
    "related": [
      "20ft-custom-container-office-and-tiny-home",
      "21ft-x-8ft-custom-cabin-office-canteen",
      "modified-20ft-container-office-with-glass-door-and-ac"
    ],
    "kw": "30 foot shipping container",
    "vol": "320",
    "kd": "0"
  },
  {
    "slug": "shipping-container-cafe",
    "categoryPath": "/shipping-container-offices/",
    "name": "Shipping Container Cafe",
    "shortName": "Shipping Container Cafe",
    "condition": "New, Built to Order",
    "price": 3443,
    "sizeLabel": "container building",
    "typeLabel": "container building",
    "image": "/images/atlas-shipping-container-cafe.webp",
    "gallery": [
      "/images/atlas-g-979-1.webp",
      "/images/atlas-g-979-2.webp",
      "/images/atlas-g-979-3.webp",
      "/images/atlas-g-979-4.webp"
    ],
    "summary": "Shipping Container Cafe. Includes insulated walls, one-trip condition, large windows. From $3,443, sales only.",
    "description": [
      "The Shipping Container Cafe is a container building you can buy outright for delivery across the lower 48 states. The starting price of $3,443 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include insulated walls, one-trip condition, large windows. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Ready to Work In",
        "detail": "Fitted out as a workspace, with the equipment listed on the spec sheet."
      },
      {
        "label": "Insulated Steel Shell",
        "detail": "A steel container structure with insulation for year-round use."
      },
      {
        "label": "Portable",
        "detail": "Moves by flatbed and can be relocated if your plans change."
      }
    ],
    "bestFor": [
      "Job-site offices",
      "Cafes and pop-up businesses",
      "Backyard workspaces"
    ],
    "related": [
      "20ft-custom-container-office-and-tiny-home",
      "21ft-x-8ft-custom-cabin-office-canteen",
      "modified-20ft-container-office-with-glass-door-and-ac"
    ],
    "kw": "container shop",
    "vol": "1300",
    "kd": "9"
  },
  {
    "slug": "20ft-mobile-office-container",
    "categoryPath": "/shipping-container-offices/",
    "name": "20ft Mobile Office Container",
    "shortName": "20ft Mobile Office Container",
    "condition": "New, Built to Order",
    "price": 3767,
    "sizeLabel": "20ft",
    "typeLabel": "container building",
    "image": "/images/atlas-20ft-mobile-office-container.webp",
    "gallery": [
      "/images/atlas-g-903-1.webp",
      "/images/atlas-g-903-2.webp",
      "/images/atlas-g-903-3.webp",
      "/images/atlas-g-903-4.webp"
    ],
    "summary": "20ft Mobile Office Container. Includes insulated walls, air conditioning, extra height (9ft 6in). From $3,767, sales only.",
    "description": [
      "The 20ft Mobile Office Container is a container building you can buy outright for delivery across the lower 48 states. The starting price of $3,767 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include insulated walls, air conditioning, extra height (9ft 6in), large windows, LED lighting. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Ready to Work In",
        "detail": "Fitted out as a workspace, with the equipment listed on the spec sheet."
      },
      {
        "label": "Insulated Steel Shell",
        "detail": "A steel container structure with insulation for year-round use."
      },
      {
        "label": "Portable",
        "detail": "Moves by flatbed and can be relocated if your plans change."
      }
    ],
    "bestFor": [
      "Job-site offices",
      "Cafes and pop-up businesses",
      "Backyard workspaces"
    ],
    "related": [
      "20ft-custom-container-office-and-tiny-home",
      "21ft-x-8ft-custom-cabin-office-canteen",
      "modified-20ft-container-office-with-glass-door-and-ac"
    ],
    "kw": "mobile office container",
    "vol": "210",
    "kd": "5"
  },
  {
    "slug": "20ft-shipping-container-mobile-office",
    "categoryPath": "/shipping-container-offices/",
    "name": "20ft Shipping Container Mobile Office",
    "shortName": "20ft Shipping Container Mobile Office",
    "condition": "New, Built to Order",
    "price": 2997,
    "sizeLabel": "20ft",
    "typeLabel": "container building",
    "image": "/images/atlas-20ft-shipping-container-mobile-office.webp",
    "gallery": [
      "/images/atlas-g-888-1.webp",
      "/images/atlas-g-888-2.webp",
      "/images/atlas-g-888-3.webp",
      "/images/atlas-g-888-4.webp"
    ],
    "summary": "20ft Shipping Container Mobile Office. Includes insulated walls, large windows. From $2,997, sales only.",
    "description": [
      "The 20ft Shipping Container Mobile Office is a container building you can buy outright for delivery across the lower 48 states. The starting price of $2,997 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include insulated walls, large windows. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Ready to Work In",
        "detail": "Fitted out as a workspace, with the equipment listed on the spec sheet."
      },
      {
        "label": "Insulated Steel Shell",
        "detail": "A steel container structure with insulation for year-round use."
      },
      {
        "label": "Portable",
        "detail": "Moves by flatbed and can be relocated if your plans change."
      }
    ],
    "bestFor": [
      "Job-site offices",
      "Cafes and pop-up businesses",
      "Backyard workspaces"
    ],
    "related": [
      "20ft-custom-container-office-and-tiny-home",
      "21ft-x-8ft-custom-cabin-office-canteen",
      "modified-20ft-container-office-with-glass-door-and-ac"
    ],
    "kw": "portable office for sale",
    "vol": "170",
    "kd": "0"
  },
  {
    "slug": "20ft-high-cube-custom-shipping-container-conversion",
    "categoryPath": "/20ft-shipping-containers-for-sale/",
    "name": "20ft High Cube Custom Shipping Container Conversion",
    "shortName": "20ft High Cube Custom Shipping",
    "condition": "New / One-Trip",
    "price": 6849,
    "sizeLabel": "20ft",
    "typeLabel": "shipping container",
    "image": "/images/atlas-20ft-high-cube-custom-shipping-container-conversion.webp",
    "gallery": [
      "/images/atlas-g-171-1.webp",
      "/images/atlas-g-171-2.webp",
      "/images/atlas-g-171-3.webp",
      "/images/atlas-g-171-4.webp"
    ],
    "summary": "20ft High Cube Custom Shipping. Includes insulated walls, roll-up doors, extra height (9ft 6in). From $6,849, sales only.",
    "description": [
      "The 20ft High Cube Custom Shipping Container Conversion is a shipping container you can buy outright for delivery across the lower 48 states. The starting price of $6,849 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include insulated walls, roll-up doors, extra height (9ft 6in), large windows. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Build",
        "detail": "Corten steel shell with ISO corner castings, suited to storage, transport or conversion."
      },
      {
        "label": "Secure Doors",
        "detail": "Lockable door gear to protect what you store."
      },
      {
        "label": "Delivered in the Lower 48",
        "detail": "We arrange flatbed or tilt-bed delivery to your site."
      }
    ],
    "bestFor": [
      "Secure storage",
      "Job-site and farm use",
      "Conversion projects"
    ],
    "related": [
      "20ft-custom-shipping-container-conversion",
      "20ft-used-shipping-container-1091",
      "20ft-once-used-shipping-container"
    ]
  },
  {
    "slug": "20ft-custom-shipping-container-conversion",
    "categoryPath": "/20ft-shipping-containers-for-sale/",
    "name": "20ft Custom Shipping Container Conversion",
    "shortName": "20ft Custom Shipping Container Conversion",
    "condition": "New / One-Trip",
    "price": 9045,
    "sizeLabel": "20ft",
    "typeLabel": "shipping container",
    "image": "/images/atlas-20ft-custom-shipping-container-conversion.webp",
    "gallery": [
      "/images/atlas-g-140-1.webp",
      "/images/atlas-g-140-2.webp",
      "/images/atlas-g-140-3.webp"
    ],
    "summary": "20ft Custom Shipping Container Conversion. Includes insulated walls, roll-up doors, extra height (9ft 6in). From $9,045, sales only.",
    "description": [
      "The 20ft Custom Shipping Container Conversion is a shipping container you can buy outright for delivery across the lower 48 states. The starting price of $9,045 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include insulated walls, roll-up doors, extra height (9ft 6in), large windows. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Build",
        "detail": "Corten steel shell with ISO corner castings, suited to storage, transport or conversion."
      },
      {
        "label": "Secure Doors",
        "detail": "Lockable door gear to protect what you store."
      },
      {
        "label": "Delivered in the Lower 48",
        "detail": "We arrange flatbed or tilt-bed delivery to your site."
      }
    ],
    "bestFor": [
      "Secure storage",
      "Job-site and farm use",
      "Conversion projects"
    ],
    "related": [
      "20ft-high-cube-custom-shipping-container-conversion",
      "20ft-used-shipping-container-1091",
      "20ft-once-used-shipping-container"
    ],
    "kw": "custom shipping container",
    "vol": "590",
    "kd": "14"
  },
  {
    "slug": "40ft-shipping-container-pool",
    "categoryPath": "/shipping-container-pools/",
    "name": "40ft Shipping Container Pool",
    "shortName": "40ft Shipping Container Pool",
    "condition": "New, Built to Order",
    "price": 9995,
    "sizeLabel": "40ft",
    "typeLabel": "container pool",
    "image": "/images/atlas-40ft-shipping-container-pool.webp",
    "gallery": [
      "/images/atlas-g-1285-1.webp",
      "/images/atlas-g-1285-2.webp",
      "/images/atlas-g-1285-3.webp",
      "/images/atlas-g-1285-4.webp"
    ],
    "summary": "40ft Shipping Container Pool. Includes insulated walls, extra height (9ft 6in), LED lighting. From $9,995, sales only.",
    "description": [
      "The 40ft Shipping Container Pool is a container pool you can buy outright for delivery across the lower 48 states. The starting price of $9,995 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include insulated walls, extra height (9ft 6in), LED lighting. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Shell",
        "detail": "A reinforced steel container converted into a pool."
      },
      {
        "label": "Delivered Ready to Place",
        "detail": "Arrives complete and sets onto a prepared level pad."
      },
      {
        "label": "Backyard Centrepiece",
        "detail": "A compact pool option for small and medium yards."
      }
    ],
    "bestFor": [
      "Backyard pools",
      "Rental and resort properties",
      "Small-space swimming"
    ],
    "related": [
      "20ft-shipping-container-swimming-pool-with-convenient-side-staircase",
      "20ft-portable-container-swimming-pool",
      "20ft-mobile-foldable-fully-automatic-container-swimming-pool"
    ],
    "kw": "shipping container swimming pool",
    "vol": "1300",
    "kd": "9"
  },
  {
    "slug": "20ft-shipping-container-swimming-pool-with-convenient-side-staircase",
    "categoryPath": "/shipping-container-pools/",
    "name": "20ft Shipping Container Swimming Pool with Convenient Side Staircase",
    "shortName": "20ft Shipping Container Swimming Pool",
    "condition": "New, Built to Order",
    "price": 6500,
    "sizeLabel": "20ft",
    "typeLabel": "container pool",
    "image": "/images/atlas-20ft-shipping-container-swimming-pool-with-convenient-side-s.webp",
    "gallery": [
      "/images/atlas-g-1274-1.webp",
      "/images/atlas-g-1274-2.webp",
      "/images/atlas-g-1274-3.webp",
      "/images/atlas-g-1274-4.webp"
    ],
    "summary": "20ft Shipping Container Swimming Pool. Includes heating, LED lighting. From $6,500, sales only.",
    "description": [
      "The 20ft Shipping Container Swimming Pool with Convenient Side Staircase is a container pool you can buy outright for delivery across the lower 48 states. The starting price of $6,500 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include heating, LED lighting. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Shell",
        "detail": "A reinforced steel container converted into a pool."
      },
      {
        "label": "Delivered Ready to Place",
        "detail": "Arrives complete and sets onto a prepared level pad."
      },
      {
        "label": "Backyard Centrepiece",
        "detail": "A compact pool option for small and medium yards."
      }
    ],
    "bestFor": [
      "Backyard pools",
      "Rental and resort properties",
      "Small-space swimming"
    ],
    "related": [
      "40ft-shipping-container-pool",
      "20ft-portable-container-swimming-pool",
      "20ft-mobile-foldable-fully-automatic-container-swimming-pool"
    ],
    "kw": "container pool for sale",
    "vol": "720",
    "kd": "5"
  },
  {
    "slug": "20ft-portable-container-swimming-pool",
    "categoryPath": "/shipping-container-pools/",
    "name": "20ft Portable Container Swimming Pool",
    "shortName": "20ft Portable Container Swimming Pool",
    "condition": "New, Built to Order",
    "price": 6450,
    "sizeLabel": "20ft",
    "typeLabel": "container pool",
    "image": "/images/atlas-20ft-portable-container-swimming-pool.webp",
    "gallery": [
      "/images/atlas-g-1257-1.webp",
      "/images/atlas-g-1257-2.webp",
      "/images/atlas-g-1257-3.webp",
      "/images/atlas-g-1257-4.webp"
    ],
    "summary": "20ft Portable Container Swimming Pool. Includes heating, an outdoor deck or balcony, LED lighting. From $6,450, sales only.",
    "description": [
      "The 20ft Portable Container Swimming Pool is a container pool you can buy outright for delivery across the lower 48 states. The starting price of $6,450 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include heating, an outdoor deck or balcony, LED lighting. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Shell",
        "detail": "A reinforced steel container converted into a pool."
      },
      {
        "label": "Delivered Ready to Place",
        "detail": "Arrives complete and sets onto a prepared level pad."
      },
      {
        "label": "Backyard Centrepiece",
        "detail": "A compact pool option for small and medium yards."
      }
    ],
    "bestFor": [
      "Backyard pools",
      "Rental and resort properties",
      "Small-space swimming"
    ],
    "related": [
      "40ft-shipping-container-pool",
      "20ft-shipping-container-swimming-pool-with-convenient-side-staircase",
      "20ft-mobile-foldable-fully-automatic-container-swimming-pool"
    ]
  },
  {
    "slug": "20ft-mobile-foldable-fully-automatic-container-swimming-pool",
    "categoryPath": "/shipping-container-pools/",
    "name": "20ft Foldable Container Swimming Pool",
    "shortName": "20ft Foldable Container Pool",
    "condition": "New, Built to Order",
    "price": 6900,
    "sizeLabel": "20ft",
    "typeLabel": "container pool",
    "image": "/images/atlas-20ft-mobile-foldable-fully-automatic-container-swimming-pool.webp",
    "gallery": [],
    "summary": "20ft Mobile Foldable Fully Automatic. From $6,900, sales only.",
    "description": [
      "The 20ft Mobile Foldable Fully Automatic Container Swimming Pool is a container pool you can buy outright for delivery across the lower 48 states. The starting price of $6,900 is the depot price, with delivery quoted for your ZIP code.",
      "Full specifications are confirmed on your quote. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Shell",
        "detail": "A reinforced steel container converted into a pool."
      },
      {
        "label": "Delivered Ready to Place",
        "detail": "Arrives complete and sets onto a prepared level pad."
      },
      {
        "label": "Backyard Centrepiece",
        "detail": "A compact pool option for small and medium yards."
      }
    ],
    "bestFor": [
      "Backyard pools",
      "Rental and resort properties",
      "Small-space swimming"
    ],
    "related": [
      "40ft-shipping-container-pool",
      "20ft-shipping-container-swimming-pool-with-convenient-side-staircase",
      "20ft-portable-container-swimming-pool"
    ]
  },
  {
    "slug": "20ft-luxury-container-swimming-pool-with-glass-viewing-panel",
    "categoryPath": "/shipping-container-pools/",
    "name": "20ft Luxury Container Swimming Pool with Glass Viewing Panel",
    "shortName": "20ft Luxury Container Swimming Pool",
    "condition": "New, Built to Order",
    "price": 23000,
    "sizeLabel": "20ft",
    "typeLabel": "container pool",
    "image": "/images/atlas-20ft-luxury-container-swimming-pool-with-glass-viewing-panel.webp",
    "gallery": [
      "/images/atlas-g-1239-1.webp",
      "/images/atlas-g-1239-2.webp",
      "/images/atlas-g-1239-3.webp",
      "/images/atlas-g-1239-4.webp"
    ],
    "summary": "20ft Luxury Container Swimming Pool. Includes large windows. From $23,000, sales only.",
    "description": [
      "The 20ft Luxury Container Swimming Pool with Glass Viewing Panel is a container pool you can buy outright for delivery across the lower 48 states. The starting price of $23,000 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include large windows. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Shell",
        "detail": "A reinforced steel container converted into a pool."
      },
      {
        "label": "Delivered Ready to Place",
        "detail": "Arrives complete and sets onto a prepared level pad."
      },
      {
        "label": "Backyard Centrepiece",
        "detail": "A compact pool option for small and medium yards."
      }
    ],
    "bestFor": [
      "Backyard pools",
      "Rental and resort properties",
      "Small-space swimming"
    ],
    "related": [
      "40ft-shipping-container-pool",
      "20ft-shipping-container-swimming-pool-with-convenient-side-staircase",
      "20ft-portable-container-swimming-pool"
    ]
  },
  {
    "slug": "12m-40ft-portable-container-swimming-pool",
    "categoryPath": "/shipping-container-pools/",
    "name": "12M / 40ft Portable Container Swimming Pool",
    "shortName": "12M / 40ft Portable Container Swimming Pool",
    "condition": "New, Built to Order",
    "price": 14700,
    "sizeLabel": "40ft",
    "typeLabel": "container pool",
    "image": "/images/atlas-12m-40ft-portable-container-swimming-pool.webp",
    "gallery": [
      "/images/atlas-g-1222-1.webp",
      "/images/atlas-g-1222-2.webp",
      "/images/atlas-g-1222-3.webp",
      "/images/atlas-g-1222-4.webp"
    ],
    "summary": "12M / 40ft Portable Container Swimming Pool. Includes heating, an outdoor deck or balcony, large windows. From $14,700, sales only.",
    "description": [
      "The 12M / 40ft Portable Container Swimming Pool is a container pool you can buy outright for delivery across the lower 48 states. The starting price of $14,700 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include heating, an outdoor deck or balcony, large windows. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Shell",
        "detail": "A reinforced steel container converted into a pool."
      },
      {
        "label": "Delivered Ready to Place",
        "detail": "Arrives complete and sets onto a prepared level pad."
      },
      {
        "label": "Backyard Centrepiece",
        "detail": "A compact pool option for small and medium yards."
      }
    ],
    "bestFor": [
      "Backyard pools",
      "Rental and resort properties",
      "Small-space swimming"
    ],
    "related": [
      "40ft-shipping-container-pool",
      "20ft-shipping-container-swimming-pool-with-convenient-side-staircase",
      "20ft-portable-container-swimming-pool"
    ]
  },
  {
    "slug": "10ft-used-shipping-container-1132",
    "categoryPath": "/10ft-shipping-containers-for-sale/",
    "name": "10ft Used Shipping Container",
    "shortName": "10ft Used Shipping Container",
    "condition": "Used",
    "price": 1575,
    "sizeLabel": "10ft",
    "typeLabel": "shipping container",
    "image": "/images/atlas-10ft-used-shipping-container-1132.webp",
    "gallery": [],
    "summary": "10ft Used Shipping Container. Includes roll-up doors, lockbox protection. From $1,575, sales only.",
    "description": [
      "The 10ft Used Shipping Container is a shipping container you can buy outright for delivery across the lower 48 states. The starting price of $1,575 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include roll-up doors, lockbox protection. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Build",
        "detail": "Corten steel shell with ISO corner castings, suited to storage, transport or conversion."
      },
      {
        "label": "Secure Doors",
        "detail": "Lockable door gear to protect what you store."
      },
      {
        "label": "Delivered in the Lower 48",
        "detail": "We arrange flatbed or tilt-bed delivery to your site."
      }
    ],
    "bestFor": [
      "Secure storage",
      "Job-site and farm use",
      "Conversion projects"
    ],
    "related": [
      "new-10ft-shipping-container",
      "10-hc-used-container-with-rollup-door",
      "10ft-high-cube-shipping-container"
    ],
    "kw": "10ft shipping container",
    "vol": "1900",
    "kd": "0"
  },
  {
    "slug": "new-10ft-shipping-container",
    "categoryPath": "/10ft-shipping-containers-for-sale/",
    "name": "New 10ft Shipping Container",
    "shortName": "New 10ft Shipping Container",
    "condition": "New / One-Trip",
    "price": 1755,
    "sizeLabel": "10ft",
    "typeLabel": "shipping container",
    "image": "/images/atlas-new-10ft-shipping-container.webp",
    "gallery": [],
    "summary": "New 10ft Shipping Container. Includes roll-up doors, lockbox protection. From $1,755, sales only.",
    "description": [
      "The New 10ft Shipping Container is a shipping container you can buy outright for delivery across the lower 48 states. The starting price of $1,755 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include roll-up doors, lockbox protection. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Build",
        "detail": "Corten steel shell with ISO corner castings, suited to storage, transport or conversion."
      },
      {
        "label": "Secure Doors",
        "detail": "Lockable door gear to protect what you store."
      },
      {
        "label": "Delivered in the Lower 48",
        "detail": "We arrange flatbed or tilt-bed delivery to your site."
      }
    ],
    "bestFor": [
      "Secure storage",
      "Job-site and farm use",
      "Conversion projects"
    ],
    "related": [
      "10ft-used-shipping-container-1132",
      "10-hc-used-container-with-rollup-door",
      "10ft-high-cube-shipping-container"
    ],
    "kw": "10ft container for sale",
    "vol": "110",
    "kd": "0"
  },
  {
    "slug": "10-hc-used-container-with-rollup-door",
    "categoryPath": "/10ft-shipping-containers-for-sale/",
    "name": "10' HC Used Container With Rollup Door",
    "shortName": "10' HC Used Container With Rollup Door",
    "condition": "Used",
    "price": 1397,
    "sizeLabel": "shipping container",
    "typeLabel": "shipping container",
    "image": "/images/atlas-10-hc-used-container-with-rollup-door.webp",
    "gallery": [
      "/images/atlas-g-914-1.webp",
      "/images/atlas-g-914-2.webp",
      "/images/atlas-g-914-3.webp",
      "/images/atlas-g-914-4.webp"
    ],
    "summary": "10' HC Used Container With Rollup Door. Includes roll-up doors, extra height (9ft 6in). From $1,397, sales only.",
    "description": [
      "The 10' HC Used Container With Rollup Door is a shipping container you can buy outright for delivery across the lower 48 states. The starting price of $1,397 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include roll-up doors, extra height (9ft 6in). Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Build",
        "detail": "Corten steel shell with ISO corner castings, suited to storage, transport or conversion."
      },
      {
        "label": "Secure Doors",
        "detail": "Lockable door gear to protect what you store."
      },
      {
        "label": "Delivered in the Lower 48",
        "detail": "We arrange flatbed or tilt-bed delivery to your site."
      }
    ],
    "bestFor": [
      "Secure storage",
      "Job-site and farm use",
      "Conversion projects"
    ],
    "related": [
      "10ft-used-shipping-container-1132",
      "new-10ft-shipping-container",
      "10ft-high-cube-shipping-container"
    ]
  },
  {
    "slug": "10ft-high-cube-shipping-container",
    "categoryPath": "/10ft-shipping-containers-for-sale/",
    "name": "10ft High Cube Shipping Container",
    "shortName": "10ft High Cube Shipping Container",
    "condition": "New",
    "price": 1485,
    "sizeLabel": "10ft",
    "typeLabel": "shipping container",
    "image": "/images/atlas-10ft-high-cube-shipping-container.webp",
    "gallery": [
      "/images/atlas-g-713-1.webp",
      "/images/atlas-g-713-2.webp",
      "/images/atlas-g-713-3.webp",
      "/images/atlas-g-713-4.webp"
    ],
    "summary": "10ft High Cube Shipping Container. Includes extra height (9ft 6in). From $1,485, sales only.",
    "description": [
      "The 10ft High Cube Shipping Container is a shipping container you can buy outright for delivery across the lower 48 states. The starting price of $1,485 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include extra height (9ft 6in). Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Build",
        "detail": "Corten steel shell with ISO corner castings, suited to storage, transport or conversion."
      },
      {
        "label": "Secure Doors",
        "detail": "Lockable door gear to protect what you store."
      },
      {
        "label": "Delivered in the Lower 48",
        "detail": "We arrange flatbed or tilt-bed delivery to your site."
      }
    ],
    "bestFor": [
      "Secure storage",
      "Job-site and farm use",
      "Conversion projects"
    ],
    "related": [
      "10ft-used-shipping-container-1132",
      "new-10ft-shipping-container",
      "10-hc-used-container-with-rollup-door"
    ]
  },
  {
    "slug": "10ft-shipping-container-with-roll-up-door",
    "categoryPath": "/10ft-shipping-containers-for-sale/",
    "name": "10ft Shipping Container With Roll Up Door",
    "shortName": "10ft Shipping Container With Roll Up Door",
    "condition": "New",
    "price": 1620,
    "sizeLabel": "10ft",
    "typeLabel": "shipping container",
    "image": "/images/atlas-10ft-shipping-container-with-roll-up-door.webp",
    "gallery": [
      "/images/atlas-g-708-1.webp",
      "/images/atlas-g-708-2.webp",
      "/images/atlas-g-708-3.webp"
    ],
    "summary": "10ft Shipping Container With Roll Up Door. Includes roll-up doors. From $1,620, sales only.",
    "description": [
      "The 10ft Shipping Container With Roll Up Door is a shipping container you can buy outright for delivery across the lower 48 states. The starting price of $1,620 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include roll-up doors. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Build",
        "detail": "Corten steel shell with ISO corner castings, suited to storage, transport or conversion."
      },
      {
        "label": "Secure Doors",
        "detail": "Lockable door gear to protect what you store."
      },
      {
        "label": "Delivered in the Lower 48",
        "detail": "We arrange flatbed or tilt-bed delivery to your site."
      }
    ],
    "bestFor": [
      "Secure storage",
      "Job-site and farm use",
      "Conversion projects"
    ],
    "related": [
      "10ft-used-shipping-container-1132",
      "new-10ft-shipping-container",
      "10-hc-used-container-with-rollup-door"
    ]
  },
  {
    "slug": "20ft-used-shipping-container-1091",
    "categoryPath": "/20ft-shipping-containers-for-sale/",
    "name": "20ft Used Shipping Container",
    "shortName": "20ft Used Shipping Container",
    "condition": "Used",
    "price": 1895,
    "sizeLabel": "20ft",
    "typeLabel": "shipping container",
    "image": "/images/atlas-20ft-used-shipping-container-1091.webp",
    "gallery": [],
    "summary": "20ft Used Shipping Container. Includes roll-up doors, lockbox protection. From $1,895, sales only.",
    "description": [
      "The 20ft Used Shipping Container is a shipping container you can buy outright for delivery across the lower 48 states. The starting price of $1,895 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include roll-up doors, lockbox protection. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Build",
        "detail": "Corten steel shell with ISO corner castings, suited to storage, transport or conversion."
      },
      {
        "label": "Secure Doors",
        "detail": "Lockable door gear to protect what you store."
      },
      {
        "label": "Delivered in the Lower 48",
        "detail": "We arrange flatbed or tilt-bed delivery to your site."
      }
    ],
    "bestFor": [
      "Secure storage",
      "Job-site and farm use",
      "Conversion projects"
    ],
    "related": [
      "20ft-high-cube-custom-shipping-container-conversion",
      "20ft-custom-shipping-container-conversion",
      "20ft-once-used-shipping-container"
    ]
  },
  {
    "slug": "20ft-once-used-shipping-container",
    "categoryPath": "/20ft-shipping-containers-for-sale/",
    "name": "20ft Once-Used Shipping Container",
    "shortName": "20ft Once-Used Shipping Container",
    "condition": "Used",
    "price": 2475,
    "sizeLabel": "20ft",
    "typeLabel": "shipping container",
    "image": "/images/atlas-20ft-once-used-shipping-container.webp",
    "gallery": [],
    "summary": "20ft Once-Used Shipping Container. Includes roll-up doors, lockbox protection. From $2,475, sales only.",
    "description": [
      "The 20ft Once-Used Shipping Container is a shipping container you can buy outright for delivery across the lower 48 states. The starting price of $2,475 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include roll-up doors, lockbox protection. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Build",
        "detail": "Corten steel shell with ISO corner castings, suited to storage, transport or conversion."
      },
      {
        "label": "Secure Doors",
        "detail": "Lockable door gear to protect what you store."
      },
      {
        "label": "Delivered in the Lower 48",
        "detail": "We arrange flatbed or tilt-bed delivery to your site."
      }
    ],
    "bestFor": [
      "Secure storage",
      "Job-site and farm use",
      "Conversion projects"
    ],
    "related": [
      "20ft-high-cube-custom-shipping-container-conversion",
      "20ft-custom-shipping-container-conversion",
      "20ft-used-shipping-container-1091"
    ]
  },
  {
    "slug": "self-assembly-site-offices-10ft-3-3m-x-2-3m",
    "categoryPath": "/shipping-container-offices/",
    "name": "SELF ASSEMBLY SITE OFFICES 10ft / 3.3m x 2.3m",
    "shortName": "SELF ASSEMBLY SITE OFFICES 10ft / 3.3m x 2.3m",
    "condition": "New, Built to Order",
    "price": 1993,
    "sizeLabel": "10ft",
    "typeLabel": "container building",
    "image": "/images/atlas-self-assembly-site-offices-10ft-3-3m-x-2-3m.webp",
    "gallery": [
      "/images/atlas-g-957-1.webp",
      "/images/atlas-g-957-2.webp",
      "/images/atlas-g-957-3.webp",
      "/images/atlas-g-957-4.webp"
    ],
    "summary": "SELF ASSEMBLY SITE OFFICES 10ft / 3.3m x 2.3m. From $1,993, sales only.",
    "description": [
      "The SELF ASSEMBLY SITE OFFICES 10ft / 3.3m x 2.3m is a container building you can buy outright for delivery across the lower 48 states. The starting price of $1,993 is the depot price, with delivery quoted for your ZIP code.",
      "Full specifications are confirmed on your quote. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Ready to Work In",
        "detail": "Fitted out as a workspace, with the equipment listed on the spec sheet."
      },
      {
        "label": "Insulated Steel Shell",
        "detail": "A steel container structure with insulation for year-round use."
      },
      {
        "label": "Portable",
        "detail": "Moves by flatbed and can be relocated if your plans change."
      }
    ],
    "bestFor": [
      "Job-site offices",
      "Cafes and pop-up businesses",
      "Backyard workspaces"
    ],
    "related": [
      "20ft-custom-container-office-and-tiny-home",
      "21ft-x-8ft-custom-cabin-office-canteen",
      "modified-20ft-container-office-with-glass-door-and-ac"
    ]
  },
  {
    "slug": "20ft-standard-storage-container",
    "categoryPath": "/20ft-shipping-containers-for-sale/",
    "name": "20ft Standard Storage Container",
    "shortName": "20ft Standard Storage Container",
    "condition": "New",
    "price": 1261,
    "sizeLabel": "20ft",
    "typeLabel": "shipping container",
    "image": "/images/atlas-20ft-standard-storage-container.webp",
    "gallery": [],
    "summary": "20ft Standard Storage Container. From $1,261, sales only.",
    "description": [
      "The 20ft Standard Storage Container is a shipping container you can buy outright for delivery across the lower 48 states. The starting price of $1,261 is the depot price, with delivery quoted for your ZIP code.",
      "Full specifications are confirmed on your quote. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Build",
        "detail": "Corten steel shell with ISO corner castings, suited to storage, transport or conversion."
      },
      {
        "label": "Secure Doors",
        "detail": "Lockable door gear to protect what you store."
      },
      {
        "label": "Delivered in the Lower 48",
        "detail": "We arrange flatbed or tilt-bed delivery to your site."
      }
    ],
    "bestFor": [
      "Secure storage",
      "Job-site and farm use",
      "Conversion projects"
    ],
    "related": [
      "20ft-high-cube-custom-shipping-container-conversion",
      "20ft-custom-shipping-container-conversion",
      "20ft-used-shipping-container-1091"
    ],
    "kw": "20ft storage container",
    "vol": "880",
    "kd": "12"
  },
  {
    "slug": "20ft-standard-shipping-container",
    "categoryPath": "/20ft-shipping-containers-for-sale/",
    "name": "20ft Standard Shipping Container",
    "shortName": "20ft Standard Shipping Container",
    "condition": "New",
    "price": 1665,
    "sizeLabel": "20ft",
    "typeLabel": "shipping container",
    "image": "/images/atlas-20ft-standard-shipping-container.webp",
    "gallery": [
      "/images/atlas-g-739-1.webp",
      "/images/atlas-g-739-2.webp",
      "/images/atlas-g-739-3.webp",
      "/images/atlas-g-739-4.webp"
    ],
    "summary": "20ft Standard Shipping Container. From $1,665, sales only.",
    "description": [
      "The 20ft Standard Shipping Container is a shipping container you can buy outright for delivery across the lower 48 states. The starting price of $1,665 is the depot price, with delivery quoted for your ZIP code.",
      "Full specifications are confirmed on your quote. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Build",
        "detail": "Corten steel shell with ISO corner castings, suited to storage, transport or conversion."
      },
      {
        "label": "Secure Doors",
        "detail": "Lockable door gear to protect what you store."
      },
      {
        "label": "Delivered in the Lower 48",
        "detail": "We arrange flatbed or tilt-bed delivery to your site."
      }
    ],
    "bestFor": [
      "Secure storage",
      "Job-site and farm use",
      "Conversion projects"
    ],
    "related": [
      "20ft-high-cube-custom-shipping-container-conversion",
      "20ft-custom-shipping-container-conversion",
      "20ft-used-shipping-container-1091"
    ],
    "kw": "20ft cargo container",
    "vol": "260",
    "kd": "0"
  },
  {
    "slug": "20ft-high-cube-shipping-container-730",
    "categoryPath": "/20ft-shipping-containers-for-sale/",
    "name": "20ft High Cube Shipping Container",
    "shortName": "20ft High Cube Shipping Container",
    "condition": "New",
    "price": 1638,
    "sizeLabel": "20ft",
    "typeLabel": "shipping container",
    "image": "/images/atlas-20ft-high-cube-shipping-container-730.webp",
    "gallery": [
      "/images/atlas-g-730-1.webp",
      "/images/atlas-g-730-2.webp",
      "/images/atlas-g-730-3.webp",
      "/images/atlas-g-730-4.webp"
    ],
    "summary": "20ft High Cube Shipping Container. Includes extra height (9ft 6in). From $1,638, sales only.",
    "description": [
      "The 20ft High Cube Shipping Container is a shipping container you can buy outright for delivery across the lower 48 states. The starting price of $1,638 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include extra height (9ft 6in). Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Build",
        "detail": "Corten steel shell with ISO corner castings, suited to storage, transport or conversion."
      },
      {
        "label": "Secure Doors",
        "detail": "Lockable door gear to protect what you store."
      },
      {
        "label": "Delivered in the Lower 48",
        "detail": "We arrange flatbed or tilt-bed delivery to your site."
      }
    ],
    "bestFor": [
      "Secure storage",
      "Job-site and farm use",
      "Conversion projects"
    ],
    "related": [
      "20ft-high-cube-custom-shipping-container-conversion",
      "20ft-custom-shipping-container-conversion",
      "20ft-used-shipping-container-1091"
    ]
  },
  {
    "slug": "20ft-end-to-end-tunnel-shipping-container",
    "categoryPath": "/20ft-shipping-containers-for-sale/",
    "name": "20ft End to End Tunnel Shipping Container",
    "shortName": "20ft End to End Tunnel Shipping Container",
    "condition": "New",
    "price": 2025,
    "sizeLabel": "20ft",
    "typeLabel": "shipping container",
    "image": "/images/atlas-20ft-end-to-end-tunnel-shipping-container.webp",
    "gallery": [
      "/images/atlas-g-722-1.webp",
      "/images/atlas-g-722-2.webp",
      "/images/atlas-g-722-3.webp",
      "/images/atlas-g-722-4.webp"
    ],
    "summary": "20ft End to End Tunnel Shipping Container. Includes doors at both ends. From $2,025, sales only.",
    "description": [
      "The 20ft End to End Tunnel Shipping Container is a shipping container you can buy outright for delivery across the lower 48 states. The starting price of $2,025 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include doors at both ends. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Build",
        "detail": "Corten steel shell with ISO corner castings, suited to storage, transport or conversion."
      },
      {
        "label": "Secure Doors",
        "detail": "Lockable door gear to protect what you store."
      },
      {
        "label": "Delivered in the Lower 48",
        "detail": "We arrange flatbed or tilt-bed delivery to your site."
      }
    ],
    "bestFor": [
      "Secure storage",
      "Job-site and farm use",
      "Conversion projects"
    ],
    "related": [
      "20ft-high-cube-custom-shipping-container-conversion",
      "20ft-custom-shipping-container-conversion",
      "20ft-used-shipping-container-1091"
    ],
    "kw": "double door shipping container",
    "vol": "210",
    "kd": "0"
  },
  {
    "slug": "20ft-shipping-container-with-roll-up-side-doors",
    "categoryPath": "/20ft-shipping-containers-for-sale/",
    "name": "20ft Shipping Container With Roll Up Side Doors",
    "shortName": "20ft Shipping Container With Roll Up",
    "condition": "New",
    "price": 1530,
    "sizeLabel": "20ft",
    "typeLabel": "shipping container",
    "image": "/images/atlas-20ft-shipping-container-with-roll-up-side-doors.webp",
    "gallery": [],
    "summary": "20ft Shipping Container With Roll Up. Includes roll-up doors, side access doors. From $1,530, sales only.",
    "description": [
      "The 20ft Shipping Container With Roll Up Side Doors is a shipping container you can buy outright for delivery across the lower 48 states. The starting price of $1,530 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include roll-up doors, side access doors. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Build",
        "detail": "Corten steel shell with ISO corner castings, suited to storage, transport or conversion."
      },
      {
        "label": "Secure Doors",
        "detail": "Lockable door gear to protect what you store."
      },
      {
        "label": "Delivered in the Lower 48",
        "detail": "We arrange flatbed or tilt-bed delivery to your site."
      }
    ],
    "bestFor": [
      "Secure storage",
      "Job-site and farm use",
      "Conversion projects"
    ],
    "related": [
      "20ft-high-cube-custom-shipping-container-conversion",
      "20ft-custom-shipping-container-conversion",
      "20ft-used-shipping-container-1091"
    ]
  },
  {
    "slug": "20ft-one-trip-high-cube-shipping-container",
    "categoryPath": "/20ft-shipping-containers-for-sale/",
    "name": "20ft One-Trip High Cube Shipping Container",
    "shortName": "20ft One-Trip High Cube Shipping Container",
    "condition": "New / One-Trip",
    "price": 3150,
    "sizeLabel": "20ft",
    "typeLabel": "shipping container",
    "image": "/images/atlas-20ft-one-trip-high-cube-shipping-container.webp",
    "gallery": [
      "/images/atlas-g-516-1.webp",
      "/images/atlas-g-516-2.webp",
      "/images/atlas-g-516-3.webp"
    ],
    "summary": "20ft One-Trip High Cube Shipping Container. Includes extra height (9ft 6in), one-trip condition, lockbox protection. From $3,150, sales only.",
    "description": [
      "The 20ft One-Trip High Cube Shipping Container is a shipping container you can buy outright for delivery across the lower 48 states. The starting price of $3,150 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include extra height (9ft 6in), one-trip condition, lockbox protection, CSC plate. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Build",
        "detail": "Corten steel shell with ISO corner castings, suited to storage, transport or conversion."
      },
      {
        "label": "Secure Doors",
        "detail": "Lockable door gear to protect what you store."
      },
      {
        "label": "Delivered in the Lower 48",
        "detail": "We arrange flatbed or tilt-bed delivery to your site."
      }
    ],
    "bestFor": [
      "Secure storage",
      "Job-site and farm use",
      "Conversion projects"
    ],
    "related": [
      "20ft-high-cube-custom-shipping-container-conversion",
      "20ft-custom-shipping-container-conversion",
      "20ft-used-shipping-container-1091"
    ]
  },
  {
    "slug": "20ft-high-cube-observation-container",
    "categoryPath": "/shipping-container-offices/",
    "name": "20ft High Cube Observation Container",
    "shortName": "20ft High Cube Observation Container",
    "condition": "New, Built to Order",
    "price": 5850,
    "sizeLabel": "20ft",
    "typeLabel": "container building",
    "image": "/images/atlas-20ft-high-cube-observation-container.webp",
    "gallery": [
      "/images/atlas-g-506-1.webp",
      "/images/atlas-g-506-2.webp",
      "/images/atlas-g-506-3.webp",
      "/images/atlas-g-506-4.webp"
    ],
    "summary": "20ft High Cube Observation Container. Includes insulated walls, air conditioning, extra height (9ft 6in). From $5,850, sales only.",
    "description": [
      "The 20ft High Cube Observation Container is a container building you can buy outright for delivery across the lower 48 states. The starting price of $5,850 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include insulated walls, air conditioning, extra height (9ft 6in), large windows, CSC plate. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Ready to Work In",
        "detail": "Fitted out as a workspace, with the equipment listed on the spec sheet."
      },
      {
        "label": "Insulated Steel Shell",
        "detail": "A steel container structure with insulation for year-round use."
      },
      {
        "label": "Portable",
        "detail": "Moves by flatbed and can be relocated if your plans change."
      }
    ],
    "bestFor": [
      "Job-site offices",
      "Cafes and pop-up businesses",
      "Backyard workspaces"
    ],
    "related": [
      "20ft-custom-container-office-and-tiny-home",
      "21ft-x-8ft-custom-cabin-office-canteen",
      "modified-20ft-container-office-with-glass-door-and-ac"
    ]
  },
  {
    "slug": "20ft-refrigerated-container",
    "categoryPath": "/shipping-containers-for-sale/",
    "name": "20ft Refrigerated Container",
    "shortName": "20ft Refrigerated Container",
    "condition": "Used",
    "price": 5000,
    "sizeLabel": "20ft",
    "typeLabel": "refrigerated container",
    "image": "/images/atlas-20ft-refrigerated-container.webp",
    "gallery": [
      "/images/atlas-g-500-1.webp",
      "/images/atlas-g-500-2.webp",
      "/images/atlas-g-500-3.webp",
      "/images/atlas-g-500-4.webp"
    ],
    "summary": "20ft Refrigerated Container. Includes a refrigeration unit. From $5,000, sales only.",
    "description": [
      "The 20ft Refrigerated Container is a refrigerated container you can buy outright for delivery across the lower 48 states. The starting price of $5,000 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include a refrigeration unit. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Temperature-Controlled",
        "detail": "Built-in refrigeration unit for chilled or frozen storage."
      },
      {
        "label": "Insulated Walls",
        "detail": "Insulated steel box holds the set temperature."
      },
      {
        "label": "Power Required",
        "detail": "Needs a suitable electrical supply on site. Confirm the requirement when you quote."
      }
    ],
    "bestFor": [
      "Food storage",
      "Events and catering",
      "Temperature-controlled stock"
    ],
    "related": [
      "40ft-refrigerated-shipping-container",
      "10ft-refrigerated-shipping-container",
      "20ft-refrigerated-container-unit-b"
    ],
    "kw": "20ft reefer container",
    "vol": "260",
    "kd": "0"
  },
  {
    "slug": "20ft-prefab-container-office",
    "categoryPath": "/shipping-container-offices/",
    "name": "20ft Prefab Container Office",
    "shortName": "20ft Prefab Container Office",
    "condition": "New, Built to Order",
    "price": 6500,
    "sizeLabel": "20ft",
    "typeLabel": "container building",
    "image": "/images/atlas-20ft-prefab-container-office.webp",
    "gallery": [
      "/images/atlas-g-495-1.webp",
      "/images/atlas-g-495-2.webp",
      "/images/atlas-g-495-3.webp"
    ],
    "summary": "20ft Prefab Container Office. From $6,500, sales only.",
    "description": [
      "The 20ft Prefab Container Office is a container building you can buy outright for delivery across the lower 48 states. The starting price of $6,500 is the depot price, with delivery quoted for your ZIP code.",
      "Full specifications are confirmed on your quote. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Ready to Work In",
        "detail": "Fitted out as a workspace, with the equipment listed on the spec sheet."
      },
      {
        "label": "Insulated Steel Shell",
        "detail": "A steel container structure with insulation for year-round use."
      },
      {
        "label": "Portable",
        "detail": "Moves by flatbed and can be relocated if your plans change."
      }
    ],
    "bestFor": [
      "Job-site offices",
      "Cafes and pop-up businesses",
      "Backyard workspaces"
    ],
    "related": [
      "20ft-custom-container-office-and-tiny-home",
      "21ft-x-8ft-custom-cabin-office-canteen",
      "modified-20ft-container-office-with-glass-door-and-ac"
    ],
    "kw": "prefab office building",
    "vol": "480",
    "kd": "19"
  },
  {
    "slug": "20ft-one-trip-shipping-container-489",
    "categoryPath": "/20ft-shipping-containers-for-sale/",
    "name": "20ft One-Trip Shipping Container",
    "shortName": "20ft One-Trip Shipping Container",
    "condition": "New / One-Trip",
    "price": 3850,
    "sizeLabel": "20ft",
    "typeLabel": "shipping container",
    "image": "/images/atlas-20ft-one-trip-shipping-container-489.webp",
    "gallery": [
      "/images/atlas-g-489-1.webp",
      "/images/atlas-g-489-2.webp",
      "/images/atlas-g-489-3.webp",
      "/images/atlas-g-489-4.webp"
    ],
    "summary": "20ft One-Trip Shipping Container. Includes side access doors, extra height (9ft 6in), one-trip condition. From $3,850, sales only.",
    "description": [
      "The 20ft One-Trip Shipping Container is a shipping container you can buy outright for delivery across the lower 48 states. The starting price of $3,850 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include side access doors, extra height (9ft 6in), one-trip condition, lockbox protection. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Build",
        "detail": "Corten steel shell with ISO corner castings, suited to storage, transport or conversion."
      },
      {
        "label": "Secure Doors",
        "detail": "Lockable door gear to protect what you store."
      },
      {
        "label": "Delivered in the Lower 48",
        "detail": "We arrange flatbed or tilt-bed delivery to your site."
      }
    ],
    "bestFor": [
      "Secure storage",
      "Job-site and farm use",
      "Conversion projects"
    ],
    "related": [
      "20ft-high-cube-custom-shipping-container-conversion",
      "20ft-custom-shipping-container-conversion",
      "20ft-used-shipping-container-1091"
    ]
  },
  {
    "slug": "20ft-high-cube-full-side-access-container",
    "categoryPath": "/20ft-shipping-containers-for-sale/",
    "name": "20ft High Cube Full Side Access Container",
    "shortName": "20ft High Cube Full Side Access Container",
    "condition": "New / One-Trip",
    "price": 4050,
    "sizeLabel": "20ft",
    "typeLabel": "shipping container",
    "image": "/images/atlas-20ft-high-cube-full-side-access-container.webp",
    "gallery": [
      "/images/atlas-g-483-1.webp",
      "/images/atlas-g-483-2.webp",
      "/images/atlas-g-483-3.webp",
      "/images/atlas-g-483-4.webp"
    ],
    "summary": "20ft High Cube Full Side Access Container. Includes side access doors, extra height (9ft 6in), one-trip condition. From $4,050, sales only.",
    "description": [
      "The 20ft High Cube Full Side Access Container is a shipping container you can buy outright for delivery across the lower 48 states. The starting price of $4,050 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include side access doors, extra height (9ft 6in), one-trip condition, lockbox protection, CSC plate. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Build",
        "detail": "Corten steel shell with ISO corner castings, suited to storage, transport or conversion."
      },
      {
        "label": "Secure Doors",
        "detail": "Lockable door gear to protect what you store."
      },
      {
        "label": "Delivered in the Lower 48",
        "detail": "We arrange flatbed or tilt-bed delivery to your site."
      }
    ],
    "bestFor": [
      "Secure storage",
      "Job-site and farm use",
      "Conversion projects"
    ],
    "related": [
      "20ft-high-cube-custom-shipping-container-conversion",
      "20ft-custom-shipping-container-conversion",
      "20ft-used-shipping-container-1091"
    ]
  },
  {
    "slug": "used-40ft-shipping-container",
    "categoryPath": "/40ft-shipping-containers-for-sale/",
    "name": "Used 40ft Shipping Container",
    "shortName": "Used 40ft Shipping Container",
    "condition": "Used",
    "price": 1935,
    "sizeLabel": "40ft",
    "typeLabel": "shipping container",
    "image": "/images/atlas-used-40ft-shipping-container.webp",
    "gallery": [
      "/images/atlas-g-1036-1.webp",
      "/images/atlas-g-1036-2.webp",
      "/images/atlas-g-1036-3.webp",
      "/images/atlas-g-1036-4.webp"
    ],
    "summary": "Used 40ft Shipping Container. Includes roll-up doors, lockbox protection. From $1,935, sales only.",
    "description": [
      "The Used 40ft Shipping Container is a shipping container you can buy outright for delivery across the lower 48 states. The starting price of $1,935 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include roll-up doors, lockbox protection. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Build",
        "detail": "Corten steel shell with ISO corner castings, suited to storage, transport or conversion."
      },
      {
        "label": "Secure Doors",
        "detail": "Lockable door gear to protect what you store."
      },
      {
        "label": "Delivered in the Lower 48",
        "detail": "We arrange flatbed or tilt-bed delivery to your site."
      }
    ],
    "bestFor": [
      "Secure storage",
      "Job-site and farm use",
      "Conversion projects"
    ],
    "related": [
      "converted-40ft-shipping-container",
      "40ft-new-shipping-container",
      "40ft-storage-container-with-roll-up-side-doors"
    ],
    "kw": "used 40ft container",
    "vol": "210",
    "kd": "7"
  },
  {
    "slug": "40ft-new-shipping-container",
    "categoryPath": "/40ft-shipping-containers-for-sale/",
    "name": "40ft New Shipping Container",
    "shortName": "40ft New Shipping Container",
    "condition": "New / One-Trip",
    "price": 2795,
    "sizeLabel": "40ft",
    "typeLabel": "shipping container",
    "image": "/images/atlas-40ft-new-shipping-container.webp",
    "gallery": [],
    "summary": "40ft New Shipping Container. Includes side access doors, lockbox protection. From $2,795, sales only.",
    "description": [
      "The 40ft New Shipping Container is a shipping container you can buy outright for delivery across the lower 48 states. The starting price of $2,795 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include side access doors, lockbox protection. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Build",
        "detail": "Corten steel shell with ISO corner castings, suited to storage, transport or conversion."
      },
      {
        "label": "Secure Doors",
        "detail": "Lockable door gear to protect what you store."
      },
      {
        "label": "Delivered in the Lower 48",
        "detail": "We arrange flatbed or tilt-bed delivery to your site."
      }
    ],
    "bestFor": [
      "Secure storage",
      "Job-site and farm use",
      "Conversion projects"
    ],
    "related": [
      "converted-40ft-shipping-container",
      "used-40ft-shipping-container",
      "40ft-storage-container-with-roll-up-side-doors"
    ],
    "kw": "40ft container price",
    "vol": "390",
    "kd": "0"
  },
  {
    "slug": "40ft-high-cube-one-trip-shipping-container-953",
    "categoryPath": "/40ft-high-cube-shipping-containers-for-sale/",
    "name": "40ft High Cube One Trip Shipping Container",
    "shortName": "40ft High Cube One Trip Shipping Container",
    "condition": "New / One-Trip",
    "price": 2700,
    "sizeLabel": "40ft",
    "typeLabel": "shipping container",
    "image": "/images/atlas-40ft-high-cube-one-trip-shipping-container-953.webp",
    "gallery": [],
    "summary": "40ft High Cube One Trip Shipping Container. Includes extra height (9ft 6in), one-trip condition. From $2,700, sales only.",
    "description": [
      "The 40ft High Cube One Trip Shipping Container is a shipping container you can buy outright for delivery across the lower 48 states. The starting price of $2,700 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include extra height (9ft 6in), one-trip condition. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Build",
        "detail": "Corten steel shell with ISO corner castings, suited to storage, transport or conversion."
      },
      {
        "label": "Secure Doors",
        "detail": "Lockable door gear to protect what you store."
      },
      {
        "label": "Delivered in the Lower 48",
        "detail": "We arrange flatbed or tilt-bed delivery to your site."
      }
    ],
    "bestFor": [
      "Secure storage",
      "Job-site and farm use",
      "Conversion projects"
    ],
    "related": [
      "40ft-full-side-access-high-cube-container",
      "40ft-one-trip-high-cube-shipping-container",
      "40ft-high-cube-shipping-container"
    ]
  },
  {
    "slug": "40ft-storage-container-with-roll-up-side-doors",
    "categoryPath": "/40ft-shipping-containers-for-sale/",
    "name": "40ft Storage Container With Roll Up Side Doors",
    "shortName": "40ft Storage Container With Roll Up Side Doors",
    "condition": "New",
    "price": 4950,
    "sizeLabel": "40ft",
    "typeLabel": "shipping container",
    "image": "/images/atlas-40ft-storage-container-with-roll-up-side-doors.webp",
    "gallery": [
      "/images/atlas-g-771-1.webp",
      "/images/atlas-g-771-2.webp",
      "/images/atlas-g-771-3.webp"
    ],
    "summary": "40ft Storage Container With Roll Up Side Doors. Includes roll-up doors, side access doors. From $4,950, sales only.",
    "description": [
      "The 40ft Storage Container With Roll Up Side Doors is a shipping container you can buy outright for delivery across the lower 48 states. The starting price of $4,950 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include roll-up doors, side access doors. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Build",
        "detail": "Corten steel shell with ISO corner castings, suited to storage, transport or conversion."
      },
      {
        "label": "Secure Doors",
        "detail": "Lockable door gear to protect what you store."
      },
      {
        "label": "Delivered in the Lower 48",
        "detail": "We arrange flatbed or tilt-bed delivery to your site."
      }
    ],
    "bestFor": [
      "Secure storage",
      "Job-site and farm use",
      "Conversion projects"
    ],
    "related": [
      "converted-40ft-shipping-container",
      "used-40ft-shipping-container",
      "40ft-new-shipping-container"
    ],
    "kw": "40ft storage container",
    "vol": "480",
    "kd": "8"
  },
  {
    "slug": "40ft-open-side-doors-shipping-container",
    "categoryPath": "/40ft-shipping-containers-for-sale/",
    "name": "40ft Open Side Doors Shipping Container",
    "shortName": "40ft Open Side Doors Shipping Container",
    "condition": "New",
    "price": 4050,
    "sizeLabel": "40ft",
    "typeLabel": "shipping container",
    "image": "/images/atlas-40ft-open-side-doors-shipping-container.webp",
    "gallery": [
      "/images/atlas-g-762-1.webp",
      "/images/atlas-g-762-2.webp",
      "/images/atlas-g-762-3.webp",
      "/images/atlas-g-762-4.webp"
    ],
    "summary": "40ft Open Side Doors Shipping Container. Includes side access doors. From $4,050, sales only.",
    "description": [
      "The 40ft Open Side Doors Shipping Container is a shipping container you can buy outright for delivery across the lower 48 states. The starting price of $4,050 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include side access doors. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Build",
        "detail": "Corten steel shell with ISO corner castings, suited to storage, transport or conversion."
      },
      {
        "label": "Secure Doors",
        "detail": "Lockable door gear to protect what you store."
      },
      {
        "label": "Delivered in the Lower 48",
        "detail": "We arrange flatbed or tilt-bed delivery to your site."
      }
    ],
    "bestFor": [
      "Secure storage",
      "Job-site and farm use",
      "Conversion projects"
    ],
    "related": [
      "converted-40ft-shipping-container",
      "used-40ft-shipping-container",
      "40ft-new-shipping-container"
    ],
    "kw": "open side shipping container",
    "vol": "590",
    "kd": "0"
  },
  {
    "slug": "40ft-end-to-end-tunnel-shipping-container",
    "categoryPath": "/40ft-shipping-containers-for-sale/",
    "name": "40ft End to End Tunnel Shipping Container",
    "shortName": "40ft End to End Tunnel Shipping Container",
    "condition": "New",
    "price": 3285,
    "sizeLabel": "40ft",
    "typeLabel": "shipping container",
    "image": "/images/atlas-40ft-end-to-end-tunnel-shipping-container.webp",
    "gallery": [
      "/images/atlas-g-757-1.webp",
      "/images/atlas-g-757-2.webp",
      "/images/atlas-g-757-3.webp"
    ],
    "summary": "40ft End to End Tunnel Shipping Container. Includes doors at both ends. From $3,285, sales only.",
    "description": [
      "The 40ft End to End Tunnel Shipping Container is a shipping container you can buy outright for delivery across the lower 48 states. The starting price of $3,285 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include doors at both ends. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Build",
        "detail": "Corten steel shell with ISO corner castings, suited to storage, transport or conversion."
      },
      {
        "label": "Secure Doors",
        "detail": "Lockable door gear to protect what you store."
      },
      {
        "label": "Delivered in the Lower 48",
        "detail": "We arrange flatbed or tilt-bed delivery to your site."
      }
    ],
    "bestFor": [
      "Secure storage",
      "Job-site and farm use",
      "Conversion projects"
    ],
    "related": [
      "converted-40ft-shipping-container",
      "used-40ft-shipping-container",
      "40ft-new-shipping-container"
    ]
  },
  {
    "slug": "40ft-refrigerated-shipping-container",
    "categoryPath": "/shipping-containers-for-sale/",
    "name": "40ft Refrigerated Shipping Container",
    "shortName": "40ft Refrigerated Shipping Container",
    "condition": "New",
    "price": 6030,
    "sizeLabel": "40ft",
    "typeLabel": "refrigerated container",
    "image": "/images/atlas-40ft-refrigerated-shipping-container.webp",
    "gallery": [
      "/images/atlas-g-748-1.webp",
      "/images/atlas-g-748-2.webp",
      "/images/atlas-g-748-3.webp",
      "/images/atlas-g-748-4.webp"
    ],
    "summary": "40ft Refrigerated Shipping Container. Includes a refrigeration unit. From $6,030, sales only.",
    "description": [
      "The 40ft Refrigerated Shipping Container is a refrigerated container you can buy outright for delivery across the lower 48 states. The starting price of $6,030 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include a refrigeration unit. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Temperature-Controlled",
        "detail": "Built-in refrigeration unit for chilled or frozen storage."
      },
      {
        "label": "Insulated Walls",
        "detail": "Insulated steel box holds the set temperature."
      },
      {
        "label": "Power Required",
        "detail": "Needs a suitable electrical supply on site. Confirm the requirement when you quote."
      }
    ],
    "bestFor": [
      "Food storage",
      "Events and catering",
      "Temperature-controlled stock"
    ],
    "related": [
      "20ft-refrigerated-container",
      "10ft-refrigerated-shipping-container",
      "20ft-refrigerated-container-unit-b"
    ],
    "kw": "reefer container for sale",
    "vol": "260",
    "kd": "0"
  },
  {
    "slug": "40ft-full-side-access-high-cube-container",
    "categoryPath": "/40ft-high-cube-shipping-containers-for-sale/",
    "name": "40ft Full Side Access High Cube Container",
    "shortName": "40ft Full Side Access High Cube Container",
    "condition": "New / One-Trip",
    "price": 6500,
    "sizeLabel": "40ft",
    "typeLabel": "shipping container",
    "image": "/images/atlas-40ft-full-side-access-high-cube-container.webp",
    "gallery": [
      "/images/atlas-g-330-1.webp",
      "/images/atlas-g-330-2.webp",
      "/images/atlas-g-330-3.webp",
      "/images/atlas-g-330-4.webp"
    ],
    "summary": "40ft Full Side Access High Cube Container. Includes side access doors, extra height (9ft 6in), one-trip condition. From $6,500, sales only.",
    "description": [
      "The 40ft Full Side Access High Cube Container is a shipping container you can buy outright for delivery across the lower 48 states. The starting price of $6,500 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include side access doors, extra height (9ft 6in), one-trip condition. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Build",
        "detail": "Corten steel shell with ISO corner castings, suited to storage, transport or conversion."
      },
      {
        "label": "Secure Doors",
        "detail": "Lockable door gear to protect what you store."
      },
      {
        "label": "Delivered in the Lower 48",
        "detail": "We arrange flatbed or tilt-bed delivery to your site."
      }
    ],
    "bestFor": [
      "Secure storage",
      "Job-site and farm use",
      "Conversion projects"
    ],
    "related": [
      "40ft-high-cube-one-trip-shipping-container-953",
      "40ft-one-trip-high-cube-shipping-container",
      "40ft-high-cube-shipping-container"
    ]
  },
  {
    "slug": "40ft-one-trip-high-cube-shipping-container",
    "categoryPath": "/40ft-high-cube-shipping-containers-for-sale/",
    "name": "40ft One-Trip High Cube Shipping Container",
    "shortName": "40ft One-Trip High Cube Shipping Container",
    "condition": "New / One-Trip",
    "price": 4950,
    "sizeLabel": "40ft",
    "typeLabel": "shipping container",
    "image": "/images/atlas-40ft-one-trip-high-cube-shipping-container.webp",
    "gallery": [
      "/images/atlas-g-323-1.webp",
      "/images/atlas-g-323-2.webp",
      "/images/atlas-g-323-3.webp",
      "/images/atlas-g-323-4.webp"
    ],
    "summary": "40ft One-Trip High Cube Shipping Container. Includes extra height (9ft 6in), one-trip condition, lockbox protection. From $4,950, sales only.",
    "description": [
      "The 40ft One-Trip High Cube Shipping Container is a shipping container you can buy outright for delivery across the lower 48 states. The starting price of $4,950 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include extra height (9ft 6in), one-trip condition, lockbox protection, CSC plate. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Build",
        "detail": "Corten steel shell with ISO corner castings, suited to storage, transport or conversion."
      },
      {
        "label": "Secure Doors",
        "detail": "Lockable door gear to protect what you store."
      },
      {
        "label": "Delivered in the Lower 48",
        "detail": "We arrange flatbed or tilt-bed delivery to your site."
      }
    ],
    "bestFor": [
      "Secure storage",
      "Job-site and farm use",
      "Conversion projects"
    ],
    "related": [
      "40ft-high-cube-one-trip-shipping-container-953",
      "40ft-full-side-access-high-cube-container",
      "40ft-high-cube-shipping-container"
    ]
  },
  {
    "slug": "40ft-high-cube-shipping-container",
    "categoryPath": "/40ft-high-cube-shipping-containers-for-sale/",
    "name": "40ft High Cube Shipping Container",
    "shortName": "40ft High Cube Shipping Container",
    "condition": "New / One-Trip",
    "price": 6595,
    "sizeLabel": "40ft",
    "typeLabel": "shipping container",
    "image": "/images/atlas-40ft-high-cube-shipping-container.webp",
    "gallery": [
      "/images/atlas-g-318-1.webp",
      "/images/atlas-g-318-2.webp",
      "/images/atlas-g-318-3.webp"
    ],
    "summary": "40ft High Cube Shipping Container. Includes side access doors, doors at both ends, extra height (9ft 6in). From $6,595, sales only.",
    "description": [
      "The 40ft High Cube Shipping Container is a shipping container you can buy outright for delivery across the lower 48 states. The starting price of $6,595 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include side access doors, doors at both ends, extra height (9ft 6in), one-trip condition. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Build",
        "detail": "Corten steel shell with ISO corner castings, suited to storage, transport or conversion."
      },
      {
        "label": "Secure Doors",
        "detail": "Lockable door gear to protect what you store."
      },
      {
        "label": "Delivered in the Lower 48",
        "detail": "We arrange flatbed or tilt-bed delivery to your site."
      }
    ],
    "bestFor": [
      "Secure storage",
      "Job-site and farm use",
      "Conversion projects"
    ],
    "related": [
      "40ft-high-cube-one-trip-shipping-container-953",
      "40ft-full-side-access-high-cube-container",
      "40ft-one-trip-high-cube-shipping-container"
    ],
    "kw": "40ft high cube container",
    "vol": "590",
    "kd": "14"
  },
  {
    "slug": "20ft-high-cube-double-door-new-one-trip-shipping-container",
    "categoryPath": "/20ft-shipping-containers-for-sale/",
    "name": "20ft High Cube Double Door New (One Trip) Shipping Container",
    "shortName": "20ft High Cube Double Door New (One Trip)",
    "condition": "New / One-Trip",
    "price": 1564,
    "sizeLabel": "20ft",
    "typeLabel": "shipping container",
    "image": "/images/atlas-20ft-high-cube-double-door-new-one-trip-shipping-container.webp",
    "gallery": [],
    "summary": "20ft High Cube Double Door New (One Trip). Includes doors at both ends, extra height (9ft 6in), one-trip condition. From $1,564, sales only.",
    "description": [
      "The 20ft High Cube Double Door New (One Trip) Shipping Container is a shipping container you can buy outright for delivery across the lower 48 states. The starting price of $1,564 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include doors at both ends, extra height (9ft 6in), one-trip condition. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Build",
        "detail": "Corten steel shell with ISO corner castings, suited to storage, transport or conversion."
      },
      {
        "label": "Secure Doors",
        "detail": "Lockable door gear to protect what you store."
      },
      {
        "label": "Delivered in the Lower 48",
        "detail": "We arrange flatbed or tilt-bed delivery to your site."
      }
    ],
    "bestFor": [
      "Secure storage",
      "Job-site and farm use",
      "Conversion projects"
    ],
    "related": [
      "20ft-high-cube-custom-shipping-container-conversion",
      "20ft-custom-shipping-container-conversion",
      "20ft-used-shipping-container-1091"
    ]
  },
  {
    "slug": "10ft-accommodation-container",
    "categoryPath": "/shipping-container-homes-for-sale/",
    "name": "10ft Accommodation Container",
    "shortName": "10ft Accommodation Container",
    "condition": "New, Built to Order",
    "price": 4200,
    "sizeLabel": "10ft",
    "typeLabel": "container home",
    "image": "/images/atlas-10ft-accommodation-container.webp",
    "gallery": [
      "/images/atlas-g-561-1.webp",
      "/images/atlas-g-561-2.webp",
      "/images/atlas-g-561-3.webp",
      "/images/atlas-g-561-4.webp"
    ],
    "summary": "10ft Accommodation Container. Includes insulated walls, heating, large windows. From $4,200, sales only.",
    "description": [
      "The 10ft Accommodation Container is a container home you can buy outright for delivery across the lower 48 states. The starting price of $4,200 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include insulated walls, heating, large windows, lockbox protection, CSC plate. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Prefab Container Build",
        "detail": "Built off site, so installation on your property is quicker than a standard build."
      },
      {
        "label": "Insulated Living Space",
        "detail": "Fitted with insulation and interior finishes as described in the specification."
      },
      {
        "label": "Permits Apply",
        "detail": "Local zoning and building codes decide where it can be placed. Check with your planning office."
      }
    ],
    "bestFor": [
      "Tiny and guest homes",
      "Short-term rentals",
      "Accessory dwellings (check permits)"
    ],
    "related": [
      "luxury-3-bedroom-prefabricated-modular-container-home-villa",
      "luxury-1bhk-duplex-container-home-with-spacious-outdoor-deck",
      "4-bedroom-2-story-luxury-modular-container-home-villa"
    ],
    "kw": "insulated shipping container",
    "vol": "2400",
    "kd": "0"
  },
  {
    "slug": "10ft-bar-container",
    "categoryPath": "/shipping-container-offices/",
    "name": "10ft Bar Container",
    "shortName": "10ft Bar Container",
    "condition": "New, Built to Order",
    "price": 4300,
    "sizeLabel": "10ft",
    "typeLabel": "container building",
    "image": "/images/atlas-10ft-bar-container.webp",
    "gallery": [
      "/images/atlas-g-556-1.webp",
      "/images/atlas-g-556-2.webp",
      "/images/atlas-g-556-3.webp"
    ],
    "summary": "10ft Bar Container. Includes lockbox protection. From $4,300, sales only.",
    "description": [
      "The 10ft Bar Container is a container building you can buy outright for delivery across the lower 48 states. The starting price of $4,300 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include lockbox protection. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Ready to Work In",
        "detail": "Fitted out as a workspace, with the equipment listed on the spec sheet."
      },
      {
        "label": "Insulated Steel Shell",
        "detail": "A steel container structure with insulation for year-round use."
      },
      {
        "label": "Portable",
        "detail": "Moves by flatbed and can be relocated if your plans change."
      }
    ],
    "bestFor": [
      "Job-site offices",
      "Cafes and pop-up businesses",
      "Backyard workspaces"
    ],
    "related": [
      "20ft-custom-container-office-and-tiny-home",
      "21ft-x-8ft-custom-cabin-office-canteen",
      "modified-20ft-container-office-with-glass-door-and-ac"
    ],
    "kw": "container bar",
    "vol": "4400",
    "kd": "14"
  },
  {
    "slug": "10ft-one-trip-high-cube-shipping-container",
    "categoryPath": "/10ft-shipping-containers-for-sale/",
    "name": "10ft One-Trip High Cube Shipping Container",
    "shortName": "10ft One-Trip High Cube Shipping Container",
    "condition": "New / One-Trip",
    "price": 2500,
    "sizeLabel": "10ft",
    "typeLabel": "shipping container",
    "image": "/images/atlas-10ft-one-trip-high-cube-shipping-container.webp",
    "gallery": [
      "/images/atlas-g-545-1.webp",
      "/images/atlas-g-545-2.webp",
      "/images/atlas-g-545-3.webp"
    ],
    "summary": "10ft One-Trip High Cube Shipping Container. Includes extra height (9ft 6in), one-trip condition, lockbox protection. From $2,500, sales only.",
    "description": [
      "The 10ft One-Trip High Cube Shipping Container is a shipping container you can buy outright for delivery across the lower 48 states. The starting price of $2,500 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include extra height (9ft 6in), one-trip condition, lockbox protection, CSC plate. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Build",
        "detail": "Corten steel shell with ISO corner castings, suited to storage, transport or conversion."
      },
      {
        "label": "Secure Doors",
        "detail": "Lockable door gear to protect what you store."
      },
      {
        "label": "Delivered in the Lower 48",
        "detail": "We arrange flatbed or tilt-bed delivery to your site."
      }
    ],
    "bestFor": [
      "Secure storage",
      "Job-site and farm use",
      "Conversion projects"
    ],
    "related": [
      "10ft-used-shipping-container-1132",
      "new-10ft-shipping-container",
      "10-hc-used-container-with-rollup-door"
    ]
  },
  {
    "slug": "10ft-refrigerated-shipping-container",
    "categoryPath": "/shipping-containers-for-sale/",
    "name": "10ft Refrigerated Shipping Container",
    "shortName": "10ft Refrigerated Shipping Container",
    "condition": "Used",
    "price": 3500,
    "sizeLabel": "10ft",
    "typeLabel": "refrigerated container",
    "image": "/images/atlas-10ft-refrigerated-shipping-container.webp",
    "gallery": [
      "/images/atlas-g-539-1.webp",
      "/images/atlas-g-539-2.webp",
      "/images/atlas-g-539-3.webp",
      "/images/atlas-g-539-4.webp"
    ],
    "summary": "10ft Refrigerated Shipping Container. Includes CSC plate, a refrigeration unit. From $3,500, sales only.",
    "description": [
      "The 10ft Refrigerated Shipping Container is a refrigerated container you can buy outright for delivery across the lower 48 states. The starting price of $3,500 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include CSC plate, a refrigeration unit. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Temperature-Controlled",
        "detail": "Built-in refrigeration unit for chilled or frozen storage."
      },
      {
        "label": "Insulated Walls",
        "detail": "Insulated steel box holds the set temperature."
      },
      {
        "label": "Power Required",
        "detail": "Needs a suitable electrical supply on site. Confirm the requirement when you quote."
      }
    ],
    "bestFor": [
      "Food storage",
      "Events and catering",
      "Temperature-controlled stock"
    ],
    "related": [
      "20ft-refrigerated-container",
      "40ft-refrigerated-shipping-container",
      "20ft-refrigerated-container-unit-b"
    ]
  },
  {
    "slug": "10ft-shipping-container-with-end-roll-up-door",
    "categoryPath": "/10ft-shipping-containers-for-sale/",
    "name": "10ft Shipping Container with End Roll-Up Door",
    "shortName": "10ft Shipping Container with End Roll-Up Door",
    "condition": "New / One-Trip",
    "price": 1350,
    "sizeLabel": "10ft",
    "typeLabel": "shipping container",
    "image": "/images/atlas-10ft-shipping-container-with-end-roll-up-door.webp",
    "gallery": [
      "/images/atlas-g-535-1.webp",
      "/images/atlas-g-535-2.webp"
    ],
    "summary": "10ft Shipping Container with End Roll-Up Door. Includes roll-up doors. From $1,350, sales only.",
    "description": [
      "The 10ft Shipping Container with End Roll-Up Door is a shipping container you can buy outright for delivery across the lower 48 states. The starting price of $1,350 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include roll-up doors. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Build",
        "detail": "Corten steel shell with ISO corner castings, suited to storage, transport or conversion."
      },
      {
        "label": "Secure Doors",
        "detail": "Lockable door gear to protect what you store."
      },
      {
        "label": "Delivered in the Lower 48",
        "detail": "We arrange flatbed or tilt-bed delivery to your site."
      }
    ],
    "bestFor": [
      "Secure storage",
      "Job-site and farm use",
      "Conversion projects"
    ],
    "related": [
      "10ft-used-shipping-container-1132",
      "new-10ft-shipping-container",
      "10-hc-used-container-with-rollup-door"
    ]
  },
  {
    "slug": "gray-guard-shack-with-ac",
    "categoryPath": "/modified-shipping-containers/",
    "name": "Gray Guard Shack With AC",
    "shortName": "Gray Guard Shack With AC",
    "condition": "New, Built to Order",
    "price": 3510,
    "sizeLabel": "guard booth",
    "typeLabel": "guard booth",
    "image": "/images/atlas-gray-guard-shack-with-ac.webp",
    "gallery": [
      "/images/atlas-g-695-1.webp",
      "/images/atlas-g-695-2.webp",
      "/images/atlas-g-695-3.webp",
      "/images/atlas-g-695-4.webp"
    ],
    "summary": "Gray Guard Shack With AC. Includes insulated walls, air conditioning, heating. From $3,510, sales only.",
    "description": [
      "The Gray Guard Shack With AC is a guard booth you can buy outright for delivery across the lower 48 states. The starting price of $3,510 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include insulated walls, air conditioning, heating, large windows. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Insulated Booth",
        "detail": "A compact insulated security booth with windows for visibility."
      },
      {
        "label": "Heating and Cooling",
        "detail": "Listed with air conditioning and heating for staff comfort."
      },
      {
        "label": "Quick Setup",
        "detail": "Delivered complete and ready to connect to power."
      }
    ],
    "bestFor": [
      "Gates and entrances",
      "Car parks and yards",
      "Event and site security"
    ],
    "related": [
      "blue-guard-booth-with-ac-and-heating",
      "light-gray-guard-booth-with-ac",
      "bw-guard-shack-with-ac-and-heating"
    ],
    "kw": "guard shack for sale",
    "vol": "320",
    "kd": "0"
  },
  {
    "slug": "blue-guard-booth-with-ac-and-heating",
    "categoryPath": "/modified-shipping-containers/",
    "name": "Blue Guard Booth With AC & Heating",
    "shortName": "Blue Guard Booth With AC & Heating",
    "condition": "New, Built to Order",
    "price": 3420,
    "sizeLabel": "guard booth",
    "typeLabel": "guard booth",
    "image": "/images/atlas-blue-guard-booth-with-ac-and-heating.webp",
    "gallery": [
      "/images/atlas-g-684-1.webp",
      "/images/atlas-g-684-2.webp",
      "/images/atlas-g-684-3.webp",
      "/images/atlas-g-684-4.webp"
    ],
    "summary": "Blue Guard Booth With AC & Heating. Includes insulated walls, air conditioning, heating. From $3,420, sales only.",
    "description": [
      "The Blue Guard Booth With AC & Heating is a guard booth you can buy outright for delivery across the lower 48 states. The starting price of $3,420 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include insulated walls, air conditioning, heating, large windows. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Insulated Booth",
        "detail": "A compact insulated security booth with windows for visibility."
      },
      {
        "label": "Heating and Cooling",
        "detail": "Listed with air conditioning and heating for staff comfort."
      },
      {
        "label": "Quick Setup",
        "detail": "Delivered complete and ready to connect to power."
      }
    ],
    "bestFor": [
      "Gates and entrances",
      "Car parks and yards",
      "Event and site security"
    ],
    "related": [
      "gray-guard-shack-with-ac",
      "light-gray-guard-booth-with-ac",
      "bw-guard-shack-with-ac-and-heating"
    ],
    "kw": "guard booth for sale",
    "vol": "320",
    "kd": "0"
  },
  {
    "slug": "light-gray-guard-booth-with-ac",
    "categoryPath": "/modified-shipping-containers/",
    "name": "Light Gray Guard Booth With AC",
    "shortName": "Light Gray Guard Booth With AC",
    "condition": "New, Built to Order",
    "price": 3780,
    "sizeLabel": "guard booth",
    "typeLabel": "guard booth",
    "image": "/images/atlas-light-gray-guard-booth-with-ac.webp",
    "gallery": [
      "/images/atlas-g-673-1.webp",
      "/images/atlas-g-673-2.webp",
      "/images/atlas-g-673-3.webp",
      "/images/atlas-g-673-4.webp"
    ],
    "summary": "Light Gray Guard Booth With AC. Includes insulated walls, air conditioning, heating. From $3,780, sales only.",
    "description": [
      "The Light Gray Guard Booth With AC is a guard booth you can buy outright for delivery across the lower 48 states. The starting price of $3,780 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include insulated walls, air conditioning, heating, large windows. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Insulated Booth",
        "detail": "A compact insulated security booth with windows for visibility."
      },
      {
        "label": "Heating and Cooling",
        "detail": "Listed with air conditioning and heating for staff comfort."
      },
      {
        "label": "Quick Setup",
        "detail": "Delivered complete and ready to connect to power."
      }
    ],
    "bestFor": [
      "Gates and entrances",
      "Car parks and yards",
      "Event and site security"
    ],
    "related": [
      "gray-guard-shack-with-ac",
      "blue-guard-booth-with-ac-and-heating",
      "bw-guard-shack-with-ac-and-heating"
    ],
    "kw": "portable guard shack",
    "vol": "390",
    "kd": "0"
  },
  {
    "slug": "bw-guard-shack-with-ac-and-heating",
    "categoryPath": "/modified-shipping-containers/",
    "name": "BW Guard Shack With AC & Heating",
    "shortName": "BW Guard Shack With AC & Heating",
    "condition": "New, Built to Order",
    "price": 5220,
    "sizeLabel": "guard booth",
    "typeLabel": "guard booth",
    "image": "/images/atlas-bw-guard-shack-with-ac-and-heating.webp",
    "gallery": [
      "/images/atlas-g-663-1.webp",
      "/images/atlas-g-663-2.webp",
      "/images/atlas-g-663-3.webp",
      "/images/atlas-g-663-4.webp"
    ],
    "summary": "BW Guard Shack With AC & Heating. Includes insulated walls, air conditioning, heating. From $5,220, sales only.",
    "description": [
      "The BW Guard Shack With AC & Heating is a guard booth you can buy outright for delivery across the lower 48 states. The starting price of $5,220 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include insulated walls, air conditioning, heating, large windows. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Insulated Booth",
        "detail": "A compact insulated security booth with windows for visibility."
      },
      {
        "label": "Heating and Cooling",
        "detail": "Listed with air conditioning and heating for staff comfort."
      },
      {
        "label": "Quick Setup",
        "detail": "Delivered complete and ready to connect to power."
      }
    ],
    "bestFor": [
      "Gates and entrances",
      "Car parks and yards",
      "Event and site security"
    ],
    "related": [
      "gray-guard-shack-with-ac",
      "blue-guard-booth-with-ac-and-heating",
      "light-gray-guard-booth-with-ac"
    ],
    "kw": "prefab guard house",
    "vol": "210",
    "kd": "0"
  },
  {
    "slug": "stainless-steel-guard-shack-with-ac",
    "categoryPath": "/modified-shipping-containers/",
    "name": "Stainless Steel Guard Shack With AC",
    "shortName": "Stainless Steel Guard Shack With AC",
    "condition": "New, Built to Order",
    "price": 4950,
    "sizeLabel": "guard booth",
    "typeLabel": "guard booth",
    "image": "/images/atlas-stainless-steel-guard-shack-with-ac.webp",
    "gallery": [
      "/images/atlas-g-654-1.webp",
      "/images/atlas-g-654-2.webp",
      "/images/atlas-g-654-3.webp",
      "/images/atlas-g-654-4.webp"
    ],
    "summary": "Stainless Steel Guard Shack With AC. Includes insulated walls, air conditioning, heating. From $4,950, sales only.",
    "description": [
      "The Stainless Steel Guard Shack With AC is a guard booth you can buy outright for delivery across the lower 48 states. The starting price of $4,950 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include insulated walls, air conditioning, heating, large windows. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Insulated Booth",
        "detail": "A compact insulated security booth with windows for visibility."
      },
      {
        "label": "Heating and Cooling",
        "detail": "Listed with air conditioning and heating for staff comfort."
      },
      {
        "label": "Quick Setup",
        "detail": "Delivered complete and ready to connect to power."
      }
    ],
    "bestFor": [
      "Gates and entrances",
      "Car parks and yards",
      "Event and site security"
    ],
    "related": [
      "gray-guard-shack-with-ac",
      "blue-guard-booth-with-ac-and-heating",
      "light-gray-guard-booth-with-ac"
    ],
    "kw": "security guard booth",
    "vol": "140",
    "kd": "0"
  },
  {
    "slug": "security-guard-shack-with-ac-and-heating",
    "categoryPath": "/modified-shipping-containers/",
    "name": "Security Guard Shack With AC & Heating",
    "shortName": "Security Guard Shack With AC & Heating",
    "condition": "New, Built to Order",
    "price": 8010,
    "sizeLabel": "guard booth",
    "typeLabel": "guard booth",
    "image": "/images/atlas-security-guard-shack-with-ac-and-heating.webp",
    "gallery": [
      "/images/atlas-g-647-1.webp",
      "/images/atlas-g-647-2.webp",
      "/images/atlas-g-647-3.webp",
      "/images/atlas-g-647-4.webp"
    ],
    "summary": "Security Guard Shack With AC & Heating. Includes insulated walls, air conditioning, heating. From $8,010, sales only.",
    "description": [
      "The Security Guard Shack With AC & Heating is a guard booth you can buy outright for delivery across the lower 48 states. The starting price of $8,010 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include insulated walls, air conditioning, heating, large windows. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Insulated Booth",
        "detail": "A compact insulated security booth with windows for visibility."
      },
      {
        "label": "Heating and Cooling",
        "detail": "Listed with air conditioning and heating for staff comfort."
      },
      {
        "label": "Quick Setup",
        "detail": "Delivered complete and ready to connect to power."
      }
    ],
    "bestFor": [
      "Gates and entrances",
      "Car parks and yards",
      "Event and site security"
    ],
    "related": [
      "gray-guard-shack-with-ac",
      "blue-guard-booth-with-ac-and-heating",
      "light-gray-guard-booth-with-ac"
    ],
    "kw": "security booth",
    "vol": "1300",
    "kd": "15"
  },
  {
    "slug": "20ft-container-with-roll-up-doors",
    "categoryPath": "/20ft-shipping-containers-for-sale/",
    "name": "20ft Container With Roll Up Doors",
    "shortName": "20ft Container With Roll Up Doors",
    "condition": "New",
    "price": 1863,
    "sizeLabel": "20ft",
    "typeLabel": "shipping container",
    "image": "/images/atlas-20ft-container-with-roll-up-doors.webp",
    "gallery": [
      "/images/atlas-g-896-1.webp",
      "/images/atlas-g-896-2.webp",
      "/images/atlas-g-896-3.webp",
      "/images/atlas-g-896-4.webp"
    ],
    "summary": "20ft Container With Roll Up Doors. Includes roll-up doors, side access doors. From $1,863, sales only.",
    "description": [
      "The 20ft Container With Roll Up Doors is a shipping container you can buy outright for delivery across the lower 48 states. The starting price of $1,863 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include roll-up doors, side access doors. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Steel Container Build",
        "detail": "Corten steel shell with ISO corner castings, suited to storage, transport or conversion."
      },
      {
        "label": "Secure Doors",
        "detail": "Lockable door gear to protect what you store."
      },
      {
        "label": "Delivered in the Lower 48",
        "detail": "We arrange flatbed or tilt-bed delivery to your site."
      }
    ],
    "bestFor": [
      "Secure storage",
      "Job-site and farm use",
      "Conversion projects"
    ],
    "related": [
      "20ft-high-cube-custom-shipping-container-conversion",
      "20ft-custom-shipping-container-conversion",
      "20ft-used-shipping-container-1091"
    ]
  },
  {
    "slug": "12-small-cubic-shipping-container",
    "categoryPath": "/storage-containers-for-sale/",
    "name": "12' Small Cubic Shipping Container",
    "shortName": "12' Small Cubic Shipping Container",
    "condition": "New",
    "price": 2703,
    "sizeLabel": "small container",
    "typeLabel": "small container",
    "image": "/images/atlas-12-small-cubic-shipping-container.webp",
    "gallery": [
      "/images/atlas-g-862-1.webp",
      "/images/atlas-g-862-2.webp",
      "/images/atlas-g-862-3.webp",
      "/images/atlas-g-862-4.webp"
    ],
    "summary": "12' Small Cubic Shipping Container. Includes roll-up doors, large windows. From $2,703, sales only.",
    "description": [
      "The 12' Small Cubic Shipping Container is a small container you can buy outright for delivery across the lower 48 states. The starting price of $2,703 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include roll-up doors, large windows. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Compact Footprint",
        "detail": "Fits small yards, driveways and tight access."
      },
      {
        "label": "Weatherproof Steel",
        "detail": "Corten steel shell keeps the contents dry and secure."
      },
      {
        "label": "Easy Placement",
        "detail": "Light enough to be positioned with a small crane or tilt-bed."
      }
    ],
    "bestFor": [
      "Small-space storage",
      "Garden and workshop use",
      "Camping and temporary use"
    ],
    "related": [
      "8ft-small-cubic-shipping-container",
      "12ft-small-cubic-shipping-container",
      "7ft-small-cubic-shipping-container"
    ]
  },
  {
    "slug": "8ft-small-cubic-shipping-container",
    "categoryPath": "/storage-containers-for-sale/",
    "name": "8ft Small Cubic Shipping Container",
    "shortName": "8ft Small Cubic Shipping Container",
    "condition": "New",
    "price": 2320,
    "sizeLabel": "8ft",
    "typeLabel": "small container",
    "image": "/images/atlas-8ft-small-cubic-shipping-container.webp",
    "gallery": [
      "/images/atlas-g-848-1.webp",
      "/images/atlas-g-848-2.webp",
      "/images/atlas-g-848-3.webp",
      "/images/atlas-g-848-4.webp"
    ],
    "summary": "8ft Small Cubic Shipping Container. Includes large windows. From $2,320, sales only.",
    "description": [
      "The 8ft Small Cubic Shipping Container is a small container you can buy outright for delivery across the lower 48 states. The starting price of $2,320 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include large windows. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Compact Footprint",
        "detail": "Fits small yards, driveways and tight access."
      },
      {
        "label": "Weatherproof Steel",
        "detail": "Corten steel shell keeps the contents dry and secure."
      },
      {
        "label": "Easy Placement",
        "detail": "Light enough to be positioned with a small crane or tilt-bed."
      }
    ],
    "bestFor": [
      "Small-space storage",
      "Garden and workshop use",
      "Camping and temporary use"
    ],
    "related": [
      "12-small-cubic-shipping-container",
      "12ft-small-cubic-shipping-container",
      "7ft-small-cubic-shipping-container"
    ]
  },
  {
    "slug": "12ft-small-cubic-shipping-container",
    "categoryPath": "/storage-containers-for-sale/",
    "name": "12ft Small Cubic Shipping Container",
    "shortName": "12ft Small Cubic Shipping Container",
    "condition": "New",
    "price": 2551,
    "sizeLabel": "12ft",
    "typeLabel": "small container",
    "image": "/images/atlas-12ft-small-cubic-shipping-container.webp",
    "gallery": [
      "/images/atlas-g-839-1.webp",
      "/images/atlas-g-839-2.webp",
      "/images/atlas-g-839-3.webp",
      "/images/atlas-g-839-4.webp"
    ],
    "summary": "12ft Small Cubic Shipping Container. Includes large windows. From $2,551, sales only.",
    "description": [
      "The 12ft Small Cubic Shipping Container is a small container you can buy outright for delivery across the lower 48 states. The starting price of $2,551 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include large windows. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Compact Footprint",
        "detail": "Fits small yards, driveways and tight access."
      },
      {
        "label": "Weatherproof Steel",
        "detail": "Corten steel shell keeps the contents dry and secure."
      },
      {
        "label": "Easy Placement",
        "detail": "Light enough to be positioned with a small crane or tilt-bed."
      }
    ],
    "bestFor": [
      "Small-space storage",
      "Garden and workshop use",
      "Camping and temporary use"
    ],
    "related": [
      "12-small-cubic-shipping-container",
      "8ft-small-cubic-shipping-container",
      "7ft-small-cubic-shipping-container"
    ],
    "kw": "12 ft shipping container",
    "vol": "170",
    "kd": "0"
  },
  {
    "slug": "7ft-small-cubic-shipping-container",
    "categoryPath": "/storage-containers-for-sale/",
    "name": "7ft Small Cubic Shipping Container",
    "shortName": "7ft Small Cubic Shipping Container",
    "condition": "New",
    "price": 1350,
    "sizeLabel": "7ft",
    "typeLabel": "small container",
    "image": "/images/atlas-7ft-small-cubic-shipping-container.webp",
    "gallery": [
      "/images/atlas-g-822-1.webp",
      "/images/atlas-g-822-2.webp",
      "/images/atlas-g-822-3.webp",
      "/images/atlas-g-822-4.webp"
    ],
    "summary": "7ft Small Cubic Shipping Container. From $1,350, sales only.",
    "description": [
      "The 7ft Small Cubic Shipping Container is a small container you can buy outright for delivery across the lower 48 states. The starting price of $1,350 is the depot price, with delivery quoted for your ZIP code.",
      "Full specifications are confirmed on your quote. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Compact Footprint",
        "detail": "Fits small yards, driveways and tight access."
      },
      {
        "label": "Weatherproof Steel",
        "detail": "Corten steel shell keeps the contents dry and secure."
      },
      {
        "label": "Easy Placement",
        "detail": "Light enough to be positioned with a small crane or tilt-bed."
      }
    ],
    "bestFor": [
      "Small-space storage",
      "Garden and workshop use",
      "Camping and temporary use"
    ],
    "related": [
      "12-small-cubic-shipping-container",
      "8ft-small-cubic-shipping-container",
      "12ft-small-cubic-shipping-container"
    ],
    "kw": "mini shipping container",
    "vol": "880",
    "kd": "0"
  },
  {
    "slug": "9ft-small-cubic-shipping-container",
    "categoryPath": "/storage-containers-for-sale/",
    "name": "9ft Small Cubic Shipping Container",
    "shortName": "9ft Small Cubic Shipping Container",
    "condition": "New",
    "price": 2442,
    "sizeLabel": "9ft",
    "typeLabel": "small container",
    "image": "/images/atlas-9ft-small-cubic-shipping-container.webp",
    "gallery": [
      "/images/atlas-g-808-1.webp",
      "/images/atlas-g-808-2.webp",
      "/images/atlas-g-808-3.webp",
      "/images/atlas-g-808-4.webp"
    ],
    "summary": "9ft Small Cubic Shipping Container. Includes large windows. From $2,442, sales only.",
    "description": [
      "The 9ft Small Cubic Shipping Container is a small container you can buy outright for delivery across the lower 48 states. The starting price of $2,442 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include large windows. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Compact Footprint",
        "detail": "Fits small yards, driveways and tight access."
      },
      {
        "label": "Weatherproof Steel",
        "detail": "Corten steel shell keeps the contents dry and secure."
      },
      {
        "label": "Easy Placement",
        "detail": "Light enough to be positioned with a small crane or tilt-bed."
      }
    ],
    "bestFor": [
      "Small-space storage",
      "Garden and workshop use",
      "Camping and temporary use"
    ],
    "related": [
      "12-small-cubic-shipping-container",
      "8ft-small-cubic-shipping-container",
      "12ft-small-cubic-shipping-container"
    ],
    "kw": "small shipping container",
    "vol": "2400",
    "kd": "11"
  },
  {
    "slug": "2-bedroom-refurbished-shipping-container-home",
    "categoryPath": "/shipping-container-homes-for-sale/",
    "name": "2 Bedroom Refurbished Shipping Container Home",
    "shortName": "2 Bedroom Refurbished Shipping Container Home",
    "condition": "New, Built to Order",
    "price": 19699,
    "sizeLabel": "container home",
    "typeLabel": "container home",
    "image": "/images/atlas-2-bedroom-refurbished-shipping-container-home.webp",
    "gallery": [
      "/images/atlas-g-796-1.webp",
      "/images/atlas-g-796-2.webp",
      "/images/atlas-g-796-3.webp",
      "/images/atlas-g-796-4.webp"
    ],
    "summary": "2 Bedroom Refurbished Shipping Container Home. Includes 2 bedroom layout, insulated walls, air conditioning. From $19,699, sales only.",
    "description": [
      "The 2 Bedroom Refurbished Shipping Container Home is a container home you can buy outright for delivery across the lower 48 states. The starting price of $19,699 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include 2 bedroom layout, insulated walls, air conditioning, a kitchen, a bathroom. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Prefab Container Build",
        "detail": "Built off site, so installation on your property is quicker than a standard build."
      },
      {
        "label": "Insulated Living Space",
        "detail": "Fitted with insulation and interior finishes as described in the specification."
      },
      {
        "label": "Permits Apply",
        "detail": "Local zoning and building codes decide where it can be placed. Check with your planning office."
      }
    ],
    "bestFor": [
      "Tiny and guest homes",
      "Short-term rentals",
      "Accessory dwellings (check permits)"
    ],
    "related": [
      "luxury-3-bedroom-prefabricated-modular-container-home-villa",
      "luxury-1bhk-duplex-container-home-with-spacious-outdoor-deck",
      "4-bedroom-2-story-luxury-modular-container-home-villa"
    ],
    "kw": "2 bedroom container home",
    "vol": "720",
    "kd": "0"
  },
  {
    "slug": "1-bedroom-portable-cabin-with-verandah",
    "categoryPath": "/shipping-container-cabins/",
    "name": "1 Bedroom Portable Cabin with Verandah",
    "shortName": "1 Bedroom Portable Cabin with Verandah",
    "condition": "New, Built to Order",
    "price": 16929,
    "sizeLabel": "container cabin",
    "typeLabel": "container cabin",
    "image": "/images/atlas-1-bedroom-portable-cabin-with-verandah.webp",
    "gallery": [
      "/images/atlas-g-776-1.webp",
      "/images/atlas-g-776-2.webp",
      "/images/atlas-g-776-3.webp",
      "/images/atlas-g-776-4.webp"
    ],
    "summary": "1 Bedroom Portable Cabin with Verandah. Includes 1 bedroom layout, insulated walls, a kitchen. From $16,929, sales only.",
    "description": [
      "The 1 Bedroom Portable Cabin with Verandah is a container cabin you can buy outright for delivery across the lower 48 states. The starting price of $16,929 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include 1 bedroom layout, insulated walls, a kitchen, a bathroom, an outdoor deck or balcony. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Prefab Container Build",
        "detail": "Built off site, so installation on your property is quicker than a standard build."
      },
      {
        "label": "Insulated Living Space",
        "detail": "Fitted with insulation and interior finishes as described in the specification."
      },
      {
        "label": "Permits Apply",
        "detail": "Local zoning and building codes decide where it can be placed. Check with your planning office."
      }
    ],
    "bestFor": [
      "Tiny and guest homes",
      "Short-term rentals",
      "Accessory dwellings (check permits)"
    ],
    "related": [
      "custom-20ft-cozy-cabin-container-house"
    ],
    "kw": "portable cabin",
    "vol": "1900",
    "kd": "3"
  },
  {
    "slug": "20ft-refrigerated-container-unit-b",
    "categoryPath": "/shipping-containers-for-sale/",
    "name": "20ft Refrigerated Container (Unit B)",
    "shortName": "20ft Refrigerated Container (Unit B)",
    "condition": "New",
    "price": 4320,
    "sizeLabel": "20ft",
    "typeLabel": "refrigerated container",
    "image": "/images/atlas-20ft-refrigerated-container-unit-b.webp",
    "gallery": [
      "/images/atlas-g-939-1.webp",
      "/images/atlas-g-939-2.webp",
      "/images/atlas-g-939-3.webp",
      "/images/atlas-g-939-4.webp"
    ],
    "summary": "20ft Refrigerated Container (Unit B). Includes insulated walls, a refrigeration unit. From $4,320, sales only.",
    "description": [
      "The 20ft Refrigerated Container (Unit B) is a refrigerated container you can buy outright for delivery across the lower 48 states. The starting price of $4,320 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include insulated walls, a refrigeration unit. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Temperature-Controlled",
        "detail": "Built-in refrigeration unit for chilled or frozen storage."
      },
      {
        "label": "Insulated Walls",
        "detail": "Insulated steel box holds the set temperature."
      },
      {
        "label": "Power Required",
        "detail": "Needs a suitable electrical supply on site. Confirm the requirement when you quote."
      }
    ],
    "bestFor": [
      "Food storage",
      "Events and catering",
      "Temperature-controlled stock"
    ],
    "related": [
      "20ft-refrigerated-container",
      "40ft-refrigerated-shipping-container",
      "10ft-refrigerated-shipping-container"
    ]
  },
  {
    "slug": "20ft-refrigerated-container-unit-a",
    "categoryPath": "/shipping-containers-for-sale/",
    "name": "20ft Refrigerated Container (Unit A)",
    "shortName": "20ft Refrigerated Container (Unit A)",
    "condition": "New",
    "price": 4365,
    "sizeLabel": "20ft",
    "typeLabel": "refrigerated container",
    "image": "/images/atlas-20ft-refrigerated-container-unit-a.webp",
    "gallery": [
      "/images/atlas-g-934-1.webp",
      "/images/atlas-g-934-2.webp",
      "/images/atlas-g-934-3.webp"
    ],
    "summary": "20ft Refrigerated Container (Unit A). Includes insulated walls, a refrigeration unit. From $4,365, sales only.",
    "description": [
      "The 20ft Refrigerated Container (Unit A) is a refrigerated container you can buy outright for delivery across the lower 48 states. The starting price of $4,365 is the depot price, with delivery quoted for your ZIP code.",
      "Listed features include insulated walls, a refrigeration unit. Specifications can vary by unit, so we confirm size, finish and inclusions with you before you order."
    ],
    "features": [
      {
        "label": "Temperature-Controlled",
        "detail": "Built-in refrigeration unit for chilled or frozen storage."
      },
      {
        "label": "Insulated Walls",
        "detail": "Insulated steel box holds the set temperature."
      },
      {
        "label": "Power Required",
        "detail": "Needs a suitable electrical supply on site. Confirm the requirement when you quote."
      }
    ],
    "bestFor": [
      "Food storage",
      "Events and catering",
      "Temperature-controlled stock"
    ],
    "related": [
      "20ft-refrigerated-container",
      "40ft-refrigerated-shipping-container",
      "10ft-refrigerated-shipping-container"
    ],
    "kw": "refrigerated shipping container for sale",
    "vol": "260",
    "kd": "0"
  }
];

const cap = (s: string) => s.replace(/\b[a-z]/g, (c) => c.toUpperCase());

function toProduct(r: CatalogRow): ProductPageData {
  const priceText = `$${r.price.toLocaleString('en-US')}`;
  const kwTitle = r.kw ? cap(r.kw).replace(/\bFt\b/g, 'ft') : '';
  const longTitle = r.kw ? `${kwTitle} | ${r.shortName} ${priceText}` : '';
  const title = r.kw
    ? longTitle.length <= 60
      ? longTitle
      : `${kwTitle} for Sale | From ${priceText}`
    : `${r.shortName} | From ${priceText}`;
  const metaDescription = r.kw
    ? `Looking for a ${r.kw}? The ${r.shortName} starts at ${priceText}. Sales only, delivered in the US. Get a delivered quote.`
    : `Buy a ${r.shortName} from ${priceText}. ${r.condition}, delivered in the US. Sales only. Get a delivered quote.`;
  return {
    slug: r.slug,
    path: `/products/${r.slug}/`,
    categoryPath: r.categoryPath,
    name: r.name,
    h1: r.name,
    title,
    metaDescription,
    primaryKeyword: r.kw ?? r.shortName.toLowerCase(),
    keywordVolume: r.vol ?? 'n/a',
    keywordKd: r.kd ?? 'n/a',
    supportingKeywords: [],
    condition: r.condition,
    sizeLabel: r.sizeLabel,
    priceFrom: r.price,
    image: r.image,
    gallery: r.gallery,
    imageAlt: `Photo of the ${r.shortName}`,
    summary: r.summary,
    description: r.description,
    features: r.features,
    bestFor: r.bestFor,
    relatedProducts: r.related,
    aboutHeading: `About this ${r.typeLabel}`,
    noindex: r.kw ? undefined : true,
    faqs: [
      {
        question: 'Is delivery included in the starting price?',
        answer:
          'The starting price is the depot price. Delivery is quoted separately based on your ZIP code and site access. Request a delivered quote to see the full price.',
      },
      {
        question: 'Can the specification be changed?',
        answer: 'Many details can be adjusted. Tell us what you need when you request a quote and we will confirm what is possible.',
      },
    ],
  };
}

export const CATALOG_PRODUCTS: ProductPageData[] = ROWS.map(toProduct);
