"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import { Image } from "@nextui-org/react";

interface Product {
  product_id: number;
  product_name: string;
  product_images: string;
  product_price: string;
  product_description: string;
}

interface Props {
  products: Product[];
}

const MobileSlider: React.FC<Props> = ({ products }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    className: "flex items-center justify-center gap-2",
  };

  return (
    <Slider {...settings} className="z-50">
      {products.map((product) => (
        <div
          key={product.product_id}
          className="min-w-[20rem] max-w-[20rem] overflow-hidden rounded-none bg-[#121212] px-3 py-4 "
        >
          <div className="  flex w-full items-center justify-center overflow-hidden px-2 py-1">
            <Image
              src={product.product_images}
              alt={product.product_name}
              className=" h-64 rounded-sm "
            />
          </div>
          <div className="flex flex-col">
            <h6 className="block py-2 text-xl">{product.product_name}</h6>
            <div className="flex flex-col gap-0 pb-4 ">
              <strong className="text-2xl">${product.product_price}</strong>
            </div>
            <button className=" flex w-full items-center justify-center gap-1.5 rounded-md border border-transparent bg-white py-1 text-black transition-all duration-200 ease-in-out hover:border-white hover:bg-[#0f0f0f] hover:text-white ">
              Agregar al carrito <ShoppingCartIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default MobileSlider;
