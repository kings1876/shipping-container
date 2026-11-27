export type RouteCategory =
  | 'home'
  | 'hub'
  | 'core-category'
  | 'modified-category'
  | 'home-guide-hub'
  | 'location'
  | 'guide'
  | 'trust';

export interface BreadcrumbItem {
  label: string;
  path: string;
}

export interface ContainerSpecRow {
  model: string;
  grade: string;
  extDimensions: string;
  intDimensions: string;
  doorOpening: string;
  cubicVolume: string;
  tareWeight: string;
  maxPayload: string;
  priceFrom: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CategoryPageData {
  path: string;
  group: 'core' | 'modified';
  isHub?: boolean;
  isGuideHub?: boolean;
  navLabel: string;
  h1: string;
  title: string; // <= 60 chars
  metaDescription: string; // <= 155 chars
  primaryKeyword: string;
  keywordVolume: string;
  keywordKd: string;
  supportingKeywords: string[];
  priceFrom: number | null;
  priceUnitLabel?: string;
  image: string;
  imageAlt: string;
  kicker: string;
  summary: string;
  overviewParagraphs: string[];
  highlights: { label: string; detail: string }[];
  specs: ContainerSpecRow[];
  deliveryInfo: {
    method: string;
    leadTime: string;
    clearanceRequired: string;
    sitePrep: string;
  };
  relatedCategories: string[];
  relatedGuides: string[];
  faqs: FaqItem[];
}

export interface LocationPageData {
  slug: string;
  path: string;
  placeName: string;
  stateCode: string;
  h1: string;
  title: string; // <= 60 chars
  metaDescription: string; // <= 155 chars
  primaryKeyword: string;
  keywordMetrics: string;
  depotName: string;
  depotCity: string;
  depotAddress: string;
  deliveryDays: string;
  serviceRadiusMiles: number;
  priceFrom20ftUsed: number;
  priceFrom40ftUsed: number;
  priceFrom20ftNew: number;
  priceFrom40ftHcNew: number;
  permitSummary: string;
  climateAndSiteNote: string;
  localSummary: string;
  localInventoryNotes: string[];
  nearbyCorridors: string[];
  faqs: FaqItem[];
}

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  bulletPoints?: string[];
}

export interface GuideComparisonTable {
  caption: string;
  headers: string[];
  rows: string[][];
}

export interface GuidePageData {
  slug: string;
  path: string;
  category: 'sizing-pricing' | 'container-homes' | 'buying-delivery';
  navLabel: string;
  h1: string;
  title: string; // <= 60 chars
  metaDescription: string; // <= 155 chars
  primaryKeyword: string;
  keywordMetrics: string;
  supportingKeywords: string[];
  readTime: string;
  updatedDate: string;
  summary: string;
  sections: GuideSection[];
  comparisonTable?: GuideComparisonTable;
  relatedCategories: string[];
  relatedGuides: string[];
}

export interface TrustpilotReview {
  id: string;
  reviewerName: string;
  location: string;
  verifiedDate: string;
  rating: 4 | 5;
  modelPurchased: string;
  title: string;
  body: string;
  buildQualityHighlight: string;
  deliveryHighlight: string;
}

export interface TrustPageData {
  path: string;
  navLabel: string;
  h1: string;
  title: string; // <= 60 chars
  metaDescription: string; // <= 155 chars
  kicker: string;
  summary: string;
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
}

export interface ProductPageData {
  slug: string;
  path: string;
  categoryPath: string;
  name: string;
  h1: string;
  title: string; // <= 60 chars
  metaDescription: string; // <= 155 chars
  primaryKeyword: string;
  keywordVolume: string;
  keywordKd: string;
  supportingKeywords: string[];
  condition: string;
  sizeLabel: string;
  priceFrom: number;
  image: string;
  gallery?: string[];
  imageAlt: string;
  summary: string;
  description: string[];
  features: { label: string; detail: string }[];
  bestFor: string[];
  spec?: ContainerSpecRow;
  relatedProducts: string[];
  aboutHeading?: string;
  noindex?: boolean;
  faqs: FaqItem[];
}
