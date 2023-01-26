import React from "react";
import Link from "next/link";
import styles from "../styles/burgermenu.module.css";
import { motion } from "framer-motion";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useStateContext } from "../lib/context";

const BurgerMenu = ({ openMenu, close }) => {
  const { setShowCart, showCart, totalQuantities } = useStateContext();
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
      >
        <div className={styles.navbar}>
          <div className={styles.navlist}>
            <div className={styles.cartDiv}>
              <Link href={"/cartpage"}>
                <HiOutlineShoppingBag
                  onClick={() => {
                    close(!openMenu);
                  }}
                />
              </Link>

              {totalQuantities > 0 && (
                <span className={styles.quantities}>{totalQuantities}</span>
              )}
            </div>
            <Link href={"/"} onClick={() => close(!openMenu)}>
              home
            </Link>
            <Link href={"/apothecary"} onClick={() => close(!openMenu)}>
              apothecary
            </Link>
            <Link href={"/contact"} onClick={() => close(!openMenu)}>
              contact
            </Link>
            <Link href={"/event"} onClick={() => close(!openMenu)}>
              events
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BurgerMenu;
