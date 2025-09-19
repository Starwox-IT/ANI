import React from 'react'
import Nav from './Nav/Nav'
import Hero from './Hero/Hero'
import HeroImgSlide from './HeroImgSlide/HeroImgSlide'
import HeroMission from './HeroMission/HeroMission'
import SpotlightInventions from './SpotlightInventions/SpotlightInventions'
import InnovationTimeline from './InnovationTimeline/InnovationTimeline'
import Footer from './Footer/Footer'
import GetInvolved from './GetInvolved/GetInvolved'


const Home = () => {
  return (
    <div className="home-container">
        <div className="home-wrapper">
            <Nav/>
            <Hero/>
            <HeroImgSlide/>
            <HeroMission/>
            <SpotlightInventions/>
            <InnovationTimeline/>
            <GetInvolved/>
            <Footer/>
        </div>
    </div>
    
  )
}

export default Home