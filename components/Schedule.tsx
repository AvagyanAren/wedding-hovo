import { INVITATION } from "@/lib/invitation";

export function Schedule() {
  const { schedule, labels } = INVITATION;

  return (
    <section className="px-6 py-16 sm:px-8 md:py-20">
      <div className="mx-auto max-w-xl text-center">
        <span className="text-xs tracking-widest2 text-sage sm:text-sm">
          {labels.schedule}
        </span>

        <ul className="mt-10 space-y-6">
          {schedule.map((item) => (
            <li
              key={item.time}
              className="flex items-baseline justify-between gap-6 border-b border-beige/60 pb-4"
            >
              <span className="font-display text-xl tracking-[0.2em] text-gold sm:text-2xl">
                {item.time}
              </span>
              <span className="font-serif text-base text-charcoal sm:text-lg">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
