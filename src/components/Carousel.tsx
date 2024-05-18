"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Component() {
  const images = [
    "/Carousel/1.jpg",
    "/Carousel/2.jpg",
    "/Carousel/3.jpg",
    "/Carousel/4.jpg",
  ];

  return (
    <div className=" flex max-h-[calc(100vh-5rem)] w-full overflow-hidden">
      <Carousel>
        <CarouselContent>
          {images.map((i) => (
            <CarouselItem key={i} className="basic-1/2 ">
              <Image
                src={i}
                alt=""
                width={2000}
                height={2000}
                className=" object-fill"
              />
            </CarouselItem>
          ))}
          <CarouselPrevious />
          <CarouselNext />
        </CarouselContent>
      </Carousel>
    </div>
  );
}
