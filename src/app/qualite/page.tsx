import type { Metadata } from "next";
import { Quality } from "@/components/Quality";
import { PageOutro } from "@/components/PageOutro";

export const metadata: Metadata = {
  title: "Qualité & logistique — HML Distribution",
  description:
    "Chaîne du froid maîtrisée, sécurité alimentaire et traçabilité : la précision au service de la fraîcheur.",
};

export default function Page() {
  return (
    <>
      <Quality />
      <PageOutro current="quality" />
    </>
  );
}
