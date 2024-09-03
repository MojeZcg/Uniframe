import "./globals.css";
import * as React from "react";

import { Routes, Socials } from "@/lib/data";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";

import RouteList from "@/components/RouteList";
import LayoutSearch from "@/components/layout/LayoutSearch";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const font = Open_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Uniframe",
  description: "Empresa de cuadros nacida en Mendoza, Argentina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMenuOpen = false;

  const isLogin = false;

  return (
    <html lang="es" className="dark">
      <body className={`${font.className}`}>
        <nav className=" z-50 w-full items-center bg-neutral-50">
          <div className=" flex justify-between">
            <div className="flex items-center justify-center gap-6 py-4 pl-6 2xl:py-5 2xl:text-xl">
              <Link className=" flex h-12 pr-4 2xl:hidden " href="/">
                <Image
                  src="/square.svg"
                  alt="Uniframe Logo"
                  className="p-1"
                  width={45}
                  height={45}
                />
                <Image
                  src="/uniframe-cut.png"
                  alt="Uniframe Logo"
                  className="px-1.5 py-3"
                  width={160}
                  height={30}
                />
              </Link>
              <Link className="hidden h-14 gap-1 px-2 2xl:flex" href="/">
                <Image
                  src="/square.svg"
                  alt="Uniframe Logo"
                  className="p-1"
                  width={65}
                  height={83}
                />
                <Image
                  src="/uniframe-cut.png"
                  alt="Uniframe Logo"
                  className="py-3.5 pr-10"
                  width={220}
                  height={30}
                />
              </Link>
              <RouteList />
            </div>
            <div className="hidden w-[40%] items-center justify-end gap-0 pr-6 md:flex xl:w-[52%] xl:pl-5">
              <LayoutSearch />
              {isLogin ? (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button>
                      <div className="mr-2.5 flex flex-col items-end justify-end">
                        <strong className=" text-base">Carrito</strong>
                        <h4 className="text-xs">$300</h4>
                      </div>
                      <ShoppingCartIcon className="h-7 w-7 text-black 2xl:h-9 2xl:w-9" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className=" sticky mr-10 w-80 rounded-lg border border-neutral-700 bg-neutral-950 text-black">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">Carrito</h4>
                      </div>
                    </div>
                    <div className="mt-2 flex w-full items-center justify-center  ">
                      <Separator className="w-full bg-black pt-0.5" />
                    </div>
                    <div className="w-full py-2">
                      <Button className="h-9">Hola</Button>
                    </div>
                  </PopoverContent>
                </Popover>
              ) : (
                <Button
                  variant="outline"
                  asChild
                  className="ml-4 bg-neutral-950 px-6 hover:bg-neutral-200 hover:text-black"
                >
                  <Link href="/login">Login / Sign in</Link>
                </Button>
              )}
            </div>
          </div>

          {isMenuOpen && <div></div>}
        </nav>

        {children}

        <footer className=" bg-main-dark flex h-[20rem] w-full flex-col justify-start px-6 text-white md:h-52 md:flex-row md:pt-4">
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
              {Socials.map((route) => (
                <li key={route.name} className="flex items-center gap-1.5 ">
                  <route.icon className="h-5 w-5 pr-1" />
                  <div className="flex items-center gap-1 transition-all duration-200 ease-in-out hover:pl-2">
                    <Link target="_blank" href={route.link}>
                      {route.name}
                    </Link>
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
              {Routes.map((route) => (
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
        <div className="flex w-full items-end justify-between self-end px-6 ">
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
        </div>
        <div className="flex w-full justify-end pb-3">
          <p className="pr-8 text-sm text-neutral-500">
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
      </body>
    </html>
  );
}
