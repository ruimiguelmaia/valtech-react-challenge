import React from "react";
import getProductById from "@/services/getProductById";
import Image from "next/image";
import Link from "next/link";

export default async function ProductPage({
  params,
}: {
  params: { id: number };
}) {
  const productData: Promise<Product> = getProductById(params.id);
  const product = await productData;

  return (
    <>
      <section className="product-list flex justify-center">
        <div className="product-container">
          <p>
            <Link className="hover:cursor-pointer" href="/products">
              Back
            </Link>
          </p>
          <div className="card">
            <div className="title">{product.name}</div>
            <div className="image">
              <Image
                src={product.image}
                width={250}
                height={250}
                alt={product.name}
              />
            </div>
            <p className="text-gray-600">
              <b>Category:</b> {product.category}
            </p>
            <p className="text-gray-600">
              <b>Price:</b> {product.price}
            </p>
            <p className="text-gray-600">
              <b>Description:</b> {product.description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
