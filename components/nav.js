import React from "react";
import Link from "next/link";
import styles from "../styles/nav.module.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Cart from "./cart";

const Nav = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navlist}>
        <Link href={"/"}>home</Link>
        <Link href={"/about"}>about</Link>
        <Link href={"/shop"}>shop</Link>
        <Link href={"/book"}>book</Link>
        <Link href={"/gallery"}>gallery</Link>
        <HiOutlineShoppingBag />
      </div>
      <Cart />
    </div>
  );
};

export default Nav;
