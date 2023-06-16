export default async function getCategories() {
  const result = await fetch(`${process.env.apiUrl}/categories`);
  if (!result.ok) throw new Error("Failed to fetch data");
  return result.json();
}
