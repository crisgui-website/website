"use client";

import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function PeadCallToAction() {
  const router = useRouter();

  const backgrounds = [
    "bg-[url('/images/pead-carousel/img-1.svg')]",
    "bg-[url('/images/pead-carousel/img-2.svg')]",
    "bg-[url('/images/pead-carousel/img-3.svg')]",
    "bg-[url('/images/pead-carousel/img-4.svg')]",
    "bg-[url('/images/pead-carousel/img-5.svg')]",
    "bg-[url('/images/pead-carousel/img-6.svg')]",
    "bg-[url('/images/pead-carousel/img-7.svg')]",
    "bg-[url('/images/pead-carousel/img-8.svg')]",
    "bg-[url('/images/pead-carousel/img-9.svg')]",
  ];
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBackground(
        (prevBackground) => (prevBackground + 1) % backgrounds.length
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [backgrounds.length]);

  return (
    <div
      className={`max-w-screen-xl mx-4 sm:mx-auto rounded-2xl p-6 sm:p-16 sm:flex items-end sm:h-[312px] my-14 bg-no-repeat bg-cover bg-center ${backgrounds[currentBackground]}`}
    >
      <div className="flex flex-col gap-6">
        <p className="is-xlarge font-medium text-gray-0">Rolete de PEAD</p>
        <h3 className="is-h3 font-normal text-gray-0 text-left sm:w-[55%]">
          Desempenho Superior em Ambientes Extremos
        </h3>
      </div>

      <Button
        className="bg-orange-500 w-full mt-9 sm:mt-0 sm:w-80 h-16 rounded-2xl is-xmedium text-white-100 flex items-center justify-center gap-4"
        type="button"
        onClick={() => {
          router.push("/contato");
        }}
      >
        Fazer orçamento
        <MoveRight />
      </Button>
    </div>
  );
}
