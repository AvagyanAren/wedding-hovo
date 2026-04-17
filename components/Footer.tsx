import { INVITATION } from "@/lib/invitation";

export function Footer() {
  const { footer, couple } = INVITATION;

  return (
    <footer className="px-6 pb-16 pt-8 text-center sm:px-8">
      <p className="font-serif text-lg text-charcoal sm:text-xl">
        {footer.signOff}
      </p>
      <p className="mt-2 font-display text-2xl italic text-gold sm:text-3xl">
        {couple.combined}
      </p>
      <p className="mt-6 text-xs tracking-widest2 text-sage">
        {footer.monogram}
      </p>
    </footer>
  );
}
