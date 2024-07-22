"use client";
import React from "react";

import Product from "./Product";

export default function ProductList({ products }) {

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 w-full p-2 lg:grid-cols-4 gap-10 mt-3">
      {products.map((product, i) => {
        return <Product key={i} product={product} />;
      })}
      </div>
  );
}
