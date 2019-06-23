import React from 'react';
import styles from './Shows.css'
import shows from '../../data/shows';

export default function Shows(){
  const showList = shows.map(show=>{
    return(
      <li></li>
      )
  })
  return(
    <section className={styles.container}>

    </section>
  )
}