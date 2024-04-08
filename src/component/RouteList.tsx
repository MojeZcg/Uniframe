"use client";
import { ShoppingCartIcon, Bars3Icon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RouteList() {
  const pathName = usePathname();

  const routes = [
    { name: "Inicio", path: "/", current: pathName == "/" },
    { name: "Tienda", path: "/store", current: pathName == "/store" },
    { name: "Precios", path: "/prices", current: pathName == "/prices" },
    { name: "Contactanos", path: "/contact", current: pathName == "/contact" },
  ];

  return (
    <ul className="flex gap-6 px-4 2xl:gap-12">
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
