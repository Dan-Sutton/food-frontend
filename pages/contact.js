import React from "react";
import styles from "../styles/contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      <h2>Contact</h2>
      <p>Get in contact now to secure bookings, or if you have any queries.</p>

      <div className={styles.contactForm}>
        <input placeholder="Full name" />
        <input inputMode="email" placeholder="Email address" />
        <input inputMode="tel" placeholder="Contact number" />
        <textarea
          className={styles.message}
          inputMode="text"
          placeholder="Message"
        />
      </div>
    </div>
  );
};

export default Contact;
