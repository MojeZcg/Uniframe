import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import { Button, Image } from "@nextui-org/react";
import Link from "next/link";
import { Suspense } from "react";
import MobileSlider from "./MobileSlider";
import TopProductsSkeleton from "./skeletons/TopProductSkeleton";
import { fetchTopProducts } from "@/lib/data";

export async function TopProducts() {
  const topProducts = await fetchTopProducts();
  const productsToShow = {
    sm: 3, // Móvil: 3 productos
    md: 4, // Tableta: 4 productos
    lg: 5, // Pantalla grande: 6 productos
  };
  return (
    <div className=" md:py-8">
      <div className="flex w-full items-center justify-center">
        <div className="block h-[32rem] w-[20.5rem] overflow-hidden py-6 md:hidden">
          <MobileSlider products={topProducts} />
        </div>
      </div>

      <div className="hidden flex-wrap items-center justify-center gap-6 md:flex 2xl:hidden ">
        <Suspense fallback={<TopProductsSkeleton />}>
          {topProducts.slice(0, productsToShow["md"]).map((p: any) => (
            <Link
              key={p.product_id}
              href={`/store/product/${p.product_id}`}
              className="flex h-[29.2rem] w-[19rem] flex-col items-start justify-center overflow-hidden rounded-xl  border bg-[#0a0a0a] px-3 shadow-lg shadow-gray-700   "
            >
              <div className="  flex w-full items-center justify-center overflow-hidden px-2 py-2">
                <Image
                  src={p.product_images.split(",")[0]}
                  alt={p.product_name}
                  className=" h-64  rounded-sm "
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

                {p.product_available ? (
                  <Button radius="sm" color="success" variant="ghost">
                    Agregar al carrito <ShoppingCartIcon className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    isDisabled
                    radius="sm"
                    color="default"
                    variant="ghost"
                  >
                    Agotado
                  </Button>
                )}
              </div>
            </Link>
          ))}
        </Suspense>
      </div>

      <div className="hidden w-full flex-wrap items-center justify-center gap-7 2xl:flex ">
        <Suspense fallback={<TopProductsSkeleton />}>
          {topProducts.slice(0, productsToShow["lg"]).map((p: any) => (
            <Link
              key={p.product_id}
              href={`/store/product/${p.product_id}`}
              className="flex h-[35.5rem] w-[22rem] flex-col items-start justify-center overflow-hidden rounded-xl  border bg-[#0a0a0a] px-3 shadow-lg shadow-gray-700   "
            >
              <div className="  flex w-full items-center justify-center overflow-hidden px-2 py-2">
                <Image
                  src={p.product_images.split(",")[0]}
                  alt={p.product_name}
                  className=" h-72  rounded-sm "
                />
              </div>
              <div className="flex w-full flex-col">
                <h6 className="font block truncate py-2 text-3xl font-semibold">
                  {p.product_name}
                </h6>
                <div className="flex flex-col gap-0 pb-4 ">
                  <p className="mb-3 line-clamp-2 text-xl text-neutral-300">
                    {p.product_description}
                  </p>
                  <strong className="text-3xl">${p.product_price}</strong>
                </div>

                {p.product_available ? (
                  <Button
                    radius="sm"
                    color="success"
                    variant="ghost"
                    className="h-14 text-2xl"
                  >
                    Agregar al carrito <ShoppingCartIcon className="h-6 w-6" />
                  </Button>
                ) : (
                  <Button
                    isDisabled
                    radius="sm"
                    color="default"
                    variant="ghost"
                  >
                    Agotado
                  </Button>
                )}
              </div>
            </Link>
          ))}
        </Suspense>
      </div>
    </div>
  );
}
