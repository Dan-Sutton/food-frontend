import React from "react";
import { useRouter } from "next/router";

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
    <div>
      <div>
        <h1>Thank you for your order!</h1>
        <h2>A confirmation has been sent to</h2>
        <h2>{order.customer_details.email}</h2>
        <div>
          <h3>Address</h3>
          {Object.entries(order.customer_details.address).map(([key, val]) => (
            <p key={key}>
              {key}: {val}
            </p>
          ))}
        </div>
        <div>
          <h3>Products</h3>
          <h3>ALL THE PRODUCTS</h3>
        </div>
        <button onClick={() => route.push("/shop")}>Continue shopping</button>
      </div>
    </div>
  );
};

export default Success;
