import React from 'react';
import indexOffset from '../functions/indexOffset';
import styles from './Carousel.css';

export  function Carousel({offsetArray, imgArray, index}){

  const imgWindows = offsetArray.map((offset, i)=>{


    const smallImg = imgArray[0].images[indexOffset(imgArray[0].images, offset, index)].images.thumbnail.url;
     
    return(
      <li key={i} className={styles.li}>
        <img src={smallImg}></img>
      </li>
    )
  })
  return (
    <ul className={styles.ul}>
      {imgWindows}
    </ul>
  )



}

