import React from "react";
import { useQuery } from "urql";
import Link from "next/link";
import { EVENT_QUERY } from "../lib/query";
import styles from "../styles/events.module.css";

const Event = () => {
  const [results] = useQuery({ query: EVENT_QUERY });
  const { data, fetching, error } = results;

  function checkForSingleDigit(num) {
    let returnNum;
    if (num.toString().length === 1) {
      returnNum = `0${num}`;
    } else {
      returnNum = num;
    }
    return returnNum;
  }

  function formatDate(value, locale = "en-GB") {
    const date = new Date(value);
    let minutes = date.getUTCMinutes();
    let hours = date.getHours();

    minutes = checkForSingleDigit(minutes);
    hours = checkForSingleDigit(hours);

    return `${date.toLocaleDateString(locale)} ${checkForSingleDigit(
      hours
    )}:${checkForSingleDigit(minutes)}`;
  }

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Something went wrong...{error.message}</p>;
  const events = data.events.data;
  return (
    <div className={styles.events}>
      <div className={styles.eventContent}>
        <h1>Events</h1>
        <div className={styles.eventContainer}>
          {events.map((event, index) => (
            <div className={styles.event}>
              <h3>{event.attributes.title}</h3>

              <img src={event.attributes.image.data[0].attributes.url}></img>
              <p>{formatDate(event.attributes.date)}</p>
              <p>{event.attributes.description}</p>
              <Link
                className={styles.link}
                href={event.attributes.link}
              >{`Event: ${event.attributes.link}`}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
