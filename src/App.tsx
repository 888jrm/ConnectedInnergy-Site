import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Meditation from './pages/Meditation';
import Merch from './pages/Merch';
import Resources from './pages/Resources';
import Community from './pages/Community';
import Services from './pages/Services';
import SpiritualGifts from './pages/SpiritualGifts';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-green-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meditation" element={<Meditation />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/community" element={<Community />} />
          <Route path="/services" element={<Services />} />
          <Route path="/spiritual-gifts" element={<SpiritualGifts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;