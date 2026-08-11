import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://driftlessareapestcontrol.com";

const staticRoutes = [
  "",
  "/about",
  "/service-area",
  "/case-studies",
  "/services",
  "/service-index",
  "/commercial-pest-control",
  "/agricultural-pest-control",
  "/rodent-control",
  "/wildlife-removal",
  "/weed-control",
  "/resources",
  "/pest-library",
  "/cockroach-guide",
  "/homeowner-faq",
  "/blog",
  "/contact",
  "/site-map",
  "/privacy-policy",
  "/ai-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = staticRoutes.map((path) => ({
    url: `${baseUrl}${path || "/"}`,
    lastModified: now,
    changeFrequency: path === "" || path === "/services" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "" ? 1 : path === "/contact" || path === "/services" ? 0.9 : 0.7,
  }));

  const posts = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...posts];
}
