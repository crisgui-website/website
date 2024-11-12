import { Card, CardFooter } from "@/components/ui/card";
import { MoveRight } from "lucide-react";
import Link from "next/link";

interface MainProductsCardProps {
  width: "w-full sm:w-3/5" | "w-full sm:w-2/5";
  title: string;
  type: string;
  img: string;
}

export function CardMainProducts({
  width,
  title,
  type,
  img,
}: MainProductsCardProps) {
  return (
    <Card
      className={`${width} h-80 flex flex-col justify-between relative ${img} bg-no-repeat bg-cover border-none`}
    >
      <div className="flex-grow"></div>
      <CardFooter className="w-full flex items-center justify-between relative">
        <h3 className="text-lg sm:text-xl lg:text-2xl text-gray-0 font-normal">
          {title}
        </h3>
        <div className="absolute right-5 bottom-5 flex items-center justify-center">
          <Link
            href={{
              pathname: "/produtos",
              query: {
                product: type.split("/")[0],
                subProduct: type.split("/")[1],
              },
            }}
            className="w-[72px] h-14 bg-transparent border border-gray-0 rounded-3xl flex items-center justify-center"
            aria-label="Ir para a página do produto"
          >
            <MoveRight className="text-gray-0 w-6 h-6" />
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
