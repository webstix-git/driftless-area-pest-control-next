import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/images/hero_commercial_panorama_4k.webp"
        type="image/webp"
      />
      <HomePage />
    </>
  );
}
