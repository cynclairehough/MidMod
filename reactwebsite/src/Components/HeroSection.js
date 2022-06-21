import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import ReactPlayer from 'react-player/lazy'




function HeroSection() {



    return (
        <div className='hero-container'>

            <ReactPlayer
                className='react-player'
                playing
                loop
                muted
                url='https://youtu.be/noDyhyFVIBo'
                width='100%'
                position='cover'
                height='100%'
                allow="autoplay; encrypted-media" />


            <h1>
                Looking for the best burger around?
            </h1>
            <p>
                We've got you covered. Happy Burgering!
            </p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--Large'>Order Now</Button>

            </div>
        </div>
    );
}

export default HeroSection;