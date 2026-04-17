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
    <div className="w-full max-w-sm">
      <div className="relative rounded-sm border border-sage/50 bg-white/70 px-8 py-10 text-center shadow-[0_1px_0_0_rgba(124,144,108,0.15)] backdrop-blur-sm sm:px-10 sm:py-12">
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-sage/50 bg-mint"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 translate-y-1/2 rotate-45 border border-sage/50 bg-mint"
        />

        {hasGuest ? (
          <div className="font-serif text-3xl italic text-olive sm:text-4xl">
            {guest}
          </div>
        ) : null}

        {hasGuest && hasTable ? (
          <div
            aria-hidden="true"
            className="mx-auto my-4 h-px w-16 bg-sage/40 sm:my-5 sm:w-20"
          />
        ) : null}

        {hasTable ? (
          <>
            <span className="text-[10px] uppercase tracking-widest2 text-stone sm:text-xs">
              {labels.table}
            </span>

            <div className="mt-2 font-serif text-[5.5rem] font-light leading-none text-charcoal sm:text-[6.5rem]">
              {table}
            </div>

            <div className="mt-3 font-display text-base tracking-[0.25em] text-olive sm:text-lg">
              {labels.tablePrefix} {labels.tableNoun}
              {table}
            </div>

            {zone ? (
              <div className="mt-3 text-[10px] uppercase tracking-widest2 text-stone/80 sm:text-xs">
                {zone}
              </div>
            ) : null}
          </>
        ) : null}
      </div>
    </div>
  );
}
