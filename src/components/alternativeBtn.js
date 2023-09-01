import React from 'react';
import { HeroButton } from './HeroButton';
import './HeroSection.css';

function alternativeBtn() {

  return (
    <>
    <div className='alt-login-btn'>
        <div className='hero-btns'>
            <HeroButton
                className='btn_2'
                buttonStyle='btn--normal'
                buttonSize='btn--large'
                btnLink=''
            >
            <i className='fab fa-google' /> Google
            </HeroButton>
            <HeroButton
                className='btn_2'
                buttonStyle='btn--normal'
                buttonSize='btn--large'
                onClick={console.log('hey')}
                btnLink=''
            >
            <i className='fab fa-facebook' /> Facebook 
            </HeroButton>
        </div>
    </div>
    </>
  )

}

export default alternativeBtn
