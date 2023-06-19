import Product from "@/components/Product";
import getProducts from "@/services/getProducts";
import getProductsByCategory from "@/services/getProductsByCategory";

export default async function Products(props: any) {
  var productsData: Promise<Product[]>;
  const catName = props.searchParams.catName;

  if (typeof catName != "undefined" && catName !== "") {
    productsData = getProductsByCategory(catName);
  } else {
    productsData = getProducts();
  }
  const products = await productsData;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
