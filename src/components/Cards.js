import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out your Fav Movie Trailers </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the Most violent man on earth'
              label='Action'
              path='/salaar'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Guns Dont Lie'
              label='Sci-Fiction'
              path='/jawan'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Feel the Explosion of Atomic Bomb'
              label='Historical'
              path='/oppenheimer'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Hold your Breathe'
              label='Horror'
              path='/nun'
            />
            <CardItem
              src='images/img-6.jpg'
              text='Boosts Your Energy'
              label='Action-Drama'
              path='/gunturkaram'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
