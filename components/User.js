import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import styles from "../styles/user.module.css";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

const User = () => {
  const { user } = useUser();
  const route = useRouter();
  if (!user)
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
  return (
    <div className={styles.container} onClick={() => route.push("/profile")}>
      <div className={styles.userContainer}>
        <Image
          className={styles.userImage}
          width={30}
          height={30}
          src={user.picture}
          alt={user.name}
        />
        <h3 className={styles.label}>{user.name}</h3>
      </div>
    </div>
  );
};

export default User;
