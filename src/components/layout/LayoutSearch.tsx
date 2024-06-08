"use client";
import Search from "./Search";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function LayoutSearch() {
  const pathname = usePathname();
  return pathname != "/store" ? (
    <Search placeholder="Busca productos, materiales y más..." />
  ) : (
    <div className="flex items-center gap-3 pr-4 text-black">
      <Avatar>
        <AvatarImage src="https://github.com/MojeZcg.png" />
        <AvatarFallback className="bg-neutral-300">WM</AvatarFallback>
      </Avatar>
      <div>
        <h3>Hola, Walter!</h3>
        <h4 className="max-w-48 truncate text-xs">
          walterfotodigital101@gmail.com
        </h4>
      </div>
    </div>
  );
}
