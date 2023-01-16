import React from "react";
import styles from "../styles/card.module.css";
import Image from "next/image";

const Card = ({ image, title, content, handleShowCardModal, index }) => {
  return (
    <div className={styles.card} onClick={() => handleShowCardModal(index)}>
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
    </div>
  );
};

export default Card;
