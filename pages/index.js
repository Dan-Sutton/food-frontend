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

  const card = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        type: "spring",
        bounce: 0.2,
      },
    },
  };

  const cards = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

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
        <div className={styles.homecontent}></div>
        {/* <h2 className={styles.subheading}>WHAT WE DO</h2> */}

        <motion.div
          className={styles.cards}
          variants={cards}
          initial="hidden"
          animate="show"
          layout
        >
          {servicesData.map((e, index) => (
            <motion.div
              layout
              variants={card}
              key={e.slug}
              // className={styles.card}
            >
              <Card
                title={e.title}
                content={e.content}
                image={e.image}
                handleShowCardModal={handleShowCardModal}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>

        <div className={styles.about}>
          <div className={styles.aboutColumn}>
            <div className={styles.alchemyQuote}>
              <h2>alchemy</h2>
              <p>
                noun-&#39;a seemingly magical process of transformation,
                creation, or combination.&#39;
              </p>
            </div>
            <div className={styles.aboutContent}>
              <h2 id="#about">ABOUT</h2>
              <p>
                From walking through his first professional kitchen doors as an
                early teen, to over 15 years later Matthew has managed popular
                high-end independent eateries and British wine estates. Working
                with chefs from around the world he has acquired an excellent
                knowledge of worldly cuisines and has developed a passion for
                delivering the highest quality local ingredients with great
                depth in flavour and stunning visuals. He gained popularity with
                his passion for innovative flavour combinations and off-grid
                cooking style with repeated appearances on the BBC and in the
                good food guide. <br /> <br />
                Matthew now owns a small eatery in Bridgnorth, where he hosts
                immersive fine dining events and an innovative street food
                pop-up shop in Wolverhampton.
              </p>
            </div>
          </div>
          <Image
            alt=""
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
