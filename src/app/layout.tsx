import { Cormorant_Garamond, Manrope } from "next/font/google";
import {heading, body} from "@/libs/fonts"

import type { Metadata } from "next";

import type { Viewport } from "next";




import "./globals.css";

import Navbar from "@/components/Navbar";

import CTA from "@/components/CTA";

import Footer from "@/components/Footer";
import Whatsapp from "@/components/Whatsapp";
export const metadata: Metadata = {

  title: "Dastaan",
  description: "Placeholder description for Dastaan .",
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"
     className={`${heading.variable} ${body.variable}`} >
      <body className="font-body">
        <Navbar />
        <main>{children}</main>
       
        <CTA/>
        <Footer />
        <Whatsapp/>
      </body>
    </html>
  );
}
