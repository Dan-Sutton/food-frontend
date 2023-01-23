import React from "react";
import Image from "next/image";
import styles from "../styles/cardmodal.module.css";
import { motion } from "framer-motion";

const CardModal = ({ showCardModal, setShowCardModal, cardData }) => {
  console.log(cardData);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.1 } }}
      className={styles.modalbackground}
      onClick={() => setShowCardModal(!showCardModal)}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.2 }}
        className={styles.content}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles.text}>
          <h1>{cardData.title.replace("-", "")}</h1>
          <p>{cardData.content}</p>
        </div>
        <div className={styles.image}>
          <Image
            className={styles.cardimage}
            src={cardData.image}
            alt=""
            height={200}
            width={200}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CardModal;
