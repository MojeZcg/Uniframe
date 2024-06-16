import { Separator } from "@/components/ui/separator";
import { TopProducts } from "@/components/TopProducts";
import Image from "next/image";
import MainCarousel from "@/components/Carousel";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default async function Home() {
  return (
    <main>
      <div className=" flex h-[calc(100vh)] flex-col items-start md:h-[calc(100vh-4.8rem)] md:flex-row md:justify-center 2xl:h-[calc(100vh-10rem)] ">
        <div className="bg-main-dark z-30 flex h-[calc(100vh)] w-full flex-col items-center justify-center overflow-hidden  md:h-[calc(100vh-4.8rem)] md:flex-row 2xl:h-[calc(100vh-13rem)]">
          <div className="border-b-1 bg-main-dark z-20 flex h-[calc(100vh-30rem)] items-start justify-center border-white  shadow-2xl shadow-black md:h-[calc(100vh-4.8rem)] md:w-[33.5rem]  2xl:h-[calc(100vh-13rem)] 2xl:w-[46rem]">
            <div className=" bg-main-dark flex w-full flex-col items-start justify-center  text-start md:w-[19rem] md:p-0 2xl:w-[26rem] 2xl:pt-6">
              <h3 className=" py-8 text-5xl font-extrabold leading-[3.1rem]  md:pb-8 md:pt-14 md:text-[3.3rem] 2xl:py-9 2xl:text-6xl 2xl:font-black 2xl:leading-[4.5rem]">
                Bienvenido a Uniframe!
              </h3>
              <p className=" text-2xl font-medium leading-tight text-neutral-500 md:text-[1.9rem] 2xl:text-[3rem] 2xl:leading-[1.15] ">
                Encuentra tu inspiración en cada obra. Explora nuestra exclusiva
                colección de cuadros y transforma tu espacio con arte
                excepcional.
              </p>
            </div>
          </div>
          <div className="w-full cursor-default select-none xl:h-[calc(100vh-4.8rem)] 2xl:h-[calc(100vh-12rem)]">
            <MainCarousel />
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center py-10 ">
        <h3 className=" mb-10 px-10 text-center text-2xl font-medium text-[#bfbfbf] underline underline-offset-[6px] md:text-4xl 2xl:mb-8 2xl:text-5xl">
          NUESTROS <span className=" font-bold text-white">PRODUCTOS</span> MAS
          VENDIDOS
        </h3>

        <Carousel className="z-50 flex w-[calc(100vw-9rem)] items-center justify-center 2xl:w-[calc(100vw-14rem)]">
          <CarouselContent className="">
            <TopProducts />
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="flex w-full items-center justify-center  ">
        <Separator className="w-full bg-white pt-0.5" />
      </div>
      <section className="max-w-full  text-white">
        <div className="bg-main-gradient text-small flex h-96 w-full items-center  overflow-hidden ">
          <div className="h-full  bg-black opacity-50 ">
            <Image
              src="/Products/materials.jpg"
              alt="Collage image 1"
              width={1200}
              height={400}
              className="h-full rounded-none object-cover "
            />
          </div>
          <Separator orientation="vertical" className="mx-0 bg-white pr-0.5" />
          <p className="min-w-[60%] max-w-[65%] px-10 text-4xl font-normal leading-normal">
            NUESTROS MARCOS, CONFECCIONADOS CON LOS MATERIALES MÁS FINOS Y
            DURADEROS, SON EL EPÍTOME DE LA CALIDAD Y EL BUEN GUSTO.
          </p>
        </div>
        <div className="flex w-full items-center  justify-center  ">
          <Separator className="w-full bg-white pt-0.5" />
        </div>
        <div className=" flex h-screen w-full items-center justify-center overflow-hidden ">
          <div className="absolute z-30 h-screen w-full bg-black opacity-60"></div>
          <Image
            src="/wall.jpeg"
            alt="Collage image 2"
            width={1080}
            height={1920}
            className=" z-10 w-full rounded-none  object-cover"
          />
        </div>
      </section>
    </main>
  );
}
