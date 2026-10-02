

"use client";
import { useEffect, useRef, useState } from 'react';
import { Quote, ArrowRight } from 'lucide-react';
import Menu from '@/components/Menu';

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
    <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-primary py-5">
      <span className="h-px w-8 bg-primary " />
      {children}
    </span>
  );
}

const kitchen = [
  {

    image: 'https://images.pexels.com/photos/36343375/pexels-photo-36343375.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Main Course',
    title: 'Aloo Kofta',
    desc: 'Potato-paneer dumplings in a rich cashew and saffron curry.',
  },
  {
    image: 'https://images.pexels.com/photos/28674566/pexels-photo-28674566.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Main Course',
    title: 'Lamb Rogan Josh',
    desc: 'Tender lamb braised in Kashmiri chilies, fennel and whole spices.',
  },
  {
    image: 'https://images.pexels.com/photos/34270741/pexels-photo-34270741.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Starter',
    title: 'Pani Puri',
    desc: 'Hollow crisp shells filled with tangy tamarind water, sprouts and mint chutney.',
  },
];    
function FromOurKitchen({ onOpenMenu }: { onOpenMenu: () => void }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="bg-dark py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="mb-16 text-center">
          <SectionLabel>Our Guests' Favorites</SectionLabel>
          <h2 className="font-display mt-6 text-4xl font-medium text-stone-50 sm:text-5xl">
            Dishes Worth Coming Back For
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {kitchen.map((item, i) => (
            <article
              key={item.label}
              className={`group relative overflow-hidden rounded-2xl ${
                visible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b0a]/50 via-[#0d0b0a]/10 to-transparent" />
              </div>
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
                  {item.label}
                </span>
                <h3 className="font-display mt-2 text-2xl font-medium text-stone-50">
                  {item.title}
                </h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm font-light leading-relaxed text-stone-300 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
                  {item.desc}
                </p>
              </div>
              {/* Accent line */}
              <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-primary transition-transform duration-500 group-hover:scale-y-100" />
            </article>
          ))}
        </div>
      </div>

           {/* View Full Menu button */}
      <div className="mx-auto mt-14 flex max-w-6xl justify-center px-6 md:px-12">
        <button
          onClick={onOpenMenu}
          className="group flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-primary/50"
        >
          View Full Menu
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
      
    </section>
  );
}
export default function FullStory() {
  const [showFullMenu, setShowFullMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showFullMenu ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [showFullMenu]);

  return (
    <>
      
      <FromOurKitchen onOpenMenu={() => setShowFullMenu(true)} />
      {showFullMenu && <Menu asOverlay onClose={() => setShowFullMenu(false)} />}
    </>
  );
}
