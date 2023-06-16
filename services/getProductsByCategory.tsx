export default async function getProductsByCategory(catName: string) {
  const result = await fetch(`${process.env.apiUrl}/categories/${catName}`);
  if (!result.ok) throw new Error("Failed to fetch data");
  return result.json();
}
