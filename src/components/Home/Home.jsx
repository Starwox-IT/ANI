import React from 'react'
import Hero from './Hero/Hero'
import HeroImgSlide from './HeroImgSlide/HeroImgSlide'
import HeroMission from './HeroMission/HeroMission'
import SpotlightInventions from './SpotlightInventions/SpotlightInventions'
import InnovationTimeline from './InnovationTimeline/InnovationTimeline'
import GetInvolved from './GetInvolved/GetInvolved'


const Home = () => {
  return (
    <div className="home-container">
        <div className="home-wrapper">
            <Hero/>
            <HeroImgSlide/>
            <HeroMission/>
            <SpotlightInventions/>
            <InnovationTimeline/>
            <GetInvolved/>
        </div>
    </div>
  )
}

export default Home