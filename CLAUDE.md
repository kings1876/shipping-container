# Steelridge Containers: Next.js shipping container sales site (USA)

- Stack: Next.js 16 App Router, static generation (SSG), Tailwind v4, TypeScript. `trailingSlash: true`.
- Routes: `src/app/page.tsx` (home) and `src/app/[...slug]/page.tsx` (all categories, locations, guides, trust pages, resolved from `src/data/*` via `src/lib/routes.ts`).
- Titles, descriptions and canonicals come from `generateMetadata`; JSON-LD comes from `src/components/SeoHead.tsx`.
- Page content lives in `src/data/` (categories, guides, locations, trustPages). Keyword map and page plan: `taxonomy.md`.
- Images: `public/images/`, referenced from `src/data/images.ts`.
- SEO limits: title <= 60 chars, meta description <= 155 chars, one primary keyword per page.
- Business model: sales only (no rental). Market: USA.
- GitHub: https://github.com/kings1876/shipping-container (main). Vercel project: `shipping-container`, connected to the repo, prod alias https://shipping-container.vercel.app
- Set `NEXT_PUBLIC_SITE_URL` in Vercel when the real domain is connected.
- OpenSEO project: "Shipping Containers USA" (id 8de1e89b-e355-4154-870a-18bfe717a276), US market.
- Verify changes with `npm run lint` and `npm run build` before pushing.
