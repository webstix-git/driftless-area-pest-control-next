import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Our Team | Driftless Area Pest Control",
  description:
    "Meet the Driftless Area Pest Control team serving farms and commercial facilities across southwestern Wisconsin.",
};

const teamMembers = [
  {
    name: "Team member name",
    description: "Team member information",
  },
  {
    name: "Team member name",
    description: "Team member information",
  },
  {
    name: "Team member name",
    description: "Team member information",
  },
];

export default function TeamPage() {
  return (
    <SiteShell>
      <div className="team-page">
        <PageHero
          title="Our Team"
          description="Local specialists grounded in agricultural work and commercial facility service across southwestern Wisconsin."
          imageSrc="/images/about_banner.png"
          imageAlt="Agricultural team reviewing field data on a tablet in a crop field at golden hour"
          objectPosition="center 15%"
        />

        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Our Team" },
          ]}
        />

        <section className="team-members page-section">
          <div className="container">
            <div className="team-members-header reveal-up">
              <span className="section-eyebrow">Meet the Team</span>
              <h2>
                People Behind Every <span className="text-accent">Site</span> Visit
              </h2>
            </div>

            <div className="team-list">
              {teamMembers.map((member, index) => (
                <article
                  key={`team-member-${index}`}
                  className={`team-row reveal-up${index === 1 ? " stagger-delay-1" : ""}${index === 2 ? " stagger-delay-2" : ""}`}
                >
                  <div className="team-row-photo" aria-hidden="true">
                    <span>Coming Soon</span>
                  </div>
                  <div className="team-row-content">
                    <h3>{member.name}</h3>
                    <p>{member.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
