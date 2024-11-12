import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export function Info() {
  return (
    <div className="max-w-screen-xl m-auto mt-36">
      <div className="flex w-full gap-16">
        <div className="flex flex-col w-2/4">
          <span className="is-h6 text-gray-500 font-normal">
            Sobre a CRISGUI
          </span>
          <h1 className="mb-24 mt-6 is-h3 text-gray-900 font-normal">
            Inovação que Impulsiona Suas Operações
          </h1>
        </div>

        <div className="flex flex-col w-2/4 gap-[72px]">
          <div>
            <p className="is-medium text-gray-500 font-medium">
              A CRISGUI Indústria e Serviços dedica-se a criar valor para seus
              clientes, focando na redução de custos e aumento de eficiência
              operacional. Desenvolvemos produtos personalizados para diversos
              setores, utilizando tecnologia de ponta para atender às demandas
              de um mercado globalizado. Nossa missão é fornecer disponibilidade
              física e confiabilidade operacional, tornando-nos parceiros
              estratégicos dos nossos clientes. Com valores firmes em
              honestidade, autenticidade, integridade e solidariedade,
              garantimos produtos de alta qualidade que impulsionam a excelência
              dos nossos clientes.
            </p>
            <Link
              href="/empresa"
              className="mt-4 flex items-center gap-4 is-xmedium text-orange-500"
              aria-label="Ir para a página da história da CRISGUI"
            >
              Saber mais sobre a História da Crisgui <SquareArrowOutUpRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
