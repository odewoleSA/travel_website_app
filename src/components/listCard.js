import React from 'react';
import './Cards.css';
import CardItem from './listCardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
            />
            <CardItem
              text='Travel through the Islands of Bali in a Private Cruise'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
            />
            <CardItem
              text='Experience Football on Top of the Himilayan Mountains'
            />
            <CardItem
              text='Ride through the Sahara Desert on a guided camel tour'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
