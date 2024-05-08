"use client";
import { Bars3Icon, ShoppingCartIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RouteList() {
  const pathName = usePathname();

  const routes = [
    { name: "Inicio", path: "/", current: pathName == "/" },
    { name: "Tienda", path: "/store", current: pathName == "/store" },
    { name: "Nosotros", path: "/about", current: pathName == "/about" },
    { name: "Contactanos", path: "/contact", current: pathName == "/contact" },
  ];

  return (
    <ul className=" flex gap-6 px-4 text-lg font-medium md:pl-0 xl:gap-6 2xl:gap-12 2xl:text-2xl ">
      <li className="flex w-full items-center gap-6 pl-24 md:hidden md:w-auto ">
        <ShoppingCartIcon className="h-7 w-7" />
        <Bars3Icon className="h-9 w-9" />
      </li>
      {routes.map((route) => (
        <li
          key={route.name}
          className={` hidden items-center md:flex  ${route.current && " underline decoration-black decoration-2 underline-offset-4"}`}
        >
          <Link href={route.path}>{route.name}</Link>
        </li>
      ))}
    </ul>
  );
}
