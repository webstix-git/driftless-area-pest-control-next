import { CONTACT } from "@/lib/contact";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.driftlessareapestcontrol.com";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#business`,
      name: "Driftless Area Pest Control",
      url: siteUrl,
      telephone: CONTACT.phoneDisplay,
      email: CONTACT.emailDisplay,
      image: `${siteUrl}/images/logos/new_logo2.png`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "18617 Cty Hwy A",
        addressRegion: "WI",
        addressCountry: "US",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Wisconsin",
      },
      serviceType: [
        "Commercial pest control",
        "Agricultural pest management",
        "Rodent control and exclusion",
        "Wildlife removal",
        "Perimeter weed control",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Driftless Area Pest Control",
      publisher: { "@id": `${siteUrl}/#business` },
    },
  ],
};

export default function SeoStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
