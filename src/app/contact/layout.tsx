import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Driftless Area Pest Control",
  description:
    "Contact Driftless Area Pest Control for commercial and agricultural pest management across southwestern Wisconsin.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
