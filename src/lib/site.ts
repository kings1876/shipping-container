export const SITE_NAME = 'Steelridge Containers';

// Set NEXT_PUBLIC_SITE_URL in Vercel once the production domain is connected.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')
).replace(/\/$/, '');

export function clampTitle(title: string): string {
  return title.length > 60 ? title.slice(0, 60) : title;
}

export function clampDescription(description: string): string {
  return description.length > 155 ? description.slice(0, 155) : description;
}
