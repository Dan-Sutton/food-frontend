import React from "react";
import Link from "next/link";
import styles from "../styles/nav.module.css";

const Nav = () => {
  return (
    <div className={styles.navbar}>

      <div className={styles.navlist}>
        <Link href={"/"}>home</Link>
        <Link href={"/about"}>about</Link>
        <Link href={"shop"}>shop</Link>
        <Link href={"book"}>book</Link>
        <Link href={"gallery"}>gallery</Link>
      </div>
    </div>
  );
};

export default Nav;
