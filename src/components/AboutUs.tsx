

"use client";
import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';

/* ---------- Reveal-on-scroll hook ---------- */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
      <span className="h-px w-8 bg-[#e07a3c]/50" />
      {children}
    </span>
  );
}

/* ---------- 4. Meet the Chef (50/50) ---------- */
function MeetTheChef() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="bg-dark py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid items-stretch gap-0 md:grid-cols-2">
          {/* Text side */}
          <div className="order-2 flex flex-col justify-center px-6 py-0 md:order-1 md:px-16 md:py-0">
            <SectionLabel>Meet the Chef</SectionLabel>
            <h2 className="font-display mt-6 text-4xl font-medium leading-tight text-light sm:text-5xl">
              Chef Aarav Mehta
            </h2>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Executive Chef &amp; Co-Founder
            </p>
            <div className="mt-8 space-y-5">
              <p className="text-base font-light leading-relaxed text-light/70">
                Trained in the kitchens of Mumbai and refined across Europe,
                Chef Aarav returned home with a single mission — to elevate the
                food he grew up eating without losing its soul.
              </p>
              <p className="text-base font-light leading-relaxed text-light/70">
                His cooking is a quiet conversation between memory and craft:
                clay-oven smoke, hand-ground masalas, and the patience of a
                slow-cooked curry. Every dish on the menu passes through his
                hands before it reaches yours.
              </p>
            </div>
            {/* Quote */}
            <div className="mt-10 border-l-2 border-primary pl-6">
              <Quote className="mb-3 h-6 w-6 text-primary" />
              <p className="font-display text-xl font-medium italic leading-relaxed text-light">
                "I don't cook to impress. I cook to remind you of somewhere
                you've been — or somewhere you wish to go."
              </p>
            </div>
          </div>

          {/* Image side */}
          <div className="order-1 relative max-h-[440px] overflow-hidden md:order-2 md:max-h-[640px]"
            style={{
              borderRadius: " 0 clamp(100px, 16vw, 220px)0  clamp(100px, 16vw, 220px) ",
            }}>
            <img
              src="https://images.pexels.com/photos/4253298/pexels-photo-4253298.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Chef Aarav Mehta in the kitchen"
              className={`h-full w-full object-cover transition-transform duration-[1.4s] ease-out ${
                visible ? 'scale-100' : 'scale-105'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b0a]/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------- FullStory (composes Chef + Kitchen) ---------- */
export default function FullStory() {
  return (
    <>
      <MeetTheChef />
     
    </>
  );
}
