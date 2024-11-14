import Image from "next/image";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";
import aboutSVG from "../../../assets/about.jpeg";
import aboutVectorSVG from "../../../assets/about-vector.svg";

export function About() {
  return (
    <div className="max-w-screen-xl mx-auto mt-14 sm:mt-36 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row w-full sm:gap-16">
        <div className="flex flex-col w-full sm:w-2/4">
          <span className="is-h6 text-gray-500 font-normal">
            Sobre a CRISGUI
          </span>
          <h1 className="mb-6 sm:mb-24 mt-6 is-h3 text-gray-900 font-normal">
            Inovação que Impulsiona Suas Operações
          </h1>
          <Image
            alt="Vetor de imagem"
            src={aboutVectorSVG}
            height={700}
            width={1000}
            className="hidden sm:block"
          />
        </div>

        <div className="flex flex-col w-full sm:w-2/4 gap-6 sm:gap-[72px]">
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

          <Image alt="Homem trabalhando na fábrica" src={aboutSVG} />
        </div>
      </div>
    </div>
  );
}
