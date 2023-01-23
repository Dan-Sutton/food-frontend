import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/burgerIcon.module.css";
import BurgerMenu from "./bugerMenu";
import { AnimatePresence } from "framer-motion";

const BurgerIcon = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className={styles.burgerIcon}>
      <Image
        className={styles.icon}
        width={65}
        height={65}
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
        }
        onClick={() => setOpenMenu(!openMenu)}
      />

      <AnimatePresence>
        {openMenu && <BurgerMenu openMenu={openMenu} close={setOpenMenu} />}
      </AnimatePresence>
    </div>
  );
};

export default BurgerIcon;
