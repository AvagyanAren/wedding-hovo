import { INVITATION } from "@/lib/invitation";
import { Divider } from "./Divider";

export function Rsvp({ guest }: { guest: string }) {
  const { rsvp, labels, couple } = INVITATION;
  const subject = encodeURIComponent(`RSVP · ${couple.combined}`);
  const body = encodeURIComponent(`Բարև, ես ${guest}, հաստատում եմ իմ մասնակցությունը։`);

  return (
    <section className="px-6 py-16 sm:px-8 md:py-24">
      <div className="mx-auto max-w-xl text-center">
        <span className="text-xs tracking-widest2 text-sage sm:text-sm">
          {labels.rsvp}
        </span>

        <p className="mt-5 font-serif text-lg text-charcoal sm:text-xl">
          {labels.rsvpHelp}{" "}
          <span className="font-display italic text-gold">{rsvp.deadline}</span>
        </p>

        <a
          href={`mailto:${rsvp.email}?subject=${subject}&body=${body}`}
          className="mt-8 inline-block border border-gold/60 px-8 py-3 text-xs tracking-widest2 text-charcoal transition-colors hover:bg-gold hover:text-ivory sm:text-sm"
        >
          {labels.confirmByEmail}
        </a>

        <p className="mt-4 text-sm text-charcoal/60">{rsvp.phone}</p>

        <Divider className="mt-14" />
      </div>
    </section>
  );
}
