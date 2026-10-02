"use client";
import { useEffect, useMemo, useRef, useState } from 'react';
import { X, Leaf, Flame } from 'lucide-react';
import { menuCategories, menuData, type MenuCategory, type MenuItem } from '../../data/menuData';

/* ---------- Shared helpers ---------- */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-primary ">
      <span className="h-px w-8 bg-primary" />
      {children}
    </span>
  );
}

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
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

/* ---------- Veg / Non-veg indicator ---------- */
function VegIndicator({ isVeg }: { isVeg: boolean }) {
  return (
    <span
      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border ${
        isVeg ? 'border-green-600' : 'border-red-500'
      }`}
      title={isVeg ? 'Vegetarian' : 'Non-vegetarian'}
    >
      <span
        className={`h-2 w-2 rounded-full ${
          isVeg ? 'bg-green-600' : 'bg-red-500'
        }`}
      />
    </span>
  );
}

/* ---------- Menu Card ---------- */
function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-stone-800/80 bg-gradient-to-b from-stone-900/60 to-[#0d0b0a] transition-all duration-500 hover:border-[#e07a3c]/40 ${
        visible ? 'animate-fade-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${(index % 6) * 0.08}s` }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b0a] via-transparent to-transparent" />
        {/* Veg indicator on image */}
        <div className="absolute right-3 top-3 rounded-md bg-[#0d0b0a]/80 p-1.5 backdrop-blur-sm">
          <VegIndicator isVeg={item.isVeg} />
        </div>
        {/* Spicy badge */}
        {item.spicy && (
          <div className="absolute left-3 top-3 flex items-center gap-1 rounded-md bg-[#0d0b0a]/80 px-2 py-1 backdrop-blur-sm">
            <Flame className="h-3 w-3 text-primary" />
            <span className="text-[0.6rem] font-medium uppercase tracking-wider text-primary">Spicy</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-medium leading-snug text-stone-50">
            {item.name}
          </h3>
          <span className="font-display text-lg font-semibold text-primary">
            ₹{item.price}
          </span>
        </div>
        <p className="mt-2 flex-1 text-sm font-light leading-relaxed text-stone-400">
          {item.description}
        </p>
        <div className="mt-4 flex items-center gap-2 border-t border-stone-800 pt-3">
          <VegIndicator isVeg={item.isVeg} />
          <span className="text-xs font-medium uppercase tracking-wider text-stone-500">
            {item.isVeg ? 'Veg' : 'Non-veg'}
          </span>
          <span className="ml-auto text-xs uppercase tracking-[0.2em] text-stone-600">
            {item.category}
          </span>
        </div>
      </div>

      {/* Accent line */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
    </div>
  );
}

/* ---------- Category Filter Bar ---------- */
function CategoryFilter({
  active,
  onChange,
}: {
  active: MenuCategory | 'All';
  onChange: (cat: MenuCategory | 'All') => void;
}) {
  const filters: (MenuCategory | 'All')[] = ['All', ...menuCategories];
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
      {filters.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`rounded-full px-5 py-2 text-xs font-medium uppercase tracking-[0.15em] transition-all duration-300 ${
            active === cat
              ? 'bg-primary text-[#0d0b0a] shadow-lg shadow-primary/20'
              : 'border border-stone-700/60 text-stone-400 hover:border-primary/40 hover:text-stone-200'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

/* ---------- Menu Props ---------- */
interface MenuProps {
  /** When true, renders as a full-screen overlay (used in Home page expand). */
  asOverlay?: boolean;
  /** Callback to close the overlay (only used when asOverlay is true). */
  onClose?: () => void;
}

/* ---------- Menu Component ---------- */
export default function Menu({ asOverlay = false, onClose }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'All'>('All');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return menuData;
    return menuData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const content = (
    <div className="min-h-screen bg-[#0d0b0a]">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-stone-800/60">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/19300593/pexels-photo-19300593.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0b0a]/60 to-[#0d0b0a]" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 text-center md:px-12 md:py-20">
          {asOverlay && (
            <button
              onClick={onClose}
              className="absolute right-6 top-6 flex items-center gap-2 rounded-full border border-stone-700/60 px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-stone-300 transition-all hover:border-[#e07a3c]/50 hover:text-[#e07a3c] md:right-12 md:top-12"
            >
              <X className="h-4 w-4" />
              Close
            </button>
          )}
          <SectionLabel>Our Menu</SectionLabel>
          <h2 className="font-display mt-6 text-5xl font-medium text-stone-50 sm:text-6xl">
            The Complete Menu
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-stone-400">
            Every dish is crafted in-house with whole spices and fresh ingredients.
            Filter by category to explore.
          </p>
        </div>
      </div>

      {/* Filter + Grid */}
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        <div className="mb-12">
          <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
        </div>

        {filteredItems.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} />
            ))}
          </div>
        ) : (
          <p className="py-20 text-center text-stone-500">No dishes in this category.</p>
        )}
      </div>

      
    
    </div>
  );

  if (asOverlay) {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0d0b0a] animate-fade-in">
        {content}
      </div>
    );
  }

  return content;
}
