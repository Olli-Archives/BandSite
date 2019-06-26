import React from 'react';
import styles from './Shows.css'
import { shows } from '../../data/shows';

export default function Shows() {
  const showList = shows.map((show,i )=> {
    const {
      title,
      location,
      date,
      time,
      details
    } = show;
    return (
      <li key={i}>
        <ul>
          <li>Where: {location}</li>
          <li>When: {date} @ {time}</li>
          <li>{details.openers ? details.openers : null}</li>
          <li>{details.headliner}</li>
        </ul>
      </li>
    )
  })
  return (
    <section className={styles.container}>
      <section>
        <ul className={styles.shows}>
          {showList}
        </ul>
      </section>

    </section>
  )
}