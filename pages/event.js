import React from "react";
import { useQuery } from "urql";
import Link from "next/link";
import { EVENT_QUERY } from "../lib/query";
import styles from "../styles/events.module.css";
import { motion } from "framer-motion";
import Footer from "../components/footer";
import Image from "next/image";

function Event() {
  return (
    <section className={styles.eventPage}>
      <div className={styles.soon}>COMING SOON...</div>
    </section>
    // <div className={styles.events}>
    //   <div className={styles.eventContent}>
    //     {events.length === 0 ? (
    //       <h1 className={styles.noevents}>No events at the moment!</h1>
    //     ) : (
    //       <h1>EVENTS</h1>
    //     )}
    //     <motion.div
    //       className={styles.eventContainer}
    //       variants={eventsAnim}
    //       initial="hidden"
    //       animate="show"
    //       layout
    //     >
    //       {events.map((event, index) => (
    //         <motion.div
    //           className={styles.event}
    //           key={event.id}
    //           layout
    //           variants={eventAnim}
    //         >
    //           <h3>{event.attributes.title}</h3>

    //           <Image
    //             width={500}
    //             height={500}
    //             src={event.attributes.image.data[0].attributes.url}
    //             alt=""
    //           ></Image>
    //           <p>{formatDate(event.attributes.date)}</p>
    //           <p>{event.attributes.description}</p>
    //           <Link
    //             className={styles.link}
    //             href={event.attributes.link}
    //           >{`Event: ${event.attributes.link}`}</Link>
    //         </motion.div>
    //       ))}
    //     </motion.div>
    //   </div>
    //   <Footer />
    // </div>
  );
}

export default Event;
