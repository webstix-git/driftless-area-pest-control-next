"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import type { ReactNode } from "react";

type SmoothScrollProps = {
  children: ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        anchors: true,
        syncTouch: false,
        autoToggle: true,
        allowNestedScroll: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
