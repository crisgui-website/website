import Link from "next/link";

interface IHero {
  pathname: string;
  bg: string;
}

export function Hero({ pathname, bg }: IHero) {
  return (
    <div className={`${bg} bg-no-repeat bg-cover`}>
      <div className="max-w-screen-xl m-auto pt-24 pb-12 sm:pt-36 sm:pb-20 md:pt-44 md:pb-24 flex flex-col justify-center gap-6 sm:gap-8 md:gap-10 px-4">
        <div className="bg-gray-0 bg-opacity-20 w-36 sm:w-44 h-9 sm:h-11 flex justify-center items-center rounded-3xl">
          <p className="is-medium text-gray-0 text-sm sm:text-base">
            Artefatos de aço
          </p>
        </div>

        <div className="text-5xl sm:text-6xl md:text-[104px] font-sora text-gray-0 leading-none">
          <div className="font-extralight">
            {pathname === "produtos" ? "Conheça nossos" : "Excelência em"}
          </div>
          <div className="font-semibold">
            {pathname === "produtos" ? "melhores produtos" : "movimento"}
          </div>
        </div>

        {pathname === "home" && (
          <div className="flex flex-col gap-4 sm:flex-row items-center">
            <Link
              href="/produtos"
              className="inline-flex w-full sm:w-[277px] h-14 sm:h-16 items-center justify-center rounded-2xl bg-orange-500 is-xmedium text-gray-0 shadow-sm transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
              aria-label="Ir para a página de produtos"
            >
              Conheça Nossos Produtos
            </Link>
            <Link
              href="/orcamento"
              className="inline-flex w-full sm:w-[277px] h-14 sm:h-16 items-center justify-center rounded-2xl bg-transparent border border-gray-0 is-xmedium text-gray-0 transition-colors hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
              aria-label="Ir para a página de contato"
            >
              Orçamento com um vendedor
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
