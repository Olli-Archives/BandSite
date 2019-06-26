import React, {PureComponent} from 'react'
import styles from './InstaGallery.css';
import {getImages} from '../../service/getImages';
import {Carousel} from '../../components/Carousel';

export default class StuffAndThings extends PureComponent{

 state={
    currentImage:'',
    index:1, 
    imgArray:[]
  }

updateIndex=(newIndex)=>{
this.setState({index:newIndex})
}

componentDidMount (){
  let{ index, imgArray} = this.state;
  getImages()
  .then(images=>{
    this.setState({ imgArray: images})
    return images
  })
  .then(image => { imgArray = image })
  .catch(error => { console.log(error)});

    const update = this.updateIndex;
    setInterval(function() {
      if( index < imgArray[0].images.length - 1){
        index++
      }
      else{
        index=0
      }
      update(index);
  }, 5000);
  }

  render(){
   let {
      imgArray,
      index
    } = this.state;

    return(
      <section className={styles.container}>
        {imgArray && imgArray[0] && imgArray[0].images? <Carousel offsetArray={[0,1,2,3,0,1,2,3]} imgArray={imgArray} index={index}/> : <h1>loading</h1>}
      </section>
    )
  }
}