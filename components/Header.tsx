import Link from "next/link";
import React from "react";
import CartBtn from "./CartBtn";
import Search from "./Search";
import getCategories from "@/services/getCategories";

const Header = async () => {
  var categoriesData: Promise<string[]> = getCategories();
  const categories = await categoriesData;

  return (
    <header className="bg-gray-100 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div>
          <Link className="text-lg font-bold hover:cursor-pointer" href={"/"}>
            Home
          </Link>
        </div>
        <div>
          <Search categories={categories} />
        </div>
        <div>
          <Link className="ml-auto mr-4" href={"/cart"}>
            <CartBtn />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
