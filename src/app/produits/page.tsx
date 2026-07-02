import type { Metadata } from "next";
import { Products } from "@/components/Products";
import { PageOutro } from "@/components/PageOutro";

export const metadata: Metadata = {
  title: "Produits — HML Distribution",
  description:
    "Volaille fraîche et œufs, présentés comme un catalogue : fraîcheur, conditionnement et disponibilité, sans compromis.",
};

export default function Page() {
  return (
    <>
      <Products />
      <PageOutro current="products" />
    </>
  );
}
