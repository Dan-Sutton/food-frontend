import React from "react";
import Image from "next/image";
import styles from "../styles/product.module.css";
import Link from "next/link";

const ProductComponent = ({ product }) => {
  const { title, price, image, slug } = product.attributes;

  return (
    <div className={styles.product}>
      <Link href={`/product/${slug}`}>
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
      </Link>
    </div>
  );
};

export default ProductComponent;
