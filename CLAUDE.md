# Steelridge Containers: Next.js shipping container sales site (USA)

- Stack: Next.js 16 App Router, static generation (SSG), Tailwind v4, TypeScript. `trailingSlash: true`.
- Routes: `src/app/page.tsx` (home) and `src/app/[...slug]/page.tsx` (all categories, locations, guides, trust pages, resolved from `src/data/*` via `src/lib/routes.ts`).
- Titles, descriptions and canonicals come from `generateMetadata`; JSON-LD comes from `src/components/SeoHead.tsx`.
- Page content lives in `src/data/` (categories, guides, locations, trustPages). Keyword map and page plan: `taxonomy.md`.
- Images: `public/images/`, referenced from `src/data/images.ts`.
- Keyword rules (standing, until the owner says otherwise): US monthly volume 110 or more, KD under 25, transactional or commercial intent, sales only. Research lives in `keyword-research.md` / `.csv`.
- SEO limits: title <= 60 chars, meta description <= 155 chars, one primary keyword per page.
- Business model: sales only (no rental). Market: USA.
- GitHub: https://github.com/kings1876/shipping-container (main). Vercel project: `shipping-container`, connected to the repo, prod alias https://shipping-container.vercel.app
- Set `NEXT_PUBLIC_SITE_URL` in Vercel when the real domain is connected.
- OpenSEO project: "Shipping Containers USA" (id 8de1e89b-e355-4154-870a-18bfe717a276), US market.
- Verify changes with `npm run lint` and `npm run build` before pushing.
- Catalog import: `src/data/catalogProducts.ts` holds 90 products imported from the supplier catalog (Atlas Container Supply), with our own descriptions and photos in `public/images/atlas-*.webp`. Prices are the supplier's listed prices, to be confirmed. 64 have their own researched primary keyword (two research rounds) and are indexable; the other 26 are `noindex` and out of the sitemap until a qualifying keyword (volume >= 110, KD < 25) is found. Product galleries come from `gallery` (`public/images/atlas-g-<id>-<n>.webp`).
