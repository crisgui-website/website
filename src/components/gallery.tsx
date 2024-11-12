import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

export function Gallery() {
  const imageNumbers = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <div className="mt-8 sm:mt-32 bg-orange-400">
      <div className="max-w-screen-xl m-auto mx-4 sm:mx-auto py-8 sm:py-32 flex flex-col sm:gap-16 relative">
        <div className="space-y-6">
          <h6 className="is-h6 font-normal text-orange-100">
            Conheça a CRISGUI
          </h6>
          <h1 className="w-full sm:w-3/6 is-h3 font-normal text-gray-0">
            Conheça um pouco das nossas instalações e dia a dia
          </h1>
        </div>

        <Carousel className="w-full pt-32 sm:pt-0">
          <CarouselContent>
            {imageNumbers.map((num) => (
              <CarouselItem key={num} className="basis-3/4">
                <Image
                  src={`/images/carousel/img-${num}.svg`}
                  alt={`Imagem ${num}`}
                  layout="responsive"
                  width={300}
                  height={50}
                />
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
