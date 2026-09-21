import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import PageCTA from "@/components/PageCTA";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Resources | Driftless Area Pest Control",
  description:
    "Guides, pest library references, FAQs, and blog articles for Wisconsin farms and commercial facilities.",
  alternates: { canonical: "/resources" },
};

const guides = [
  {
    href: "/pest-library",
    tag: "Identify",
    title: "Pest Library",
    desc: "Recognize common pests that pressure farms, warehouses, and food facilities — so you can act before activity spreads.",
    cta: "Browse Pest Library",
    img: "/images/blog_rodent.jpg",
    imgAlt: "Rodent peeking from a facility wall opening",
    featured: true,
  },
  {
    href: "/cockroach-guide",
    tag: "Prevent",
    title: "Cockroach Guide",
    desc: "Practical guidance on cockroach activity, sanitation pressure points, and facility response.",
    cta: "Open Cockroach Guide",
    img: "/images/cockroach_guide_hero.png",
    imgAlt: "American cockroach in detailed macro view for facility identification",
    featured: false,
  },
  {
    href: "/homeowner-faq",
    tag: "FAQ",
    title: "Homeowner FAQ",
    desc: "Clear answers for residential questions, plus how our commercial and agricultural focus works.",
    cta: "Read FAQ",
    img: "/images/why_farm_facility.jpg",
    imgAlt: "Farm facility exterior",
    featured: false,
  },
  {
    href: "/blog",
    tag: "Insights",
    title: "Blog",
    desc: "Articles on rodent warning signs, dairy prevention, and seasonal insect pressure.",
    cta: "View All Articles",
    img: "/images/blog_dairy.jpg",
    imgAlt: "Dairy barn with Holstein cows",
    featured: false,
  },
];

export default function ResourcesPage() {
  const featured = guides.find((g) => g.featured)!;
  const secondary = guides.filter((g) => !g.featured);
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <SiteShell>
      <div className="resources-page">
        <PageHero
          title="Resources"
          description="Practical guides and references for Wisconsin farms and commercial facilities — built to help you recognize pressure early and plan stronger prevention."
          imageSrc="/images/blog_dairy.jpg"
          imageAlt="Dairy barn interior with Holstein cows"
          objectPosition="center 35%"
        />

        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Resources" }]} />

        <section className="resources-hub-section">
          <div className="container">
            <div className="resources-hub-header reveal-up">
              <span className="section-eyebrow">Resource Hub</span>
              <h2>
                Guides for <span className="text-accent">Farms</span> &amp; Facilities
              </h2>
              <p>
                Start with identification, move into prevention, then dig into articles when you need
                deeper context. Every guide is written for managers who run sites day to day.
              </p>
            </div>

            <div className="resources-hub-layout">
              <a href={featured.href} className="resources-featured reveal-up">
                <div className="resources-featured-media">
                  <img src={featured.img} alt={featured.imgAlt} />
                </div>
                <div className="resources-featured-body">
                  <span className="resources-card-tag">{featured.tag}</span>
                  <h3>{featured.title}</h3>
                  <p>{featured.desc}</p>
                  <span className="resources-card-link">
                    {featured.cta}
                    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                      <line x1="5" x2="19" y1="12" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </a>

              <div className="resources-hub-stack">
                {secondary.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`resources-stack-card reveal-up stagger-delay-${index + 1}`}
                  >
                    <div className="resources-stack-media">
                      <img src={item.img} alt={item.imgAlt} />
                    </div>
                    <div className="resources-stack-body">
                      <span className="resources-card-tag">{item.tag}</span>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                      <span className="resources-card-link">
                        {item.cta}
                        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                          <line x1="5" x2="19" y1="12" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="resources-reads-section">
          <div className="container">
            <div className="resources-reads-header reveal-up">
              <span className="section-eyebrow">From the Blog</span>
              <h2>
                Practical insights for <span className="text-accent">farms</span> &amp; facilities
              </h2>
              <p>
                Short articles on rodent warning signs, dairy prevention, and seasonal insect
                pressure — written for managers who need clear next steps.
              </p>
            </div>

            <div className="blog-grid">
              {featuredPosts.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="blog-card reveal-up"
                >
                  <div className="blog-card-media">
                    <img src={post.img} alt="" />
                  </div>
                  <div className="blog-card-body">
                    <span className="blog-card-tag">{post.tag}</span>
                    <h3>{post.title}</h3>
                    <p className="blog-card-desc">{post.description}</p>
                    <span className="blog-card-link">
                      {post.cta}
                      <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                        <line x1="5" x2="19" y1="12" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <PageCTA />
      </div>
    </SiteShell>
  );
}
