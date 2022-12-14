import React from "react";
import Image from "next/image";
import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
import styles from "../../styles/productPage.module.css";

const ProductDetails = () => {
  const { query } = useRouter();
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });
  const { data, fetching, error } = results;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Something went wrong...{error.message}</p>;

  const { title, description, image } = data.products.data[0].attributes;

  return (
    <div className={styles.productPage}>
      <Image width={500} height={500} src={image.data.attributes.url} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div>
        <p>QUANTITY</p>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
