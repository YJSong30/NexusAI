import React from 'react';
import cyberpunkNightImage from '../images/2d-cyberpunkscene-night.png';
import skyCityScene from '../images/2d-skycityscene-topview.png';
const Tutorial = () => {
  return (
    <div class='tutorial-container'>
      <h2 class="poppins-bold">How To Create Your Custom Backdrop With NexusAI</h2>
      <div class='tutorial-content'>
          <div class="tutorial-steps">
            <h4 class="poppins-bold">Step 1: Choose your scene</h4>
            <p class="poppins-regular">Start by selecting a base theme from our list of our 20 pre-trained prompts. Each theme offers a unique backdrop for your art creation.</p>
          </div>
          <div class="tutorial-steps">
            <h4 class="poppins-bold">Step 2: Add custom details</h4>
            <p class="poppins-regular">Personalize your scene by adding specific details to enhance its appearance. Use commas to list these additional features, such as color changes, time of day, or specific elements you want to include.<br/>For example: "2d-lakescene, more blue, night, top view".</p>
          </div>
          <div class="tutorial-steps">
            <h4 class="poppins-bold">Step 3: Highlight key elements</h4>
            <p class="poppins-regular">To emphasize the most important aspects of your design, enclose keywords within double parentheses. This tells our AI to pay special attention to these details.<br/>For example: "((water))" would ensure that water features are prominently incorporated into your scene.</p>
          </div>
          <div class="tutorial-steps">
            <h4 class="poppins-bold">Step 4: Submit your request</h4>
            <p class="poppins-regular">Once you've outlined your desired scene and specifications, submit your request. Our AI will then process your instructions and begin creating a backdrop tailored to your preferences.</p>
          </div>
      </div>

      <h2 class="poppins-bold">Sample Prompts</h2>
      <div class="tutorial-samples-container">
        <div class="tutorial-card">
          <img src={cyberpunkNightImage} alt="2d-cyberpunkscene-night"/>
          <div class="image-description poppins-regular">2d-cyberpunkscene, more blue, town, night, top view</div>
        </div>
        <div class="tutorial-card">
          <img src={skyCityScene} alt="2d-skycityscene-topview"/>
          <div class="image-description poppins-regular">2d-skycitescene, town, ((water)), top view</div>
        </div>
      </div>
        


    </div>
  );
};

export default Tutorial;
