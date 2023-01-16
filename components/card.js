import React from "react";
import styles from "../styles/card.module.css";
import Image from "next/image";

const Card = ({ image, title, content }) => {
  return (
    <div className={styles.card} onClick={() => console.log("CLICKUIFHGWErUI")}>
      <Image
        className={styles.image}
        width={500}
        height={500}
        alt=""
        src={image}
      />
      <div className={styles.cardBody}>
        <h2 className={styles.title}>{title}</h2>
        {/* <div>
          <p className={styles.content}>{content}</p>
        </div> */}
      </div>
    </div>
  );
};

export default Card;
