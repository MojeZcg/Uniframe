"use client";
import Search from "./Search";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function LayoutSearch() {
  const pathname = usePathname();
  return pathname != "/store" ? (
    <Search placeholder="Busca productos, materiales y más..." />
  ) : (
    <div>
      <Avatar>
        <AvatarImage src="https://github.com/MojeZcg.png" />
        <AvatarFallback>WM</AvatarFallback>
      </Avatar>
    </div>
  );
}
