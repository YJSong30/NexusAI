import React from 'react';
import glacierImage from '../images/2d-glacier-scene.png';
import cyberpunkImage from '../images/2d-cyberpunkscene.png';
import glacierTopviewImage from '../images/2d-glacier-scene-topview.png';
import grasslandImage from '../images/2d-grasslandscene.png';
import townsceneImage from '../images/2d-townscene.png';
import townsceneNightImage from '../images/2d-townscene-night.png';

const About = () => {
  return (
    <div class="about-container">
        <div class="about-content">
            <h2 class="poppins-bold">Elevate your Game with NexusAI</h2>
            <p class="poppins-regular">NexusAI offers an innovative AI-powered tool for backdrop creation to elevate your game's aesthetic. Instantly enhance your game's visuals with our easy-to-use platform, designed to accelerate your game development journey.</p>
        </div>
        <div class="about-image-container">
            <img src={glacierImage} alt="2d-glacierscene"/>
            <img src={cyberpunkImage} alt="2d-glacierscene"/>
            <img src={glacierTopviewImage} alt="2d-glacierscene"/>
            <img src={grasslandImage} alt="2d-glacierscene"/>
            <img src={townsceneImage} alt="2d-glacierscene"/>
            <img src={townsceneNightImage} alt="2d-glacierscene"/>
            <img src={glacierImage} alt="2d-glacierscene"/>  
            <img src={cyberpunkImage} alt="2d-glacierscene"/>
        </div>
    </div>
  );
};

export default About;