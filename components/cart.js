import React from "react";
import Image from "next/image";
import { useStateContext } from "../lib/context";
import styles from "../styles/cart.module.css";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { motion } from "framer-motion";
import getStripe from "../lib/getStripe";

const Cart = () => {
  const { cartItems, setShowCart, showCart, onAdd, onRemove, totalPrice } =
    useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartItems),
    });
    const data = await response.json();
    await stripe.redirectToCheckout({ sessionId: data.id });
  };

  const card = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        bounce: 0.3,
      },
    },
  };

  const cards = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.1 } }}
      className={styles.cartBackground}
      onClick={() => {
        setShowCart(!showCart);
      }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <motion.div
        initial={{ x: 200 }}
        animate={{
          x: 0,
          transition: {
            duration: 0.1,
            type: "spring",
            damping: 10,
            mass: 0.35,
            stiffness: 100,
          },
        }}
        exit={{
          x: 500,
          opacity: 0,
          transition: {
            duration: 0.1,
            type: "spring",
            damping: 10,
            mass: 0.35,
            stiffness: 100,
          },
        }}
        className={styles.cart}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {cartItems.length < 1 && (
          <div>
            <MdOutlineCancel
              className={styles.exit}
              onClick={() => setShowCart(!showCart)}
            />

            <h1>YOUR CART IS EMPTY</h1>
          </div>
        )}
        <motion.div variants={cards} initial="hidden" animate="show" layout>
          {cartItems.length >= 1 &&
            cartItems.map((item) => {
              return (
                <motion.div
                  layout
                  variants={card}
                  key={item.slug}
                  className={styles.card}
                >
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
                </motion.div>
              );
            })}
        </motion.div>

        {cartItems.length >= 1 && (
          <div>
            <h3>{`Subtotal: £${totalPrice}`}</h3>
            <button
              className={styles.purchase}
              onClick={() => handleCheckout()}
            >
              Purchase
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Cart;
