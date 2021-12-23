import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";
import styles from "../../styles/Event.module.css";
export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(async () => {
    const res = await fetch(`http://localhost:5000/event/getAllEvent/`);
    const data = await res.json();
    setEvents(data);
  }, []);

  return (
    <div className={styles.gridContainer}>
      {events &&
        events.map((elem,i) => {
          return (
            <div className={styles.gridItem }>
              <img src={elem.images} className={styles.img}></img>
              <h1>{elem.eventName}</h1>
              <Link href={`/events/${i+1}`}>
          <button>{elem.eventName}</button>
        </Link>
              
            </div>
          );
        })}
    </div>
  );
}
