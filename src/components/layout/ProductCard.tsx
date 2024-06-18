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

export default function ProductCard({
  product,
}: Readonly<{ product: Product }>) {
  const split = product.product_images.split(",");
  const images = split.map((url, index) => {
    return {
      id: index + 1,
      src: url,
    };
  });
  return (
    <Card
      key={product.product_id}
      className="flex h-[27rem] w-[20rem] flex-col items-start justify-center overflow-hidden rounded-xl border border-neutral-400 bg-neutral-950 p-4 text-white md:h-[29rem] md:w-[20rem] 2xl:h-[36rem] 2xl:w-[24rem]"
    >
      <div className="z-50 ml-auto mr-auto flex h-[15rem] w-[10rem] items-center justify-center pt-1 md:h-[16.5rem] md:w-[13rem] 2xl:h-[20rem] 2xl:w-[14.75rem]">
        <Carousel>
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem key={image.id}>
                <div className="flex h-52 select-none items-center justify-center md:h-64 2xl:h-80">
                  <Image
                    src={image.src}
                    alt={`${product.product_name} Image - ${image.id}`}
                    className="object-contain"
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
          <h6 className="block truncate py-2 text-2xl font-semibold text-gray-200 2xl:text-4xl">
            {product.product_name}
          </h6>
          <div className="flex flex-col gap-0 pb-2">
            <p className="mb-1 line-clamp-2 text-sm text-gray-400 2xl:text-lg">
              {product.product_description}
            </p>
            <strong className="text-2xl text-gray-300 2xl:mt-1 2xl:text-3xl">
              ${product.product_price}
            </strong>
          </div>

          <div className="flex w-full flex-col 2xl:mt-2">
            {product.product_availables != 0 ? (
              <Button
                variant="outline"
                className="rounded-lg border-gray-500 text-gray-300 hover:bg-gray-700 2xl:text-lg"
              >
                Agregar al carrito <ShoppingCartIcon className="ml-2 h-5 w-5" />
              </Button>
            ) : (
              <Button
                disabled
                variant="outline"
                className="border-gray-600 text-gray-400 2xl:text-lg"
              >
                Sold Out
              </Button>
            )}
          </div>
        </div>
      </Link>
    </Card>
  );
}
