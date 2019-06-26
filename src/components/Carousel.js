import React from 'react';
import indexOffset from '../functions/indexOffset';

export  function Carousel({offsetArray, imgArray, index}){

  const imgWindows = offsetArray.map((offset, i)=>{


    const smallImg = imgArray[0].images[indexOffset(imgArray[0].images, offset, index)].images.thumbnail.url;
     
    return(
      <li key={i}>
       
        <img src={smallImg}></img>
      </li>
    )
  })
  return (
    <ul style = {{display:'flex'}}>
      {imgWindows}
    </ul>
  )



}

