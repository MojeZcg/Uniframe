import Carousel from "@/component/Carousel";
import { Image, Divider, Button } from "@nextui-org/react";
import PrincipalImageSkeleton from "@/component/skeletons/PrincipalImageSkeleton";
import { Suspense } from "react";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import MobileSlider from "@/component/MobileSlider";
import { fetchTopProducts } from "@/lib/data";
import TopProductsSkeleton from "@/component/skeletons/TopProductSkeleton";
import Link from "next/link";

export default async function Home() {
  const topProducts = await fetchTopProducts();

  const images = [
    "https://i0.wp.com/www.hannahinthehouse.com/wp-content/uploads/2018/04/bed11copy.jpg?resize=1080%2C1627",
    "https://i.pinimg.com/originals/ed/99/75/ed9975a56d44f1b9728b893695214bde.jpg",
    "https://i.pinimg.com/originals/31/fc/ca/31fccad5a22690fda468df8cbabc14fe.jpg",
    "https://i.pinimg.com/originals/48/44/f6/4844f69f0d491706f946ef4d6418fdcd.jpg",
  ];

  const productsToShow = {
    sm: 3, // Móvil: 3 productos
    md: 4, // Tableta: 4 productos
    lg: 5, // Pantalla grande: 6 productos
  };

  return (
    <div>
      <main className=" text-white  ">
        <div className=" flex h-[calc(100vh)] flex-col items-start md:h-[calc(100vh-4.8rem)] md:flex-row md:justify-center 2xl:h-[calc(100vh-15.55rem)] ">
          <div className="z-30 flex h-[calc(100vh)] w-full flex-col items-center justify-center overflow-hidden bg-main-dark text-white md:h-[calc(100vh-4.8rem)] md:flex-row 2xl:h-[calc(100vh-13rem)]">
            <div className="z-20 flex h-[calc(100vh-30rem)] items-start justify-center border-b-1 border-white bg-main-dark  shadow-2xl shadow-black md:h-[calc(100vh-4.8rem)] md:w-[33.5rem]  2xl:h-[calc(100vh-13rem)] 2xl:w-[46rem]">
              <div className=" flex w-full flex-col items-start justify-center bg-main-dark px-8 text-start md:w-72 md:p-0 2xl:w-[26rem] 2xl:pt-6">
                <h3 className=" py-8 text-5xl font-extrabold leading-[3.1rem] text-neutral-200 md:pb-8 md:pt-10 md:text-5xl 2xl:py-9 2xl:text-6xl 2xl:font-black 2xl:leading-[4.5rem]">
                  Bienvenido a Uniframe!
                </h3>
                <p className=" text-2xl font-medium leading-tight text-neutral-500 md:text-[1.9rem] 2xl:text-[3rem] 2xl:leading-[1.15] ">
                  Encuentra tu inspiración en cada obra. Explora nuestra
                  exclusiva colección de cuadros y transforma tu espacio con
                  arte excepcional.
                </p>
              </div>
            </div>
            <div className=" w-full cursor-default select-none overflow-hidden border-b-1 border-white xl:h-[calc(100vh-4.8rem)] 2xl:h-[calc(100vh-13rem)]">
              <Carousel images={images} />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center ">
          <h3 className=" mb-4 mt-10 px-10 text-center text-2xl font-medium text-[#bfbfbf] underline underline-offset-[6px] md:text-4xl 2xl:mb-8 2xl:mt-16 2xl:text-5xl">
            NUESTROS <span className=" font-bold text-white">PRODUCTOS</span>{" "}
            MAS VENDIDOS
          </h3>

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
                    className="flex h-[30.5rem] w-[19rem] flex-col items-start justify-center overflow-hidden rounded-xl  border bg-[#0a0a0a] px-4  shadow-lg shadow-gray-700   "
                  >
                    <div className="  flex w-full items-center justify-center overflow-hidden ">
                      <Image
                        src={p.product_images.split(",", 1)}
                        alt={"Main image of" + p.product_id}
                        className=" h-72 rounded-sm"
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
                          Agregar al carrito{" "}
                          <ShoppingCartIcon className="h-4 w-4" />
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
                          Agregar al carrito{" "}
                          <ShoppingCartIcon className="h-6 w-6" />
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
        </div>
      </main>
      <h2 className="mb-4 pl-5 text-4xl font-normal text-white md:pt-10">
        PROCESO DE ELABORACIÓN
      </h2>
      <div className="flex w-full items-center justify-center  ">
        <Divider className="w-full bg-white pt-0.5" />
      </div>
      <section className="max-w-full  text-white">
        <div className="flex h-96 w-full items-center overflow-hidden bg-main-gradient  text-small ">
          <Suspense fallback={<PrincipalImageSkeleton />}>
            <div className="h-full  bg-black opacity-50 ">
              <Image
                src="/Products/materials.jpg"
                alt="Collage image 1"
                className="h-full rounded-none bg-gray-950 object-cover "
              />
            </div>
          </Suspense>
          <Divider orientation="vertical" className="mx-0 bg-white pr-0.5" />
          <p className="min-w-[60%] max-w-[65%] px-10 text-4xl font-normal leading-normal">
            NUESTROS MARCOS, CONFECCIONADOS CON LOS MATERIALES MÁS FINOS Y
            DURADEROS, SON EL EPÍTOME DE LA CALIDAD Y EL BUEN GUSTO.
          </p>
        </div>
        <div className="flex w-full items-center  justify-center  ">
          <Divider className="w-full bg-white pt-0.5" />
        </div>
        <div className=" flex h-screen w-full items-center justify-center overflow-hidden ">
          <div className="absolute z-30 h-screen w-full bg-black opacity-60"></div>
          <Image
            src="/wall.jpg"
            alt="Collage image 2"
            className=" z-10 w-full rounded-none  object-cover"
          />
        </div>
      </section>
    </div>
  );
}
