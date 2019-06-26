import React from 'react';
import styles from './NavBar.css';


export default function NavBar() {
  return (
    <>
      <header className={styles.container}>
        <section className={styles.links}>
          <a>ABOUT-US</a>
          <a>HOME</a>
          <a>SOUND-CLOUD</a>
        </section>
        <section className={styles.spacer}>

        </section>
        <section className={styles.social}>
          <a>INSTA</a>
        </section>
      </header>
    </>
  );
}
