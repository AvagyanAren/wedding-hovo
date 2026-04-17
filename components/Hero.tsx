import { INVITATION } from "@/lib/invitation";
import { Botanical } from "./Botanical";

export function Hero() {
  const { couple, dateDisplay, events, intro } = INVITATION;

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 py-20 sm:px-8">
      <Botanical
        side="topLeft"
        className="absolute -left-4 top-0 h-[280px] w-[200px] sm:-left-2 sm:h-[360px] sm:w-[240px] md:left-4 md:h-[440px] md:w-[300px]"
      />
      <Botanical
        side="bottomRight"
        className="absolute -right-4 bottom-0 h-[280px] w-[200px] sm:-right-2 sm:h-[360px] sm:w-[240px] md:right-4 md:h-[440px] md:w-[300px]"
      />

      <div className="fade-up relative z-10 mx-auto flex w-full max-w-xl flex-col items-center text-center">
        <p className="mx-auto max-w-[18rem] text-[11px] font-light uppercase tracking-widest2 text-stone sm:max-w-sm sm:text-xs">
          {intro}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:mt-12 sm:gap-6">
          <NameBlock first={couple.groom.first} last={couple.groom.last} />

          <span className="font-script text-6xl leading-none text-stone sm:text-7xl">
            &amp;
          </span>

          <NameBlock first={couple.bride.first} last={couple.bride.last} />
        </div>

        <div className="mt-12 sm:mt-16">
          <p className="font-display text-3xl font-light tracking-[0.25em] text-olive sm:text-4xl">
            {dateDisplay.short}
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 text-[11px] font-light uppercase tracking-widest2 text-stone sm:text-xs">
          {events.map((ev) => (
            <div key={ev.time} className="flex flex-wrap items-baseline justify-center gap-x-2">
              <span className="font-semibold text-charcoal">{ev.time}</span>
              <span>{ev.title}</span>
              {ev.city ? <span className="text-stone/80">· {ev.city}</span> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NameBlock({ first, last }: { first: string; last: string }) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-serif text-5xl font-light italic leading-[1.05] text-charcoal sm:text-6xl md:text-7xl">
        {first}
      </h2>
      <p className="mt-3 text-[11px] font-normal uppercase tracking-widest3 text-stone sm:text-xs">
        {last}
      </p>
    </div>
  );
}
