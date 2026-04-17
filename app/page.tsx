import { INVITATION } from "@/lib/invitation";
import { TableCard } from "@/components/TableCard";

type SearchParams = {
  guest?: string;
  table?: string;
  zone?: string;
};

function NameBlock({ first, last }: { first: string; last: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-serif text-3xl font-light italic leading-none text-charcoal sm:text-4xl md:text-5xl">
        {first}
      </span>
      <span className="mt-1.5 text-[10px] font-normal uppercase tracking-widest3 text-stone sm:text-[11px]">
        {last}
      </span>
    </div>
  );
}

export default function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const guest =
    searchParams.guest?.trim() || INVITATION.greeting.defaultGuest;
  const table = searchParams.table?.trim() || undefined;
  const zone = searchParams.zone?.trim() || undefined;

  const { couple, dateDisplay, events } = INVITATION;

  return (
    <main className="watercolor-bg relative flex h-[100svh] w-screen flex-col overflow-hidden px-6 sm:px-8">
      <header className="flex flex-col items-center pt-5 sm:pt-8 md:pt-10">
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <NameBlock first={couple.groom.first} last={couple.groom.last} />

          <span className="font-script text-5xl leading-none text-stone sm:text-6xl">
            &amp;
          </span>

          <NameBlock first={couple.bride.first} last={couple.bride.last} />
        </div>

        <p className="mt-5 font-display text-lg font-light tracking-[0.25em] text-olive sm:mt-6 sm:text-xl md:text-2xl">
          {dateDisplay.short}
        </p>
      </header>

      <section className="flex flex-1 items-center justify-center py-4">
        <TableCard guest={guest} table={table} zone={zone} />
      </section>

      <footer className="flex flex-col items-center gap-1.5 pb-5 text-[10px] uppercase tracking-widest2 text-stone sm:gap-2 sm:pb-7 sm:text-xs">
        {events.map((ev) => (
          <div
            key={ev.time}
            className="flex flex-wrap items-baseline justify-center gap-x-2"
          >
            <span className="font-semibold text-charcoal">{ev.time}</span>
            <span>{ev.title}</span>
            {ev.city ? <span className="text-stone/80">· {ev.city}</span> : null}
          </div>
        ))}
      </footer>
    </main>
  );
}
