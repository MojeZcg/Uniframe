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
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import { Product } from "../../lib/types";
import ProductCard from "@/components/layout/ProductCard";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Search from "@/components/layout/Search";
import { FiPackage } from "react-icons/fi";
import { ChevronDown } from "lucide-react";

type PaginationType = {
  currentPage: number;
  PageSize: number;
  totalCount: number;
  totalPages: number;
};

type Filter = {
  order: string;
  order_name: string;
  price: number[];
  materials: string;
};

export default function Store() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [pagination, setPagination] = useState<PaginationType>({
    currentPage: 0,
    PageSize: 0,
    totalCount: 0,
    totalPages: 0,
  });

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filters, setFilters] = useState<Filter>({
    order: "none",
    order_name: "Mas Relevantes",
    price: [0, 50],
    materials: "",
  });

  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `http://localhost:3000/api/products?p=${currentPage}&o=${filters.order}`,
      );
      if (res) {
        const data = await res.json();
        if (data.products) setProducts(data.products);
        if (data.pagination) setPagination(data.pagination);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [currentPage, filters]);

  function createArray(size: number) {
    const result = [];
    for (let i = 1; i <= size; i++) {
      const id = i;
      result.push({ id });
    }
    return result;
  }

  const Pages = createArray(pagination.totalPages);

  const materials = [
    { id: 1, slug: "wood", name: "Madera" },
    { id: 2, slug: "stainless", name: "Acero Inoxidable" },
    { id: 3, slug: "steel", name: "Acero" },
  ];

  const order = [
    { id: "none", name: "Mas Relevantes" },
    { id: "asc", name: "Menor Precio" },
    { id: "desc", name: "Mayor Precio" },
  ];

  return (
    <div>
      <div className="">
        <div className="flex items-center justify-between pt-4">
          <div className="flex w-1/2 items-center justify-between">
            <h1 className="pl-6 text-3xl font-semibold ">MARCOS</h1>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Label
                  htmlFor="Order Filter"
                  className="flex items-center justify-center gap-0.5 text-sm"
                >
                  Ordenar
                  <ChevronDown className="h-5 w-5" />
                </Label>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-52">
                <DropdownMenuLabel className="text-neutral-300">
                  {filters.order_name}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                {order.map((ord) => (
                  <DropdownMenuCheckboxItem
                    key={ord.id}
                    onClick={() =>
                      setFilters({
                        ...filters,
                        order: ord.id,
                        order_name: ord.name,
                      })
                    }
                  >
                    {ord.name}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="w-[48%] pr-8 text-black">
            <Search placeholder="Busca productos, materiales y más..." />
          </div>
        </div>

        <Separator className=" mb-5 mt-4 h-0.5 w-full bg-white" />
      </div>

      <div className=" flex h-auto w-full justify-between  ">
        <div className="ml-3 w-[16rem] 2xl:w-[20rem]">
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
                    onClick={() =>
                      setFilters({ ...filters, materials: material.slug })
                    }
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
        <div className=" w-[calc(100vw-16rem)] 2xl:w-[calc(100vw-20rem)]">
          <div className="flex flex-wrap items-center justify-start gap-x-4 gap-y-3 pl-10 2xl:pl-8   ">
            {loading && <ProductsSkeleton timesSkeleton={6} />}
            {products?.map((p: Product) => (
              <ProductCard key={p.product_id} product={p} />
            ))}
          </div>
          <div className="mt-10 flex w-full items-center justify-end pr-10">
            <div className=" pr-5 ">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={() => setCurrentPage(currentPage - 1)}
                    />
                  </PaginationItem>
                  {Pages.map((p) => (
                    <PaginationItem key={p.id}>
                      <PaginationLink
                        href="#"
                        onClick={() => setCurrentPage(p.id)}
                        isActive={currentPage == p.id}
                      >
                        {p.id}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={() => setCurrentPage(currentPage + 1)}
                    />
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
