import React from 'react';
import styles from './NavBar.css';
import {
  FaInstagram,
  FaSoundcloud,
  FaFacebookSquare
} from 'react-icons/fa'


export default function NavBar() {
  return (
    <>
      <header className={styles.container}>
        <section className={styles.links}>
          <a>ABOUT-US</a>
          <a>HOME</a>

        </section>
        <section className={styles.spacer}>

        </section>
        <section className={styles.social}>
        <a target='_blank' href='https://www.instagram.com/sepdxcasualencou/'>
            <FaInstagram />
          </a>
          <a>
            <FaSoundcloud />
          </a>
          <a target='_blank' href='https://www.facebook.com/eastsidecasualencounters/'>
            <FaFacebookSquare />
          </a>
        </section>
      </header>
    </>
  );
}
