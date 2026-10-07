"use client";
import { useEffect, useRef, useState } from 'react';
import { Bike, Store, BookOpen, Images, CalendarHeart, ArrowRight } from 'lucide-react';

const DELIVERY_URL = 'https://www.zomato.com';
const PICKUP_URL = 'https://www.swiggy.com';

export default function OrderNow() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-primary py-5">
      <span className="h-px w-8 bg-primary " />
      {children}
    </span>
  );
}
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="order-now"
      className="relative w-full overflow-hidden bg-dark py-20 md:py-28"
    >
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, #C66B3D, transparent 70%)' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
      <SectionLabel>Order Now</SectionLabel>

        <h2
          className={`font-serif text-4xl font-semibold leading-[1.15] text-stone-100 transition-all duration-700 md:text-5xl ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          Order Your Favorites
        </h2>

        <p
          className={`mx-auto mt-4 max-w-md text-base leading-relaxed text-stone-400 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          Choose how you'd like to enjoy DASTAAN — delivered to your door or dine in.
        </p>

        {/* Two main options */}
        <div
          className={`mt-12 grid gap-5 transition-all duration-700 sm:grid-cols-2 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          {/* Delivery */}
          <a
            href={DELIVERY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 rounded-2xl border border-primary/10 bg-transparent p-8 text-center transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-background text-[#E08858] transition-colors duration-300 hover:bg-[#C66B3D]/25">
              <Bike className="h-7 w-7" />
            </span>
            <div>
              <h3 className="font-serif text-xl font-semibold text-stone-100">Delivery</h3>
              <p className="mt-1 text-sm text-stone-400">Get it brought to your doorstep</p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-md font-medium text-white shadow-lg shadow-primary/30 transition-all duration-300 group-hover:bg-primary group-hover:shadow-xl group-hover:shadow-primary/40">
              Order for Delivery
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </a>

          {/* Pickup */}
          <a
          
       href="https://wa.me/919762117170?text=Hi%20ATNexus!%20%F0%9F%91%8B%0A%0AI'm%20interested%20in%20your%20services%20and%20would%20like%20to%20discuss%20my%20project.%0A%0ALooking%20forward%20to%20hearing%20from%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 rounded-2xl border border-primary/10 bg-transparent p-8 text-center transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C66B3D]/15 text-[#E08858] transition-colors duration-300 group-hover:bg-[#C66B3D]/25">
              <Store className="h-7 w-7" />
            </span>
            <div>
              <h3 className="font-serif text-xl font-semibold text-stone-100">Dine In</h3>
              <p className="mt-1 text-sm text-stone-400">Enjoy a seamless dining experience</p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary bg-transparent px-6 py-3 text-md font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white  ">
             Reserve a Table
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </a>
        </div>

        {/* Secondary links */}
        <div
          className={`mt-10 flex flex-col items-center justify-center gap-3 transition-all duration-700 sm:flex-row sm:gap-6 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
        

        </div>
      </div>
    </section>
  );
}
