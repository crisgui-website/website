import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

export function Collaborators() {
  const imageNumbers = Array.from({ length: 3 }, (_, i) => i + 1);

  const collaboratorsInfo: Record<
    number,
    {
      name: string;
      position: string;
      link: string;
    }
  > = {
    1: {
      name: "Luciano Nogueira",
      position: "Diretor Executivo",
      link: "",
    },
    2: {
      name: "Guilherme Orzil",
      position: "Diretor Industrial",
      link: "",
    },
    3: {
      name: "Cristiana Orzil",
      position: "Diretora Comercial",
      link: "",
    },
  };

  return (
    <div className="mt-8 sm:mt-20 bg-orange-400">
      <div className="max-w-screen-xl m-auto mx-4 sm:mx-auto py-14 sm:py-30 flex flex-col sm:gap-16 relative">
        <div className="space-y-6">
          <h6 className="is-h6 font-normal text-orange-100">Líderes CRISGUI</h6>
          <h1 className="w-full sm:w-3/6 is-h3 font-normal text-gray-0">
            Conheça as pessoas que lideram a CRISGUI todos os dias
          </h1>
        </div>

        <Carousel className="w-full pt-32 pb-14 sm:pt-0 sm:pb-0">
          <CarouselContent>
            {imageNumbers.map((num) => (
              <CarouselItem
                key={num}
                className="basis-3/4 sm:basis-5/12 relative"
              >
                <Image
                  src={`/images/collaborators/img-${num}.png`}
                  alt={`Imagem ${num}`}
                  layout="responsive"
                  width={0}
                  height={0}
                  className="rounded-2xl"
                />
                <div className="flex w-[100%] px-9 justify-between absolute bottom-4 items-end">
                  <div>
                    <h4 className="is-h4 font-normal text-gray-0">
                      {collaboratorsInfo[num].name}
                    </h4>
                    <p className="is-xmedium text-gray-100 font-medium">
                      {collaboratorsInfo[num].position}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute w-10 -top-24 right-10 hidden sm:flex">
            <CarouselPrevious className="w-16 h-16 bg-white border border-gray-0 rounded-full text-gray-0" />
            <CarouselNext className="w-16 h-16 bg-white border border-gray-0 rounded-full text-gray-0" />
          </div>

          <div className="absolute w-10 left-12 top-14 flex sm:hidden">
            <CarouselPrevious className="w-16 h-16 bg-white border border-gray-0 rounded-full text-gray-0" />
            <CarouselNext className="w-16 h-16 bg-white border border-gray-0 rounded-full text-gray-0" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
