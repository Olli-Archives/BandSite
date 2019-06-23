import React from 'react';
import styles from './SubSection.css';

export default function SubSection({title}){
  return(
    <section className={styles.container}>
      <h3>{title}</h3>
    </section>
  )
}