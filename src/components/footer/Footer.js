import React from 'react';
import styles from './Footer.css';
import {
  FaInstagram,
  FaFacebookSquare
} from 'react-icons/fa';


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social}>
        <li>
          <a target='_blank' href='https://www.instagram.com/sepdxcasualencou/'>
            <FaInstagram size='2rem' />
          </a>
        </li>
        <li>
          <a target='_blank' href='https://www.facebook.com/eastsidecasualencounters/'>
            <FaFacebookSquare size='2rem' />
          </a>
        </li>


        <li><p>Designed By: Olli Nieminen</p></li>
      </ul>
    </footer>


  )
}