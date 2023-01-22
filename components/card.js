import React from "react";
import styles from "../styles/card.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

const Card = ({ image, title, content, handleShowCardModal, index }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.07 }}
      className={styles.card}
      onClick={() => handleShowCardModal(index)}
    >
      <Image
        className={styles.image}
        width={500}
        height={500}
        alt=""
        src={image}
      />
      <div className={styles.cardBody}>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </motion.div>
  );
};

export default Card;
