import Carousel from "@/component/Carousel";
import MobileSlider from "@/component/MobileSlider";
import { Image, Divider } from "@nextui-org/react";
import PrincipalImageSkeleton from "@/component/skeletons/PrincipalImageSkeleton";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import { Suspense } from "react";

export default function Home() {
  const images = [
    "/Home/main-1.jpg",
    "/Home/main-2.jpg",
    "/Home/main-3.jpg",
    "/Home/main-4.png",
  ];

  const products = [
    {
      id: 1,
      name: "Marco Madera Clasico",
      image: "/Products/prd-1/1.jpg",
      cuotas: "3",
      pricexcuotas: "100",
      price: "299.99",
    },
    {
      id: 2,
      name: "Marco Madera Clasico",
      image: "/Products/product-1.jpg",
      pricexcuotas: "100",
      cuotas: "3",
      price: "299.99",
    },
    {
      id: 3,
      name: "Marco Madera Clasico",
      image: "/Products/product-1.jpg",
      pricexcuotas: "100",
      cuotas: "3",
      price: "299.99",
    },
    {
      id: 4,
      name: "Marco Madera Clasico",
      image: "/Products/product-1.jpg",
      pricexcuotas: "100",
      cuotas: "3",
      price: "299.99",
    },
    {
      id: 5,
      name: "Marco Madera Clasico",
      image: "/Products/product-1.jpg",
      pricexcuotas: "100",
      cuotas: "3",
      price: "299.99",
    },
    {
      id: 6,
      name: "Marco Madera Clasico",
      image: "/Products/product-1.jpg",
      pricexcuotas: "100",
      cuotas: "3",
      price: "299.99",
    },
  ];

  const productsToShow = {
    sm: 3, // Móvil: 3 productos
    md: 4, // Tableta: 4 productos
    lg: 5, // Pantalla grande: 6 productos
  };

  return (
    <div className="bg-main-dark">
      <main className="bg-main-dark text-white  ">
        <div className="mb-10 flex h-[34rem] flex-col items-center justify-center md:h-[36rem] md:flex-row 2xl:h-[50rem] ">
          <div className="z-30 flex h-[36rem] w-full flex-col items-center justify-center overflow-hidden bg-main-dark text-white md:h-[36rem] md:flex-row 2xl:h-[44rem] ">
            <p className="2xl:rounded-l-md] z-20 md:h-[31rem] md:w-[30rem] md:rounded-l-sm md:border-y-2 md:bg-main-dark md:bg-main-gradient  2xl:h-[44rem] 2xl:w-[38rem] ">
              <strong className="flex w-full select-none flex-col border-none py-10 text-center  text-5xl font-semibold text-white underline decoration-1 underline-offset-[6px] shadow-lg md:inline-flex md:bg-transparent md:px-6 md:py-0 md:pb-10 md:pt-12 md:text-[2.8rem] md:shadow-none 2xl:pb-16 2xl:pt-20 2xl:text-6xl ">
                <span className="pb-1  md:text-neutral-100 ">Bienvenido a</span>
                <span>
                  <span className="  md:text-neutral-100  ">Uniframe</span>
                </span>{" "}
              </strong>
              <span className="hidden select-none text-center font-semibold leading-relaxed text-neutral-400 md:inline-flex md:px-6 md:text-[1.6rem] 2xl:px-12 2xl:text-[2.2rem] 2xl:leading-snug">
                Tu destino para encontrar cuadros de calidad que transformarán
                tus espacios en obras de arte vivientes.
              </span>
            </p>
            <div className=" h-[27rem] w-full select-none overflow-hidden border-white md:rounded-r-sm md:border-y-2 xl:h-[31rem] 2xl:h-[44rem] 2xl:rounded-r-md ">
              <Carousel images={images} />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center ">
          <h3 className=" px-10 text-center text-2xl font-medium text-[#bfbfbf] underline underline-offset-[6px] md:text-4xl 2xl:text-4xl ">
            NUESTROS <span className=" font-bold text-white">PRODUCTOS</span>{" "}
            MAS VENDIDOS
          </h3>
          <div>
            <div className="flex w-full items-center justify-center">
              <div className="block h-[32rem] w-[20rem] overflow-hidden  py-8 md:hidden">
                <MobileSlider products={products} />
              </div>
            </div>

            <div className="hidden w-full flex-wrap items-center justify-center gap-8 pb-14 pt-8 md:flex 2xl:hidden ">
              {products.slice(0, productsToShow["md"]).map((product) => (
                <div
                  key={product.id}
                  className="w-[18rem] overflow-hidden rounded-md border bg-[#0a0a0a] px-3 py-4 shadow-lg shadow-gray-700 "
                >
                  <div className="  flex w-full items-center justify-center overflow-hidden px-2 py-2">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className=" h-64  rounded-sm "
                    />
                  </div>
                  <div className="flex flex-col">
                    <h6 className="block py-2 text-xl">{product.name}</h6>
                    <div className="flex flex-col gap-0 pb-4 ">
                      <strong className="text-2xl">${product.price}</strong>
                      <p className="text-sm">
                        en{" "}
                        <span className="text-base font-bold">
                          {product.cuotas}{" "}
                        </span>
                        <span className=" text-base text-emerald-400">
                          Cuotas
                        </span>{" "}
                        de $ {product.pricexcuotas}
                      </p>
                    </div>
                    <button className=" flex w-full items-center justify-center gap-1.5 rounded-sm border border-transparent bg-white py-1 text-black transition-all duration-200 ease-in-out hover:border-white hover:bg-[#0f0f0f] hover:text-white ">
                      Agregar al carrito{" "}
                      <ShoppingCartIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden w-full flex-wrap items-center justify-center gap-5 py-10 2xl:flex ">
              {products.slice(0, productsToShow["lg"]).map((product) => (
                <div
                  key={product.id}
                  className="min-w-[20rem] max-w-[20rem] overflow-hidden rounded-md border-2 bg-[#090909] px-3 py-4 shadow-xl shadow-gray-700"
                >
                  <div className="  flex w-full items-center justify-center overflow-hidden py-1">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className=" h-64 rounded-sm "
                    />
                  </div>
                  <div className="flex flex-col">
                    <h6 className="block py-3 text-2xl">{product.name}</h6>
                    <div className="flex flex-col gap-0 pb-6 ">
                      <strong className="text-3xl">${product.price}</strong>
                      <p className="text-base">
                        en{" "}
                        <span className="text-base font-bold">
                          {product.cuotas}{" "}
                        </span>
                        <span className=" text-base text-emerald-400">
                          Cuotas
                        </span>{" "}
                        de $ {product.pricexcuotas}
                      </p>
                    </div>
                    <button className=" flex w-full items-center justify-center gap-1.5 rounded-sm border border-transparent bg-white py-1 text-xl text-black transition-all duration-200 ease-in-out hover:border-white hover:bg-[#0f0f0f]  hover:text-white">
                      Agregar al carrito{" "}
                      <ShoppingCartIcon className="h-4 w-4" />
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
              className=" rounded-none bg-gray-500 object-cover"
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
