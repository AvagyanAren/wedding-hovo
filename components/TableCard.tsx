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
    <div className="flex flex-col items-center text-center">
      {hasGuest ? (
        <div className="font-serif text-3xl italic text-olive sm:text-4xl md:text-5xl">
          {guest}
        </div>
      ) : null}

      {hasGuest && hasTable ? (
        <div
          aria-hidden="true"
          className="my-4 h-px w-16 bg-sage/40 sm:my-5 sm:w-20"
        />
      ) : null}

      {hasTable ? (
        <>
          <span className="text-[10px] uppercase tracking-widest2 text-stone sm:text-xs">
            {labels.table}
          </span>

          <div className="mt-2 font-serif text-[5.5rem] font-light leading-none text-charcoal sm:text-[7rem] md:text-[9rem]">
            {table}
          </div>

          <div className="mt-3 font-display text-base tracking-[0.25em] text-olive sm:text-lg md:text-xl">
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
  );
}
