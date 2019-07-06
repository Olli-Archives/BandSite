import React from 'react';
import styles from './Intro.css'
import InstaGallery from './InstaGallery';
import image from '../../assets/images/casualencounterlight.png';


export default function Intro() {
  return (
    <main className={styles.main}>
      <section className={styles.imgContainer}>
        <img className={styles.img} src={image}></img>
      </section>
      <section>
        <InstaGallery />
      </section>
    </main>
  )
}