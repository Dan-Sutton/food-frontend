import Head from "next/head";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Card from "../components/card";
import InstaLogo from "../public/instalogo.png";
import facebooklogo from "../public/facebooklogo.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>the Food Alchemist</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
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
        <h2 className={styles.subheading}>WHAT WE DO</h2>
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
              entirely... I even dream about it HIGHLY RECOMMEND
              ⭐️⭐️⭐️⭐️⭐️' -2022{" "}
            </p>
            <div className={styles.reviewAvatar}></div>
          </div>
        </div>

        <div className={styles.about}>
          <div className={styles.aboutColumn}>
            <div className={styles.alchemyQuote}>
              <h2>alchemy</h2>
              <p>
                noun-'a seemingly magical process of transformation, creation,
                or combination.'
              </p>
            </div>
            <div className={styles.aboutContent}>
              <h2 id="#about">ABOUT</h2>
              <p>
                STUFF ABOUT MATT AND HIS APPROACH Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
          <Image
            className={styles.aboutImage}
            width={350}
            height={470}
            src={
              "https://scontent-lcy1-2.xx.fbcdn.net/v/t39.30808-6/281354957_1612650865802067_1672438071863318489_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a26aad&_nc_ohc=MKS6_bZQ2vkAX8Uxqxj&tn=xxljlX7NizALkybY&_nc_ht=scontent-lcy1-2.xx&oh=00_AfD-AN3--zXjh7uSGIsZRwdhzlUZI9ICGrVPdAPPd6qiFQ&oe=639E5BDD"
            }
          />
        </div>

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
      </main>
    </div>
  );
}
