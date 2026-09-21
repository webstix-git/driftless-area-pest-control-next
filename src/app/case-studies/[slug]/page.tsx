import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyDetailLayout from "@/components/CaseStudyDetailLayout";
import { caseStudies, getCaseStudy, plainCaseStudyText } from "@/data/case-studies";

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
    return { title: "Case Study Not Found | Driftless Area Pest Control" };
  }

  return {
    title: `iQ ${study.title.replace(/\n/g, " ")} | Driftless Area Pest Control`,
    description: plainCaseStudyText(study.abstract).slice(0, 155),
    alternates: { canonical: `/case-studies/${study.slug}` },
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
