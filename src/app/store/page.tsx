"use client";
import ImagesOfProduct from "@/component/store/ImagesOfProduct";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import { Button, Divider, Link, Pagination, Slider } from "@nextui-org/react";
import NextLink from "next/link";
import { useEffect, useState } from "react";

type Product = {
  product_id: number;
  product_name: string;
  product_price: string;
  product_images: string;
  product_available: boolean;
  product_description: string;
  product_view_count: number;
  product_created_at: string;
};

export default function Store() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/api/products/");
      if (res) {
        const data = await res.json();
        if (data) setProducts(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const priceFilters = [
    {
      id: "1",
      text: "3.000$ a 30.000$",
      link: "/",
      options: "114",
      isDisable: false,
    },
    {
      id: "2",
      text: "30.000$ a 60.000$",
      link: "/",
      options: "9",
      isDisable: false,
    },
    {
      id: "3",
      text: "60.000$ a 90.000$",
      link: "/",
      options: "5",
      isDisable: false,
    },
    {
      id: "4",
      text: "Hasta 100.000$",
      link: "/",
      options: "2",
      isDisable: false,
    },
  ];

  const materials = [
    { id: "1", text: "Pino", link: "", isDisable: false },
    { id: "2", text: "Acero Inoxidable", link: "", isDisable: false },
    { id: "3", text: "Roble", link: "", isDisable: false },
    { id: "4", text: "Nogal", link: "", isDisable: false },
    { id: "5", text: "Cerezo", link: "", isDisable: false },
    { id: "6", text: "Caoba", link: "", isDisable: false },
    { id: "7", text: "Aluminio", link: "", isDisable: false },
    { id: "8", text: "Latón", link: "", isDisable: false },
  ];

  const frameStyles = [
    { id: "1", name: "Clásico", link: "", isDisable: false },
    { id: "2", name: "Moderno/Minimalista", link: "", isDisable: false },
    { id: "3", name: "Vintage/Retro", link: "", isDisable: false },
    { id: "4", name: "Ecléctico/Artístico", link: "", isDisable: false },
  ];

  return (
    <div className=" flex h-auto w-full justify-between bg-main-dark  pt-6 text-white ">
      <div className="ml-3 w-[18rem] 2xl:w-[30rem]">
        <h3 className=" text-2xl ">Filtros</h3>
        <Divider className="my-2 w-full bg-neutral-300" />
        <h3 className=" px-2 text-xl underline decoration-neutral-600 underline-offset-4 ">
          Precio
        </h3>

        <ul className=" flex flex-col gap-1 px-4 pb-2 pt-3 text-sm text-gray-200">
          {priceFilters.map((filter) => (
            <li key={filter.id}>
              <Link
                size="sm"
                className="text-neutral-100"
                underline="hover"
                href={filter.link}
                isDisabled={filter.isDisable}
              >
                {filter.text} ({filter.options})
              </Link>
            </li>
          ))}
        </ul>
        <Slider
          size="sm"
          step={50}
          label="Min - Max"
          minValue={0}
          maxValue={20000}
          defaultValue={[0, 5000]}
          formatOptions={{ style: "currency", currency: "ARS" }}
          className="max-w-full px-4 pb-5 pt-2"
        />
        <Divider className="w-full bg-neutral-300" />
        <h3 className=" px-2  pt-5 text-xl ">Materiales</h3>
        <ul className=" flex flex-col px-6 pb-4 pt-2  text-sm ">
          {materials.map((material) => (
            <li key={material.id}>
              <Link
                size="md"
                className="text-white"
                underline="hover"
                href={material.link}
              >
                {material.text}
              </Link>
            </li>
          ))}
        </ul>
        <Divider className="w-full bg-neutral-300" />
        <h3 className=" px-2 pb-2 pt-5 text-xl ">Estilos</h3>
        <ul className=" flex flex-col px-6 pb-2 text-sm text-gray-200">
          {frameStyles.map((style) => (
            <li key={style.id}>
              <Link
                size="md"
                className="text-neutral-100"
                underline="hover"
                href={style.link}
              >
                {style.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className=" w-[calc(100vw-18rem)]">
        <div className=" flex flex-wrap items-center justify-center gap-x-5 gap-y-4 bg-main-dark  ">
          {loading && <div>Loading...</div>}
          {products?.map((p: Product) => (
            <NextLink
              key={p.product_id}
              href={`http://localhost:3000/${p.product_id}`}
              className="z-0 mb-4 w-[19rem] overflow-hidden rounded-lg border-2 border-white "
            >
              <div className=" z-50 ml-auto mr-auto mt-4 h-[19rem] w-[13rem] overflow-visible">
                <ImagesOfProduct
                  images={p.product_images}
                  name={p.product_name}
                />
              </div>

              <div className=" max-w-[20rem] px-4 py-3">
                <h4 className="font-semibold text-white ">{p.product_name}</h4>
                <h6 className="line-clamp-2 text-sm text-gray-300">
                  {p.product_description}
                </h6>
                <div className="flex w-full items-center justify-between pt-2">
                  <strong className="text-xl font-bold">
                    {p.product_price} $
                  </strong>
                  <Button
                    size="md"
                    radius="sm"
                    color="success"
                    variant="ghost"
                    className=" ring-transparent"
                  >
                    Agregar <ShoppingCartIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </NextLink>
          ))}
        </div>
        <div className="mt-10 flex w-full items-center justify-end pr-10">
          <div className="max-w-md pr-5 ">
            <Pagination
              total={5}
              initialPage={1}
              variant="light"
              loop
              showControls
              classNames={{
                wrapper: "transition-all duration-300 ",
                prev: "bg-neutral-900 text-white hover:text-black",
                next: "bg-neutral-900 text-white hover:text-black",
                item: "text-white border-1 border-neutral-700 hover:text-black",
                cursor: "bg-neutral-950 border-1 rounded-xl border-white",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
