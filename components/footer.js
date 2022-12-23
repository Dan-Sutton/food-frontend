import React from "react";
import styles from "../styles/footer.module.css";
import InstaLogo from "../public/instalogo.png";
import facebooklogo from "../public/facebooklogo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.infocontainer}>
        <h2 className={styles.contactTitle}>Phone</h2>
        <p className={styles.contactInfo}>07375 356314</p>
        <h2 className={styles.contactTitle}>Email</h2>
        <p className={styles.contactInfo}>wvfoodalchemist@gmail.com</p>

        <div className={styles.socialicons}>
          <Image src={facebooklogo} width={50} height={50} />
          <Image src={InstaLogo} width={50} height={50} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
