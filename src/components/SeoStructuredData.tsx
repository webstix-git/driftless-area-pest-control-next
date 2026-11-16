const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.driftlessareapestcontrol.com/#localbusiness",
  name: "Driftless Area Pest Control",
  image:
    "https://www.driftlessareapestcontrol.com/images/about_intro_main.png",
  logo: "https://www.driftlessareapestcontrol.com/images/logos/new_logo2.png?v=1",
  description:
    "Driftless Area Pest Control provides commercial, industrial, and agricultural pest control services across southwestern Wisconsin. The company specializes in inspection-led pest management, rodent control and exclusion, insect control, wildlife removal, remote monitoring, and perimeter weed control for farms, food processing facilities, warehouses, industrial sites, and other commercial properties.",
  url: "https://www.driftlessareapestcontrol.com/",
  telephone: "+1-608-604-9190",
  email: "driftlessareapestcontrol@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "18617 Cty Hwy A",
    addressLocality: "Richland Center",
    addressRegion: "WI",
    postalCode: "53581",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.33694086438865,
    longitude: -90.52843484218753,
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Richland County, Wisconsin" },
    { "@type": "AdministrativeArea", name: "Sauk County, Wisconsin" },
    { "@type": "AdministrativeArea", name: "Vernon County, Wisconsin" },
    { "@type": "AdministrativeArea", name: "Crawford County, Wisconsin" },
    { "@type": "AdministrativeArea", name: "Grant County, Wisconsin" },
    { "@type": "AdministrativeArea", name: "Iowa County, Wisconsin" },
    { "@type": "AdministrativeArea", name: "Lafayette County, Wisconsin" },
    { "@type": "AdministrativeArea", name: "Juneau County, Wisconsin" },
    { "@type": "AdministrativeArea", name: "La Crosse County, Wisconsin" },
    { "@type": "AdministrativeArea", name: "Monroe County, Wisconsin" },
    { "@type": "AdministrativeArea", name: "Columbia County, Wisconsin" },
    { "@type": "AdministrativeArea", name: "Jackson County, Wisconsin" },
    { "@type": "AdministrativeArea", name: "Adams County, Wisconsin" },
    { "@type": "AdministrativeArea", name: "Western Dane County, Wisconsin" },
    { "@type": "AdministrativeArea", name: "Trempealeau County, Wisconsin" },
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
