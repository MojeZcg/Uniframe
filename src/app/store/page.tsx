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
    <div className=" bg-main-dark flex h-auto w-full justify-between  pt-6 ">
      <div className="ml-3 w-[18rem] 2xl:w-[30rem]">
        <h3 className=" text-2xl ">Filtros</h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Precio</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Materiales</AccordionTrigger>
            <AccordionContent className="flex flex-col">
              {materials.map((material) => (
                <div
                  key={material.id}
                  className="flex items-center gap-2 py-1.5"
                >
                  <Checkbox id={material.slug} className="h-5 w-5 rounded-lg" />
                  <Label htmlFor={material.slug}>{material.name}</Label>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Envio</AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center gap-2 ">
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode">Airplane Mode</Label>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className=" w-[calc(100vw-18rem)]">
        <div className=" bg-main-dark flex flex-wrap items-center justify-center gap-x-4 gap-y-3  ">
          {loading && <ProductsSkeleton timesSkeleton={9} />}
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
                  <PaginationLink href="#" isActive className="text-black">
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
  );
}
