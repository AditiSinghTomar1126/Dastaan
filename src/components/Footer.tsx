import Link from "next/link";
import { Mail, Sparkles } from "lucide-react";
import Image from "next/image";

// TODO: Real links, columns aur copy baad me finalize honge
const footerColumns = [
  {
    title: "Quick Links",
    links: [
       
       { label: "Our Story", href: "/about" },
      { label: "Menu", href: "/menu" },
      { label: "Gallery", href: "/gallery" },
     
    ],
  },
   {
    title: "Contact",
    links: [
      { label: "Phone", href: "tel:000000000" },
      { label: "Order Online", href: "https://swiggy.com" }  ,  
      { label: "Reserve a Table", href: "/order" }  ,
     
      
    ],
  },
  {
    title: "Hours",
    links: [
      { label: "Monday - Thursday: 12pm - 1am", href: "#" },   
      { label: "Friday - Saturday: 12pm - 2am", href: "#" },
      { label: "Sunday: 12pm - 12am", href: "#" },
    ],
  },
 
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-dark text-light">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className=" ">
              <Image
          src= "/logo.png"
          alt="Dastaan"
          width = {200}
          height = {20}
          />
            </Link>

            <a
              href="mailto:contact@dastaan.com"
              className="  flex items-center gap-2 text-xl text-light/80 hover:text-primary"
            >
              <Mail size={18} />
             contact@dastaan.com
            </a>
          </div>

          {/* Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-4 text-sm font-bold text-light">
                {column.title}
              </h4>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-light/80 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-gradient-to-r from-secondary via-primary/40 to-secondary" />

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-4 text-sm text-light/70 md:flex-row md:items-center">
          <p>© {year} Dastaan. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Made and managed by ATNexus Tech.
          </p>
        </div>
      </div>

      
    </footer>
  );
}
