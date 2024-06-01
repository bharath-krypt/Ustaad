import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Courses from './Courses';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/Ustaad/" element={<HomePage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/courses" element={<Courses/>} />
      <Route path="/contact" element={<ContactUs />} />
      
    </Routes>
  );
};

export default App;