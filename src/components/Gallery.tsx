"use client";
import { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryItems, type GalleryItem } from '../../data/gallery';

const categories = ['All', 'Interior', 'Ambience', 'Outdoor', 'Kitchen', 'Dining', 'Restaurant'] as const;


export default function GalleryPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex((i) => i.id === item.id);
    setLightboxIndex(idx);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const navigate = (dir: number) => {
    if (lightboxIndex === null) return;
    const next = (lightboxIndex + dir + filteredItems.length) % filteredItems.length;
    setLightboxIndex(next);
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigate(1);
      if (e.key === 'ArrowLeft') navigate(-1);
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  const current = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative w-full overflow-hidden bg-[#1A1714] py-20 md:py-28"
    >
      {/* Accent glow */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, #C66B3D, transparent 70%)' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center">
          <p
            className={`mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            DASTAAN
          </p>
          <h2
            className={`font-serif text-4xl font-semibold leading-[1.15] text-stone-100 transition-all duration-700 md:text-5xl ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Gallery
          </h2>
          <p
            className={`mx-auto mt-4 max-w-lg text-base leading-relaxed text-stone-400 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            A glimpse of the flavours and moments that await you.
          </p>
        </div>

        {/* Category filter */}
        <div
          className={`mt-10 flex flex-wrap items-center justify-center gap-2 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-lg shadow-[#C66B3D]/30'
                  : 'border border-white/10 bg-white/5 text-stone-400 hover:border-primary/40 hover:text-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div
          className={`mt-12 columns-1 gap-5 transition-all duration-700 sm:columns-2 lg:columns-3 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          {filteredItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl text-left"
              style={{
                animation: visible
                  ? `fadeUp 0.6s ease-out ${idx * 80}ms both`
                  : 'none',
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
              {/* Caption */}
              <div className="absolute inset-x-0 bottom-0 p-1">
               
                <h3 className="mt-1 font-serif text-md font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-1 max-h-0 overflow-hidden text-sm leading-relaxed text-stone-300 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                  {item.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {current && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute right-5 top-5 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(-1);
            }}
            className="absolute left-5 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(1);
            }}
            className="absolute right-5 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Image */}
          <div
            className="relative max-h-[85vh] max-w-3xl px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current.image}
              alt={current.title}
              className="max-h-[75vh] w-auto rounded-xl object-contain"
            />
            <div className="mt-4 text-center">
              <p className="text-xs font-medium uppercase tracking-wider text-primary">
                {current.category}
              </p>
              <h3 className="mt-1 font-serif text-2xl font-semibold text-white">
                {current.title}
              </h3>
              <p className="mt-1 text-sm text-stone-400">{current.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
