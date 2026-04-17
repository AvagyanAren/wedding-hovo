import { INVITATION } from "@/lib/invitation";

export function Footer() {
  const { footer, couple } = INVITATION;

  return (
    <footer className="px-6 pb-16 pt-8 text-center sm:px-8">
      <p className="font-serif text-lg text-charcoal sm:text-xl">
        {footer.signOff}
      </p>
      <p className="mt-2 font-serif text-2xl italic text-olive sm:text-3xl">
        {couple.combined}
      </p>
      <p className="mt-6 text-xs uppercase tracking-widest2 text-stone">
        {footer.monogram}
      </p>
    </footer>
  );
}
