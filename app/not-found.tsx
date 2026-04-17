export default function NotFound() {
  return (
    <main className="watercolor-bg relative flex h-[100svh] w-screen flex-col items-center justify-center overflow-hidden px-6 text-center sm:px-8">
      <p className="font-display text-7xl font-light tracking-[0.2em] text-olive sm:text-8xl">
        404
      </p>

      <div aria-hidden="true" className="my-6 h-px w-20 bg-sage/40 sm:w-28" />

      <p className="font-serif text-base italic text-stone sm:text-lg">
        Էջը չի գտնվել
      </p>

      <p className="mt-2 text-[10px] uppercase tracking-widest2 text-stone/70 sm:text-xs">
        Page not found
      </p>
    </main>
  );
}
