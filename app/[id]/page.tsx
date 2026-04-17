import { redirect } from "next/navigation";
import { findGuest, GUESTS } from "@/lib/guests";
import { InvitationView } from "@/components/InvitationView";

export function generateStaticParams() {
  return GUESTS.map((g) => ({ id: g.id }));
}

export default function GuestPage({ params }: { params: { id: string } }) {
  const guest = findGuest(params.id);
  if (!guest) redirect("/");
  return <InvitationView name={guest.name} table={guest.table} />;
}
