import React from "react";
import Image from "next/image";
import styles from "../styles/cardmodal.module.css";

const CardModal = ({ showCardModal, setShowCardModal }) => {
  return (
    <div
      className={styles.modalbackground}
      onClick={() => setShowCardModal(!showCardModal)}
    >
      <div
        className={styles.content}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles.text}>
          <h1>TITLE</h1>
          <p>CONTENT</p>
        </div>
        <div className={styles.image}>
          <Image
            src={"https://picsum.photos/id/237/200/300"}
            height={200}
            width={200}
          />
        </div>
      </div>
    </div>
  );
};

export default CardModal;
