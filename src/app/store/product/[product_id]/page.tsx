export default function page({ params }: { params: { product_id: string } }) {
  return (
    <div className="text-7xl text-white">
      Producto numero {params.product_id}
    </div>
  );
}
