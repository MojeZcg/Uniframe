import Carousel from "@/component/Carousel";
import { Image, Divider, Button } from "@nextui-org/react";
import PrincipalImageSkeleton from "@/component/skeletons/PrincipalImageSkeleton";
import { Suspense } from "react";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import MobileSlider from "@/component/MobileSlider";
import { fetchTopProducts } from "@/lib/data";

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
        <div className="mb-14 flex h-[calc(100vh-8rem)] flex-col items-center justify-center md:h-[calc(100vh-4.8rem)] md:flex-row 2xl:h-[50rem] ">
          <div className="z-30 flex h-[36rem] w-full flex-col items-center justify-center overflow-hidden bg-main-dark text-white md:h-[calc(100vh-4.8rem)] md:flex-row 2xl:h-[44rem]">
            <div className="z-20 flex items-start justify-center border-b-1 border-white shadow-2xl  shadow-black md:h-[calc(100vh-4.8rem)] md:w-[33.5rem] md:bg-main-dark  2xl:h-[44rem] 2xl:w-[38rem]">
              <div className="flex w-full flex-col items-center justify-center px-10  text-start">
                <h3 className="pb-8 pt-10 text-5xl font-extrabold leading-[3.1rem] text-neutral-200">
                  Bienvenido a Uniframe!
                </h3>
                <p className=" text-[1.9rem] font-medium leading-tight text-neutral-500 ">
                  Encuentra tu inspiración en cada obra. Explora nuestra
                  exclusiva colección de cuadros y transforma tu espacio con
                  arte excepcional.
                </p>
              </div>
            </div>
            <div className=" h-[calc(100vh-5rem)] w-full cursor-default select-none overflow-hidden border-b-1 border-white xl:h-[calc(100vh-4.8rem)] 2xl:h-[44rem]">
              <Carousel images={images} />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center ">
          <h3 className=" mb-4 px-10 text-center text-2xl font-medium text-[#bfbfbf] underline underline-offset-[6px] md:text-4xl 2xl:text-4xl">
            NUESTROS <span className=" font-bold text-white">PRODUCTOS</span>{" "}
            MAS VENDIDOS
          </h3>
          <div className="py-8">
            <div className="flex w-full items-center justify-center">
              <div className="block h-[32rem] w-[20rem] overflow-hidden  py-8 md:hidden">
                <MobileSlider products={topProducts} />
              </div>
            </div>

            <div className="hidden  flex-wrap items-center justify-center gap-6 md:flex 2xl:hidden ">
              {topProducts.slice(0, productsToShow["md"]).map((p: any) => (
                <div
                  key={p.product_id}
                  className="flex h-[30rem] w-[19rem] flex-col items-start justify-center overflow-hidden rounded-md border bg-[#0a0a0a] px-3  shadow-lg shadow-gray-700   "
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
                    <div className="flex flex-col gap-0 pb-1 ">
                      <p className="mb-1 line-clamp-2 text-sm text-neutral-300">
                        {p.product_description}
                      </p>
                      <strong className="text-2xl">${p.product_price}</strong>
                    </div>
                    <Button radius="sm" color="success" variant="ghost">
                      Agregar al carrito{" "}
                      <ShoppingCartIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden w-full flex-wrap items-center justify-center gap-6 2xl:flex ">
              {topProducts.slice(0, productsToShow["lg"]).map((p: any) => (
                <div
                  key={p.product_id}
                  className=" flex h-[36rem] w-[22rem] flex-col items-start justify-center overflow-hidden rounded-md border-2 bg-[#090909] px-3 py-4 shadow-xl shadow-gray-700"
                >
                  <div className="  flex w-full items-center justify-center overflow-hidden py-1">
                    <Image
                      src={p.product_images.split(",")[0]}
                      alt={p.product_name}
                      className=" h-72 rounded-sm "
                    />
                  </div>
                  <div className="flex w-full flex-col">
                    <h6 className="block truncate py-3 text-3xl">
                      {p.product_name}
                    </h6>
                    <div className="flex flex-col gap-0 pb-6 ">
                      <p className=" mb-2 line-clamp-2 text-base text-neutral-300">
                        {p.product_description}
                      </p>
                      <strong className="text-3xl">${p.product_price}</strong>
                    </div>
                    <button className=" flex w-full items-center justify-center gap-1.5 rounded-sm border border-transparent bg-white py-2 text-2xl text-black transition-all duration-200 ease-in-out hover:border-white hover:bg-black hover:text-white">
                      Agregar al carrito{" "}
                      <ShoppingCartIcon className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <h2 className="mb-4 pl-5 pt-10 text-4xl font-normal text-white">
        PROCESO DE ELABORACIÓN
      </h2>
      <div className="flex w-full items-center justify-center  ">
        <Divider className="w-full bg-neutral-300" />
      </div>
      <section className="max-w-full  text-white">
        <div className="flex h-[23.4rem] w-full items-center overflow-hidden bg-main-gradient  text-small ">
          <Suspense fallback={<PrincipalImageSkeleton />}>
            <Image
              width={700}
              src="/Products/materials.jpg"
              alt="Corner Image 1"
              className=" rounded-none bg-gray-700 object-cover"
            />
          </Suspense>
          <Divider orientation="vertical" className="mx-0 bg-white pr-0.5" />
          <p className="max-w-[53rem] px-10 text-4xl font-normal leading-normal">
            NUESTROS MARCOS, CONFECCIONADOS CON LOS MATERIALES MÁS FINOS Y
            DURADEROS, SON EL EPÍTOME DE LA CALIDAD Y EL BUEN GUSTO.
          </p>
        </div>
        <div className="flex w-full items-center justify-center  ">
          <Divider className="w-full bg-neutral-300" />
        </div>
        <div className=" flex h-screen w-full items-center justify-center overflow-hidden ">
          <div className="absolute z-30 h-screen w-full bg-black opacity-20"></div>

          <Image
            src="/wall.jpg"
            alt="Two Frames "
            className=" z-10 w-full rounded-none  object-cover"
          />
        </div>
      </section>
    </div>
  );
}
