import './App.css';
import React from 'react';
import NavBar from './navbar/NavBar';
import Intro from './main/Intro';
import SubSection from './main/SubSection';
import Shows from './main/Shows';
import InstaGallery from './main/InstaGallery';


export default function App() {
  return (
    <section style={{heigth:'100%'}}>
      <NavBar/>
      <Intro/>
      <SubSection title='UPCOMNIG SHOWS'/>
      <Shows/>
      <SubSection title = 'STUFF AND THINGS'/>
      <InstaGallery offsetArray ={[1,2]}/>
      {/* <SubSection/> */}
    </section>
  );
}
  
