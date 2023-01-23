import React, { useState } from "react";
import Nav from "./nav";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import styles from "../styles/burgermenu.module.css";
import { motion } from "framer-motion";


const BurgerMenu = ({ openMenu, close }) => {
  return (
    <motion.div
      className={styles.background}
      onClick={() => close(!openMenu)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.1 } }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <motion.div
        className={styles.burgercontainer}
        onClick={(e) => {
          e.stopPropagation();
        }}
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
      ></motion.div>
    </motion.div>
  );
};

export default BurgerMenu;
