import { Hero } from "@/components/hero";
import { About } from "./_components/about";
import { Clients } from "./_components/clients";
import { MainProducts } from "./_components/main-products";
import { MoreProducts } from "./_components/more-products";
import { Gallery } from "@/components/gallery";
import { CallToAction } from "@/components/cta";
import { CompanyNumbers } from "@/components/company-numbers";
import { Testimony } from "@/components/testimony";
import { Benefits } from "@/components/benefits";
import { PeadProduct } from "@/components/pead-product";
import { PeadCallToAction } from "@/components/pead-cta";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero pathname="home" bg="bg-hero-home" />
      <Clients />
      <About />
      <MainProducts />
      <Benefits />
      <PeadProduct />
      <PeadCallToAction />
      <CompanyNumbers />
      <CallToAction />
      <MoreProducts />
      <Gallery />
      <Testimony />
    </main>
  );
}
