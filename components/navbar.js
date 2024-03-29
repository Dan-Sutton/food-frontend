import React from "react";
import styles from "../styles/navbar.module.css";
import logo from "../public/alchemylogo.png";
import Image from "next/image";
import Nav from "./nav";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.titlediv}>
        <p className={styles.title}>THE FOOD ALCHEMIST</p>
        <div className={styles.logocontainer}>
          <Image className={styles.logo} src={logo} alt="alchemylogo" />
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Navbar;
