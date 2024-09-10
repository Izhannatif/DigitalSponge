

// import React, { useEffect, useState } from 'react';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import { AnimatePresence, motion } from 'framer-motion';

// import Navbar from './components/Navbar';
// import Homepage from './Pages/Homepage';
// import PortfolioSection from './components/PortfolioSection';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import CustomCursor from './components/CustomCursor'
// import Loader from './components/Loader';
// import Payment from './Pages/Payment';
// import ContactForm from './Pages/Contact';

// const App = () => {
//   const location = useLocation();
//   const [isloading, setIsLoading] = useState(true);
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000); // Show loader for 3 seconds

//     return () => clearTimeout(timer); // Cleanup the timer on component unmount
//   }, []);
//   return (
//     <>
//       {isloading ? <Loader /> :
//         <>
//           <Navbar />
//           <AnimatePresence>
//             <Routes location={location} key={location.pathname}>
//               <Route
//                 key={1}
//                 path="/"
//                 exact
//                 element={
//                   <motion.div
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 50 }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <Homepage />
//                   </motion.div>
//                 }
//               />
//               <Route
//                 key={2}
//                 path="/portfolio"
//                 element={
//                   <motion.div
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 50 }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <PortfolioSection />
//                   </motion.div>
//                 }
//               />
//               <Route
//                 key={3}
//                 path="/payment"
//                 element={
//                   <motion.div
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 50 }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <Payment />
//                   </motion.div>
                  
//                 }
//               />
              
//               <Route
//                 key={3}
//                 path="/contact"
//                 element={
//                   <motion.div
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 50 }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <ContactForm />
//                   </motion.div>
                  
//                 }
//               />
//             </Routes>
//           </AnimatePresence>
//           <Contact />

//           <CustomCursor />
//         </>
//       }
//     </>
//   );
// }
// export default App



import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Homepage from './Pages/Homepage';
import PortfolioSection from './components/PortfolioSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import Payment from './Pages/Payment';
import ContactForm from './Pages/Contact';
import './App.css'
const App = () => {
  const location = useLocation();
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isloading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
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
              <Route
                path="/payment"
                element={
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Payment />
                  </motion.div>
                }
              />
              <Route
                path="/contact"
                element={
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ContactForm />
                  </motion.div>
                }
              />
            </Routes>
          </AnimatePresence>
          <Footer />
          <CustomCursor />
        </>
      )}
    </>
  );
};

export default App;
