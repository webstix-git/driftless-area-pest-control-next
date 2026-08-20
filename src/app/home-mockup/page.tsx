import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Homepage Hero Mockups (Review) | Driftless Area Pest Control",
  description:
    "Temporary duplicate of the homepage with the three client-shared hero background mockups in a slider.",
  robots: { index: false, follow: false },
};

export default function HomeMockupPage() {
  return <HomePage />;
}
