import React from "react";
import Link from "next/link";
import styles from "../styles/nav.module.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Cart from "./cart";
import { useStateContext } from "../lib/context";
import { AnimatePresence } from "framer-motion";
// import User from "./User";
import { useUser } from "@auth0/nextjs-auth0/client";

const Nav = () => {
  const { setShowCart, showCart, totalQuantities } = useStateContext();
  const { user, error, isLoading } = useUser();
  return (
    <div className={styles.navbar}>
      <div className={styles.navlist}>
        <Link href={"/"}>home</Link>
        {/* <Link href={"/"}>about</Link> */}
        <Link href={"/shop"}>shop</Link>
        <Link href={"/contact"}>contact</Link>
        {/* <Link href={"/book"}>book</Link> */}
        <Link href={"/event"}>events</Link>
        <Link href={"/gallery"}>gallery</Link>
        {/* <User /> */}
        <div className={styles.cartDiv}>
          <HiOutlineShoppingBag
            className={styles.cartIcon}
            onClick={() => setShowCart(!showCart)}
          />
          {totalQuantities > 0 && (
            <span className={styles.quantities}>{totalQuantities}</span>
          )}
        </div>
      </div>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </div>
  );
};

export default Nav;
