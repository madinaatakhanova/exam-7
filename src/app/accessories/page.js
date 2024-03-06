import Products from "@/components/products";
import React from "react";

const AccessoriesPage = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return (
    <div className="flex w-full mt-20">
      <section className="flex flex-col basis-[30%] px-10">
        <div className="flex flex-col">
          <div>
            <h1 className="text-5xl text-black">Categories</h1>
          </div>
          <div className="flex flex-col mt-4">
            <p className="text-2xl text-black mt-3 cursor-pointer">all</p>
            <p className="text-2xl text-black mt-3 cursor-pointer">
              electronics
            </p>
            <p className="text-2xl text-black mt-3 cursor-pointer">jewelery</p>
            <p className="text-2xl text-black mt-3 cursor-pointer">
              men`s clothing
            </p>
            <p className="text-2xl text-black mt-3 cursor-pointer">
              women`s clothing
            </p>
          </div>
        </div>
      </section>
      <div className="w-full min-h-screen grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 basis-[70%]">
        {products.map((product) => (
          <Products key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AccessoriesPage;
