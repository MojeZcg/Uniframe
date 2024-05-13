"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

const WAIT_BETWEEN_CHANGE = 350;

export default function Search({
  placeholder,
}: Readonly<{ placeholder: string }>) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [focus, setFocus] = useState(false);
  const { replace } = useRouter();

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

  return (
    <form
      className={`${pathname == "/store" && "hidden"} flex w-full items-center justify-end overflow-hidden rounded-2xl border border-transparent`}
    >
      <input
        onChange={(e) => handleSearch(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        defaultValue={searchParams.get("q")?.toString()}
        placeholder={placeholder}
        className=" z-50 h-full w-full rounded-xl border-2 border-neutral-900 px-4 py-2 font-normal  focus:ring-red-200 2xl:text-2xl"
      />
      <button type="submit" className="fixed z-50 px-3 ">
        {focus && <MagnifyingGlassIcon className=" h-6 w-6" />}
      </button>
    </form>
  );
}
