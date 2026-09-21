/** Shared SEO helpers — keep titles ≤60 and descriptions ≤160. */

export const SITE_NAME = "Driftless Area Pest Control";
export const TITLE_TEMPLATE = `%s | ${SITE_NAME}`;
export const TITLE_SUFFIX = ` | ${SITE_NAME}`; // 30 chars

export const DEFAULT_TITLE =
  "Commercial Pest Control in WI | Driftless Area Pest Control"; // 59

export const DEFAULT_DESCRIPTION =
  "Root-cause pest control for Wisconsin farms, warehouses, and commercial facilities. Inspection-led service with optional 24/7 remote monitoring."; // 148

export type PageSeo = {
  /** Page title segment (template appends brand). Keep ≤30 chars, or use absolute. */
  title: string;
  description: string;
  /** When true, title is used as-is (already includes brand / under 60). */
  absolute?: boolean;
};

export function withBrand(title: string): string {
  return `${title}${TITLE_SUFFIX}`;
}

export function assertSeoLimits(label: string, title: string, description: string) {
  if (process.env.NODE_ENV === "development") {
    if (title.length > 60) {
      console.warn(`[SEO] ${label} title is ${title.length} chars (max 60): ${title}`);
    }
    if (description.length > 160) {
      console.warn(
        `[SEO] ${label} description is ${description.length} chars (max 160)`
      );
    }
  }
}

/** Final title string for a page (with brand unless absolute). */
export function pageTitle(seo: PageSeo): string {
  const title = seo.absolute ? seo.title : withBrand(seo.title);
  assertSeoLimits(seo.title, title, seo.description);
  return title;
}
