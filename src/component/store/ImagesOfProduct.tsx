"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "@nextui-org/react";

export default function ImagesOfProduct({
  images,
  name,
}: Readonly<{ images: string; name: string }>) {
  const settings = {
    dots: false,
    slidesToShow: 1,
    autoplay: false,
  };

  const urls = images ? images.split(",") : [];
  return (
    <div>
      <Slider {...settings}>
        {urls.map((url, i) => (
          <div
            key={i + url}
            className="  flex w-full items-center justify-center overflow-hidden "
          >
            <Image
              src={url}
              alt={name + " product image n°" + i}
              className=" h-72 rounded-none object-fill"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
