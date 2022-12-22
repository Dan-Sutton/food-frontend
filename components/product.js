import React from "react";
import Image from "next/image";
import styles from "../styles/product.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const ProductComponent = ({ product }) => {
  const { title, price, image, slug } = product.attributes;

  return (
    <motion.div className={styles.product} whileHover={{ scale: 1.07 }}>
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
    </motion.div>
  );
};

export default ProductComponent;
