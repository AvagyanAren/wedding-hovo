"use client";

import { useEffect, useState } from "react";
import { INVITATION } from "@/lib/invitation";

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function diff(target: number): Parts {
  const now = Date.now();
  const ms = Math.max(0, target - now);
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const seconds = Math.floor((ms / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export function Countdown() {
  const target = new Date(INVITATION.eventDateISO).getTime();
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    setParts(diff(target));
    const id = setInterval(() => setParts(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const labels = INVITATION.labels.countdown;
  const items = [
    { value: parts?.days ?? 0, label: labels.days },
    { value: parts?.hours ?? 0, label: labels.hours },
    { value: parts?.minutes ?? 0, label: labels.minutes },
    { value: parts?.seconds ?? 0, label: labels.seconds },
  ];

  return (
    <section className="px-6 py-10 sm:px-8 md:py-16">
      <div className="mx-auto grid max-w-xl grid-cols-4 gap-3 text-center sm:gap-6">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <span
              className="font-serif text-4xl font-light text-charcoal sm:text-5xl md:text-6xl"
              suppressHydrationWarning
            >
              {String(item.value).padStart(2, "0")}
            </span>
            <span className="mt-2 text-[10px] uppercase tracking-widest2 text-stone sm:text-xs">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
