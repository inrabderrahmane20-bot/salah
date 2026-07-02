import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — HML Distribution",
  description:
    "Parlons de vos besoins. Notre équipe construit avec vous une solution d’approvisionnement en volaille et œufs frais, adaptée à votre activité.",
};

export default function Page() {
  return (
    <>
      <Contact />
      <ContactForm />
    </>
  );
}
