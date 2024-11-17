import React from "react";
import logo from "../images/logo-transparent-svg.svg";
import { Link } from "react-router-dom";


const NavBar = ({ isLoggedIn, onLogout }) => {
  return (
    <>
      <nav>
        <div>
          <img className="logo" src={logo} alt="Logo" />
        </div>
        
        <div className="menuitem">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          
          
          {/* Conditionally render Sign Up, Login, or Logout based on isLoggedIn */}
          {!isLoggedIn ? (
            <>
              
              <Link to="/signup">Sign Up</Link>
              <Link to="/login">Login</Link>
            </>
          ) : (
            <>
            <Link to="/adopt">Adopt a Pet</Link>
            <Link to="/myadopt">My Adoptions</Link>
            <Link to="/release">Release Pet</Link>
            <Link to="/" className="logout-button" onClick={onLogout}>
              Logout
            </Link>
            </>
          )}
          
        </div>
        
        <div className="menuitem">
          <Link to="/donate">Donate to Us</Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
