import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

// Vercel already adds `X-Robots-Tag: noindex` to preview deployments.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  };
}
