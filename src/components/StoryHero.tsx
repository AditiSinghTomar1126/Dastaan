
"use client"
import { useEffect, useRef, useState } from 'react';
import { Sparkles, Flame, Users, Award ,ArrowUpRight} from 'lucide-react';

const milestones = [
  {
    year: '2015',
    title: 'The First Flame',
    description: 'It started with a single burner, a family recipe, and a dream to share our flavours with the world.',
    icon: Sparkles,
  },
  {
    year: '2018',
    title: 'Growing the Family',
    description: 'Our tiny kitchen welcomed its first team of passionate chefs, each bringing their own story to the table.',
    icon: Users,
  },
  {
    year: '2021',
    title: 'Forging Our Craft',
    description: 'We refined our techniques, blending tradition with innovation to create dishes that tell a story.',
    icon: Flame,
  },
  {
    year: '2024',
    title: 'Recognition & Beyond',
    description: 'From a neighbourhood favourite to an award-winning destination — the journey continues with every plate served.',
    icon: Award,
  },
];

export default function StoryHero() {
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
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 py-4 text-xs font-medium uppercase tracking-[0.3em] text-primary">
      <span className="h-px w-8 bg-primary" />
      {children}
    </span>
  );
}
  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative w-full overflow-hidden bg-dark py-20 md:py-28"
    >
      {/* Soft accent glow */}
      <div
        className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--primary), transparent 70%)' }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-10">
        {/* Left: text */}
        <div className="flex flex-col justify-start"> 
          <SectionLabel>Our Story</SectionLabel>
         
          <h2
            className={`font-serif text-4xl font-semibold leading-[1.12] text-stone-100 transition-all duration-700 md:text-6xl ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '120ms' }}
          >
            A Journey of
            <br />
            <span className="text-primary">Flavour</span> & Fire
           
          </h2>

          <p
            className={`mt-6 max-w-md text-base leading-relaxed text-stone-400 transition-all duration-700 md:text-lg ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '240ms' }}
          >
            From a small family kitchen to a table where memories are made —
            every dish carries a story worth sharing. This is how we got here.
          </p>

          <div
            className={`mt-8 flex items-center gap-3 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '360ms' }}
          >


            </div>
            <div className="py-4">
             <button className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-8 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 sm:w-auto">
                Order now

                <ArrowUpRight
                  size={19}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
         </div>         
           <div className="lg:pt-40 flex items-center gap-14">
              <div>
                <p className="font-display text-3xl md:text-4xl font-semibold text-primary">15+</p>
                <span className="text-xs  tracking-[0.2em] text-stone-500"> &nbsp;Years of craft</span>
              </div>
              
              <div>
                <p className="font-display text-3xl md:text-4xl font-semibold text-primary">40+</p>
                <span className="text-xs tracking-[0.2em] text-stone-500">&nbsp;Family recipes</span>
              </div>
               <div>
                <p className="font-display text-3xl md:text-4xl font-semibold text-primary">100%</p>
                <span className="text-xs tracking-[0.2em] text-stone-500">&nbsp;Fresh</span>
              </div>
            </div>
            
        </div>

        {/* Right: journey timeline cards */}
        <div className="relative flex flex-col gap-4">
          {/* Vertical connecting line */}

          {milestones.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={m.year}
                className={`group relative flex gap-5 rounded-2xl  shadow-md shadow-primary/30 bg-transparent p-5 hover:border-primary  ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${400 + idx * 120}ms` }}
              >
                {/* Icon node */}
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-primary bg-[#1A1714] text-primary transition-all duration-300 group-hover:border-[#C66B3D]/60 group-hover:bg-[#C66B3D]/10">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {m.year}
                  </span>
                  <h3 className="mt-1 font-serif text-xl font-semibold text-stone-100">
                    {m.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-400">
                    {m.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
