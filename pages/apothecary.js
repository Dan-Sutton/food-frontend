import React from "react";
import { useQuery } from "urql";
import ProductComponent from "../components/product";
import { PRODUCT_QUERY } from "../lib/query";
import styles from "../styles/shop.module.css";
import { motion } from "framer-motion";
import Footer from "../components/footer";

function Shop() {
  return (
    <section className={styles.apothecaryPage}>
      <div className={styles.soon}>COMING SOON...</div>
    </section>
  );
  // const [results] = useQuery({ query: PRODUCT_QUERY });
  // const { data, fetching, error } = results;
  // if (fetching) return <p>Loading...</p>;
  // if (error) return <p>Something went wrong...{error.message}</p>;
  // const products = data.products.data;
  // return (
  //   <div className={styles.shop}>
  //     <div className={styles.shopcontent}>
  //       <h1>
  //         {products.length == 0
  //           ? "NO PRODUCTS AT THE MOMENT!"
  //           : "LATEST PRODUCTS"}
  //       </h1>
  //       <motion.div
  //         className={styles.products}
  //         initial={{ opacity: 0, y: 20 }}
  //         animate={{ opacity: 1, y: 0 }}
  //         transition={{ duration: 1, delay: 0.2 }}
  //       >
  //         {products.map((product, index) => (
  //           <ProductComponent key={product.attributes.slug} product={product} />
  //         ))}
  //       </motion.div>
  //     </div>
  //     <Footer />
  //   </div>
  // );
}

export default Shop;
