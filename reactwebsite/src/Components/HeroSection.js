import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
        Hey!
       <video url="https://youtu.be/noDyhyFVIBo"  autoPlay loop controls/>
        <h1>
            Looking for the best burger around?
        </h1>
        <p>
            We got you covered. Happy Burgering!
        </p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--Large'>Order Now</Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--Large'>Order Now <i className='far fa-play-circle'/>
            </Button>
        </div>
        </div>
  );
}

export default HeroSection;