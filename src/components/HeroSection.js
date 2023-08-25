import React from 'react';
import '../App.css';
import { HeroButton } from './HeroButton';
import './HeroSection.css';
import vid2 from '../videos/video-1.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={vid2} autoPlay loop muted /> 
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <HeroButton
          className='btn_2'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          btnLink='/sign-up'
        >
          GET STARTED
        </HeroButton>
        <HeroButton
          className='btn_2'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
          btnLink={vid2}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </HeroButton>
      </div>
    </div>
  );
}

export default HeroSection;
