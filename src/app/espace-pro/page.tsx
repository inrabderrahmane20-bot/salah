import type { Metadata } from "next";
import { ProSpace } from "@/components/ProSpace";
import { PageOutro } from "@/components/PageOutro";

export const metadata: Metadata = {
  title: "Espace professionnel — HML Distribution",
  description:
    "Un partenariat pensé comme un cercle privé : commandes simplifiées, suivi de livraison et conditions dédiées pour les professionnels.",
};

export default function Page() {
  return (
    <>
      <ProSpace />
      <PageOutro current="pro" />
    </>
  );
}
