import { Capabilities } from "@/components/Capabilities";
import Hero from "@/components/Hero";
import { Compliance } from "@/components/Compliance";
import { HeroImage } from "@/components/HeroImage";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HeroImage />
      <Capabilities />
      <Compliance />
    </>
  );
}
