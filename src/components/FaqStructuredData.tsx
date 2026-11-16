type FaqItem = {
  name: string;
  text: string;
};

type FaqStructuredDataProps = {
  faqs: FaqItem[];
};

export default function FaqStructuredData({ faqs }: FaqStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.name,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.text,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
