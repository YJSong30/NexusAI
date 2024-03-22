import React from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';
import About from './components/About'


const MainScreen = () => {
  return (
    <div class='main-screen'>
      <NavBar />
      <Main />
      <About />
    </div>
  );
};

export default MainScreen;
