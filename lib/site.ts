// Canonical origin for absolute URLs (sitemap, robots, structured data, canonical link).
// Production uses the project's production domain; previews use their own URL so the
// share image and canonical link can be checked there; local dev falls back to localhost.
export function getSiteUrl(): string {
  if (process.env.VERCEL_ENV === "production" && process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}
