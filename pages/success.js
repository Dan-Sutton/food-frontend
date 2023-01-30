import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/success.module.css";
import { motion } from "framer-motion";
import formatMoney from "../lib/formatMoney";

const stripe = require("stripe")(`${process.env.NEXT_PUBLIC_SECRET_KEY}`);

export async function getServerSideProps(params) {
  const order = await stripe.checkout.sessions.retrieve(
    params.query.session_id,
    {
      expand: ["line_items"],
    }
  );
  return { props: { order } };
}

const Success = ({ order }) => {
  function formatAddressTitle(title) {
    const capital = title.charAt(0).toUpperCase() + title.slice(1);
    return capital.split("_").join(" ");
  }
  const route = useRouter();
  return (
    <div className={styles.successpage}>
      <motion.div
        className={styles.successcard}
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          type: "spring",
          bounce: 0.3,
        }}
      >
        <h1>Thank you for your order!</h1>
        <h2>A confirmation has been sent to</h2>
        <h2>{order.customer_details.email}</h2>

        <div className={styles.detailsrow}>
          <div className={styles.addressdiv}>
            <h3>Address</h3>
            {Object.entries(order.customer_details.address).map(
              ([key, val]) => (
                <p key={key}>
                  {formatAddressTitle(key)}: {val}
                </p>
              )
            )}
          </div>
          <div className={styles.productdiv}>
            <h3>Products</h3>
            <h3>
              {order.line_items.data.map((item) => (
                <div key={item.id}>
                  <p>Product: {item.description}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: {formatMoney(item.price.unit_amount)}</p>
                </div>
              ))}
            </h3>
          </div>
        </div>

        <button
          className={styles.successbutton}
          onClick={() => route.push("/apothecary")}
        >
          Continue shopping
        </button>
      </motion.div>
    </div>
  );
};

export default Success;
