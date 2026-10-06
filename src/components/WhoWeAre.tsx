"use client";
import { useEffect, useRef, useState } from 'react';
import { ChevronRight, Sparkles, Leaf, Flame } from 'lucide-react';

/* ---------- Reusable Section Heading ---------- */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 py-5 text-xs font-medium uppercase tracking-[0.3em] text-primary">
      <span className="h-px w-8 bg-primary" />
      {children}
    </span>
  );
}

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


/* ----------  Our Story  ---------- */
function OurStory() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="bg-[#f7f3ee] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid items-stretch gap-0 md:grid-cols-2">
          {/* Image — exactly 50% */}
          <div className="relative max-h-[400px] overflow-hidden md:max-h-[640px] "

            style={{
              borderRadius: "clamp(100px, 16vw, 220px) 0 clamp(100px, 16vw, 220px) 0",
            }}>
            <img
              src="https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Cozy rustic dining area with warm lighting"
              className={`h-full w-full object-cover transition-transform duration-[1.4s] ease-out   ${
                visible ? 'scale-100' : 'scale-105'
              }`}
            />
            {/* Founded badge */}
            <div className="absolute bottom-8 left-8 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-[#0d0b0a] text-center shadow-2xl">
              <span className="font-display text-3xl font-semibold text-primary">2015</span>
              <span className="mt-1 text-[0.6rem] uppercase tracking-[0.2em] text-stone-400">Founded</span>
            </div>
          </div>

          {/* Text — exactly 50% */}
          <div className="flex flex-col justify-center px-6 py-0 md:px-16 md:py-0">
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="font-display mt-6 text-4xl font-medium leading-tight text-[#1a1614] sm:text-5xl">
              Where Our Story Began
            </h2>
            <div className="mt-8 space-y-6">
              <p className="text-base font-light leading-relaxed text-stone-600">
                DASTAAN was born from a simple longing — to bring the soul of an
                Indian home kitchen to a table the world could share. What
                started as a small family eatery on a quiet corner has grown
                into a place where tradition is tasted in every bite.
              </p>
              <p className="text-base font-light leading-relaxed text-stone-600">
                Our founders traveled across India — from the tandoors of Delhi
                to the coastal kitchens of Kerala — collecting recipes, stories,
                and the secrets of spice that now define every plate we serve.
              </p>
              <p className="text-base font-light leading-relaxed text-stone-600">
                Today, DASTAAN is more than a restaurant. It is a dastaan — a
                story — told through fire, flavour, and the warmth of gathering.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default function WhoWeAre() {
  return (
    <>
      
      <OurStory />
      
    </>
  );
}
