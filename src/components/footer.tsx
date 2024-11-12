"use client";
import Link from "next/link";
import LogoSVG from "../assets/logo-2.svg";
import FooterVectorSVG from "../assets/footer-vector.svg";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  MoveRight,
  Youtube,
} from "lucide-react";
import { ReactNode } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const links: Record<
  number,
  {
    href: string;
    label: string;
  }
> = {
  1: {
    href: "#",
    label: "Home",
  },
  2: {
    href: "/empresa",
    label: "Sobre Nós",
  },
  3: {
    href: "/produtos",
    label: "Produtos",
  },
  4: {
    href: "/orcamento",
    label: "Orçamento",
  },
  5: {
    href: "/contato",
    label: "Contato",
  },
};

const socialMedias: Record<
  number,
  {
    href: string;
    label: ReactNode;
  }
> = {
  1: {
    href: "#",
    label: <Linkedin />,
  },
  2: {
    href: "#",
    label: <Facebook />,
  },
  3: {
    href: "#",
    label: <Instagram />,
  },
  4: {
    href: "#",
    label: <Youtube />,
  },
};

export function Footer() {
  const router = useRouter();

  return (
    <footer className="w-full bg-orange-50">
      <div className="max-w-screen-xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8 relative">
        <Image
          src={FooterVectorSVG}
          alt="Vetor imagem"
          className="absolute top-0 right-0 hidden sm:block"
          style={{ width: "50%", height: "auto" }}
        />
        <div className="flex flex-col sm:flex-row justify-between items-center mb-14 gap-8">
          <div className="flex flex-col gap-6 text-left">
            <h3 className="is-h3 font-normal text-gray-900">
              Pronto para Elevar
              <br /> <span className="text-orange-500">Sua Eficiência?</span>
            </h3>

            <p className="is-small font-medium text-gray-700">
              Entre em contato com a Crisgui e descubra como nossas soluções
              <br />
              personalizadas podem transformar suas operações industriais.
            </p>
          </div>

          <Button
            className="bg-orange-500 w-full sm:w-80 h-16 rounded-2xl is-xmedium text-white-100 flex items-center justify-center gap-4 relative z-10"
            type="button"
            onClick={() => router.push("/contato")}
          >
            Entre em contato conosco
            <MoveRight />
          </Button>
        </div>

        <hr className="mb-14 border-gray-300" />

        <div className="flex flex-col sm:flex-row justify-between gap-8">
          <Link href="#" className="flex" prefetch={false}>
            <Image src={LogoSVG} alt="Logo CrisGui" className="w-32 h-auto" />
          </Link>
          <nav className="flex flex-wrap gap-6 sm:gap-8 text-gray-900 font-medium">
            {Array.from({ length: 5 }).map((_, index) => (
              <Link
                key={index}
                href={links[index + 1].href}
                aria-label={`Ir para a página ${links[index + 1].label}`}
                className="hover:text-orange-500"
              >
                {links[index + 1].label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-4 text-gray-900">
            {Array.from({ length: 4 }).map((_, index) => (
              <Link
                key={index}
                href={socialMedias[index + 1].href}
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-opacity-25 border-gray-900 text-orange-500 hover:bg-gray-200"
                aria-label={`Ir para ${socialMedias[index + 1].label}`}
              >
                {socialMedias[index + 1].label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
