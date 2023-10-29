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
import matt from "../lib/gallery/matt.png";
import HomeButton from "../components/homeButton";
import img1 from "../public/images/img1.jpg";
import img2 from "../public/images/img2.jpg";
import img3 from "../public/images/img3.jpg";
import img4 from "../public/images/img4.jpg";
import img5 from "../public/images/img5.jpg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Food Alchemist</title>
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

        <section className={styles.about}>
          <div className={styles.aboutContent}>
            <div className={styles.titles}>
              <h2 id="#about" className={styles.title}>
                THE
              </h2>
              <h2 className={styles.title}>FOOD</h2>
              <h2 className={styles.title}>ALCHEMIST</h2>
              <div>
                <p className={styles.subheading}>BESPOKE DINING EVENTS</p>
              </div>
              <div className={styles.buttonLinks}>
                <HomeButton text={"PUBLIC EVENTS"} />
                <HomeButton text={"PRIVATE HIRE"} />
                <HomeButton text={"BRITISH CRYSTALS"} />
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
        </section>

        <section className={styles.missionSection}>
          <h2>THE MISSION</h2>
          <p>
            Alchemy is ‘seemingly magical process of transformation, creation,
            or combination’. With this in mind, here at{" "}
            <b>THE FOOD ALCHEMIST</b> we strive to provide unforgettable
            experiences.
          </p>

          <div className={styles.missionImages}>
            <Image src={img1} className={styles.missionImage} />
            <Image src={img2} className={styles.missionImage} />
            <Image src={img3} className={styles.missionImage} />
            <Image src={img4} className={styles.missionImage} />
            <Image src={img5} className={styles.missionImage} />
            <Image src={img1} className={styles.missionImage} />
            <Image src={img2} className={styles.missionImage} />
            <Image src={img3} className={styles.missionImage} />
            <Image src={img4} className={styles.missionImage} />
            <Image src={img5} className={styles.missionImage} />
          </div>
        </section>
        <Footer />
      </motion.main>
    </div>
  );
}
