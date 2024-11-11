import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StudentReed from './pages/StudentReed';
import IntermediateReed from './pages/IntermediateReed';
import ProfessionalReed from './pages/ProfessionalReed';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-reed" element={<StudentReed />} />
        <Route path="/intermediate-reed" element={<IntermediateReed />} />
        <Route path="/professional-reed" element={<ProfessionalReed />} />
      </Routes>
    </Router>
  );
}

export default App;