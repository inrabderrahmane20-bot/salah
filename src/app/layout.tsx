import type { Metadata } from "next";
import { Manrope, IBM_Plex_Sans_Arabic, Fraunces } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Editorial display serif — used for headlines (Latin)
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const ibmArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HML Distribution — Volaille & œufs frais · Maroc",
  description:
    "HML Distribution — distribution de volaille et d’œufs frais au Maroc. Une fraîcheur irréprochable livrée aux familles et aux professionnels, sous chaîne du froid maîtrisée.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      dir="ltr"
      className={`${manrope.variable} ${ibmArabic.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <I18nProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-forest focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-cream"
          >
            Aller au contenu
          </a>
          <Navbar />
          {children}
          <Footer />
          <StickyWhatsApp />
        </I18nProvider>
      </body>
    </html>
  );
}
