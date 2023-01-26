import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/burgerIcon.module.css";
import BurgerMenu from "./bugerMenu";
import { AnimatePresence } from "framer-motion";
import icon from "../lib/gallery/hamburgericon.png";

const BurgerIcon = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className={styles.burgerIcon}>
      <Image
        alt=""
        className={styles.icon}
        width={50}
        height={50}
        src={icon}
        onClick={() => setOpenMenu(!openMenu)}
      />

      <AnimatePresence>
        {openMenu && <BurgerMenu openMenu={openMenu} close={setOpenMenu} />}
      </AnimatePresence>
    </div>
  );
};

export default BurgerIcon;
