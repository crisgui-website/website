"use client";

import Image from "next/image";

import Pead from '@/assets/pead.svg'

const data: Record<
  number,
  {
    title: string;
    description: string;
  }
> = {
  1: {
    title: "Alta Durabilidade",
    description: "Supera o aço em resistência à abrasão, suportando ambientes agressivos.",
  },
  2: {
    title: "Leveza",
    description: "Cerca de 40% mais leve que roletes convencionais, facilitando a instalação e reduzindo o esforço sobre o transportador.",
  },
  3: {
    title: "Baixo Atrito e Ruído",
    description: "Opera com baixo coeficiente de atrito e baixo nível de ruído, proporcionando uma experiência mais silenciosa e eficiente.",
  },
  4: {
    title: "Resistência Química e ao Impacto",
    description: "Imune a contaminações químicas e a danos causados por impactos, ideal para ambientes industriais.",
  },
  5: {
    title: "Vedação Patenteada",
    description: "Exclusiva vedação em PEAD e Nylon que protege contra lama, abrasividade e corrosão atmosférica.",
  },
};

export function PeadProduct() {
  return (
    <div className="max-w-screen-xl m-auto w-full my-14 px-6 sm:px-0">

      <div className="space-y-6 mb-14">
        <h6 className="font-normal text-gray-500 is-h6">Produtos CRISGUI</h6>
        <h3 className="font-normal text-gray-900 is-h3">Rolete de PEAD Crisgui</h3>
        <h6 className="font-normal text-gray-500 is-h6">A solução eficiente em polietileno para ambientes de alta abrasão e corrosão</h6>
      </div>


      <div className="container grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 justify-between">
        <div className="section-content sm:w-[90%]">
          <p className="font-medium text-gray-500 is-medium mb-8">Desenvolvido com tecnologia avançada, o Rolete de PEAD Crisgui é fabricado em polietileno de alta densidade (PEAD), ideal para transportadores de correia que operam em condições severas. Este produto oferece durabilidade excepcional e alta resistência, com uma performance comprovada em ambientes desafiadores como mineração, salineiras e portos. É até 10 vezes mais durável que roletes convencionais de aço, garantindo maior tempo de operação e menos manutenções.</p>

          <p className="font-medium text-gray-900 is-xmedium">Aplicação</p>

          <p className="font-medium text-gray-500 is-medium">O Rolete de PEAD Crisgui já foi adotado por grandes nomes do setor, como a Vale, onde está em uso contínuo há mais de 7 anos em minas como Fábrica, Água Limpa e Gongo Soco. Ele é indicado especialmente para ambientes com alta presença de corrosão e abrasão, como:</p>

          <ul className="font-medium text-gray-500 is-medium list-disc px-5 pt-2">
            <li>Mineração de Ferro e Fosfato </li>
            <li>Indústrias de Celulose</li>
            <li>Usinas de Açúcar e Álcool</li>
            <li>Salineiras</li>
          </ul>
        </div>

        <Image src={Pead} alt="Rolete de PEAD" />

        <div className="section-data sm:w-[90%]">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index}>
              <p className="font-medium text-orange-400 is-xmedium">{data[index + 1].title}</p>
              <p className="font-medium text-gray-500 is-small">{data[index + 1].description}</p>
              {index + 1 !== 5 && <hr className="w-full h-[1px] bg-blue-100 my-6" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
