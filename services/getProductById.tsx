export default async function getProductById(productId: number) {
  const result = await fetch(`${process.env.apiUrl}/products/${productId}`);
  if (!result.ok) throw new Error("Failed to fetch data");
  return result.json();
}
