import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainScreen from './MainScreen';
import GenScreen from './components/GenScreen';

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/genscreen" element={<GenScreen />} />
      </Routes>
    </Router>
  )
};

export default App;