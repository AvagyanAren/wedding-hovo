import { redirect } from "next/navigation";
import { findGuest } from "@/lib/guests";
import { InvitationView } from "@/components/InvitationView";

export default function GuestPage({ params }: { params: { id: string } }) {
  const guest = findGuest(params.id);
  if (!guest) redirect("/");
  return <InvitationView name={guest.name} table={guest.table} />;
}
