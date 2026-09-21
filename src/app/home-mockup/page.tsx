import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Homepage Hero Mockups",
  description:
    "Temporary homepage review page with alternate hero background mockups. Not indexed for search.",
  robots: { index: false, follow: false },
};

export default function HomeMockupPage() {
  return <HomePage />;
}
