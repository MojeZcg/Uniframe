import { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";

export default function ProductCard({
  product,
}: Readonly<{ product: Product }>) {
  const split = product.product_images.split(",");
  const images = split.map((url, index) => {
    return {
      id: index + 1, // Asigna el índice incrementado en 1 como id
      src: url,
    };
  });
  return (
    <Card
      key={product.product_id}
      className=" flex h-[29rem] max-h-[29rem] max-w-[20rem] flex-col items-start justify-center overflow-hidden rounded-xl border border-neutral-400 bg-transparent px-4 pb-2 text-white  shadow-md shadow-gray-700 "
    >
      <div className="z-50 ml-auto mr-auto flex h-[16.5rem] w-[13rem] items-center justify-center pt-1">
        <Carousel>
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem key={image.id}>
                <div className="flex  h-64 select-none items-center justify-center ">
                  <Image
                    src={image.src}
                    alt={product.product_name + " Image - " + image.id}
                    className=" object-contain"
                    width={1200}
                    height={1400}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <Link
        href={`/store/product/${product.product_id}`}
        className="h-auto w-full"
      >
        <div className="flex w-full flex-col">
          <h6 className="font block truncate py-2 text-2xl font-semibold">
            {product.product_name}
          </h6>
          <div className="flex flex-col gap-0 pb-2 ">
            <p className="mb-1 line-clamp-2 text-sm">
              {product.product_description}
            </p>
            <strong className="text-2xl">${product.product_price}</strong>
          </div>

          {product.product_availables != 0 ? (
            <Button variant="outline" className="rounded-lg ">
              Agregar al carrito <ShoppingCartIcon className="ml-2 h-5 w-5" />
            </Button>
          ) : (
            <Button disabled variant="outline">
              Sold Out
            </Button>
          )}
        </div>
      </Link>
    </Card>
  );
}
