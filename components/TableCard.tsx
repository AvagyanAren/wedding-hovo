import { INVITATION } from "@/lib/invitation";

export function TableCard({
  guest,
  table,
  zone,
}: {
  guest?: string;
  table?: string | number;
  zone?: string;
}) {
  const hasTable = !(table === undefined || table === null || table === "");
  const hasGuest = !!(guest && guest.trim().length > 0);

  if (!hasTable && !hasGuest) return null;

  const { labels } = INVITATION;

  return (
    <section className="px-6 py-14 sm:px-8 md:py-20">
      <div className="mx-auto max-w-md">
        <div className="relative rounded-sm border border-gold/40 bg-white/60 px-8 py-12 text-center shadow-[0_1px_0_0_rgba(184,149,90,0.15)] sm:py-14">
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-gold/40 bg-ivory"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 translate-y-1/2 rotate-45 border border-gold/40 bg-ivory"
          />

          {hasGuest ? (
            <>
              <span className="text-xs tracking-widest2 text-sage sm:text-sm">
                {labels.forGuest}
              </span>
              <div className="mt-3 font-display text-3xl italic text-gold sm:text-4xl">
                {guest}
              </div>
            </>
          ) : null}

          {hasTable ? (
            <>
              {hasGuest ? (
                <div
                  aria-hidden="true"
                  className="mx-auto mt-6 h-px w-16 bg-gold/30"
                />
              ) : null}

              <span className="mt-6 block text-xs tracking-widest2 text-sage sm:text-sm">
                {labels.table}
              </span>

              <div className="mt-4 font-serif text-7xl font-light leading-none text-charcoal sm:text-8xl">
                {table}
              </div>

              <div className="mt-4 font-display text-lg tracking-[0.25em] text-gold sm:text-xl">
                {labels.tablePrefix} {labels.tableNoun}
                {table}
              </div>

              {zone ? (
                <div className="mt-4 text-sm tracking-widest2 text-charcoal/60">
                  {zone}
                </div>
              ) : null}
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}
