import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import PageCTA from "@/components/PageCTA";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog | Driftless Area Pest Control",
  description:
    "Practical pest management articles for Wisconsin farms, warehouses, and commercial facilities.",
};

export default function BlogPage() {
  return (
    <SiteShell>
      <PageHero
        title="Blog"
        description="Practical pest management articles for Wisconsin farms, warehouses, and commercial facilities — covering warning signs, prevention, and facility response."
        imageSrc="/images/blog_dairy.jpg"
        imageAlt="Dairy barn with Holstein cows"
        objectPosition="center 30%"
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Blog" },
        ]}
      />

      <section className="page-section bg-cream">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
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
    </SiteShell>
  );
}
