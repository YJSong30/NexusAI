import React from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';
import About from './components/About'
//import Tutorial from './components/Tutorial';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const MainScreen = () => {
  return (
    <div class='main-screen'>
      <NavBar />
      <Main />
      <About />
      <FAQ />
      <Footer />
    </div>
  );
};

export default MainScreen;
