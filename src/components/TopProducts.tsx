"use client";
import { useEffect, useState } from "react";
import MobileSlider from "./MobileSlider";
import { Product } from "@/lib/types";
import ProductsSkeleton from "./skeletons/ProductsSkeleton";
import ProductCard from "./layout/ProductCard";

export function TopProducts() {
  const [topProducts, setTopProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/api/products/top/");
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
    <div className="my-6 flex h-[30rem] w-full items-center justify-center">
      <div className=" h-[29rem] w-[20.5rem] overflow-hidden py-6 md:hidden">
        <MobileSlider products={topProducts} />
      </div>

      {loading && (
        <div className="mx-2 flex flex-wrap items-center justify-center gap-3 ">
          <ProductsSkeleton timesSkeleton={4} />
        </div>
      )}
      <div className="mx-2 flex flex-wrap items-center justify-center gap-3">
        {topProducts?.map((p: Product) => (
          <ProductCard key={p.product_id} product={p} />
        ))}
      </div>
    </div>
  );
}
