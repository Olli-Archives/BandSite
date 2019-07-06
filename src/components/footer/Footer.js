import React from 'react';
import styles from './Footer.css';
import {
  FaInstagram,
  FaFacebookSquare
}from 'react-icons/fa';


export default function Footer(){
  return(
    <footer className={styles.footer}>
      <ul className={styles.social}> 
        <li><FaInstagram size='2rem'/></li>
        <li><FaFacebookSquare size='2rem'/></li>
      </ul>
      <p>Designed By: Olli Nieminen</p>
    </footer>
    

  )
}