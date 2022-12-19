import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/success.module.css";

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
  const route = useRouter();
  return (
    <div className={styles.successpage}>
      <div className={styles.successcard}>
        <h1>Thank you for your order!</h1>
        <h2>A confirmation has been sent to</h2>
        <h2>{order.customer_details.email}</h2>

        <div className={styles.detailsrow}>
          <div className={styles.addressdiv}>
            <h3>Address</h3>
            {Object.entries(order.customer_details.address).map(
              ([key, val]) => (
                <p key={key}>
                  {key}: {val}
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
                  <p>Price: £{item.price.unit_amount}</p>
                </div>
              ))}
            </h3>
          </div>
        </div>

        <button
          className={styles.successbutton}
          onClick={() => route.push("/shop")}
        >
          Continue shopping
        </button>
      </div>
    </div>
  );
};

export default Success;
