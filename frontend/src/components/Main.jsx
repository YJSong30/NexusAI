import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GenScreen from './GenScreen';

const Main = () => {
  return (
    <div class="backdrop-container">
        <div class="backdrop-content">
            <h1 class="poppins-bold">A revolution for your game backdrop</h1>
            <p class="poppins-regular">Convert words into unique 2D backdrops with our custom-trained AI model</p>
            <Link to="/genscreen">
              <button className="backdrop-button poppins-regular">Start Generating</button>
            </Link>
        </div>
    </div>
  );
};

export default Main;