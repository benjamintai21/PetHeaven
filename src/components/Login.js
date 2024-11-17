// LogIn.js
import React, { useState } from 'react';
import './form.css'; // Importing the CSS file
import Footer from './Footer';
import { Link } from 'react-router-dom';

const LogIn = ({ onLogin, onLogout }) => { // Correctly destructure onLogin from props
  // Hardcoded credentials
  const [hardcodedPassword, setHardcodedPassword] = useState('1');

  // State to manage form inputs and actions
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  // Handle login attempt
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === hardcodedPassword) {
      setIsLoggedIn(true);
      setMessage('Successfully logged in!');
      if (onLogin) {
        onLogin(); // Call the onLogin function if it exists
      }
    } else {
      setMessage('Incorrect password. Please try again.');
      console.log(password, hardcodedPassword);
    }
  };

  // Handle password change
  const handleChangePassword = (e) => {
    e.preventDefault();
    setHardcodedPassword(newPassword);
    setNewPassword('');
    setIsChangingPassword(false);
    setMessage('Password changed successfully.');
  };

  // Logout function
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setMessage('Logged out.');
    if (onLogout) {
      onLogout(); // Call the onLogin function if it exists
    }
  };

  return (
    <div>
      <div className='logincontainer'>
        <div className="log-container">
          <h1>{isLoggedIn ? 'Welcome' : 'Login'}</h1>
          
          {!isLoggedIn && (
            <form onSubmit={isChangingPassword ? handleChangePassword : handleLogin}>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  disabled={isChangingPassword}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">{isChangingPassword ? 'New Password:' : 'Password:'}</label>
                <input
                  type={isChangingPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={isChangingPassword ? newPassword : password}
                  onChange={(e) => (isChangingPassword ? setNewPassword(e.target.value) : setPassword(e.target.value))}
                  required
                />
                {message && <p className="message">{message}</p>}
              </div>
              <div className='button-group'>
              <Link to ="../signup">
              <a class="link">Dont have an account?</a>
              </Link>
                <button className="form_btn" type="submit">{isChangingPassword ? 'Change Password' : 'Login'}</button>
              </div>
            </form>
          )}
          {isLoggedIn && (
            <div>
              <button className="form_btn" onClick={() => setIsChangingPassword(!isChangingPassword)}>
                {isChangingPassword ? 'Cancel' : 'Change Password'}
              </button>
              <button type="submit" className="logout" onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LogIn;
