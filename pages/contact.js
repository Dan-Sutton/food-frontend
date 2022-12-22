import React from "react";

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <p>Get in contact now to secure bookings, or if you have any queries.</p>

      <div>
        <input placeholder="Full name" />
        <input inputMode="email" placeholder="Email address" />
        <input inputMode="tel" placeholder="Contact number" />
        <input inputMode="text" placeholder="Message" />
      </div>
    </div>
  );
};

export default Contact;
