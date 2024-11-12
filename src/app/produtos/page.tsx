import { Hero } from "@/components/hero";
import { ProductList } from "./_components/products";
import { Benefits } from "@/components/benefits";
import { Testimony } from "@/components/testimony";
import { CallToAction } from "@/components/cta";
import { Suspense } from "react";
import { PeadCallToAction } from "@/components/pead-cta";
import { PeadProduct } from "@/components/pead-product";

export default function Products() {
  return (
    <Suspense>
      <main className="flex min-h-screen flex-col">
        <Hero pathname="produtos" bg="bg-hero-products" />
        <PeadCallToAction />
        <ProductList />
        <PeadProduct />
        <CallToAction />
        <Benefits />
        <Testimony />
      </main>
    </Suspense>
  );
}
