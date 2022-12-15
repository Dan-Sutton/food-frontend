import React from "react";
import Image from "next/image";
import { useStateContext } from "../lib/context";
import styles from "../styles/cart.module.css";

const Cart = () => {
  const { cartItems } = useStateContext();
  return (
    <div className={styles.cartBackground}>
      <div className={styles.cart}>
        <div>
          <h1>Empty cart 😮</h1>
        </div>
        <div>
          <Image
            height={100}
            width={100}
            alt=""
            src={
              "https://scontent-lcy1-2.xx.fbcdn.net/v/t39.30808-6/299298642_1675906919476461_7353303474712931688_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a26aad&_nc_ohc=HzdODkC3QycAX_NSwCE&_nc_ht=scontent-lcy1-2.xx&oh=00_AfAZO9q1NmlQOLEF4XinwvHRyYCRzn-0ZKarbINpSOHVjQ&oe=639F98EA"
            }
          />

          <div>
            <h3>title</h3>
            <h3>price</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
