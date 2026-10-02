import { Fraunces, Bricolage_Grotesque } from "next/font/google";

export const heading = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const body = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-body",
});