"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { useDebouncedCallback } from "use-debounce";

const WAIT_BETWEEN_CHANGE = 600;

export default function Search({
  placeholder,
}: Readonly<{ placeholder: string }>) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const { replace } = useRouter();

  const [focus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null); // Crear una referencia para el campo de entrada

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }

    if (term !== "") {
      replace(`/store?${params.toString()}`);
    } else {
      replace(`${pathname}`);
    }
  }, WAIT_BETWEEN_CHANGE);

  useEffect(() => {
    if (pathname === "/store" && inputRef.current) {
      inputRef.current.focus(); // Enfocar el campo de entrada
    }
  }, [pathname]); // Ejecutar el efecto cuando el pathname cambia

  return (
    <form className="flex w-full items-center justify-end overflow-hidden rounded-lg">
      <Input
        id="input"
        ref={inputRef}
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        defaultValue={searchParams.get("q")?.toString()}
        placeholder={placeholder}
        className=" z-50 h-full w-full rounded-lg bg-white px-3 py-2 text-base font-normal text-black 2xl:text-2xl "
      />
      <button type="submit" className="fixed z-50 px-3 text-black">
        {(focus || pathname === "/store") && (
          <MagnifyingGlassIcon className=" h-6 w-6" />
        )}
      </button>
    </form>
  );
}
