import React from "react";
import styles from "../styles/contact.module.css";
import Footer from "../components/footer";

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      <h2 className={styles.title}>Contact</h2>
      <p className={styles.subheading}>
        Get in contact now to secure bookings, or if you have any queries.
      </p>

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
      <Footer />
    </div>
  );
};

export default Contact;
