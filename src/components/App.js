import './App.css';
import React from 'react';
import NavBar from './navbar/NavBar';
import Intro from './main/Intro';
import SubSection from './main/SubSection';
import Shows from './main/Shows';


export default function App() {
  return (
    <section style={{heigth:'100%'}}>
      <NavBar/>
      <Intro/>
      <SubSection/>
      <Shows/>
      <SubSection/>
      <Intro/>
      <SubSection/>
    </section>
  );
}
  
