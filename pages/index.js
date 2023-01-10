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

export default function Home() {
  const [showCardModal, setShowCardModal] = useState(true);

  return (
    <div>
      {showCardModal ? (
        <CardModal
          showCardModal={showCardModal}
          setShowCardModal={setShowCardModal}
        />
      ) : null}
      <Head>
        <title>the Food Alchemist</title>
        <meta name="description" content="Generated by create next app" />
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
          <Card
            title={"STREET FOOD"}
            content={
              "UNREAL STREET FOOD FOR REAL FOOD SNOBS. AN ECLECTIC BLEND OF FINE DINING & STREET FOOD. PRIVATE / EVENT BOOKINGS AVAILABLE. CATCH US LOCATED SEASONALLY AT POP-UP LOCATIONS & STREET FOOD MARKETS ACROSS THE COUNTRY."
            }
            image={
              "https://scontent-lcy1-2.xx.fbcdn.net/v/t39.30808-6/254821052_1485585205175301_4114426689119067064_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a26aad&_nc_ohc=YXlvgjrdGcsAX9ZjRKi&_nc_ht=scontent-lcy1-2.xx&oh=00_AfAFVEHNtxbysXQTRRiihzEYzf0F23RMJXblg9qvm4gDkQ&oe=639F9AD4"
            }
          />
          <Card
            title={"IMMERSIVE DINING EVENTS"}
            content={
              "AN INTIMATE NIGHT OF IMMERSIVE YET RELAXED FINE DINING. INNOVATIVE 4-6 COURSE TASTER MENU WITH A CINEMATIC WALK-THROUGH OF THE MENU, IT’S COMPONENTS & THE INSPIRATION BEHIND THE NIGHT. IMAGINE FINE DINING MEETS THE THEATRE."
            }
            image={
              "https://scontent-lcy1-2.xx.fbcdn.net/v/t39.30808-6/307190751_519719576824366_7580912843412553151_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DOI-Se_t_YEAX-YY-A2&tn=xxljlX7NizALkybY&_nc_ht=scontent-lcy1-2.xx&oh=00_AfD__8l4juEMXgLltJ39NRCB29Mx0tQlfaYOR2AJ0aVdAQ&oe=639F43DD"
            }
          />
          <Card
            title={"PRIVATE DINING SERVICES"}
            content={
              "UNFORGETTABLE ON-LOCATION FINE DINING EXPERIENCES. FROM RELAXED FAMILY DINING TO 5 COURSE FINE DINING TASTING MENUS. WE’LL WORK WITH YOU TO CREATE A BESPOKE MENU TO SUIT YOUR TASTE FROM THE FINEST LOCALLY SOURCED INGREDIENTS. AVAILABLE FROM ONE DAY, TO LONG-WEEKEND & WHOLE HOLIDAY BOOKINGS."
            }
            image={
              "https://scontent-lcy1-2.xx.fbcdn.net/v/t39.30808-6/307190751_519719576824366_7580912843412553151_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DOI-Se_t_YEAX-YY-A2&tn=xxljlX7NizALkybY&_nc_ht=scontent-lcy1-2.xx&oh=00_AfD__8l4juEMXgLltJ39NRCB29Mx0tQlfaYOR2AJ0aVdAQ&oe=639F43DD"
            }
          />
          <Card
            title={"WOODLAND DINNERS"}
            content={
              "A UNIQUE SEASONAL DINING EXPERIENCE AMONG ANCIENT WOODLANDS."
            }
            image={
              "https://scontent-lcy1-2.xx.fbcdn.net/v/t39.30808-6/307190751_519719576824366_7580912843412553151_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DOI-Se_t_YEAX-YY-A2&tn=xxljlX7NizALkybY&_nc_ht=scontent-lcy1-2.xx&oh=00_AfD__8l4juEMXgLltJ39NRCB29Mx0tQlfaYOR2AJ0aVdAQ&oe=639F43DD"
            }
          />
          <Card
            title={"LUXURY OVERNIGHT STAYS"}
            content={
              "WAKE UP TO A LAKE-SIDE BREAKFAST IN YOUR CHOICE OF LUXURY OFF-GRID ACCOMMODATION. CHOOSE FROM SEVERAL BEAUTIFUL LOG CABINS, A LAKE HOUSE, OR THE ROMANTIC GEOMETRIC DOME, ALL WITH CENTRAL HEATING & FIRE PITS SET AMONGST A BEAUTIFUL 20-ACRE BACKDROP. BREATH WORK, VAGUS NERVE RESET & MEDITATION SESSIONS AVAILABLE WITH JACOB FROM OHMBRELLA. "
            }
            image={
              "https://scontent-lcy1-2.xx.fbcdn.net/v/t39.30808-6/307190751_519719576824366_7580912843412553151_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DOI-Se_t_YEAX-YY-A2&tn=xxljlX7NizALkybY&_nc_ht=scontent-lcy1-2.xx&oh=00_AfD__8l4juEMXgLltJ39NRCB29Mx0tQlfaYOR2AJ0aVdAQ&oe=639F43DD"
            }
          />
          <Card
            title={"BRAND CONSULT-ANCY"}
            content={
              "WAKE UP TO A LAKE-SIDE BREAKFAST IN YOUR CHOICE OF LUXURY OFF-GRID ACCOMMODATION. CHOOSE FROM SEVERAL BEAUTIFUL LOG CABINS, A LAKE HOUSE, OR THE ROMANTIC GEOMETRIC DOME, ALL WITH CENTRAL HEATING & FIRE PITS SET AMONGST A BEAUTIFUL 20-ACRE BACKDROP. BREATH WORK, VAGUS NERVE RESET & MEDITATION SESSIONS AVAILABLE WITH JACOB FROM OHMBRELLA. "
            }
            image={
              "https://scontent-lcy1-2.xx.fbcdn.net/v/t39.30808-6/307190751_519719576824366_7580912843412553151_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DOI-Se_t_YEAX-YY-A2&tn=xxljlX7NizALkybY&_nc_ht=scontent-lcy1-2.xx&oh=00_AfD__8l4juEMXgLltJ39NRCB29Mx0tQlfaYOR2AJ0aVdAQ&oe=639F43DD"
            }
          />
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
            src={
              "https://scontent-lcy1-2.xx.fbcdn.net/v/t39.30808-6/281354957_1612650865802067_1672438071863318489_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a26aad&_nc_ohc=MKS6_bZQ2vkAX8Uxqxj&tn=xxljlX7NizALkybY&_nc_ht=scontent-lcy1-2.xx&oh=00_AfD-AN3--zXjh7uSGIsZRwdhzlUZI9ICGrVPdAPPd6qiFQ&oe=639E5BDD"
            }
          />
        </div>
        <Footer />
      </motion.main>
    </div>
  );
}
