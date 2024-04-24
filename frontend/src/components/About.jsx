import React from 'react';
import glacierImage from '../images/2d-glacier-scene.png';
import cyberpunkImage from '../images/2d-cyberpunkscene.png';
import glacierTopviewImage from '../images/2d-glacier-scene-topview.png';
import grasslandImage from '../images/2d-grasslandscene.png';
import townsceneImage from '../images/2d-townscene.png';
import townsceneNightImage from '../images/2d-townscene-night.png';
import futureCitySceneImage from '../images/2d-futurecityscene.png';
import seaSideSceneImage from '../images/2d-seasidescene.png';

const About = () => {
  return (
    <div class="about-container">
        <div class="about-content">
            <h2 class="poppins-bold">Elevate your Game with NexusAI</h2>
            <p class="poppins-regular">NexusAI offers an innovative AI-powered tool for backdrop creation to elevate your game's aesthetic. Instantly enhance your game's visuals with our easy-to-use platform, designed to accelerate your game development journey.</p>
        </div>
        <div class="about-image-container">
            <img src={glacierImage} alt="2d-glacierscene"/>
            <img src={cyberpunkImage} alt="2d-cyperpunkscene"/>
            <img src={glacierTopviewImage} alt="2d-glaciertopviewscene"/>
            <img src={grasslandImage} alt="2d-grasslandscene"/>
            <img src={townsceneImage} alt="2d-townscene"/>
            <img src={townsceneNightImage} alt="2d-townscene-night"/>
            <img src={futureCitySceneImage} alt="2d-futurecity-scene"/>  
            <img src={seaSideSceneImage} alt="2d-seasidescene"/>
        </div>
    </div>
  );
};

export default About;