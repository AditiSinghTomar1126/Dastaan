



"use client";
import { useEffect, useRef, useState } from 'react';
import { CalendarHeart, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '1234567890';
const WHATSAPP_MESSAGE = "Hi DASTAAN! I'd love to book a table. Could you let me know your availability?";

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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

  const scrollToBooking = () => {
    const target = document.getElementById('order-booking');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };
    function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-primary py-5">
      <span className="h-px w-8 bg-primary " />
      {children}
    </span>
  );
}

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#1A1714] py-20 md:py-28"
    >
      {/* Decorative food image */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/17057034/pexels-photo-17057034.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden
      />

      {/* Soft accent glow */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, primary, transparent 70%)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, primary, transparent 70%)' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        {/* Eyebrow */}
      <SectionLabel>dastaan</SectionLabel>

        {/* Heading */}
        <h2
          className={`font-serif text-4xl font-semibold leading-[1.15] text-stone-100 transition-all duration-700 md:text-6xl ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '120ms' }}
        >
          A Table Awaits
        </h2>

        {/* Subtext */}
        <p
          className={`mx-auto mt-6 max-w-xl text-lg leading-relaxed text-stone-400 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '240ms' }}
        >
          Good food tastes better when shared. Join us for an unforgettable
          dining experience.
        </p>

        {/* Buttons */}
        <div
          className={`mt-10 flex flex-col items-center justify-center gap-4 transition-all duration-700 sm:flex-row ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '360ms' }}
        >
          <a
          href="https://wa.me/919762117170?text=Hi%20ATNexus!%20%F0%9F%91%8B%0A%0AI'm%20interested%20in%20your%20services%20and%20would%20like%20to%20discuss%20my%20project.%0A%0ALooking%20forward%20to%20hearing%20from%20you."
      
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-white shadow-lg shadow-primary/30 transition-all duration-300  hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 sm:w-auto"
          >
            <CalendarHeart className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            Book a Table
          </a>

          <a
            href = "/menu"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary bg-white/5 px-8 py-4 text-base font-medium text-light backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 sm:w-auto"
          >
            <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            Explore Menu
          </a>
        </div>
      </div>
    </section>
  );
}
