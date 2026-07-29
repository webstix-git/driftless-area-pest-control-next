"use client";

import SiteShell from "./SiteShell";
import { CONTACT } from "@/lib/contact";

export default function HomePage() {
  return (
    <SiteShell>


      {/* ==========================================================================
           1. HERO — Who we are & what we do
           ========================================================================== */}
      <section className="hero-section" id="hero">
        <div className="hero-bg">
          <img src="/images/hero_bg.png" alt="Farmer spraying crop rows at golden hour across a Wisconsin agricultural field" />
        </div>
        <div className="hero-overlay"></div>

        <div className="container">
          <div className="hero-content reveal-up active">
            <h1 className="hero-title">Commercial, Industrial &amp; Agricultural<br /><span className="text-accent">Pest</span> Solutions</h1>
            <p className="hero-subtitle">
              Protecting farms, businesses, and industrial&nbsp;facilities across Wisconsin with
              reliable pest management.
            </p>
            <div className="hero-actions">
              <a href="/services" className="btn btn-accent">Explore Our Services</a>
              <a href="/service-area" className="btn btn-outline">Our Service Areas</a>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           ABOUT US — collage layout
           ========================================================================== */}
      <section className="about-intro-section" id="about">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-intro-visuals reveal-up">
              <div className="about-intro-main-img">
                <img src="/images/about_intro_main.png" alt="Technician reviewing dairy facility monitoring data on a tablet inside a Wisconsin dairy barn" />
              </div>
              <div className="about-intro-overlap-img">
                <img src="/images/about_intro_overlap.png" alt="Inspector using a flashlight and tablet to check under commercial kitchen equipment" />
              </div>
            </div>

            <div className="about-intro-content reveal-up stagger-delay-1">
              <span className="about-intro-badge">
                About Us
              </span>
              <h2>Pest Control Built Around How <span className="text-accent">Farms</span> and Facilities Operate</h2>
              <p className="about-intro-lead">
                Driftless Area Pest Control serves dairies, grain sites, warehouses, and industrial facilities throughout southwestern Wisconsin. Our business is built on more than 27 years of hands-on agricultural experience, giving us a firsthand understanding of the challenges farms and commercial operations face every day. We know that every property is different, which is why we take the time to understand your operation before recommending a solution.
              </p>
              <p className="about-intro-lead">
                Every service begins with a thorough site walkthrough. We identify entry points, problem areas, and the conditions that attract pests, then build a customized plan that fits your facility, your schedule, and your long-term goals.
              </p>

              <a href="/about" className="btn btn-service-green about-intro-cta">
                Learn More About Us
                <svg className="icon" viewBox="0 0 24 24"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           OUR SERVICES — premium grid
           ========================================================================== */}
      <section className="premium-services-section" id="services">
        <div className="container">
          <div className="premium-services-header reveal-up">
            <span className="section-eyebrow">Our Services</span>
            <h2>Built for <span className="text-accent">Farms</span>, Warehouses &amp; Industrial Sites</h2>
            <p>Inspection-led programs for commercial, industrial, and agricultural facilities across Wisconsin.</p>
          </div>

          <div className="premium-services-grid">
            <a href="/rodent-control" className="premium-service-card reveal-up">
              <div className="premium-service-media">
                <img className="pos-rodent" src="/images/service_commercial_rodent.png" alt="Mouse on a warehouse floor near stored goods" />
              </div>
              <div className="premium-service-body">
                <h3>Commercial &amp; Industrial Rodent Control</h3>
                <p className="premium-service-desc">Protect food plants, warehouses, retail sites, and offices with inspection-led rodent programs built for commercial and industrial facilities.</p>
                <div className="premium-service-details">
                  <div className="premium-service-details-inner">
                    <p className="premium-service-label">For</p>
                    <ul className="premium-service-list">
                      <li>Food Processing Facilities</li>
                      <li>Warehouses</li>
                      <li>Retail Stores</li>
                      <li>Office Buildings</li>
                    </ul>
                  </div>
                </div>
                <span className="premium-service-link">
                  View Rodent Control
                  <span className="premium-service-link-icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 24 24"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </span>
                </span>
              </div>
            </a>

            <a href="/agricultural-pest-control" className="premium-service-card reveal-up stagger-delay-1">
              <div className="premium-service-media">
                <img className="pos-ag" src="/images/service_ag_pest.png" alt="Technician spraying treatment across agricultural turf and crop grounds" />
              </div>
              <div className="premium-service-body">
                <h3>Agricultural Pest Management</h3>
                <p className="premium-service-desc">Support dairy, poultry, hog, grain, and feed operations with biosecurity-aware pest management designed around how farms actually run.</p>
                <div className="premium-service-details">
                  <div className="premium-service-details-inner">
                    <p className="premium-service-label">For</p>
                    <ul className="premium-service-list">
                      <li>Dairy Farms</li>
                      <li>Chicken Farms</li>
                      <li>Hog Facilities</li>
                      <li>Grain Facilities</li>
                      <li>Livestock Facilities</li>
                      <li>Feed Mills</li>
                      <li>Biosecurity-Conscious Livestock Operations</li>
                    </ul>
                  </div>
                </div>
                <span className="premium-service-link">
                  View Farm Programs
                  <span className="premium-service-link-icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 24 24"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </span>
                </span>
              </div>
            </a>

            <a href="/commercial-pest-control" className="premium-service-card reveal-up stagger-delay-2">
              <div className="premium-service-media">
                <img className="pos-insect" src="/images/service_insect_control.png" alt="Orange beetle larvae feeding on plant leaves" />
              </div>
              <div className="premium-service-body">
                <h3>Insect Control</h3>
                <p className="premium-service-desc">Control cockroaches, ants, spiders, flies, grain insects, and stinging pests with targeted treatments for commercial and agricultural sites.</p>
                <div className="premium-service-details">
                  <div className="premium-service-details-inner">
                    <p className="premium-service-label">Includes</p>
                    <ul className="premium-service-list">
                      <li>Cockroaches</li>
                      <li>Ants</li>
                      <li>Spiders</li>
                      <li>Flies</li>
                      <li>Grain Insects</li>
                      <li>Bees &amp; Wasps</li>
                    </ul>
                  </div>
                </div>
                <span className="premium-service-link">
                  View Insect Control
                  <span className="premium-service-link-icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 24 24"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </span>
                </span>
              </div>
            </a>

            <a href="/wildlife-removal" className="premium-service-card reveal-up">
              <div className="premium-service-media">
                <img className="pos-wildlife" src="/images/service_wildlife_removal.png" alt="Technician installing bird exclusion mesh on a commercial building while a pigeon flies away" />
              </div>
              <div className="premium-service-body">
                <h3>Wildlife Removal</h3>
                <p className="premium-service-desc">Manage birds, raccoons, and skunks with exclusion and prevention services that stop wildlife from nesting in or contaminating your facility.</p>
                <div className="premium-service-details">
                  <div className="premium-service-details-inner">
                    <p className="premium-service-label">Includes</p>
                    <ul className="premium-service-list">
                      <li>Bird Control</li>
                      <li>Raccoons</li>
                      <li>Skunks</li>
                      <li>Exclusion Services</li>
                      <li>Prevention Services</li>
                    </ul>
                  </div>
                </div>
                <span className="premium-service-link">
                  View Wildlife Services
                  <span className="premium-service-link-icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 24 24"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </span>
                </span>
              </div>
            </a>

            <a href="/services" className="premium-service-card reveal-up stagger-delay-1">
              <div className="premium-service-media">
                <img className="pos-monitoring" src="/images/service_remote_monitoring.png" alt="Remote monitoring dashboard with gateway and floor sensors in a warehouse" />
              </div>
              <div className="premium-service-body">
                <h3>Remote Monitoring</h3>
                <p className="premium-service-desc">Get 24/7 rodent monitoring, faster response, electronic reporting, and audit-ready support that strengthens food safety and preventive maintenance.</p>
                <div className="premium-service-details">
                  <div className="premium-service-details-inner">
                    <p className="premium-service-label">Includes</p>
                    <ul className="premium-service-list">
                      <li>24/7 Rodent Monitoring</li>
                      <li>Faster Response Times</li>
                      <li>Electronic Reporting</li>
                      <li>Preventive Maintenance Plans</li>
                      <li>Food Safety &amp; Audit Support</li>
                    </ul>
                  </div>
                </div>
                <span className="premium-service-link">
                  View Monitoring Plans
                  <span className="premium-service-link-icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 24 24"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </span>
                </span>
              </div>
            </a>

            <a href="/weed-control" className="premium-service-card reveal-up stagger-delay-2">
              <div className="premium-service-media">
                <img className="pos-weed" src="/images/service_ag.png" alt="Technician applying perimeter weed treatment along a facility exterior" />
              </div>
              <div className="premium-service-body">
                <h3>Perimeter Weed Control</h3>
                <p className="premium-service-desc">Keep building perimeters and facility exteriors clear with vegetation management that reduces pest harborage around your site.</p>
                <div className="premium-service-details">
                  <div className="premium-service-details-inner">
                    <p className="premium-service-label">Includes</p>
                    <ul className="premium-service-list">
                      <li>Vegetation Management</li>
                      <li>Building Perimeters</li>
                      <li>Access Areas</li>
                      <li>Facility Exteriors</li>
                    </ul>
                  </div>
                </div>
                <span className="premium-service-link">
                  View Weed Control
                  <span className="premium-service-link-icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 24 24"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </span>
                </span>
              </div>
            </a>
          </div>

          <div className="premium-services-footer reveal-up">
            <a href="/services" className="btn btn-service-green">
              View All Services
              <svg className="icon" viewBox="0 0 24 24"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           4. WHY BUSINESSES CHOOSE US (merged Why + Expertise + Tech)
           ========================================================================== */}
      <section className="why-section" id="why-us">
        <div className="container">
          <div className="why-layout">
            <div className="why-copy reveal-up">
              <span className="why-badge">Why Choose Us</span>
              <h2>Why Facilities <span className="text-accent">Trust</span> Driftless Area Pest Control</h2>
              <p className="why-lead">
                Every property is different, so we take the time to inspect the situation, understand what's causing the problem, and recommend the right solution for your business or farm.
              </p>

              <div className="why-features">
                <div className="why-feature">
                  <div className="why-feature-icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  </div>
                  <div>
                    <h3>Root-Cause Inspections</h3>
                    <p>We find entry points, harborage, and attractants — then seal gaps instead of only treating symptoms.</p>
                  </div>
                </div>
                <div className="why-feature">
                  <div className="why-feature-icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
                  </div>
                  <div>
                    <h3>Biosecurity-Aware Service</h3>
                    <p>We follow farm and food-facility protocols and keep documentation ready for audits and site managers.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="why-visual reveal-up stagger-delay-1">
              <div className="why-gallery">
                <div className="why-gallery-layer why-gallery-main">
                  <img src="/images/whychoose-big3.png" alt="Technician kneeling to inspect a facility foundation with a tablet near grain silos" />
                </div>
                <div className="why-gallery-layer why-gallery-mid">
                  <img src="/images/why_insect.jpg" alt="Technician sealing entry points along a facility foundation" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           7. SERVICE AREAS / CREDIBILITY
           ========================================================================== */}
      <section className="area-section" id="service-area">
        <div className="container">
          <div className="area-grid">
            <div className="area-content reveal-up">
              <span className="section-eyebrow">Service Areas</span>
              <h2>Service Areas Across Southwestern <span className="text-accent">Wisconsin</span></h2>
              <p>Based in the Driftless Region, we provide commercial and agricultural pest control across Richland, Sauk, Vernon, Crawford, Grant, Iowa, and neighboring counties — with rapid response when your facility needs help.</p>

              <div className="county-tags">
                <span className="county-tag">Richland County</span>
                <span className="county-tag">Sauk County</span>
                <span className="county-tag">Vernon County</span>
                <span className="county-tag">Crawford County</span>
                <span className="county-tag">Grant County</span>
                <span className="county-tag">Iowa County</span>
                <span className="county-tag">Lafayette County</span>
                <span className="county-tag">Juneau County</span>
              </div>

              <a href="/service-area" className="btn btn-accent">Check Service for Your Location</a>
            </div>

            <div className="map-visual reveal-up stagger-delay-1" style={{padding: '0', minHeight: '420px', background: 'none', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)'}}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186450.77196024194!2d-90.52843484218753!3d43.33694086438865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87fd40fb7e248b11%3A0xb3e164cf38a0670!2sRichland%20Center%2C%20WI%2053581!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{border: '0', width: '100%', height: '100%', minHeight: '420px', display: 'block'}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Driftless Area Pest Control Service Map - Richland Center, WI">
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           BLOG / INSIGHTS
           ========================================================================== */}
      <section className="blog-section" id="blog">
        <div className="container">
          <div className="blog-header reveal-up">
            <span className="section-eyebrow">Learn &amp; Prevent</span>
            <h2>Blog</h2>
            <p>Practical guidance for farms, warehouses, and commercial facilities across the Driftless Region.</p>
          </div>

          <div className="blog-grid">
            <a href="/blog/rodent-activity-warning-signs" className="blog-card reveal-up">
              <div className="blog-card-media">
                <img src="/images/blog_rodent.jpg" alt="Rodent peeking from a hole in a concrete facility wall" />
              </div>
              <div className="blog-card-body">
                <span className="blog-card-tag">Rodent Control</span>
                <h3>5 Signs of Rodent Activity in Your Facility (And What to Do)</h3>
                <p className="blog-card-desc">Learn the early warning signs of mice and rats in warehouses and food plants — from droppings and gnaw marks to nesting spots — and the steps that stop an infestation before it spreads.</p>
                <span className="blog-card-link">
                  Read Rodent Warning Signs
                  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </span>
              </div>
            </a>

            <a href="/blog/dairy-farm-pest-prevention" className="blog-card reveal-up stagger-delay-1">
              <div className="blog-card-media">
                <img src="/images/blog_dairy.jpg" alt="Holstein dairy cows feeding in a modern barn" />
              </div>
              <div className="blog-card-body">
                <span className="blog-card-tag">Agricultural Pest Management</span>
                <h3>Pest Prevention Strategies for Modern Dairy Farms</h3>
                <p className="blog-card-desc">See how dairy operations can reduce fly and rodent pressure around barns, parlors, and feed areas with biosecurity-aware prevention that protects herd health and milk quality.</p>
                <span className="blog-card-link">
                  Read Dairy Pest Guide
                  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </span>
              </div>
            </a>

            <a href="/blog/spring-insect-control-prep" className="blog-card reveal-up stagger-delay-2">
              <div className="blog-card-media">
                <img src="/images/blog_ants.jpg" alt="Black ants crawling along a surface crack" />
              </div>
              <div className="blog-card-body">
                <span className="blog-card-tag">Insect Control</span>
                <h3>Spring Insect Control: What to Expect and How to Prepare</h3>
                <p className="blog-card-desc">Get ahead of ants, flies, and crawling insects as temperatures rise. This guide covers seasonal pressure points and how commercial sites can prepare before spring activity peaks.</p>
                <span className="blog-card-link">
                  Read Spring Insect Tips
                  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           8. FREQUENTLY ASKED QUESTIONS
           ========================================================================== */}
      <section className="faq-section" id="faq">
        <div className="container">
          <div className="faq-header reveal-up">
            <span className="section-eyebrow">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>Straight answers to the questions commercial and agricultural clients ask most often.</p>
          </div>

          <div className="faq-list reveal-up">
            <details className="faq-item" open>
              <summary>Do you serve homes, or only businesses and farms?</summary>
              <p>Our focus is commercial, industrial, and agricultural clients. If you manage a farm, processing plant, warehouse, or similar facility in our service area, we are set up to help.</p>
            </details>

            <details className="faq-item" open>
              <summary>What does “root-cause” pest control mean?</summary>
              <p>It means we look for how pests get in and what keeps them there — entry gaps, harborage, and attractants — then seal and correct those issues instead of relying only on repeated sprays.</p>
            </details>

            <details className="faq-item" open>
              <summary>Can you work within farm biosecurity protocols?</summary>
              <p>Yes. Our team follows site biosecurity rules, communicates with the people on the ground, and plans treatments around livestock health and facility schedules.</p>
            </details>

            <details className="faq-item" open>
              <summary>What is remote monitoring, and who needs it?</summary>
              <p>Remote monitoring uses electronic sensors to track pest activity between visits. It is especially useful for food processors and commercial sites that need faster alerts and audit-ready digital records.</p>
            </details>

            <details className="faq-item" open>
              <summary>Which areas of Wisconsin do you cover?</summary>
              <p>We serve southwestern and central Wisconsin, including Richland, Sauk, Vernon, Crawford, Grant, Iowa, Lafayette, Juneau, and neighboring counties in the Driftless Region.</p>
            </details>

            <details className="faq-item" open>
              <summary>How do I request an inspection or quote?</summary>
              <p>Call <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a> or use the <a href="/contact">Request a Free Inspection</a> form. Tell us about your facility type and location, and our team will follow up to schedule a visit.</p>
            </details>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           9. FINAL CTA
           ========================================================================== */}
      <section className="cta-section" id="cta-band">
        <div className="cta-bg">
          <img src="/images/final_cta_bg.jpg" alt="Pest control technician treating the exterior of a facility" />
        </div>
        <div className="cta-overlay"></div>
        <div className="container">
          <div className="cta-content reveal-up">
            <h2>Request a <span className="text-accent">Free</span> Inspection</h2>
            <p>Tell us about your farm or facility. We will review your site needs and recommend a practical pest control plan for your operation.</p>

            <div className="cta-buttons">
              <a href="/contact" className="btn btn-accent">Request a Free Inspection</a>
              <a href={CONTACT.phoneHref} className="btn btn-gold">
                <svg className="icon" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call {CONTACT.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

    
    </SiteShell>
  );
}
