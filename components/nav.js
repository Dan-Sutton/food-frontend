import React from "react";
import Link from "next/link";
import styles from "../styles/nav.module.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Cart from "./cart";
import { useStateContext } from "../lib/context";
import { AnimatePresence } from "framer-motion";

const Nav = () => {
  const { setShowCart, showCart, totalQuantities } = useStateContext();
  return (
    <div className={styles.navbar}>
      <div className={styles.navlist}>
        <Link href={"/"}>home</Link>
        <Link href={"/about"}>about</Link>
        <Link href={"/shop"}>shop</Link>
        <Link href={"/book"}>book</Link>
        <Link href={"/gallery"}>gallery</Link>
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
