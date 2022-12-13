import React from "react";
import { useQuery } from "urql";
import ProductComponent from "../components/product";
import Product from "../components/product";
import { PRODUCT_QUERY } from "../lib/query";

const Shop = () => {
  const [results] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = results;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Something went wrong...{error.message}</p>;
  const products = data.products.data;
  return (
    <div>
      <h1>SHOP</h1>
      {products.map((product) => (
        <ProductComponent product={product} />
      ))}
    </div>
  );
};

export default Shop;
