import type { BlogPost } from "@/data/blog-posts";
import { getRelatedPosts } from "@/data/blog-posts";
import SiteShell from "./SiteShell";
import PageHero from "./PageHero";
import Breadcrumb from "./Breadcrumb";
import PageCTA from "./PageCTA";

export default function BlogPostLayout({ post }: { post: BlogPost }) {
  const related = getRelatedPosts(post.slug);

  return (
    <SiteShell>
      <div className="blog-detail-page">
        <PageHero
          title={post.title}
          imageSrc={post.img}
          imageAlt={post.imgAlt}
          objectPosition={post.objectPosition}
        />

        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />

        <article className="blog-post page-section bg-cream">
          <div className="container blog-post-layout">
            <div className="blog-post-main reveal-up">
              <div className="blog-post-panel">
                <div className="blog-post-meta">
                  <span className="blog-card-tag">{post.tag}</span>
                  {post.relatedService ? (
                    <a href={post.relatedService.href} className="blog-post-service-link">
                      Related: {post.relatedService.label}
                      <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                        <line x1="5" x2="19" y1="12" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                  ) : null}
                </div>

                <div className="blog-post-featured">
                  <img src={post.img} alt={post.imgAlt} />
                </div>

                <div className="blog-post-body">
                  {post.intro.map((paragraph, index) => (
                    <p
                      key={`intro-${index}`}
                      className={index === 0 ? "blog-post-lead" : undefined}
                    >
                      {paragraph}
                    </p>
                  ))}

                  {post.sections.map((section) => (
                    <section key={section.heading} className="blog-post-section">
                      <h2>{section.heading}</h2>
                      {section.paragraphs.map((paragraph, index) => (
                        <p key={`${section.heading}-p-${index}`}>{paragraph}</p>
                      ))}
                      {section.bullets ? (
                        <ul className="page-checklist blog-post-checklist">
                          {section.bullets.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ) : null}
                    </section>
                  ))}
                </div>
              </div>
            </div>

            <aside className="blog-post-aside reveal-up stagger-delay-1">
              <div className="blog-post-takeaways">
                <span className="section-eyebrow">Quick Read</span>
                <h3>Key Takeaways</h3>
                <ul className="page-checklist blog-post-checklist">
                  {post.takeaways.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {post.relatedService ? (
                <div className="blog-post-help">
                  <span className="section-eyebrow">On-Site Support</span>
                  <h3>Need help on site?</h3>
                  <p>
                    If this issue is showing up in your facility, we can walk the site and outline a
                    practical next step.
                  </p>
                  <a href={post.relatedService.href} className="blog-post-aside-link">
                    View {post.relatedService.label}
                    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                      <line x1="5" x2="19" y1="12" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              ) : null}
            </aside>
          </div>
        </article>

        {related.length > 0 ? (
          <section className="blog-related page-section">
            <div className="container">
              <div className="resources-hub-header reveal-up">
                <span className="section-eyebrow">Keep Reading</span>
                <h2>
                  Related <span className="text-accent">articles</span>
                </h2>
                <p>
                  More practical guidance for farms and facilities dealing with similar pressure
                  points.
                </p>
              </div>
              <div className="blog-grid blog-grid-related">
                {related.map((item) => (
                  <a
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="blog-card reveal-up"
                  >
                    <div className="blog-card-media">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="blog-card-body">
                      <span className="blog-card-tag">{item.tag}</span>
                      <h3>{item.title}</h3>
                      <p className="blog-card-desc">{item.description}</p>
                      <span className="blog-card-link">
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
          </section>
        ) : null}

        <PageCTA />
      </div>
    </SiteShell>
  );
}
