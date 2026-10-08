import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

// One-page site for now; add routes here as the milestone-4 pages land.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: getSiteUrl(), changeFrequency: "monthly", priority: 1 }];
}
