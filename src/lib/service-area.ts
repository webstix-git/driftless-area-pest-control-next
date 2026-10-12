/** Counties we service — names must match `WISCONSIN_COUNTIES` so the map can highlight them. */
export const SERVICE_COUNTIES = [
  "Richland",
  "Sauk",
  "Vernon",
  "Crawford",
  "Grant",
  "Iowa",
  "Lafayette",
  "Juneau",
  "La Crosse",
  "Monroe",
  "Columbia",
  "Jackson",
  "Adams",
  "Dane",
  "Trempealeau",
  "Green",
] as const;

export type ServiceCounty = (typeof SERVICE_COUNTIES)[number];

export const SERVICE_AREA_TRAVEL_NOTE =
  "I am willing to travel further for larger jobs or for clients with multiple locations.";
