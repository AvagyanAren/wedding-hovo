import { INVITATION } from "@/lib/invitation";
import { Divider } from "./Divider";

export function Hero() {
  const { couple, dateDisplay, city, labels } = INVITATION;

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 py-20 text-center sm:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-beige/50 via-ivory to-ivory"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-beige/40 blur-3xl"
      />

      <div className="fade-up relative z-10 mx-auto flex max-w-3xl flex-col items-center">
        <span className="text-xs tracking-widest2 text-sage sm:text-sm">
          {labels.kicker}
        </span>

        <Divider className="mt-6" />

        <h1 className="mt-8 font-serif text-5xl font-normal leading-[1.05] text-charcoal sm:text-6xl md:text-7xl lg:text-[88px]">
          <span className="block">{couple.groom}</span>
          <span className="my-1 block font-display italic text-gold sm:my-2">և</span>
          <span className="block">{couple.bride}</span>
        </h1>

        <Divider className="mt-10" />

        <p className="mt-8 font-display text-2xl tracking-[0.3em] text-charcoal sm:text-3xl">
          {dateDisplay.short}
        </p>
        <p className="mt-3 text-sm tracking-widest2 text-sage sm:text-base">
          {city}
        </p>
      </div>
    </section>
  );
}
