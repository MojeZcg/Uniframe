"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplaySpeed: 4000,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {images.map((src, i) => (
        <div
          key={src}
          className="flex items-center justify-center border-y-[1px] border-black"
        >
          <Image
            src={src}
            alt={`Main Image - number ${i}`}
            width={768}
            height={400}
          />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
