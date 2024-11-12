"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const benefitsText: Record<
  number,
  {
    title: string;
    text: string;
  }
> = {
  1: {
    title: "Redução de Custos Operacionais",
    text: "Otimizamos seus processos para economizar tempo e recursos.",
  },
  2: {
    title: "Produtos Personalizados",
    text: "Soluções sob medida para atender às necessidades específicas do seu setor.",
  },
  3: {
    title: "Tecnologia de Ponta",
    text: "Utilizamos conceitos avançados para garantir eficiência e inovação.",
  },
  4: {
    title: "Parceria Estratégica",
    text: "Mais que fornecedores, somos aliados na busca pela excelência operacional.",
  },
};

export function Benefits() {
  const router = useRouter();

  return (
    <div className="bg-orange-400 mt-14 sm:mt-48">
      <div className="max-w-screen-xl mx-4 sm:mx-auto my-14 sm:my-36 flex flex-col sm:flex-row">
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex-1">
            <h6 className="is-h6 font-normal text-orange-100">
              Porque a CRISGUI
            </h6>
            <h3 className="is-h3 font-normal text-gray-0 mt-6">
              Veja alguns benefícios de se juntar aos a CRISGUI
            </h3>
          </div>

          <div className="hidden sm:block mt-6 sm:mt-0">
            <Button
              className="w-full sm:w-[304px] bg-gray-0 text-xmedium font-medium text-orange-400"
              type="button"
              onClick={() => router.push("/orcamento")}
            >
              Orçamento com um vendedor
            </Button>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-2 mt-9 sm:mt-0">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              className="flex flex-col gap-16 border border-gray-0 p-6 rounded-lg"
              key={index}
            >
              <h5 className="is-h5 text-gray-0">{index + 1}</h5>

              <div>
                <h5 className="is-h5 text-gray-0">
                  {benefitsText[index + 1].title}
                </h5>
                <p className="is-medium text-orange-100">
                  {benefitsText[index + 1].text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="block sm:hidden mt-6">
          <Button
            className="w-full bg-gray-0 text-xmedium font-medium text-orange-400 h-14"
            type="button"
            onClick={() => router.push("/orcamento")}
          >
            Orçamento com um vendedor
          </Button>
        </div>
      </div>
    </div>
  );
}
