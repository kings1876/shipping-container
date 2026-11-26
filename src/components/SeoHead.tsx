import { useEffect } from 'react';
import { BreadcrumbItem, FaqItem } from '../types/seo';

interface ProductOfferSchemaInput {
  name: string;
  description: string;
  lowPrice: number;
  highPrice?: number;
  image?: string;
}

interface SeoHeadProps {
  title: string;
  description: string;
  path: string;
  breadcrumbs: BreadcrumbItem[];
  productSchema?: ProductOfferSchemaInput;
  articleHeadline?: string;
  faqs?: FaqItem[];
}

export function SeoHead({
  title,
  description,
  path,
  breadcrumbs,
  productSchema,
  articleHeadline,
  faqs,
}: SeoHeadProps) {
  useEffect(() => {
    const safeTitle = title.length > 60 ? title.slice(0, 60) : title;
    const safeDesc = description.length > 155 ? description.slice(0, 155) : description;
    const origin = window.location.origin;
    const canonicalUrl = `${origin}${path}`;

    document.title = safeTitle;

    const setMeta = (selector: string, attrName: string, attrValue: string, content: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('meta[name="description"]', 'name', 'description', safeDesc);
    setMeta('meta[property="og:title"]', 'property', 'og:title', safeTitle);
    setMeta('meta[property="og:description"]', 'property', 'og:description', safeDesc);
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', safeTitle);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', safeDesc);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Build JSON-LD graph
    const graph: Record<string, unknown>[] = [
      {
        '@type': 'Organization',
        name: 'Steelridge Containers',
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
        brand: {
          '@type': 'Brand',
          name: 'Steelridge Containers',
        },
        image: productSchema.image ? `${origin}${productSchema.image}` : undefined,
        offers: {
          '@type': productSchema.highPrice ? 'AggregateOffer' : 'Offer',
          priceCurrency: 'USD',
          lowPrice: productSchema.lowPrice,
          price: productSchema.highPrice ? undefined : productSchema.lowPrice,
          highPrice: productSchema.highPrice,
          availability: 'https://schema.org/InStock',
          url: canonicalUrl,
          seller: {
            '@type': 'Organization',
            name: 'Steelridge Containers',
          },
        },
      });
    }

    if (articleHeadline) {
      graph.push({
        '@type': 'Article',
        headline: articleHeadline,
        description: safeDesc,
        author: {
          '@type': 'Organization',
          name: 'Steelridge Containers Engineering Team',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Steelridge Containers',
        },
        mainEntityOfPage: canonicalUrl,
      });
    }

    if (faqs && faqs.length > 0) {
      graph.push({
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      });
    }

    const scriptId = 'steelridge-jsonld';
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = scriptId;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': graph,
    });
  }, [title, description, path, breadcrumbs, productSchema, articleHeadline, faqs]);

  return null;
}
