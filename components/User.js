import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import styles from "../styles/user.module.css";

const User = () => {
  const route = useRouter();
  return (
    <div className={styles.container}>
      <div
        onClick={() => route.push("/api/auth/login")}
        className={styles.userContainer}
      >
        <FaUserCircle className={styles.usericon} />
        <h3 className={styles.label}>Profile</h3>
      </div>
    </div>
  );
};

export default User;
