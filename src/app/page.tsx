import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Products } from "@/components/Products";
import { Quality } from "@/components/Quality";
import { ProSpace } from "@/components/ProSpace";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Products />
        <Quality />
        <ProSpace />
        <Contact />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
