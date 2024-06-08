import Image from "next/image";

export default function page({ params }: { params: { product_id: string } }) {
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
