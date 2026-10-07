"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const heroimg = "/heroimg.png";
const foodimg1 = "https://images.pexels.com/photos/34270741/pexels-photo-34270741.jpeg?auto=compress&cs=tinysrgb&w=800";

const foodimg2 = "https://images.pexels.com/photos/28674566/pexels-photo-28674566.jpeg?auto=compress&cs=tinysrgb&w=800";

const foodimg3 = "https://images.pexels.com/photos/12669168/pexels-photo-12669168.jpeg?auto=compress&cs=tinysrgb&w=800";

const foodCards = [
  {
    name: "Smoky Bloom",
    type: "Smoked mushrooms",
    price: "₹ 120",
    color: "bg-[#ff7518]",
  },
  {
    name: "Fried chicken",
    type: "Crispy & golden",
    price: "₹ 150",
    color: "bg-[#ffd9d2]",
  },
  {
    name: "Hot Dogs",
    type: "Loaded & juicy",
    price: "₹ 259",
    color: "bg-[#ffb7a8]",
  },
];

export default function Hero() {
  const [activeNav, setActiveNav] = useState("Home");
  const [activeCard, setActiveCard] = useState(0);
  const [liked, setLiked] = useState(false);

  const moveCard = (direction: number) => {
    setActiveCard(
      (current) =>
        (current + direction + foodCards.length) % foodCards.length
    );
  };

  function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
      <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
        <span className="h-px w-8 bg-primary" />
        {children}
      </span>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-secondary px-0 py-0 text-white">
      <section className="relative mx-0 min-w-full overflow-hidden bg-secondary px-0 py-0">

        <div
          id="top"
          className="
            relative z-10 grid items-center
            gap-8 px-6 pb-12 pt-8
            sm:px-10
            lg:min-h-[calc(100vh-6rem)]
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-0
            lg:px-14
            lg:pb-20
            lg:pt-0
          "
        >

          {/* TEXT CONTENT */}
          <div className="relative z-10 max-w-[650px] self-center pt-12">

            <SectionLabel>dastaan</SectionLabel>

            <h1
              className="
                max-w-[700px]
                pt-5
                text-5xl
                font-black
                uppercase
                leading-[1.05]
                tracking-[0.01rem]
                sm:text-6xl
                lg:text-7xl
                lg:leading-[1.15]
              "
            >
              Salad&nbsp; left
              <br />
              the <span className="text-primary">&nbsp;chat</span>
            </h1>

            <p
              className="
                mt-6
                max-w-[470px]
                text-sm
                leading-6
                text-white/70
                sm:mt-8
                sm:text-lg
                sm:leading-7
              "
            >
              Crispy layers, bold flavors, and plant-powered meals that
              actually hit different.
            </p>

            <div
              className="
                mt-7
                flex
                flex-col
                gap-3
                sm:mt-9
                sm:flex-row
              "
            >
            
              <a href="/order" className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-8 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 sm:w-auto">
                Order Now

                <ArrowUpRight
                  size={19}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a href="/menu" className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/60 px-8 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-primary sm:w-auto">
                Explore Menu

                <ArrowUpRight
                  size={19}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4"></div>
          </div>

          {/* HERO IMAGE + DESKTOP CARDS */}
          <div
            className="
              relative
              flex
              min-h-[75vw]
              items-center
              justify-center
              self-end
              overflow-hidden
              sm:min-h-[55vw]
              lg:min-h-[48vw]
              lg:mt-20
            "
          >
            <img
              src={heroimg}
              alt="Gourmet cheeseburger with fresh greens and melted cheese"
              className="
                hero-image-blend
                relative
                z-10
                h-[95vw]
                max-h-[560px]
                w-auto
                max-w-[115%]
                object-contain
                sm:h-[65vw]
                sm:max-w-full
                lg:h-[88vw]
              "
            />

            {/* FIRST FOOD CARD
                Hidden on mobile, same on desktop */}
            <div
              className="
                absolute
                bottom-[4%]
                left-1/2
                z-20
                hidden
                w-[185px]
                -translate-x-1/2
                rounded-[22px]
                bg-white
                p-2
                text-[#171719]
                shadow-2xl
                shadow-black/40
                sm:bottom-[5%]
                sm:left-[7%]
                sm:block
                sm:translate-x-0
              "
            >
              <div className="relative h-24 overflow-hidden rounded-[17px] bg-[#ff7518]">
                <img
                  src={foodimg1}
                  alt="Pani Puri"
                  className="h-full w-full scale-125 object-cover object-center"
                />
              </div>

              <p className="mt-2 text-base font-bold">
                Pani Puri
              </p>

              <p className="text-[11px] text-black/50">
                Spicy & tangy
              </p>

              <div className="mt-2 flex items-center justify-between">
                <strong className="text-lg"> ₹ 120 </strong>

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#171719] text-white">
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </div>

            {/* RIGHT FOOD CARDS
               hidden on mobile */}
            <div className="absolute bottom-[5%] right-[2%] z-20 hidden w-[380px] items-end gap-2 sm:flex">

              <button
                onClick={() => moveCard(-1)}
                aria-label="Previous food"
                className="mb-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/90 text-[#171719] transition hover:bg-white"
              >
                <ChevronLeft size={17} />
              </button>

              <div className="grid flex-1 grid-cols-2 gap-2 overflow-hidden">
                {[1, 2].map((offset) => {
                  const card =
                    foodCards[(activeCard + offset) % foodCards.length];

                  return (
                    <div
                      key={card.name}
                      className="overflow-hidden rounded-[20px] bg-white text-[#171719] shadow-xl"
                    >
                      <div className={`h-24 ${card.color}`}>
                        <img
                          src={foodimg2}
                          alt={card.name}
                          className="h-full w-full object-cover mix-blend-multiply"
                        />
                      </div>

                      <p className="p-3 pt-2 font-semibold">
                        {card.name}
                      </p>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={() => moveCard(1)}
                aria-label="Next food"
                className="mb-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-light text-[#171719] transition hover:bg-white"
              >
                <ChevronRight size={17} />
              </button>
            </div>
          </div>
        </div>

        {/* NATURAL INGREDIENTS - DESKTOP ONLY */}
        <div className="absolute bottom-8 right-8 hidden items-center gap-2 text-xs text-white/35 lg:flex">
          <Check size={14} className="text-[#ffb83f]" />
          100% natural ingredients
        </div>

      </section>
    </main>
  );
}