"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Component() {
  const images = [
    { id: 1, path: "/Carousel/1.jpg" },
    { id: 2, path: "/Carousel/2.jpg" },
    { id: 3, path: "/Carousel/3.jpg" },
    { id: 4, path: "/Carousel/4.jpg" },
  ];
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem
            key={image.id}
            className="basic-1/2 mx-0 max-w-[50%] px-0"
          >
            <Image
              src={image.path}
              alt={"Path: " + image.path}
              height={800}
              width={600}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
