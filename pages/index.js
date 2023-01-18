import Head from "next/head";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Card from "../components/card";
import { useState } from "react";
import CardModal from "../components/cardModal";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import Footer from "../components/footer";
import { servicesData } from "../lib/seedData/servicesData";
import matt from "../lib/gallery/matt.jpeg";

export default function Home() {
  const [showCardModal, setShowCardModal] = useState(false);
  const [cardData, setCardData] = useState();

  function handleShowCardModal(index) {
    setCardData(servicesData[index]);
    setShowCardModal(!showCardModal);
  }

  return (
    <div>
      {showCardModal ? (
        <CardModal
          cardData={cardData}
          showCardModal={showCardModal}
          setShowCardModal={setShowCardModal}
        />
      ) : null}
      <Head>
        <title>the Food Alchemist</title>
        <meta name="Fine dining and street food specialist" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.main
        className={styles.main}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className={styles.homecontent}>
          <h2>Fine dining and street food specialist</h2>

          <Carousel
            className={styles.coverImage}
            autoPlay
            infiniteLoop
            showThumbs={false}
            interval={2000}
            transitionTime={500}
            showArrows={false}
          >
            <div>
              <img src="https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            </div>
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg" />
            </div>
          </Carousel>
        </div>
        <h2 className={styles.subheading}>WHAT WE DO</h2>

        <div className={styles.cards}>
          {servicesData.map((e, index) => (
            <Card
              title={e.title}
              content={e.content}
              image={e.image}
              handleShowCardModal={handleShowCardModal}
              index={index}
            />
          ))}
        </div>

        {/* <div className={styles.reviewCard}>
            <p className={styles.reviewContent}>
              Most amazing food I’ve eaten! Biscoff chicken is something else
              entirely... I even dream about it HIGHLY RECOMMEND
              ⭐️⭐️⭐️⭐️⭐️' -2022{" "}
            </p>
            <div className={styles.reviewAvatar}></div>
          </div> */}

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
            src={matt}
          />
        </div>
        <Footer />
      </motion.main>
    </div>
  );
}
