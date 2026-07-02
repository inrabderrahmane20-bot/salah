import type { Metadata } from "next";
import { Story } from "@/components/Story";
import { PageOutro } from "@/components/PageOutro";

export const metadata: Metadata = {
  title: "Notre maison — HML Distribution",
  description:
    "L’histoire de HML Distribution : fermes partenaires, exigence de fraîcheur et maîtrise de chaque maillon, du producteur à votre table.",
};

export default function Page() {
  return (
    <>
      <Story />
      <PageOutro current="story" />
    </>
  );
}
