import { Capabilities } from "@/components/Capabilities";
import Hero from "@/components/Hero";
import { Compliance } from "@/components/Compliance";
import { ReadyToProtect } from "@/components/ReadyToProtect";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Capabilities />
      <Compliance />
      <ReadyToProtect />
    </>
  );
}
