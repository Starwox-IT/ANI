import React from 'react'
import Nav from './Nav/Nav'
import Hero from './Hero/Hero'
import HeroImgSlide from './HeroImgSlide/HeroImgSlide'


const Home = () => {
  return (
    <div className="home-container">
        <div className="home-wrapper">
            <Nav/>
            <Hero/>
            <HeroImgSlide/>
        </div>
    </div>
    
  )
}

export default Home