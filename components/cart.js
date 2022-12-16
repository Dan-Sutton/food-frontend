import React from "react";
import Image from "next/image";
import { useStateContext } from "../lib/context";
import styles from "../styles/cart.module.css";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const Cart = () => {
  const { cartItems, setShowCart, showCart, onAdd, onRemove, totalPrice } =
    useStateContext();
  return (
    <div
      className={styles.cartBackground}
      onClick={() => {
        setShowCart(!showCart);
      }}
    >
      <div
        className={styles.cart}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {cartItems.length < 1 && (
          <div>
            <h1>Your Cart is empty</h1>
          </div>
        )}
        {cartItems.length >= 1 &&
          cartItems.map((item) => {
            return (
              <div key={item.slug} className={styles.card}>
                <Image
                  height={100}
                  width={100}
                  alt={item.title}
                  src={item.image.data.attributes.url}
                />

                <div className={styles.itemInfo}>
                  <h3>{item.title}</h3>
                  <p>{`£${item.price}`}</p>
                  <div className={styles.quantity}>
                    <span>Quantity:</span>

                    <AiFillMinusCircle
                      onClick={() => {
                        onRemove(item);
                      }}
                    />

                    <p>{item.quantity}</p>

                    <AiFillPlusCircle onClick={() => onAdd(item, 1)} />
                  </div>
                </div>
              </div>
            );
          })}
        {cartItems.length >= 1 && (
          <div>
            <h3>{`Subtotal: £${totalPrice}`}</h3>
            <button className={styles.purchase}>Purchase</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
