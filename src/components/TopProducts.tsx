"use client";
import { useEffect, useState } from "react";
import { Product } from "@/lib/types";
import ProductsSkeleton from "./skeletons/ProductsSkeleton";
import ProductCard from "./layout/ProductCard";
import { CarouselItem, CarouselNext, CarouselPrevious, CarouselContent } from "@/components/ui/carousel";

export function TopProducts() {
  const [topProducts, setTopProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products/top/`,
      );
      if (res) {
        const data = await res.json();
        setTopProducts(data.length ? data : null);
      }
    } catch (error) {
      console.log(error);
      setTopProducts(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return (
      <div className="h-[30rem] flex items-center justify-center">
        <ProductsSkeleton timesSkeleton={3} />
      </div>
    );
  }

  if (!topProducts) {
    return (
      <div className="h-[20rem] flex items-center justify-center">
        No hay productos disponibles.
      </div>
    );
  }

  return (
    <CarouselContent className="h-[30rem]">
      {topProducts.map((p: Product) => (
        <CarouselItem
          className="flex items-center justify-center md:basis-1/3"
          key={p.product_id}
        >
          <ProductCard product={p} />
        </CarouselItem>
      ))}
      <CarouselPrevious />
      <CarouselNext />
    </CarouselContent>
  );
}

