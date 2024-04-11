import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  cuotas: string;
  pricexcuotas: string;
}

export default function TopProducts(products: Readonly<Product[]>) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10 ">
      {products.map((product) => (
        <Card shadow="sm" key={product.id} isPressable>
          <CardBody className=" w-20 ">
            <Image
              shadow="sm"
              radius="lg"
              alt={product.name}
              className="  h-[14px] object-cover"
              src={product.image}
            />
          </CardBody>
          <CardFooter className="justify-between text-small">
            <b>{product.name}</b>
            <p className="text-default-500">{product.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
