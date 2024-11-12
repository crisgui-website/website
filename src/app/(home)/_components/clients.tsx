"use client";

import {
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
  Logo7,
  Logo8,
  Logo9,
} from "../../../assets/clients";
import Image from "next/image";

const clients: Record<
  number,
  {
    src: any;
    alt: string;
  }
> = {
  1: {
    src: Logo1,
    alt: "Logo Vale",
  },
  2: {
    src: Logo2,
    alt: "Logo ArcelorMittal",
  },
  3: {
    src: Logo3,
    alt: "Logo AngloAmerican",
  },
  4: {
    src: Logo4,
    alt: "Logo CNS",
  },
  5: {
    src: Logo5,
    alt: "Logo InterCement",
  },
  6: {
    src: Logo6,
    alt: "Logo Vallourec And Mannesmann Tubes",
  },
  7: {
    src: Logo7,
    alt: "Logo Nucor",
  },
  8: {
    src: Logo8,
    alt: "Logo Nucor",
  },
  9: {
    src: Logo9,
    alt: "Logo Nucor",
  },
};

export function Clients() {
  return (
    <div className="max-w-screen-xl m-auto w-full py-8 px-4 sm:px-0">
      <div className="hidden lg:flex justify-center items-center gap-6">
        {Array.from({ length: 7 }).map((_, index) => (
          <div key={index} className="relative flex items-center">
            <Image
              src={clients[index + 1].src}
              alt={clients[index + 1].alt}
              className="mx-4 max-w-[150px] sm:max-w-[200px]"
            />
            {index !== 6 && (
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 h-8 border-r border-gray-300"></div>
            )}
          </div>
        ))}
      </div>
      <div className="flex lg:hidden overflow-x-auto whitespace-nowrap py-4 scrollbar-hide">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="inline-flex items-center mx-2">
            <Image
              src={clients[index + 1].src}
              alt={clients[index + 1].alt}
              className="max-w-[150px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
