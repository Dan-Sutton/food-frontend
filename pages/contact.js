import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../styles/contact.module.css";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE,
        process.env.NEXT_PUBLIC_TEMPLATE,
        form.current,
        process.env.NEXT_PUBLIC_KEY
      )
      .then(
        (result) => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "Message sent!",
          });
        },
        (error) => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "error",
            title: "There was an error whilst sending your message.",
          });
        }
      );
    e.target.reset();
  };

  return (
    <div className={styles.contactPage}>
      <h2 className={styles.title}>Contact</h2>
      <p className={styles.subheading}>
        Get in contact now to secure bookings, or if you have any queries. Use
        the form below or call 07375 356314.
      </p>

      <motion.div>
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className={styles.contactForm}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <input
            placeholder="FULL NAME"
            required={true}
            type="text"
            name="user_name"
          />
          <input
            inputMode="email"
            placeholder="EMAIL ADDRESS"
            required={true}
            type="text"
            name="email_address"
          />
          <input
            inputMode="tel"
            placeholder="CONTACT NUMBER"
            required={true}
            name="contact_number"
          />
          <textarea
            className={styles.message}
            inputMode="text"
            placeholder="MESSAGE"
            required={true}
            name="message"
          />

          <motion.input
            whileHover={{
              scale: 1.15,
              transition: {
                type: "spring",
                duration: 0.8,
                bounce: 0.6,
              },
            }}
            type="submit"
            value="SEND"
            className={styles.submit}
          />
        </motion.form>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Contact;
