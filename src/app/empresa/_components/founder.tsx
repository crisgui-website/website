import FounderSVG from "../../../assets/founder.svg";
import Image from "next/image";
import Link from "next/link";

export function Founder() {
  return (
    <div className="mt-14 mb-14 sm:mt-32 sm:mb-0 bg-blue-50">
      <div className="max-w-screen-xl m-auto flex flex-col gap-16 px-4 sm:flex-row sm:gap-16">
        <Image
          className="block sm:hidden w-full sm:w-1/2"
          src={FounderSVG}
          alt="Foto do Fundador da CRISGUI"
        />

        <div className="flex flex-col sm:py-24 sm:w-1/2">
          <div className="space-y-6">
            <h6 className="is-h6 font-normal text-gray-500">Fundador</h6>
            <h3 className="is-h3 font-normal text-gray-900">
              Conheça a historia do Sr. ...
            </h3>
          </div>

          <div className="mt-6 flex flex-col gap-6">
            <p>
              A CRISGUI Indústria e Serviços dedica-se a criar valor para seus
              clientes, focando na redução de custos e aumento de eficiência
              operacional. Desenvolvemos produtos personalizados para diversos
              setores.A CRISGUI Indústria e Serviços dedica-se a criar valor
              para seus clientes, focando na redução de custos e aumento de
              eficiência operacional. Desenvolvemos produtos personalizados para
              diversos setores.
            </p>

            <p>
              A CRISGUI Indústria e Serviços dedica-se a criar valor para seus
              clientes, focando na redução de custos e aumento de eficiência
              operacional. Desenvolvemos produtos personalizados para diversos
              setores.A CRISGUI Indústria e Serviços dedica-se a criar valor
              para seus clientes, focando na redução de custos e aumento de
              eficiência operacional. Desenvolvemos produtos personalizados para
              diversos setores.
            </p>

            <Link
              className="flex gap-4 items-center is-xmedium font-bold text-gray-500 no-underline"
              href="#"
              aria-label="Ir para a página com as assinaturas dos filhos"
            >
              Assinatura dos filhos aqui
            </Link>
          </div>
        </div>

        <Image
          className="hidden sm:block w-full sm:w-1/2"
          src={FounderSVG}
          alt="Foto do Fundador da CRISGUI"
        />
      </div>
    </div>
  );
}
