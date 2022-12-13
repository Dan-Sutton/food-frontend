import React from "react";
import Image from "next/image";
import styles from "../styles/product.module.css";

const ProductComponent = ({ product }) => {
  const { title, price, image } = product.attributes;

  return (
    <div className={styles.product}>
      <div>
        <Image
          className={styles.image}
          src={image.data.attributes.url}
          alt="product"
          width={500}
          height={500}
        />
      </div>

      <h2>{title}</h2>
      <h3>{`£${price}`}</h3>
    </div>
  );
};

export default ProductComponent;
