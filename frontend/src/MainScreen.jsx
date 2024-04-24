import React from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';
import About from './components/About'
import Tutorial from './components/Tutorial';
import Feature from './components/Feature';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const MainScreen = () => {
  return (
    <div class='main-screen'>
      <div><NavBar /></div>
      <div><Main /></div>
      <div id="about"><About /></div>
      <div id="feature"><Feature /></div>
      <div id="tutorial"><Tutorial /></div>
      <div id="faq"><FAQ /></div>
      <div><Footer /></div>
    </div>
  );
};

export default MainScreen;
