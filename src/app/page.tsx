import Carousel from "@/component/Carousel";
import { Image, Divider, Card, Skeleton } from "@nextui-org/react";
import PrincipalImageSkeleton from "@/component/skeletons/PrincipalImageSkeleton";
import { Suspense } from "react";
import { TopProducts } from "@/component/TopProducts";

export default async function Home() {
  const images = [
    "https://i0.wp.com/www.hannahinthehouse.com/wp-content/uploads/2018/04/bed11copy.jpg?resize=1080%2C1627",
    "https://i.pinimg.com/originals/ed/99/75/ed9975a56d44f1b9728b893695214bde.jpg",
    "https://i.pinimg.com/originals/31/fc/ca/31fccad5a22690fda468df8cbabc14fe.jpg",
    "https://i.pinimg.com/originals/48/44/f6/4844f69f0d491706f946ef4d6418fdcd.jpg",
  ];

  const timesSkeleton = [0, 1, 2, 3];

  return (
    <div>
      <main className=" text-white  ">
        <div className=" flex h-[calc(100vh)] flex-col items-start md:h-[calc(100vh-4.8rem)] md:flex-row md:justify-center 2xl:h-[calc(100vh-10rem)] ">
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

          <div className="h-[33rem] w-full overflow-hidden py-4">
            <TopProducts />
          </div>
        </div>
        <div className="flex w-full items-center justify-center gap-6">
          {timesSkeleton.slice(0, 4).map((i) => (
            <Card
              key={i}
              radius="lg"
              className=" h-[32rem] w-[20.5rem] space-y-4 bg-neutral-900 py-4 md:h-[28rem] md:w-[19rem]"
            >
              <Skeleton
                classNames={{
                  base: "bg-neutral-700",
                }}
                className="mx-10 rounded-lg"
              >
                <div className=" h-64 rounded-lg bg-default-700"></div>
              </Skeleton>
              <Skeleton
                classNames={{
                  base: "bg-neutral-700",
                }}
                className="mx-2 rounded-lg"
              >
                <div className=" h-10  rounded-lg"></div>
              </Skeleton>
              <div className="space-y-2">
                <div className="space-y-1">
                  <Skeleton
                    classNames={{
                      base: "bg-neutral-700",
                    }}
                    className="mx-2 rounded-lg"
                  >
                    <div className=" h-4 rounded-lg"></div>
                  </Skeleton>
                  <Skeleton
                    classNames={{
                      base: "bg-neutral-700",
                    }}
                    className="mx-2 rounded-lg"
                  >
                    <div className=" h-4 rounded-lg"></div>
                  </Skeleton>
                </div>
                <Skeleton
                  classNames={{
                    base: "bg-neutral-700",
                  }}
                  className="mx-2 mr-52 rounded-lg"
                >
                  <div className="  h-8 w-20 rounded-lg"></div>
                </Skeleton>
              </div>
            </Card>
          ))}
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
