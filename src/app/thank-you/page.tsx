import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "Contact – Thank You",
  description: "Thanks for contacting us! We will get in touch with you shortly.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/thank-you" },
};

export default function ThankYouPage() {
  return (
    <SiteShell>
      <PageHero
        title={"CONTACT – THANK YOU"}
        imageSrc="/images/why_insect.jpg"
        imageAlt="Pest control technician inspecting a facility exterior"
        objectPosition="center 35%"
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/contact" },
          { label: "Thank You" },
        ]}
      />

      <section className="page-section bg-cream">
        <div className="container">
          <div className="thank-you-layout reveal-up active">
            <div className="resources-hub-header">
              <span className="section-eyebrow">Request received</span>
              <h2>Thanks for contacting us!</h2>
              <p>We will get in touch with you shortly.</p>
            </div>
          </div>
        </div>
      </section>

      <PageCTA
        title="Need help sooner?"
        description="Call our team directly and we will help you with the next step for your facility."
        primaryLabel="Contact Us Again"
      />
    </SiteShell>
  );
}
