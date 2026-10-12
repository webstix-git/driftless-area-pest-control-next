"use client";

import { useEffect, useRef, useState } from "react";
import { SERVICE_COUNTIES, type ServiceCounty } from "@/lib/service-area";

/** Visual centre of each county as [lat, lng] (from US Census county boundaries). */
const COUNTY_LABEL_POSITIONS: Record<ServiceCounty, [number, number]> = {
  Richland: [43.376, -90.43],
  Sauk: [43.429, -89.948],
  Vernon: [43.595, -90.834],
  Crawford: [43.236, -90.931],
  Grant: [42.867, -90.705],
  Iowa: [43.002, -90.134],
  Lafayette: [42.66, -90.132],
  Juneau: [43.925, -90.113],
  "La Crosse": [43.905, -91.115],
  Monroe: [43.944, -90.616],
  Columbia: [43.468, -89.335],
  Jackson: [44.317, -90.804],
  Adams: [43.968, -89.768],
  Dane: [43.068, -89.418],
  Trempealeau: [44.303, -91.358],
  Green: [42.68, -89.602],
};

const TILE_SIZE = 256;
/** Room around the outermost labels; vertical padding clears the pins and Google's attribution. */
const PAD_X = 56;
const PAD_Y = 44;
/**
 * The iframe extends past the frame to hide Google's controls (which can't be used on a fixed map):
 * "Open in Maps" at the top, the satellite toggle at the left, the fullscreen button at the right.
 * The right crop also drops "Report a map error" so the logo, "Map data" and "Terms" stay whole.
 */
const CROP_TOP = 56;
const CROP_LEFT = 60;
const CROP_RIGHT = 96;

/** Web Mercator world coordinates in [0, 1] — the projection Google Maps uses. */
function project([lat, lng]: [number, number]) {
  const sin = Math.sin((lat * Math.PI) / 180);
  return {
    x: (lng + 180) / 360,
    y: 0.5 - Math.log((1 + sin) / (1 - sin)) / (4 * Math.PI),
  };
}

function unprojectLat(y: number) {
  return (Math.atan(Math.sinh(Math.PI * (1 - 2 * y))) * 180) / Math.PI;
}

const labels = SERVICE_COUNTIES.map((name) => ({
  name,
  ...project(COUNTY_LABEL_POSITIONS[name]),
}));

const minX = Math.min(...labels.map((l) => l.x));
const maxX = Math.max(...labels.map((l) => l.x));
const minY = Math.min(...labels.map((l) => l.y));
const maxY = Math.max(...labels.map((l) => l.y));
const centerX = (minX + maxX) / 2;
const centerY = (minY + maxY) / 2;

/** Largest whole zoom level at which every label fits inside the frame. */
function fitZoom(width: number, height: number) {
  for (let zoom = 10; zoom > 4; zoom--) {
    const scale = TILE_SIZE * 2 ** zoom;
    const fitsX = (maxX - minX) * scale + 2 * PAD_X <= width;
    const fitsY = (maxY - minY) * scale + 2 * PAD_Y <= height;
    if (fitsX && fitsY) return zoom;
  }
  return 4;
}

/** Map centre for the cropped iframe, chosen so the labels sit centred in the visible frame. */
function iframeCenter(scale: number) {
  const offsetX = (CROP_RIGHT - CROP_LEFT) / 2;
  const offsetY = -CROP_TOP / 2;
  return {
    lat: unprojectLat(centerY + offsetY / scale).toFixed(5),
    lng: ((centerX + offsetX / scale) * 360 - 180).toFixed(5),
  };
}

type ServiceAreaMapProps = {
  className?: string;
};

export default function ServiceAreaMap({ className }: ServiceAreaMapProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<{ width: number; height: number } | null>(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  const zoom = size ? fitZoom(size.width, size.height) : null;
  const scale = zoom === null ? 0 : TILE_SIZE * 2 ** zoom;
  const center = zoom !== null ? iframeCenter(scale) : null;

  return (
    <div ref={frameRef} className={["service-map-frame", className].filter(Boolean).join(" ")}>
      {size && center && (
        <>
          <iframe
            src={`https://maps.google.com/maps?ll=${center.lat},${center.lng}&z=${zoom}&t=m&hl=en&output=embed`}
            style={{
              top: -CROP_TOP,
              left: -CROP_LEFT,
              width: size.width + CROP_LEFT + CROP_RIGHT,
              height: size.height + CROP_TOP,
            }}
            tabIndex={-1}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map of the counties Driftless Area Pest Control services: ${SERVICE_COUNTIES.join(", ")}`}
          />

          <div className="service-map-labels" aria-hidden="true">
            {labels.map((label) => (
              <span
                key={label.name}
                className="service-map-label"
                style={{
                  left: size.width / 2 + (label.x - centerX) * scale,
                  top: size.height / 2 + (label.y - centerY) * scale,
                }}
              >
                <svg className="service-map-pin" viewBox="0 0 24 34">
                  <path
                    d="M12 1C5.9 1 1 5.9 1 11.9 1 20.3 12 33 12 33s11-12.7 11-21.1C23 5.9 18.1 1 12 1z"
                    fill="#ea4335"
                    stroke="#b31412"
                    strokeWidth="1.5"
                  />
                  <circle cx="12" cy="12" r="4" fill="#7a0f0a" />
                </svg>
                {label.name}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
