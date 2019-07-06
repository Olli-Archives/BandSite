import './App.css';
import React from 'react';
import NavBar from './navbar/NavBar';
import Intro from './main/Intro';
import SubSection from './main/SubSection';
import Shows from './main/Shows';
import Footer from './footer/Footer';


export default function App() {
  return (
    <section style={{heigth:'100%'}}>
      <NavBar/>
      <Intro/>
      <SubSection title='UPCOMNIG SHOWS'/>
      <Shows/>
      <Footer/>
    </section>
  );
}
  
