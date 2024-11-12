import Image from "next/image";

import QuotSVG from "../../../assets/quot.svg";

export function Frase() {
  return (
    <div className="max-w-screen-xl m-auto mx-4 sm:mx-auto my-10 sm:my-36 flex flex-col sm:flex-row sm:space-x-20">
      <div>
        <Image src={QuotSVG} alt="Aspas" className="w-24 sm:w-full" />
      </div>
      <div className="flex flex-col mt-8 sm:mt-0">
        <h6 className="is-h6 font-normal text-gray-500 mb-6 text-left sm:text-left">
          Sobre a CRISGUI
        </h6>
        <h2 className="is-h2 font-normal text-gray-900 text-left sm:text-left">
          A experiência acumulada ao longo do tempo nos permitiu estabelecer uma base sólida e criar soluções inovadoras e eficientes
        </h2>
      </div>
    </div>
  );
}
