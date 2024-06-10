"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export function productPage({ params }: { params: { product_id: string } }) {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState();

  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products/${params.product_id}/`,
      );
      if (res) {
        const data = await res.json();
        if (data) setProduct(data);
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

  return (
    <section className="">
      <div> </div>
      <div>
        <div>
          <Image alt="" src="" />
        </div>
        <div></div>
      </div>
    </section>
  );
}
