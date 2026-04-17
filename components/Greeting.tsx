import { INVITATION } from "@/lib/invitation";
import { Divider } from "./Divider";

export function Greeting({ guest }: { guest: string }) {
  const { greeting } = INVITATION;

  return (
    <section className="px-6 py-16 text-center sm:px-8 md:py-24">
      <div className="mx-auto max-w-2xl">
        <p className="font-serif text-xl text-charcoal sm:text-2xl">
          {greeting.salutation}{" "}
          <span className="font-display italic text-gold">{guest}</span>,
        </p>

        <p className="mt-6 font-sans text-base leading-relaxed text-charcoal/80 sm:text-lg">
          {greeting.body}
        </p>

        <Divider className="mt-10" />
      </div>
    </section>
  );
}
