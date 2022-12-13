import React from "react";
import { useQuery } from "urql";
import { PRODUCT_QUERY } from "../lib/query";

const Shop = () => {
  const [results] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = results;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Something went wrong...{error.message}</p>;
  console.log(data);
  return <div>Shop</div>;
};

export default Shop;
