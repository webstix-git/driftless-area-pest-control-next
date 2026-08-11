import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Homepage Hero Mockups (Review) | Driftless Area Pest Control",
  description:
    "Temporary duplicate of the homepage with the three client-shared hero background mockups in a slider.",
  robots: { index: false, follow: false },
};

const heroSlides = [
  {
    src: "/images/wedsite bg 1.png",
    alt: "Farm landscape with crop rows, grain silos, and pasture cattle at golden hour",
  },
  {
    src: "/images/website bg 2.png",
    alt: "Protecting What Matters Most — grain storage, dairy farms, warehouses, and office buildings",
    imageBannerOnly: true,
  },
  {
    src: "/images/website bg 3.png",
    alt: "Agricultural and commercial facilities from grain storage through warehouse and office buildings",
  },
];

export default function HomeMockupPage() {
  return <HomePage heroSlides={heroSlides} heroOnly />;
}
