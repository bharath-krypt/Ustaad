import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AboutUs from './AboutUs';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/Ustaad/" element={<HomePage />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
};

export default App;
