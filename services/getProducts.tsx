export default async function getProducts() {
  const result = await fetch(`${process.env.apiUrl}/products`);
  if (!result.ok) throw new Error("Failed to fetch data");
  return result.json();
}
