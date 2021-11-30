import React from 'react';
import Hero from '../Components/Landing/Hero';
import HomeSlides from '../Components/Landing/HomeSlides';
import InfoSection from '../Components/Landing/InfoSection';
import Blog from '../Components/Landing/Blog';


function Landing() {
    return (
      <>
        <Hero />
        <InfoSection/>
        <HomeSlides />
        <Blog/>
      </>
    );
}

export default Landing
