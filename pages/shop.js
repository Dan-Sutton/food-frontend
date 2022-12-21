import React from "react";
import { useQuery } from "urql";
import ProductComponent from "../components/product";
import { PRODUCT_QUERY } from "../lib/query";
import styles from "../styles/shop.module.css";

const Shop = () => {
  const [results] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = results;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Something went wrong...{error.message}</p>;
  const products = data.products.data;
  return (
    <div className={styles.shop}>
      <div className={styles.shopcontent}>
        <h1>Latest products</h1>
        <div className={styles.products}>
          {products.map((product, index) => (
            <ProductComponent key={product.attributes.slug} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
