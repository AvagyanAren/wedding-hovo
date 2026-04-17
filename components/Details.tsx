import { INVITATION } from "@/lib/invitation";
import { Divider } from "./Divider";

export function Details() {
  const { dateDisplay, venue, labels } = INVITATION;

  return (
    <section className="px-6 py-16 sm:px-8 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="text-center">
            <span className="text-xs tracking-widest2 text-sage sm:text-sm">
              {labels.when}
            </span>
            <div className="mt-5 font-serif text-2xl text-charcoal sm:text-3xl">
              {dateDisplay.dayName}
            </div>
            <div className="mt-2 font-display text-xl tracking-[0.15em] text-charcoal/80 sm:text-2xl">
              {dateDisplay.long}
            </div>
            <div className="mt-2 font-display text-lg tracking-[0.2em] text-gold sm:text-xl">
              {dateDisplay.time}
            </div>
          </div>

          <div className="text-center">
            <span className="text-xs tracking-widest2 text-sage sm:text-sm">
              {labels.where}
            </span>
            <div className="mt-5 font-serif text-2xl text-charcoal sm:text-3xl">
              {venue.name}
            </div>
            <div className="mt-2 text-sm text-charcoal/70 sm:text-base">
              {venue.address}
            </div>
            <a
              href={venue.mapUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-4 inline-block border-b border-gold/50 pb-0.5 text-xs tracking-widest2 text-gold transition-colors hover:text-charcoal sm:text-sm"
            >
              {labels.viewOnMap}
            </a>
          </div>
        </div>

        <Divider className="mt-16" />
      </div>
    </section>
  );
}
