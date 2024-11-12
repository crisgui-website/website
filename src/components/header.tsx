"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import LogoSVG from "../assets/logo.svg";
import Logo2SVG from "../assets/logo-2.svg";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const links: Record<
  number,
  {
    href: string;
    label: string;
  }
> = {
  1: { href: "/", label: "Home" },
  2: { href: "/empresa", label: "Sobre Nós" },
  3: { href: "/produtos", label: "Produtos" },
  4: { href: "/orcamento", label: "Orçamento" },
  5: { href: "/contato", label: "Contato" },
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const pathsToCheck = ["/produtos/", "/contato"];
  const isNormalHeader = pathsToCheck.some((path) => pathname.includes(path));

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname.includes(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`${
        isNormalHeader ? "" : "fixed top-0 left-0 z-50"
      } w-full h-20 ${
        isScrolled && !isNormalHeader ? "bg-gray-700" : "bg-transparent"
      } transition-colors duration-300`}
    >
      <div className="max-w-screen-xl mx-auto h-full flex items-center justify-between px-4">
        <Link
          href="#"
          className="flex items-center"
          prefetch={false}
          aria-label="Ir para a página inicial"
        >
          <Image src={isNormalHeader ? Logo2SVG : LogoSVG} alt="Logo CrisGui" />
        </Link>
        <nav className="hidden md:flex items-center space-x-4 sm:space-x-6">
          {Object.keys(links).map((key) => (
            <Link
              key={key}
              href={links[parseInt(key)].href}
              aria-label={`Ir para a página ${links[parseInt(key)].label}`}
              className={`relative text-${
                isNormalHeader ? "gray-900" : "gray-0"
              } is-xmedium ${
                isActiveLink(links[parseInt(key)].href)
                  ? isNormalHeader
                    ? "active-link-gray-900"
                    : "active-link-gray-0"
                  : ""
              }`}
            >
              {links[parseInt(key)].label}
            </Link>
          ))}
          <Button
            className="bg-orange-500 is-medium text-gray-0 rounded-3xl"
            type="button"
            onClick={() => router.push("/contato")}
          >
            Chame a gente
          </Button>
        </nav>
        <button
          type="button"
          onClick={toggleMenu}
          className="md:hidden text-gray-0 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke={isNormalHeader ? "black" : "currentColor"}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={`fixed inset-0 bg-gray-700 bg-opacity-75 transition-transform duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        onClick={toggleMenu}
      >
        <nav
          className="fixed right-0 top-0 h-full w-64 bg-gray-800 p-8 space-y-4"
          onClick={(e) => e.stopPropagation()}
        >
          {Object.keys(links).map((key) => (
            <Link
              key={key}
              href={links[parseInt(key)].href}
              aria-label={`Ir para a página ${links[parseInt(key)].label}`}
              className={`block text-gray-0 is-xmedium ${
                isActiveLink(links[parseInt(key)].href)
                  ? "active-link-gray-0"
                  : ""
              }`}
              onClick={toggleMenu}
            >
              {links[parseInt(key)].label}
            </Link>
          ))}
          <Button
            className="bg-orange-500 is-medium text-gray-0 rounded-3xl w-full"
            type="button"
            onClick={() => router.push("/contato")}
          >
            Chame a gente
          </Button>
        </nav>
      </div>
    </header>
  );
}
