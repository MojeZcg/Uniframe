import "./globals.css";
import * as React from "react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";

import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

import RouteList from "@/component/RouteList";
import Search from "@/component/layout/Search";
import { NextUIProvider } from "@nextui-org/react";

const font = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Uniframe",
  description: "Empresa de cuadros nacida en Mendoza, Argentina",
};

const WHATSAPP_URL =
  "https://wa.me/542614995742?text=Hola%21%2C%20estoy%20interesado%20en%20los%20productos%20que%20ofrece%20Uniframe.%20%C2%BFPodr%C3%ADan%20proporcionarme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20productos%3F";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMenuOpen = false;

  const routes = [
    { name: "Inicio", path: "/" },
    { name: "Tienda", path: "/store" },
    { name: "Contactanos", path: "/contact" },
    { name: "Nosotros", path: "/about" },
  ];

  const socials = [
    { name: "Whatsapp", path: WHATSAPP_URL, icon: FaWhatsapp },
    { name: "Facebook", path: "https://www.facebook.com", icon: FaFacebook },
    {
      name: "Instagram",
      path: "https://www.instagram.com/unifoto.digital/",
      icon: FaInstagram,
    },
  ];

  return (
    <html lang="es">
      <body className={`${font.className}`}>
        <NextUIProvider>
          <nav className=" z-50 w-full items-center bg-neutral-50 ">
            <div className=" flex justify-between">
              <div className="flex items-center justify-center gap-6 py-4 pl-6 2xl:py-5 2xl:text-xl">
                <Link className="flex xl:gap-1 2xl:hidden " href="/">
                  <Image
                    src="/square.svg"
                    alt="Uniframe Logo"
                    className=""
                    width={45}
                    height={45}
                  />
                  <Image
                    src="/uniframe-cut.png"
                    alt="Uniframe Logo"
                    className="px-2 py-3"
                    width={160}
                    height={30}
                  />
                </Link>
                <Link className="hidden gap-1 px-8 2xl:flex " href="/">
                  <Image
                    src="/square.svg"
                    alt="Uniframe Logo"
                    className=""
                    width={65}
                    height={83}
                  />
                  <Image
                    src="/uniframe-cut.png"
                    alt="Uniframe Logo"
                    className="px-2 py-6"
                    width={220}
                    height={25}
                  />
                </Link>
                <div>
                  <RouteList />
                </div>
              </div>
              <div className="hidden w-[40%] items-center justify-end gap-8 pr-16 md:flex xl:w-1/2 xl:pl-5 2xl:w-6/12">
                <Search placeholder="Busca productos, materiales y más..." />
                <ShoppingCartIcon className="h-6 w-6 2xl:h-9 2xl:w-9" />
              </div>
            </div>

            {isMenuOpen && (
              <ul>
                <li></li>
              </ul>
            )}
          </nav>

          {children}

          <footer className=" flex h-[20rem] w-full flex-col justify-start bg-main-dark px-6 text-white md:h-52 md:flex-row md:pt-4">
            <div className="w-30 flex max-w-md flex-col items-start justify-between gap-5 overflow-hidden py-3 md:py-5 ">
              <h1 className=" line-clamp-4 text-2xl md:text-3xl ">
                TRANSFORMANDO ESPACIOS, ENMARCANDO MOMENTOS.
              </h1>
            </div>

            <div className="flex items-start justify-center gap-10 md:px-10 md:pb-10 md:pt-5">
              <ul className="flex flex-col gap-1 text-sm md:text-base">
                <Link
                  href="/contact"
                  className="pb-4 text-lg font-semibold transition-all duration-200 ease-in-out hover:scale-105"
                >
                  CONTACTANOS
                </Link>
                {socials.map((route) => (
                  <li key={route.name} className="flex items-center gap-1.5 ">
                    <route.icon className="h-5 w-5 pr-1" />
                    <div className="flex items-center gap-1 transition-all duration-200 ease-in-out hover:pl-2">
                      <Link href={route.path}>{route.name}</Link>
                      <ArrowUpRightIcon className="h-3 w-3" />
                    </div>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-1 text-sm md:text-base">
                <Link
                  href="/"
                  className="pb-4 text-lg font-semibold transition-all duration-200 ease-in-out hover:scale-105"
                >
                  UNIFRAME
                </Link>
                {routes.map((route) => (
                  <li
                    key={route.name}
                    className="flex items-center gap-2 transition-all duration-100 ease-in-out  hover:pl-1.5"
                  >
                    <Link href={route.path}>{route.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </footer>
          <div className="flex w-full items-end justify-between self-end px-6 pb-4 ">
            <Link className=" flex items-center justify-center" href="/">
              <Image
                src="/square-white.svg"
                alt="Uniframe Logo"
                className="aspect-square"
                width={45}
                height={45}
              />
              <strong className="ml-2 text-xl text-white md:text-lg">
                Uniframe
              </strong>
            </Link>
            <p className="  text-sm text-neutral-500">
              Diseñado y desarrollado por{" "}
              <Link
                className="text-white"
                href="https://www.linkedin.com/in/montenegrowalter/"
              >
                Walter J. Montenegro
              </Link>{" "}
              © 2024
            </p>
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
