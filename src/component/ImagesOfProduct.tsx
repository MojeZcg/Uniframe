"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "@nextui-org/react";

export default function HoverImageProduct({
  images,
}: Readonly<{ images: string }>) {
  const settings = {
    dots: true,
    slidesToShow: 1,
    autoplay: false,
  };
  const urls = images ? images.split(",") : [];
  return (
    <div>
      <Slider {...settings}>
        {urls.map((url, i) => (
          <Image
            key={url}
            src={url}
            height={300}
            width={220}
            alt={i + " url"}
            className=" z-50 rounded-none"
          />
        ))}
      </Slider>
    </div>
  );
}
