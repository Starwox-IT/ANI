import React from 'react';
import Hero from './InventionHero/Hero';
import Leadership from './Leadership/Leadership';
import OurOrigin from './OurOrigin/OurOrigin';
import MissionPrinciples from './MissionPrinciples/MissionPrinciples';
import Nav from '../Home/Nav/Nav';
import Footer from '../Home/Footer/Footer';

const Invention = () => {
    return (
        <div>
            <Hero />
            <OurOrigin />
            <MissionPrinciples />
            <Leadership />
        </div>
    );
};

export default Invention;