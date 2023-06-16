"use client";

import { useRouter } from "next/navigation";

const Search = (props: any) => {
  const router = useRouter();

  const handleOnChange = (event: any) => {
    const catName = event.target.value;
    router.push(`/products/?catName=${catName}`);
  };

  return (
    <select
      id="sCat"
      name="sCat"
      className="px-4 py-2 rounded-md"
      onChange={handleOnChange}
    >
      <option value="">All Categories</option>
      {props.categories.map((item: string) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Search;
