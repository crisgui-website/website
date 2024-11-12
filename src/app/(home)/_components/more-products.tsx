"use client";

import Image from "next/image";
import Link from "next/link";
import { MoveRight, SquareArrowOutUpRight } from "lucide-react";
import { suportes, polietileno, tambores } from "../../../assets/more-products";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const moreProducts: any[] = [
  {
    label: "Suportes",
    href: "/produtos",
    type: "SUPORTES",
    img: suportes,
  },
  {
    label: "Roletes De Polietileno",
    href: "/produtos",
    type: "ROLETES/POLIETILENO",
    img: polietileno,
  },
  {
    label: "Tambores",
    href: "/produtos",
    type: "TAMBORES",
    img: tambores,
  },
];

export function MoreProducts() {
  const router = useRouter();

  return (
    <div className="max-w-screen-xl mx-4 sm:mx-auto mt-20 sm:mt-32">
      <div className="space-y-6">
        <h6 className="is-h6 font-normal text-gray-600">Produtos CRISGUI</h6>
        <h3 className="is-h3 font-normal text-gray-900">
          Veja nossos produtos
          <br /> mais procurados
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
        {moreProducts.map((product, index) => (
          <div className="flex flex-col" key={index}>
            <Image
              src={product.img}
              alt={product.label}
              className="w-full h-[251px]"
            />
            <h5 className="is-h5 font-normal mt-4 mb-2 text-gray-900">
              {product.label}
            </h5>
            <Link
              className="flex gap-4 items-center is-xmedium font-medium text-orange-500 no-underline"
              href={{
                pathname: product.href,
                query: {
                  product: product.type.split("/")[0],
                  subProduct: product.type.split("/")[1],
                },
              }}
              aria-label="Ir para a página do produto"
            >
              Ver Produto <SquareArrowOutUpRight />
            </Link>
          </div>
        ))}
      </div>

      <Button
        className="w-full sm:w-[277px] h-16 rounded-2xl bg-orange-500 text-gray-0 mt-8 gap-4"
        type="button"
        onClick={() => {
          router.push("/produtos");
        }}
      >
        Ver Todos Produtos <MoveRight />
      </Button>
    </div>
  );
}
