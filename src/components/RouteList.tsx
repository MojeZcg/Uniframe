"use client";
import { Routes } from "@/lib/data";
import { Bars3Icon, ShoppingCartIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RouteList() {
  const pathName = usePathname();

  const routes = Routes.map((route) => ({
    ...route,
    current: pathName === route.path,
  }));

  return (
    <ul className=" flex gap-6 px-4 text-lg font-medium md:pl-0 xl:gap-6 2xl:text-2xl ">
      <li className="flex w-full items-center gap-6 pl-24 md:hidden md:w-auto ">
        <ShoppingCartIcon className="h-7 w-7" />
        <Bars3Icon className="h-9 w-9" />
      </li>

      {routes.map((route) => (
        <li
          key={route.name}
          className={` hidden items-center text-black md:flex  ${route.current && " underline decoration-black decoration-2 underline-offset-4"}`}
        >
          <Link href={route.path}>{route.name}</Link>
        </li>
      ))}
    </ul>
  );
}
