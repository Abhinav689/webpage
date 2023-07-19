import React from 'react';
import '../App.css';
/*import { Button } from './Button';*/
import './HeroSection.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function HeroSection() {
  let history =useHistory();
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
    
        <button className='btn' onClick={()=>history.push ('/salaar')}>
          WATCH TRAILER <i className='far fa-play-circle' />
        </button>
      </div>
  
  );
}

export default HeroSection;
