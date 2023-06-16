import Image from "next/image";
import AddToCartBtn from "./AddToCartBtn";

const Product = ({ product }: { product: Product }) => {
  return (
    <div className="justify-between flex flex-col p-4 border hover:bg-gray-200 transition duration-300">
      <div className="flex items-center flex-col">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <div className="aspect-w-1 aspect-h-1 mb-2">
          <Image
            src={product.image}
            alt={product.name}
            width={150}
            height={150}
          />
        </div>

        <p className="text-gray-600">
          <b>Category:</b> {product.category}
        </p>
        <p className="text-gray-600">
          <b>Price:</b> {product.price} €
        </p>
      </div>

      <div className="">
        <AddToCartBtn product={product} />
      </div>
    </div>
  );
};

export default Product;
