import { INVITATION } from "@/lib/invitation";

export function DressCode() {
  const { dressCode, labels } = INVITATION;

  return (
    <section className="px-6 py-14 sm:px-8 md:py-20">
      <div className="mx-auto max-w-xl text-center">
        <span className="text-xs tracking-widest2 text-sage sm:text-sm">
          {labels.dressCode}
        </span>
        <p className="mt-5 font-serif text-lg text-charcoal sm:text-xl">
          {dressCode}
        </p>
      </div>
    </section>
  );
}
