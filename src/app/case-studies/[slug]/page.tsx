import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyDetailLayout from "@/components/CaseStudyDetailLayout";
import { caseStudies, getCaseStudy, plainCaseStudyText } from "@/data/case-studies";
import { withBrand } from "@/lib/seo";

type CaseStudyDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return { title: "Case Study Not Found" };
  }

  const seoBySlug: Record<string, { title: string; description: string }> = {
    "commercial-buildings": {
      title: "iQ Commercial Rodent Study",
      description:
        "Bell Laboratories iQ case study: 50% less outdoor and 75% less indoor rodent activity at a 600,000 sq. ft. commercial facility.",
    },
    "food-production": {
      title: "iQ Food Plant Pest Study",
      description:
        "Bell Laboratories iQ case study on smarter rodent monitoring and control for food production facilities and audit-ready programs.",
    },
  };

  const seo = seoBySlug[study.slug] ?? {
    title: "Rodent Monitoring Case Study",
    description: plainCaseStudyText(study.abstract).slice(0, 155),
  };

  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: {
      title: withBrand(seo.title),
      description: seo.description,
      type: "article",
    },
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyDetailPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyDetailLayout study={study} />;
}
