"use client";

import { useCallback, useEffect, useState } from "react";
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
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import ProductsSkeleton from "@/components/skeletons/ProductsSkeleton";
import { Product } from "../../lib/types";
import ProductCard from "@/components/layout/ProductCard";
import Search from "@/components/layout/Search";
import { FiPackage } from "react-icons/fi";
import { ChevronDown } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { materials } from "@prisma/client";
import { Button } from "@/components/ui/button";

type PaginationType = {
  currentPage: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
};

type Filter = {
  order: string;
  orderName: string;
  price: number[];
  materials: string;
  cuotes: number;
  freeshipping: boolean;
};

const fetchMaterials = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/materials`);
    if (res.ok) {
      return res.json();
    }
  } catch (error) {
    console.error("Error fetching materials:", error);
  }
  return [];
};

const createArray = (size: number) =>
  Array.from({ length: size }, (_, i) => ({ id: i + 1 }));

export default function Store() {
  const searchParams = useSearchParams();

  const DEFAULT_VALUE = 19990;

  const [products, setProducts] = useState<Product[] | null>(null);
  const [pagination, setPagination] = useState<PaginationType>({
    currentPage: 0,
    pageSize: 0,
    totalCount: 0,
    totalPages: 0,
  });

  const [range, setRange] = useState<string[]>([]);
  const [filterPrice, setFilterPrice] = useState(DEFAULT_VALUE);

  const [materials, setMaterials] = useState<materials[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filters, setFilters] = useState<Filter>({
    order: "none",
    orderName: "Más Relevantes",
    price: [0, DEFAULT_VALUE],
    materials: "",
    cuotes: 0,
    freeshipping: false,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadMaterials = async () => {
      const fetchedMaterials = await fetchMaterials();
      setMaterials(fetchedMaterials);
    };
    loadMaterials();
  }, []);

  const getProducts = useCallback(async () => {
    setLoading(true);

    const query = searchParams.get("q");
    const encodedQuery = encodeURIComponent(query ?? "none");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products?q=${encodedQuery}&p=${currentPage}&o=${filters.order}&price=${filters.price[1] === DEFAULT_VALUE ? "none" : filters.price}&f=${filters.freeshipping}`,
      );

      if (res.ok) {
        const data = await res.json();
        setProducts(data.products || []);
        setPagination(data.pagination || pagination);
        setRange([
          parseFloat(data.min._min.product_price).toFixed(0) || "0",
          parseFloat(data.max._max.product_price).toFixed(0) || "0",
        ]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }, [currentPage, filters, searchParams, pagination]);

  useEffect(() => {
    getProducts();
  }, [currentPage, filters, searchParams, getProducts]);

  const cuotes = [
    { id: 1, name: "3 Cuotas sin interes" },
    { id: 2, name: "6 Cuotas sin interes" },
    { id: 3, name: "9 Cuotas sin interes" },
  ];

  const Pages = createArray(pagination.totalPages);

  const orderOptions = [
    { id: "none", name: "Más Relevantes" },
    { id: "asc", name: "Menor Precio" },
    { id: "desc", name: "Mayor Precio" },
  ];

  const handleCheck = () => {
    setFilters({
      ...filters,
      freeshipping: !filters.freeshipping,
    });
  };

  return (
    <div className="min-h-screen bg-zinc-950  text-gray-100">
      <div className="px-4">
        <div className="flex items-center justify-between pt-4">
          <div className="flex w-1/2 items-center justify-between">
            <h1 className="pl-6 text-3xl font-semibold">MARCOS</h1>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Label className="flex items-center justify-center gap-0.5 text-sm text-gray-300">
                  Ordenar
                  <ChevronDown className="h-5 w-5" />
                </Label>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="ml-28 mt-2 w-52 rounded-lg bg-neutral-900 text-gray-300">
                <DropdownMenuLabel className="text-neutral-300">
                  {filters.orderName}
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="mb-1.5" />
                {orderOptions.map((ord) => (
                  <DropdownMenuCheckboxItem
                    key={ord.id}
                    className={` mx-2 my-1 rounded-lg ${
                      filters.order == ord.id
                        ? "  bg-neutral-700 text-white"
                        : ""
                    }
                      
                    `}
                    onClick={() =>
                      setFilters((prevFilters) => ({
                        ...prevFilters,
                        order: ord.id,
                        orderName: ord.name,
                      }))
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

        <Separator className="mb-5 mt-4 h-0.5 w-full bg-neutral-500" />
      </div>
      <div className="flex h-auto w-full justify-between px-2">
        <div className=" h-96 w-[16rem] 2xl:w-[20rem]">
          <Accordion
            type="multiple"
            className="w-full rounded-lg bg-neutral-900 p-4 shadow-md"
          >
            <h3 className="pb-2 text-2xl text-gray-200">Filtros</h3>
            <AccordionItem
              value="materials"
              className="mb-2 border-b border-gray-600"
            >
              <AccordionTrigger className="py-2 text-lg font-semibold text-gray-200 hover:text-gray-400">
                Materiales
              </AccordionTrigger>
              <AccordionContent className="mt-2 flex flex-col space-y-1">
                {materials.map((material) => (
                  <button
                    key={material.material_id}
                    className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition-all hover:bg-gray-700"
                    onClick={() =>
                      setFilters((prevFilters) => ({
                        ...prevFilters,
                        materials: material.material_slug,
                      }))
                    }
                  >
                    <Checkbox
                      id={material.material_slug}
                      className="h-5 w-5 rounded-lg border-gray-400"
                    />
                    <Label
                      htmlFor={material.material_slug}
                      className="text-gray-300"
                    >
                      {material.material_name}
                    </Label>
                  </button>
                ))}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="price"
              className="mb-2 border-b border-gray-600"
            >
              <AccordionTrigger className="py-2 text-lg font-semibold text-gray-200 hover:text-gray-400">
                Precio
              </AccordionTrigger>
              <AccordionContent className="mt-2 px-2">
                <div className="flex w-full items-center justify-between">
                  <strong className="text-[0.9rem] text-gray-300">
                    Máximo:
                  </strong>
                  <span className="text-[0.9rem] text-gray-300">
                    {filterPrice === DEFAULT_VALUE
                      ? "Todos"
                      : `$ ${filterPrice}`}
                  </span>
                </div>
                <input
                  type="range"
                  id="rangeInput"
                  min={range[0]}
                  max={range[1]}
                  value={filterPrice}
                  step={1000}
                  onChange={(e) => setFilterPrice(Number(e.target.value))}
                  className="my-2 h-2 w-full cursor-pointer appearance-none rounded-lg border border-neutral-700 bg-neutral-800"
                />
                <div className="flex justify-end pt-1">
                  <Button
                    variant="outline"
                    onClick={() =>
                      setFilters(() => ({
                        ...filters,
                        price: [Number(range[0]), filterPrice],
                      }))
                    }
                    className="h-9 rounded-lg border border-neutral-400"
                  >
                    Aplicar
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="cuotes"
              className="mb-2 border-b border-gray-600"
            >
              <AccordionTrigger className="py-2 text-lg font-semibold text-gray-200 hover:text-gray-400">
                Cuotas
              </AccordionTrigger>
              <AccordionContent className="mt-2 space-y-1 px-2">
                {cuotes.map((cuote) => (
                  <button
                    key={cuote.id}
                    className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition-all hover:bg-gray-700"
                    onClick={() =>
                      setFilters((prevFilters) => ({
                        ...prevFilters,
                        cuotes: cuote.id,
                      }))
                    }
                  >
                    <Checkbox
                      id={cuote.name}
                      className="h-5 w-5 rounded-lg border-gray-400"
                    />
                    <Label htmlFor={cuote.name} className="text-gray-300">
                      {cuote.name}
                    </Label>
                  </button>
                ))}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="shipping"
              className="mb-2 border-b border-gray-600"
            >
              <AccordionTrigger className="py-2 text-lg font-semibold text-gray-200 hover:text-gray-400">
                Envío
              </AccordionTrigger>
              <AccordionContent className="mt-2 px-2">
                <div className="flex items-center gap-1.5 py-1">
                  <Switch
                    checked={filters.freeshipping}
                    onCheckedChange={() => handleCheck()}
                    id="free-shipping"
                    className="text-green-600"
                  />
                  <Label htmlFor="free-shipping" className="text-gray-300">
                    Envío Gratis
                  </Label>
                  <FiPackage className="h-5 w-5 text-green-600" />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-[calc(100vw-16rem)] 2xl:w-[calc(100vw-20rem)]">
          <div className="flex flex-wrap items-center justify-start gap-x-4 gap-y-3 pl-10 2xl:pl-8">
            {loading && <ProductsSkeleton timesSkeleton={6} />}
            {!products && (
              <div className="w-full pt-4 text-center text-xl text-gray-300">
                No hay productos disponibles
              </div>
            )}
            {products &&
              products.length > 0 &&
              products.map((product) => (
                <ProductCard key={product.product_id} product={product} />
              ))}
          </div>
          {products && products.length > 0 && (
            <Pagination className="mt-8 flex justify-end pr-10">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                  />
                </PaginationItem>
                {Pages.map((p) => (
                  <PaginationItem key={p.id}>
                    <PaginationLink
                      href="#"
                      onClick={() => setCurrentPage(p.id)}
                      isActive={currentPage === p.id}
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
                    onClick={() =>
                      setCurrentPage((prev) =>
                        Math.min(prev + 1, pagination.totalPages),
                      )
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </div>
    </div>
  );
}
