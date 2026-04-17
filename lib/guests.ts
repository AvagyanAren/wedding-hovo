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

export function findGuest(id: string): Guest | undefined {
  return GUESTS.find((g) => g.id === id);
}
