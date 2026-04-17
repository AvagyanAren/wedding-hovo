import { INVITATION } from "@/lib/invitation";
import { Hero } from "@/components/Hero";
import { Greeting } from "@/components/Greeting";
import { Countdown } from "@/components/Countdown";
import { Details } from "@/components/Details";
import { Schedule } from "@/components/Schedule";
import { TableCard } from "@/components/TableCard";
import { DressCode } from "@/components/DressCode";
import { Rsvp } from "@/components/Rsvp";
import { Footer } from "@/components/Footer";

type SearchParams = {
  guest?: string;
  table?: string;
  zone?: string;
};

export default function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const guest =
    searchParams.guest?.trim() || INVITATION.greeting.defaultGuest;
  const table = searchParams.table?.trim() || undefined;
  const zone = searchParams.zone?.trim() || undefined;

  return (
    <main className="mx-auto w-full">
      <Hero />
      <Greeting guest={guest} />
      <Countdown />
      <Details />
      <Schedule />
      <TableCard guest={guest} table={table} zone={zone} />
      <DressCode />
      <Rsvp guest={guest} />
      <Footer />
    </main>
  );
}
