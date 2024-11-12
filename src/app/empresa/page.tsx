import { Hero } from "@/components/hero";
import { Frase } from "./_components/frase";
import { About } from "./_components/about";
import { Collaborators } from "./_components/collaborators";
import { OurValues } from "./_components/our-values";
import { CallToAction } from "@/components/cta";
import { CompanyNumbers } from "@/components/company-numbers";
import { Gallery } from "@/components/gallery";
import { Testimony } from "@/components/testimony";
import { PeadCallToAction } from "@/components/pead-cta";

export default function Company() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero pathname="empresa" bg="bg-hero-company" />
      <Frase />
      <About />
      <PeadCallToAction />
      <Collaborators />
      <OurValues />
      <CallToAction />
      <CompanyNumbers />
      <Gallery />
      <Testimony />
    </main>
  );
}
