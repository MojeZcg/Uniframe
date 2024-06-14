"use client";
import { useEffect, useState } from "react";
import MobileSlider from "./MobileSlider";
import { Product } from "@/lib/types";
import ProductsSkeleton from "./skeletons/ProductsSkeleton";
import ProductCard from "./layout/ProductCard";
import { CarouselItem } from "./ui/carousel";

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
        if (data) setTopProducts(data);
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

  return (
    <>
      <div className=" h-[29rem] w-[20.5rem] overflow-hidden py-6 md:hidden">
        <MobileSlider products={topProducts} />
      </div>

      {loading && (
        <CarouselItem className="mx-2 flex flex-wrap items-center justify-center gap-3 ">
          <ProductsSkeleton timesSkeleton={4} />
        </CarouselItem>
      )}

      {topProducts?.map((p: Product) => (
        <CarouselItem className=" basis-1/3 pl-12 " key={p.product_id}>
          <ProductCard product={p} />
        </CarouselItem>
      ))}
    </>
  );
}
