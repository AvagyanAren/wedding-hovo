import guests from "@/data/guests.json";

export type Guest = {
  id: string;
  name: string;
  table: string;
};

export const GUESTS = guests as Guest[];

if (process.env.NODE_ENV !== "production") {
  const seen = new Set<string>();
  const duplicates: string[] = [];
  for (const g of GUESTS) {
    if (seen.has(g.id)) duplicates.push(g.id);
    seen.add(g.id);
  }
  if (duplicates.length > 0) {
    console.warn(
      `[guests.json] duplicate id(s) detected: ${duplicates.join(", ")}`
    );
  }
}

/** Hyphens in URLs are normalized to underscores so `narek-5` matches `narek_5` in JSON. */
function normalizeIdForLookup(id: string): string {
  return id.replace(/-/g, "_");
}

export function findGuest(id: string): Guest | undefined {
  const decoded = decodeURIComponent(id);
  const normalized = normalizeIdForLookup(decoded);
  return GUESTS.find(
    (g) => g.id === decoded || g.id === normalized
  );
}
