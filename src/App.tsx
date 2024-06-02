import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Courses from './Courses';
import Course10th from './Course10th';
import Intermediate from './Intermediate';
import Professional from './Professional';
import Languages from './Languages';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/Ustaad/" element={<HomePage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/10th" element={<Course10th />} />
      <Route path="/courses/intermediate" element={<Intermediate />} />
      <Route path="/courses/professional" element={<Professional />} />
      <Route path="/courses/languages" element={<Languages />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
};

export default App;
