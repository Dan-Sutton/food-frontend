import React from "react";
import Image from "next/image";
import { useStateContext } from "../lib/context";
import styles from "../styles/cart.module.css";

const Cart = () => {
  const { cartItems } = useStateContext();
  return (
    <div className={styles.cartBackground}>
      <div className={styles.cart}>
        {cartItems.legnth < 1 && (
          <div>
            <h1>Empty cart 😮</h1>
          </div>
        )}
        {cartItems.legnth >= 1 &&
          cartItems.map((item) => {
            return (
              <div className={styles.card}>
                <Image
                  height={100}
                  width={100}
                  alt={item.title}
                  src={item.image.data.attributes.url}
                />

                <div>
                  <h3>{item.title}</h3>
                  <h3>{item.price}</h3>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Cart;
