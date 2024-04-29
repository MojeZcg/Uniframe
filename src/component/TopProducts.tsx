"use client";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import { Button } from "@nextui-org/react";

import Link from "next/link";
import { useEffect, useState } from "react";
import MobileSlider from "./MobileSlider";
import ImagesOfProduct from "./store/ImagesOfProduct";
import ProductsSkeleton from "./skeletons/ProductsSkeleton";
import { Product } from "@/lib/types";

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
    <>
      {loading && <ProductsSkeleton timesSkeleton={3} />}
      <div className="flex w-full items-center justify-center">
        <div className="block h-[32rem] w-[20.5rem] overflow-hidden py-6 md:hidden">
          <MobileSlider products={topProducts} />
        </div>
      </div>

      <div className="hidden flex-wrap items-center justify-center gap-6 overflow-hidden md:flex ">
        {topProducts?.map((p: Product) => (
          <Link
            key={p.product_id}
            href={`/store/product/${p.product_id}`}
            className="flex h-[22rem] w-[19rem] flex-col items-start justify-center overflow-hidden rounded-xl  border bg-[#0a0a0a] p-3 shadow-lg shadow-gray-700  "
          >
            <div className=" z-50 ml-auto mr-auto h-[18rem] w-[13rem] overflow-visible">
              <ImagesOfProduct
                images={p.product_images}
                name={p.product_name}
              />
            </div>
            <div className="flex w-full flex-col">
              <h6 className="font block truncate py-2 text-2xl font-semibold">
                {p.product_name}
              </h6>
              <div className="flex flex-col gap-0 pb-2 ">
                <p className="mb-1 line-clamp-2 text-sm text-neutral-300">
                  {p.product_description}
                </p>
                <strong className="text-2xl">${p.product_price}</strong>
              </div>

              {p.product_availables != 0 ? (
                <Button radius="sm" color="success" variant="ghost">
                  Agregar al carrito <ShoppingCartIcon className="h-4 w-4" />
                </Button>
              ) : (
                <Button isDisabled radius="sm" color="default" variant="ghost">
                  Agotado
                </Button>
              )}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
