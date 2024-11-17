import React, { useState } from 'react';
import './form.css'; // Importing the CSS file
import { useNavigate, useLocation } from "react-router-dom"; // Import the hooks
import Footer from './Footer';
import { Link } from 'react-router-dom';

const SignUp = ({ onLogin, onLogout}) => {
  const navigate = useNavigate(); // Initialize the navigate function
  const location = useLocation(); // Access location state
  const selectedPet = location.state?.pet; // Retrieve the pet information
  const selectedPetType = location.state?.type;

  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    password: ''  // Include password in the form data state
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mark the user as logged in by setting 'isLoggedIn' in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    console.log(onLogin);
    if (onLogin) {
      onLogin(); // Call the onLogin function if it exists
    }

    // If the submission is successful, navigate to the confirm adoption page
    navigate("/confirm-adoption", { state: { pet: selectedPet } });

    // Reset the form after submission
    setFormData({ name: '', address: '', phone: '', email: '', password: '' });
  };

  // Handle "Change Pet" button click to navigate back
  const handleChangePet = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div>
      <div className='signupcontainer'>
        <div className='petinfo'>
          {selectedPet && (
            <div className="selected-pet-info">
              <h2>You're so close to adopting your {selectedPetType}!</h2>
              {/* Display pet information */}
              <img className="image_pet" src={selectedPet.url} alt="Selected Pet" />
              <h4>Breed Name: {selectedPet.breeds?.[0]?.name || 'Unknown Breed'}</h4>
              <button onClick={handleChangePet} className="change-pet-btn">Back</button> {/* Change Pet button */}
            </div>
          )}
        </div>

        <form className="form-container" onSubmit={handleSubmit}>
          <h1>Sign Up to join our community!</h1>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              placeholder='Enter your name'
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              placeholder='Enter your Email'
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              placeholder='Password'
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className='button-group'>
            <Link to="../login">
              <a className="link">Already have an account?</a>
            </Link>
            <button className="form_btn" type="submit">Submit</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
