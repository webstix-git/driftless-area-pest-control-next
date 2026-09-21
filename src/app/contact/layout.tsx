import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Request a free inspection from Driftless Area Pest Control. Call or email for commercial and agricultural pest service across southwestern Wisconsin.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
