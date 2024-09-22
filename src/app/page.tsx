import { Separator } from "@/components/ui/separator";
import { TopProducts } from "@/components/TopProducts";
import Image from "next/image";
import { Raleway } from "next/font/google";

import { Carousel } from "@/components/ui/carousel";

const title_font = Raleway({
  subsets: ["latin"],
  weight: ["700"],
});

export default async function Home() {
  return (
    <main>
      <div className=" flex h-[calc(100vh-5rem)] w-full flex-col items-center justify-center">
        <Image
          src="/Home/main.jpg"
          alt="Collage image 5"
          width={1920}
          height={1080}
          className="absolute -z-50 h-full w-full rounded-none bg-black object-cover opacity-20 "
        />
        <div className="absolute inset-x-0 -bottom-1 h-20 bg-gradient-to-t from-neutral-950 to-transparent"></div>
        <h1
          className={`pb-6 text-[5.2rem] ${title_font.className} font-extrabold text-neutral-50`}
        >
          BIENVENIDO A UNIFRAME!
        </h1>
        <h2 className="pb-4 text-2xl font-semibold text-neutral-100">
          TRANSFORMANDO ESPACIOS, ENMARCANDO MOMENTOS.
        </h2>
      </div>

      <div className="flex w-full flex-col items-center justify-center bg-neutral-950 py-8 ">
        <h3 className="mb-10 px-10 text-center text-2xl font-medium text-[#bfbfbf] underline underline-offset-[6px] md:text-4xl 2xl:mb-8 2xl:text-5xl">
          NUESTROS <span className=" font-bold text-white">PRODUCTOS</span> MAS
          VENDIDOS
        </h3>

        <Carousel className="z-50 flex w-[calc(100vw-13rem)] items-center justify-center 2xl:w-[calc(100vw-14rem)]">
          <TopProducts />
        </Carousel>
      </div>

      <div className="flex w-full items-center justify-center">
        <Separator className="w-full bg-white pt-0.5" />
      </div>
      <section className="max-w-full text-white">
        <div className="bg-main-gradient text-small flex h-96 w-full items-center  overflow-hidden ">
          <div className="h-full w-[50%] bg-black opacity-50">
            <Image
              src="/Products/materials.jpg"
              alt="Collage image 1"
              width={1200}
              height={400}
              className="h-full rounded-none object-cover"
            />
          </div>
          <Separator orientation="vertical" className="mx-0 bg-white pr-0.5" />
          <p className="w-[50%] px-10 text-4xl font-normal leading-normal"></p>
        </div>
        <div className="flex w-full items-center  justify-center">
          <Separator className="w -full bg-white pt-0.5" />
        </div>
        <div className="bg-main-gradient text-small flex h-96 w-full items-center  overflow-hidden">
          <Image
            src="/Home/main-6.webp"
            alt="Collage image 5"
            width={1200}
            height={800}
            className="h-full w-1/3 rounded-none bg-black object-cover opacity-50"
          />
          <Separator orientation="vertical" className="mx-0 bg-white pr-0.5" />
          <p className="w-1/3 px-10 text-4xl font-normal leading-normal"></p>
          <Separator orientation="vertical" className="mx-0 bg-white pr-0.5" />
          <div className="h-full w-1/3 bg-black opacity-50 ">
            <Image
              src="/Home/main-5.jpg"
              alt="Collage image 5"
              width={1200}
              height={400}
              className="h-full rounded-none bg-black object-cover opacity-50 "
            />
          </div>
        </div>
      </section>
      <div className="flex w-full items-center  justify-center">
        <Separator className="w-full bg-white pt-0.5" />
      </div>
      <div className="bg-main-gradient text-small flex h-96 w-full items-center  overflow-hidden ">
        <div className="h-full w-[70%] bg-black opacity-50">
          <Image
            src="/wall.jpeg"
            alt="Collage image 1"
            width={1200}
            height={400}
            className="h-full rounded-none object-cover"
          />
        </div>
        <Separator orientation="vertical" className="mx-0 bg-white pr-0.5" />
        <p className="w-[30%] px-10 text-4xl font-normal leading-normal"></p>
      </div>
      <div className="flex w-full items-center justify-center ">
        <Separator className="w-full bg-white pt-0.5" />
      </div>
    </main>
  );
}
