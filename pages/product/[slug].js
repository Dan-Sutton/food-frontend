import React from "react";
import Image from "next/image";
import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";

const ProductDetails = () => {
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: "raw-Lavender-honey" },
  });
  const { data, fetching, error } = results;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Something went wrong...{error.message}</p>;
  console.log(data);

  return (
    <div>
      <Image />
      <div>
        <h3>TITLE</h3>
        <p>DESCRIPTION</p>
      </div>
      <div>
        <p>QUANTITY</p>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
