"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "Our Story", href: "/about" },
  { label: "Order Now", href: "/order" },
];

export default function Navbar() {
  const [lastScroll, setLastScroll] = useState(0);
  const [show, setShow] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  // Mobile Menu
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 30);

      if (current <= 10) {
        setShow(true);
      } else if (current > lastScroll) {
        setShow(false);
        setMobileMenu(false);
      } else {
        setShow(true);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500
      ${show ? "translate-y-0" : "-translate-y-full"}
      ${
        scrolled
          ? "border-b border-white/10 bg-black/75 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
          : "border-transparent bg-transparent backdrop-blur-lg"
      }`}
    >
      <nav className="flex h-20 w-full  items-center justify-between md:-ml-10 lg:px-8">

        {/* Logo */} 

        <Link href="/">
          <Image
            src="/logo.png"
            alt="Dastaan"
            width={200}
            height={20}
            className=" w-[150px] lg:w-[200px] lg:px-2 md:ml-10"
          />
        </Link>
        {/* Desktop Navigation */}
        <div className="bg-light hidden md:flex md:border-light md:rounded-full md:px-4 md:py-3 ">
  

        <ul className="hidden items-center gap-5 lg:flex ">
          {navLinks.map((link) => (
           
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-sm font-medium text-black transition duration-300 hover:bg-primary hover:text-white border border-light rounded-full px-3.5 py-2.5  "
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        </div>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          {/* Desktop CTA */}

          <Link
            href="/order"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-md font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(254,66,77,0.45)] lg:inline-flex"
          >
            Order Now
            <ArrowRight size={18} />
          </Link>

          {/* Mobile Hamburger */}

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-11 w-11 items-center justify-center rounded-xl  text-white backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 lg:hidden"
          >
            {mobileMenu ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button> 

        </div>

      </nav>
      {/* ================= MOBILE MENU ================= */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileMenu ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-white/10 bg-black/95 backdrop-blur-3xl">

          <div className="flex flex-col px-6 py-8">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenu(false)}
                className="group flex items-center justify-between border-b border-white/5 py-5 text-lg font-medium text-white transition hover:text-primary"
              >
                <span>{link.label}</span>

                <ArrowRight
                  size={18}
                  className="translate-x-0 opacity-40 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                />
              </Link>
            ))}

            {/* CTA */}

            <Link
              href="/order"
              onClick={() => setMobileMenu(false)}
              className="mt-8 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-base font-semibold text-white shadow-[0_0_25px_rgba(254,66,77,0.35)] transition hover:scale-[1.02]"
            >
              Order Now

              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </div>

    </header>
  );
}