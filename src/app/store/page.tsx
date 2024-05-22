"use client";
import ProductsSkeleton from "@/components/skeletons/ProductsSkeleton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import { Product } from "../../lib/types";
import ProductCard from "@/components/layout/ProductCard";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Search from "@/components/layout/Search";
import { FiPackage } from "react-icons/fi";

export default function Store() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/api/products/");
      if (res) {
        const data = await res.json();
        if (data) setProducts(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const materials = [
    { id: 1, slug: "wood", name: "Madera" },
    { id: 2, slug: "stainless", name: "Acero Inoxidable" },
    { id: 3, slug: "steel", name: "Acero" },
  ];

  return (
    <div>
      <div className="">
        <div className="flex items-center justify-between pt-4">
          <h1 className="pl-6 text-3xl font-semibold">MARCOS</h1>
          <div className="mr-4 w-[48%] text-black">
            <Search placeholder="" />
          </div>
        </div>

        <Separator className=" mb-5 mt-4 h-0.5 w-full bg-white" />
      </div>

      <div className=" flex h-auto w-full justify-between  ">
        <div className="ml-3 w-[16rem] 2xl:w-[30rem]">
          <h3 className=" text-2xl ">Filtros</h3>
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="price">
              <AccordionTrigger>Precio</AccordionTrigger>
              <AccordionContent></AccordionContent>
            </AccordionItem>
            <AccordionItem value="meterials">
              <AccordionTrigger>Materiales</AccordionTrigger>
              <AccordionContent className="flex flex-col">
                {materials.map((material) => (
                  <div
                    key={material.id}
                    className="flex items-center gap-2 py-1.5"
                  >
                    <Checkbox
                      id={material.slug}
                      className="h-5 w-5 rounded-lg"
                    />
                    <Label htmlFor={material.slug}>{material.name}</Label>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Envio</AccordionTrigger>
              <AccordionContent>
                <div className="flex items-center gap-1.5 py-1">
                  <div className="flex items-center gap-2">
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode" className="">
                      Envio Gratis
                    </Label>
                  </div>
                  <FiPackage className="h-5 w-5 text-green-600" />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className=" w-[calc(100vw-18rem)]">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3   ">
            {loading && <ProductsSkeleton timesSkeleton={5} />}
            {products?.map((p: Product) => (
              <ProductCard key={p.product_id} product={p} />
            ))}
          </div>
          <div className="mt-10 flex w-full items-center justify-end pr-10">
            <div className=" pr-5 ">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
