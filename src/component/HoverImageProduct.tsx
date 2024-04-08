"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HoverImageProduct({
  id,
  images,
}: {
  id: string;
  images: string;
}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  const urls = images ? images.split(",") : [];
  return (
    <div className="">
      <Slider {...settings}>
        {urls.map((url) => (
          <img
            key={id}
            src={url}
            alt={id}
            className=" opacity-bottom rounded-none "
          />
        ))}
      </Slider>
    </div>
  );
}
