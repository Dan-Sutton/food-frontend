import React from "react";
import { useState } from "react";
import Image from "next/image";
import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
import styles from "../../styles/productPage.module.css";
import Navbar from "../../components/navbar";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useStateContext } from "../../lib/context";

const ProductDetails = () => {
  const { quantity, increaseQty, decreaseQty, cartItems, showCart, onAdd } =
    useStateContext();
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
      <Navbar />

      <div className={styles.productContent}>
        <Image
          className={styles.productImage}
          alt="productImage"
          width={300}
          height={300}
          src={image.data.attributes.url}
        />
        <div className={styles.descColumn}>
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <div className={styles.quantity}>
            <span>Quantity:</span>

            <AiFillMinusCircle onClick={() => decreaseQty(quantity)} />

            <p>{quantity}</p>

            <AiFillPlusCircle onClick={increaseQty} />
          </div>
          <button
            className={styles.cartbutton}
            onClick={() => onAdd(data.products.data[0].attributes, quantity)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
