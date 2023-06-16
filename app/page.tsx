import Link from "next/link";

export default async function Home() {
  return (
    <>
      <p>
        <br />
        <br />
        <br />
        <Link
          className="font-bold text-lg flex justify-center hover:cursor-pointer"
          href="/products"
        >
          Products
        </Link>
      </p>
    </>
  );
}
