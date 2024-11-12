import { BudgetForm } from "@/components/form/budgetForm";
import { Gallery } from "@/components/gallery";
import { Map } from "./_components/map";
import { Info } from "./_components/info";
import { Hero } from "@/components/hero";
import { PeadCallToAction } from "@/components/pead-cta";

export default function Orcamento() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero pathname="produtos" bg="bg-hero-products" />
      <Info />
      <BudgetForm />
      <Map />
      <PeadCallToAction />
      <Gallery />
    </main>
  );
}
