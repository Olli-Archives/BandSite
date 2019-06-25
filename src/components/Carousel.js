import React from 'react';

export default function Carousel(offsetArray, imgArray){
  const images = imgArray[0].images;
  console.log('images aray in Carousel', images);

  const imgWindows = offsetArray.map(offset=>{
    const smallImg = imgArray[offset].images.standard_resolution;
    const key = imgArray[offset].id;
    console.log('smallImg', smallImg);
    
    return(
      <li key={key}>
        //need to feed small img to src
        <img src={}></img>
      </li>
    )
  })
  return (
    <ul>
      {imgWindows}
    </ul>
  )



}

const imgWindows = this.props.offsetArray.map(offset=>{
  return (<li style={{width:'30 vw', overflow:'hidden', height:'25vh'}}>
    <img src={imgArray[indexOffset(imgArray, offset, index)]}></img></li>)
