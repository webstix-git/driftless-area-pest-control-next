import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "Sitemap | Driftless Area Pest Control",
  description:
    "Browse every page on the Driftless Area Pest Control website — organized the same way as the main navigation.",
};

const navSections = [
  {
    title: "Home",
    href: "/",
    links: [],
  },
  {
    title: "About",
    href: "/about",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/team", label: "Our Team" },
      { href: "/service-area", label: "Service Area" },
      { href: "/case-studies", label: "Case Studies" },
    ],
  },
  {
    title: "Services",
    href: "/services",
    links: [
      { href: "/services", label: "Services Overview" },
      { href: "/commercial-pest-control", label: "Commercial Pest Control" },
      { href: "/agricultural-pest-control", label: "Agricultural Pest Control" },
      { href: "/rodent-control", label: "Rodent Control & Exclusion" },
      { href: "/wildlife-removal", label: "Wildlife Removal" },
      { href: "/weed-control", label: "Perimeter Weed Control" },
    ],
  },
  {
    title: "Resources",
    href: "/resources",
    links: [
      { href: "/resources", label: "Resources" },
      { href: "/pest-library", label: "Pest Library" },
      { href: "/cockroach-guide", label: "Cockroach Guide" },
      { href: "/homeowner-faq", label: "Homeowner FAQ" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Contact Us",
    href: "/contact",
    links: [],
  },
];

export default function SitemapPage() {
  return (
    <SiteShell>
      <PageHero
        title="Sitemap"
        description="Site pages organized to match the main navigation — Home, About, Services, Resources, and Contact."
        imageSrc="/images/why_farm_facility.jpg"
        imageAlt="Farm facility exterior"
        objectPosition="center 40%"
      />

      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Sitemap" }]} />

      <section className="page-section bg-cream">
        <div className="container">
          <div className="sitemap-layout reveal-up">
            <div className="resources-hub-header">
              <span className="section-eyebrow">Site navigation</span>
              <h2>Pages</h2>
            </div>

            <nav className="sitemap-nav" aria-label="Sitemap">
              <ul className="sitemap-nav-list">
                {navSections.map((section) => (
                  <li key={section.title} className="sitemap-nav-section">
                    <a href={section.href} className="sitemap-nav-parent">
                      {section.title}
                    </a>
                    {section.links.length > 0 ? (
                      <ul className="sitemap-nav-children">
                        {section.links.map((link) => (
                          <li key={`${section.title}-${link.href}-${link.label}`}>
                            <a href={link.href}>{link.label}</a>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <PageCTA />
    </SiteShell>
  );
}
