import { Capabilities } from "@/components/Capabilities";
import Hero from "@/components/Hero";
import { HeroImage } from "@/components/HeroImage";
import { Compliance } from "@/components/Compliance";
import { ReadyToProtect } from "@/components/ReadyToProtect";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HeroImage />
      <Capabilities />
      <Compliance />
      <ReadyToProtect />
    </>
  );
}
