import { INVITATION } from "@/lib/invitation";
import { TableCard } from "@/components/TableCard";

type SearchParams = {
  guest?: string;
  table?: string;
  zone?: string;
};

function NameBlock({ first, last }: { first: string; last: string }) {
  return (
    <div className="flex min-w-0 flex-col items-center">
      <span className="font-serif text-xl font-light italic leading-none text-charcoal sm:text-2xl md:text-3xl">
        {first}
      </span>
      <span className="mt-1 text-[9px] font-normal uppercase tracking-widest2 text-stone sm:text-[10px] md:text-xs">
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
      <section className="flex flex-1 items-center justify-center pt-10 sm:pt-12">
        <TableCard guest={guest} table={table} zone={zone} />
      </section>

      <footer className="flex flex-col items-center gap-4 pb-5 sm:gap-5 sm:pb-7">
        <div className="flex flex-col items-center gap-1.5 text-[10px] uppercase tracking-widest2 text-stone sm:gap-2 sm:text-xs">
          {events.map((ev) => (
            <div
              key={ev.time}
              className="flex flex-col items-center gap-0.5 text-center sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-2"
            >
              <div className="flex items-baseline justify-center gap-x-2">
                <span className="font-semibold text-charcoal">{ev.time}</span>
                <span>{ev.title}</span>
              </div>
              {ev.address ? (
                <span className="text-stone/70 normal-case tracking-normal sm:uppercase sm:tracking-widest2 sm:text-stone/80">
                  {ev.address}
                </span>
              ) : null}
            </div>
          ))}
        </div>

        <p className="font-display text-lg font-light tracking-[0.25em] text-olive sm:text-xl md:text-2xl">
          {dateDisplay.short}
        </p>

        <div
          aria-hidden="true"
          className="h-px w-20 bg-sage/40 sm:w-28"
        />

        <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
          <NameBlock first={couple.groom.first} last={couple.groom.last} />

          <span className="font-script text-3xl leading-none text-stone sm:text-4xl md:text-5xl">
            &amp;
          </span>

          <NameBlock first={couple.bride.first} last={couple.bride.last} />
        </div>
      </footer>
    </main>
  );
}
