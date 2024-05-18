import { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
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
      className=" flex h-[30rem] max-h-[30rem] max-w-[20rem] flex-col items-start justify-center overflow-hidden rounded-xl border bg-neutral-950 px-4 py-2 text-white  shadow-md shadow-gray-700 "
    >
      <div className="z-50 flex w-full ">
        <div className=" mb-2 ml-auto mr-auto h-[17rem] max-h-[17rem] w-[12rem]">
          <Carousel>
            <CarouselContent>
              {images.map((image) => (
                <CarouselItem key={image.id}>
                  <AspectRatio
                    ratio={2 / 3}
                    className="flex h-full select-none items-center justify-center"
                  >
                    <Image
                      src={image.src}
                      alt={product.product_name + " Image - " + image.id}
                      width={700}
                      height={700}
                    />
                  </AspectRatio>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
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
