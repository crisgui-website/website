"use client";

import { Logo10 } from "@/assets/clients";
import Image from "next/image";

const testimonies: Record<
  number,
  {
    comment: string;
    name: string;
    company: string;
    picture: any;
  }
> = {
  1: {
    comment:
      "A Crisgui é nossa fornecedora de Roletes e Cavaletes há alguns anos. Sempre nos atendem com qualidade, pontualidade e preço.",
    name: "Daniel Silva",
    company: "Mineral do Brasil",
    picture: Logo10,
  },
};

function getClientFallBack(name: string) {
  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");
}

export function Testimony() {
  return (
    <div className="max-w-screen-xl m-auto w-full my-14 sm:my-36 flex flex-col gap-14 px-4 sm:px-0">
      <div className="space-y-6">
        <h6 className="is-h6 font-normal text-gray-900">Clientes CRISGUI</h6>
        <h3 className="is-h3 font-normal text-gray-900">
          Os nossos clientes deixaram <br /> alguns depoimentos...
        </h3>
      </div>

      <div className="flex sm:grid gap-8 overflow-x-auto scrollbar-hide">
        {Array.from({ length: 1 }).map((_, index) => (
          <div
            key={index}
            className="w-full min-w-[300px] sm:w-full p-6 bg-blue-50 rounded-lg flex flex-col sm:justify-between"
          >
            <p className="mb-4 is-large text-gray-700 line-clamp-5">
              {testimonies[index + 1].comment}
            </p>
            <div className="flex items-center">
              <Image
                src={testimonies[index + 1].picture}
                alt={testimonies[index + 1].name}
                className="w-20 h-20"
              />
              <div className="ml-4">
                <p className="is-xmedium text-gray-900 font-medium">
                  {testimonies[index + 1].name}
                </p>
                <p className="is-small text-gray-400">
                  {testimonies[index + 1].company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
