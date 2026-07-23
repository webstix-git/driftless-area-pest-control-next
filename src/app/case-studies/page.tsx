import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Case Studies | Driftless Area Pest Control",
  description:
    "Case studies from Driftless Area Pest Control are being prepared. Check back soon for facility results and project updates.",
};

export default function CaseStudiesPage() {
  return (
    <SiteShell>
      <PageHero
        title="Case Studies"
        description="We are preparing detailed project stories from farms and commercial sites across Wisconsin. Check back soon for results and practical takeaways from real facility work."
        imageSrc="/images/service_tech_bg.jpg"
        imageAlt="Commercial facility exterior"
        objectPosition="center 35%"
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Case Studies" },
        ]}
      />

      <ComingSoon />
    </SiteShell>
  );
}
