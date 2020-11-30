import React from "react";
import ProductCard from "./productCard";

export default function ProductsTable() {
  return (
    <ul
      id="flexiselDemo3"
      style={{ display: "flex", listStyleType: "none", flexWrap: "wrap" }}
    >
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </ul>
  );
}
