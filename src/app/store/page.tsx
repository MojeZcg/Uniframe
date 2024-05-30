"use client";

import { useEffect, useState } from "react";
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
import { Slider } from "@/components/ui/slider";
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
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadMaterials = async () => {
      const fetchedMaterials = await fetchMaterials();
      setMaterials(fetchedMaterials);
    };
    loadMaterials();
  }, []);

  const getProducts = async () => {
    setLoading(true);

    const query = searchParams.get("q");
    const encodedQuery = encodeURIComponent(query ?? "none");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products?q=${encodedQuery}&p=${currentPage}&o=${filters.order}&price=${filters.price[1] === DEFAULT_VALUE ? "none" : filters.price}`,
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
  };

  useEffect(() => {
    getProducts();
  }, [currentPage, filters, searchParams]);

  const Pages = createArray(pagination.totalPages);

  const orderOptions = [
    { id: "none", name: "Más Relevantes" },
    { id: "asc", name: "Menor Precio" },
    { id: "desc", name: "Mayor Precio" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between pt-4">
        <div className="flex w-1/2 items-center justify-between">
          <h1 className="pl-6 text-3xl font-semibold">MARCOS</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Label className="flex items-center justify-center gap-0.5 text-sm">
                Ordenar
                <ChevronDown className="h-5 w-5" />
              </Label>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52">
              <DropdownMenuLabel className="text-neutral-300">
                {filters.orderName}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {orderOptions.map((ord) => (
                <DropdownMenuCheckboxItem
                  key={ord.id}
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

      <Separator className="mb-5 mt-4 h-0.5 w-full bg-white" />

      <div className="flex h-auto w-full justify-between">
        <div className="ml-3 w-[16rem] 2xl:w-[20rem]">
          <h3 className="text-2xl">Filtros</h3>
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="price">
              <AccordionTrigger>Precio</AccordionTrigger>
              <AccordionContent className="">
                <div className="flex w-full items-center justify-between">
                  <strong>Rango de Precios:</strong>
                  <span className="">
                    ${range[0] || "0"} - ${filterPrice}{" "}
                  </span>
                </div>
                <input
                  type="range"
                  id="rangeInput"
                  min={range[0]}
                  max={range[1]}
                  value={filterPrice}
                  step={500}
                  onChange={(e) => setFilterPrice(Number(e.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-neutral-800"
                />
                <div className=" pt-1">
                  <Button
                    variant="outline"
                    onClick={() =>
                      setFilters(() => ({
                        ...filters,
                        price: [Number(range[0]), filterPrice],
                      }))
                    }
                    className="rounded-xl px-4 py-1"
                  >
                    Aplicar
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="materials">
              <AccordionTrigger>Materiales</AccordionTrigger>
              <AccordionContent className="flex flex-col">
                {materials.map((material) => (
                  <button
                    key={material.material_id}
                    className="flex items-center gap-2 py-1.5"
                    onClick={() =>
                      setFilters((prevFilters) => ({
                        ...prevFilters,
                        materials: material.material_slug,
                      }))
                    }
                  >
                    <Checkbox
                      id={material.material_slug}
                      className="h-5 w-5 rounded-lg"
                    />
                    <Label htmlFor={material.material_slug}>
                      {material.material_name}
                    </Label>
                  </button>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="shipping">
              <AccordionTrigger>Envío</AccordionTrigger>
              <AccordionContent>
                <div className="flex items-center gap-1.5 py-1">
                  <Switch id="free-shipping" />
                  <Label htmlFor="free-shipping">Envío Gratis</Label>
                  <FiPackage className="h-5 w-5 text-green-600" />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-[calc(100vw-16rem)] 2xl:w-[calc(100vw-20rem)]">
          <div className="flex flex-wrap items-center justify-start gap-x-4 gap-y-3 pl-10 2xl:pl-8">
            {loading ? (
              <ProductsSkeleton timesSkeleton={6} />
            ) : (
              products?.map((product) => (
                <ProductCard key={product.product_id} product={product} />
              ))
            )}
          </div>
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
        </div>
      </div>
    </div>
  );
}
