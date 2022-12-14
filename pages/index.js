import Head from "next/head";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Card from "../components/card";

export default function Home() {
  return (
    <div>
      <Head>
        <title>the Food Alchemist</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <div className={styles.homecontent}>
          <h2>Fine dining and street food specialist</h2>
          <Image
            className={styles.coverImage}
            width={1000}
            height={500}
            alt=""
            src={
              "https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
          />
        </div>

        <div className={styles.cardsRow}>
          <div className={styles.cards}>
            <Card
              title={"FINE DINING"}
              content={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
              image={
                "https://scontent-lcy1-2.xx.fbcdn.net/v/t39.30808-6/254821052_1485585205175301_4114426689119067064_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a26aad&_nc_ohc=YXlvgjrdGcsAX9ZjRKi&_nc_ht=scontent-lcy1-2.xx&oh=00_AfAFVEHNtxbysXQTRRiihzEYzf0F23RMJXblg9qvm4gDkQ&oe=639F9AD4"
              }
            />
            <Card
              title={"STREET FOOD"}
              content={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
              image={
                "https://scontent-lcy1-2.xx.fbcdn.net/v/t39.30808-6/307190751_519719576824366_7580912843412553151_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DOI-Se_t_YEAX-YY-A2&tn=xxljlX7NizALkybY&_nc_ht=scontent-lcy1-2.xx&oh=00_AfD__8l4juEMXgLltJ39NRCB29Mx0tQlfaYOR2AJ0aVdAQ&oe=639F43DD"
              }
            />
          </div>

          <div className={styles.reviewCard}>
            <p className={styles.reviewContent}>
              Most amazing food I’ve eaten! Biscoff chicken is something else
              entirely... I even dream about it HIGHLY RECOMMEND' -2022{" "}
            </p>
            <div className={styles.reviewAvatar}></div>
          </div>
        </div>
      </main>
    </div>
  );
}
