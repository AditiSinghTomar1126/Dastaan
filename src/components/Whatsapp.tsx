"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <>
      {/* Desktop */}
      <a
       href="https://wa.me/919762117170?text=Hi%20ATNexus!%20%F0%9F%91%8B%0A%0AI'm%20interested%20in%20your%20services%20and%20would%20like%20to%20discuss%20my%20project.%0A%0ALooking%20forward%20to%20hearing%20from%20you."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group fixed bottom-6 right-6 z-50 hidden h-14 w-14 items-center overflow-hidden rounded-full bg-[#25D366] shadow-xl transition-all duration-300 hover:w-48 md:flex"
      >
        <div className="flex h-14 w-14 shrink-0 items-center justify-center">
          <FaWhatsapp className="text-3xl text-white" />
        </div>

        <span className="whitespace-nowrap pr-6 text-sm font-medium text-white">
          Chat with us
        </span>
      </a>

      {/* Mobile */}
      <a
        href="https://wa.me/919762117170?text=Hi%20ATNexus!%20%F0%9F%9AI'm%20interested%20in%20your%20services%20and%20would%20like%20to%20discuss%20my%20project.%0A%0ALooking%20forward%20to%20hearing%20from%20you."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl md:hidden"
      >
        <FaWhatsapp className="text-3xl text-white" />
      </a>
    </>
  );
}