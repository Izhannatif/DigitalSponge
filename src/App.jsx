// import React, { useState, useEffect } from 'react';

// import './App.css'
// import Navbar from './components/Navbar';
// import DSTextAnimation from './components/DSTextAnimation';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import About from './components/About';
// import ServicesSection from './components/Services';
// import OurWork from './components/OurWork';
// import PortfolioSection from './components/PortfolioSection';
// import Contact from './components/Contact';
// import Homepage from './Pages/Homepage';
// function App() {
//   return (
//     <>
//       <Router>
//         <Navbar />
//         <Routes>
//         <Route path="/" exact Component={Homepage } />
//           <Route path="/portfolio" Component={PortfolioSection } />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App


import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Homepage from './Pages/Homepage';
import PortfolioSection from './components/PortfolioSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
 import CustomCursor from './components/CustomCursor'
const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            exact
            element={
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <Homepage />
              </motion.div>
            }
          />
          <Route
            path="/portfolio"
            element={
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <PortfolioSection />
              </motion.div>
            }
          />
        </Routes> 
        <Contact />
      </AnimatePresence>
        <Footer />
        <CustomCursor />
      
    </>
  );
}
export default App

