import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";

import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

import RouteList from "@/component/RouteList";
import Search from "@/component/layout/Search";

const font = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Uniframe",
  description: "Empresa de cuadros nacida en Mendoza, Argentina",
};

const WHATSAPP_URL =
  "https://wa.me/542614995742?text=Hola%2C%20estoy%20interesado%20en%20los%20productos%20que%20ofrece%20UniFrame.%20%C2%BFPodr%C3%ADan%20proporcionarme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20productos%3F%20%C2%A1Gracias%21";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMenuOpen = false;

  const routes = [
    { name: "Inicio", path: "/", current: true },
    { name: "Tienda", path: "/store", current: false },
    { name: "Contactanos", path: "/contact", current: false },
    { name: "Nosotros", path: "/about", current: false },
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
        <nav className=" z-50 w-full items-center bg-neutral-50 ">
          <div className=" flex justify-between   ">
            <div className="flex items-center justify-center gap-6 py-4 pl-6 2xl:py-5 2xl:text-xl">
              <Link className="flex gap-1  2xl:hidden " href="/">
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
              <div className=" font-medium 2xl:text-2xl">
                <RouteList />
              </div>
            </div>
            <div className="flex w-1/2 items-center justify-center gap-8 pl-5 pr-16 2xl:w-6/12">
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
        <footer className=" flex h-[20rem] w-full flex-col bg-main-dark px-12 text-white md:h-64 md:flex-row  md:py-4">
          <div className="w-30 flex max-w-md flex-col items-start justify-between gap-5 overflow-hidden py-3 md:py-5 ">
            <h1 className=" line-clamp-4 text-2xl md:text-3xl ">
              TRANSFORMANDO ESPACIOS, ENMARCANDO MOMENTOS.
            </h1>
            <Link className=" flex items-center justify-center" href="/">
              <Image
                src="/square-white.svg"
                alt="Uniframe Logo"
                className="aspect-square"
                width={45}
                height={45}
              />
              <strong className="ml-2 text-xl md:text-lg">Uniframe</strong>
            </Link>
          </div>

          <div className="flex items-start justify-center gap-10 md:px-10 md:pb-10 md:pt-5">
            <ul className="flex flex-col gap-1 text-sm md:text-base">
              <label htmlFor="Pages" className="pb-4 text-lg font-semibold">
                CONTACTANOS
              </label>
              {socials.map((route) => (
                <li
                  key={route.name}
                  className="flex items-center gap-[0.20rem] transition-all duration-200 ease-in-out hover:gap-2"
                >
                  <route.icon className="h-5 w-5 pr-1" />
                  <Link href={route.path}>{route.name}</Link>
                  <ArrowUpRightIcon className="h-3 w-3" />
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-1 text-sm md:text-base">
              <label htmlFor="Pages" className="pb-4 text-lg font-semibold">
                UNIFRAME
              </label>
              {routes.map((route) => (
                <li key={route.name} className="flex items-center gap-2">
                  <Link href={route.path}>{route.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
