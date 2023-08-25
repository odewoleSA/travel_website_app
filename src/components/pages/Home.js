import React, { useState, useEffect } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import './Home.css';

function Home() {

  return (
      <>
        <HeroSection />
        <Cards />
        <Footer />
      </>
  )
}

export default Home
