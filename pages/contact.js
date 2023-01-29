import React from "react";
import styles from "../styles/contact.module.css";
import Footer from "../components/footer";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      <h2 className={styles.title}>Contact</h2>
      <p className={styles.subheading}>
        Get in contact now to secure bookings, or if you have any queries. Use
        the form below or call 07375 356314.
      </p>

      <motion.div
        className={styles.contactForm}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <input placeholder="FULL NAME" />
        <input inputMode="email" placeholder="EMAIL ADDRESS" />
        <input inputMode="tel" placeholder="CONTACT NUMBER" />
        <textarea
          className={styles.message}
          inputMode="text"
          placeholder="MESSAGE"
        />
      </motion.div>
      <Footer />
    </div>
  );
};

export default Contact;
