"use client";

import { Button } from "@/components/ui/button";

import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";

export function CallToAction() {
  const router = useRouter();

  return (
    <div className="max-w-screen-xl mx-4 sm:mx-auto mt-14 sm:mt-28 bg-orange-50 border border-orange-400 rounded-lg h-auto sm:h-60 grid grid-cols-1 sm:grid-cols-2 relative">
      <div className="flex flex-col justify-center gap-6 p-6 sm:pl-12">
        <div className="py-2 px-4 bg-orange-100 w-full sm:w-96 rounded-lg text-center">
          <p className="is-xmedium text-orange-400 font-medium">
            Soluções Inteligentes para Sua Indústria
          </p>
        </div>
        <h4 className="is-h4 font-medium text-gray-900 text-left">
          Melhore seus processos industriais com produtos{" "}
          <span className="text-orange-500">personalizados e inovadores</span>
        </h4>
      </div>

      <div className="flex bg-none sm:bg-ctaVector justify-center sm:justify-end items-center p-6 sm:p-12 bg-no-repeat bg-cover bg-center">
        <Button
          className="bg-orange-500 w-full sm:w-80 h-16 rounded-2xl is-xmedium text-white-100 flex items-center justify-center gap-4 relative z-10"
          type="button"
          onClick={() => {
            router.push("/contato");
          }}
        >
          Entre em contato conosco
          <MoveRight />
        </Button>
      </div>
    </div>
  );
}
