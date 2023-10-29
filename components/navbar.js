import React from "react";
import styles from "../styles/navbar.module.css";
import Nav from "./nav";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.titlediv}>
        <p className={styles.title}>THE FOOD ALCHEMIST</p>
      </div>
      <div className={styles.navItems}>
        <Nav />
      </div>
    </div>
  );
};

export default Navbar;
