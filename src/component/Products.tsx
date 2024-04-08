"use client";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { useEffect } from "react";

function Products() {
  useEffect(() => {
    const data = await loadProducts();
    const products = data.products;
  }, []);

  return (
    <div className=" flex flex-wrap items-center justify-center gap-4 bg-main-dark   ">
      {products.map((p: any) => (
        <div
          key={p.id}
          className="overflow-hidden rounded-md border-2 border-white "
        >
          <Image
            id="unhover"
            src={p.img}
            alt={p.product_name}
            width={318}
            height={300}
            className=" opacity-bottom rounded-none "
          />

          <div className=" max-w-[19.8rem] px-3 py-3">
            <h4 className="font-semibold text-white ">{p.product_name}</h4>
            <h6 className="line-clamp-2 text-sm text-gray-300">
              {p.product_description}
            </h6>
            <div className="flex w-full items-center justify-between pt-2">
              <strong className="text-xl font-bold">{p.product_price} $</strong>
              <Button
                size="md"
                radius="sm"
                color="success"
                variant="ghost"
                className=" ring-transparent"
              >
                Agregar <ShoppingCartIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
