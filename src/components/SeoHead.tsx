import { BreadcrumbItem, FaqItem } from '../types/seo';
import { SITE_NAME, SITE_URL, clampDescription } from '../lib/site';

interface ProductOfferSchemaInput {
  name: string;
  description: string;
  lowPrice: number;
  highPrice?: number;
  image?: string;
  images?: string[];
}

interface SeoHeadProps {
  // title is applied through the route's generateMetadata; kept for call-site compatibility.
  title?: string;
  description: string;
  path: string;
  breadcrumbs: BreadcrumbItem[];
  productSchema?: ProductOfferSchemaInput;
  articleHeadline?: string;
  faqs?: FaqItem[];
}

/** Renders the JSON-LD graph. Title, description and canonical come from generateMetadata. */
export function SeoHead({
  description,
  path,
  breadcrumbs,
  productSchema,
  articleHeadline,
  faqs,
}: SeoHeadProps) {
  const origin = SITE_URL;
  const canonicalUrl = `${origin}${path}`;
  const safeDesc = clampDescription(description);

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Organization',
      name: SITE_NAME,
      url: origin,
      telephone: '+1-800-555-0194',
      areaServed: 'US',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.label,
        item: `${origin}${crumb.path}`,
      })),
    },
  ];

  if (productSchema) {
    graph.push({
      '@type': 'Product',
      name: productSchema.name,
      description: productSchema.description,
      brand: { '@type': 'Brand', name: SITE_NAME },
      image: productSchema.images?.length
        ? productSchema.images.map((src) => `${origin}${src}`)
        : productSchema.image
          ? `${origin}${productSchema.image}`
          : undefined,
      offers: {
        '@type': productSchema.highPrice ? 'AggregateOffer' : 'Offer',
        priceCurrency: 'USD',
        lowPrice: productSchema.lowPrice,
        price: productSchema.highPrice ? undefined : productSchema.lowPrice,
        highPrice: productSchema.highPrice,
        availability: 'https://schema.org/InStock',
        url: canonicalUrl,
        seller: { '@type': 'Organization', name: SITE_NAME },
      },
    });
  }

  if (articleHeadline) {
    graph.push({
      '@type': 'Article',
      headline: articleHeadline,
      description: safeDesc,
      author: { '@type': 'Organization', name: `${SITE_NAME} Engineering Team` },
      publisher: { '@type': 'Organization', name: SITE_NAME },
      mainEntityOfPage: canonicalUrl,
    });
  }

  if (faqs && faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(
          /</g,
          '\\u003c',
        ),
      }}
    />
  );
}
