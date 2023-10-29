import React from "react";
import styles from "../styles/homeButton.module.css";
import { FaChevronRight } from "react-icons/fa";

function HomeButton({ text }) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{text}</p>
      <FaChevronRight className={styles.arrow}></FaChevronRight>
    </div>
  );
}

export default HomeButton;
