import React, { useState } from 'react';
import NavBar from "./components/NavBar";
import './styles/styles.css';
import About from "./components/About";
import Home from "./components/index.js";
import AdoptPet from "./components/AdoptPet.js";
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';
import ReleasePet from "./components/ReleasePet.js";
import Donate from "./components/Donate.js";
import MyAdopt from './components/MyAdopt.js';
import ConfirmAdoption from './components/ConfirmAdopt.js';
import ThankYou from './components/ThankYou.js';

import { BrowserRouter as Router, Route, Routes, Form} from "react-router-dom";

function App() {

  const storedIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const [isLoggedIn, setIsLoggedIn] = useState(storedIsLoggedIn);

  const handleFormSubmit = (formData) => {
    
    console.log('Form Data:', formData);
  }
  
const handleLogin = () => {
    console.log("Loggin in...");
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");  // Save to localStorage
};
  const handleLogout = () => {
    console.log("Logging out...");
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");  // Remove from localStorage
   
};

  
  
  return (
    <>
        <Router>
          <div className='container'>
            <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />

            
              <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/adopt" element={<AdoptPet />} />
              <Route path="/release" element={<ReleasePet />} />  
              <Route path="/confirm-adoption" element={<ConfirmAdoption/>} />
              <Route path="/myadopt" element={<MyAdopt />} />
              <Route path="/donate" element={<Donate />} />   
              <Route path="/about" element={<About />} />
              <Route path="/signup" element={<SignUp onLogin={handleLogin} onLogout={handleLogout}/>} />
              <Route path="/login" element={<Login onLogin={handleLogin} onLogout={handleLogout}/>} />
              <Route path="/thankyou" element={<ThankYou />} />

              </Routes>
            </div>
          
          
        </Router>
    </>
  );
 
}

export default App;