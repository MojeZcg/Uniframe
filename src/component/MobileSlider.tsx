"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import { Button, Image } from "@nextui-org/react";
import Link from "next/link";

interface Product {
  product_id: number;
  product_name: string;
  product_images: string;
  product_price: string;
  product_description: string;
  product_available: boolean;
}

const MobileSlider = ({ products }: { products: Product[] }) => {
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
      {products.map((p) => (
        <Link
          key={p.product_id}
          href={`/store/product/${p.product_id}`}
          className="flex  h-[29rem] w-[19rem] flex-col items-start justify-center overflow-hidden rounded-xl  border bg-[#0a0a0a] p-3  "
        >
          <div className="  flex w-full items-center justify-center overflow-hidden px-2 py-2">
            <Image
              src={p.product_images.split(",")[0]}
              alt={p.product_name}
              className=" h-64  rounded-sm "
            />
          </div>
          <div className="flex w-full flex-col">
            <h6 className="font block truncate py-2 text-2xl font-semibold">
              {p.product_name}
            </h6>
            <div className="flex flex-col gap-0 pb-2 ">
              <p className="mb-1 line-clamp-2 text-sm text-neutral-300">
                {p.product_description}
              </p>
              <strong className="text-2xl">${p.product_price}</strong>
            </div>

            {p.product_available ? (
              <Button radius="sm" color="success" variant="ghost" className="">
                Agregar al carrito <ShoppingCartIcon className="h-5 w-5" />
              </Button>
            ) : (
              <Button
                isDisabled={true}
                radius="sm"
                color="default"
                variant="ghost"
              >
                Agotado
              </Button>
            )}
          </div>
        </Link>
      ))}
    </Slider>
  );
};

export default MobileSlider;
