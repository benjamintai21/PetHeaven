// components/Donate.js

import React, { useState } from 'react';
import donate from '../images/donate.jpg';

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState(''); // Track custom donation amount
  const [donationMessage, setDonationMessage] = useState(''); // Track the thank you message display

  const handleDonation = (amount) => {
    // Update the donation amount if a preset button was clicked
    setDonationAmount(amount);

    // Show the thank you message
    setDonationMessage(`Thank you for your generous donation of $${amount}!`);

    // Optionally reset after a delay (like a thank-you animation or message fading out)
    setTimeout(() => {
      setDonationMessage('');
    }, 5000); // Message will disappear after 5 seconds
  };

  const handleCustomDonation = () => {
    if (donationAmount) {
      setDonationMessage(`Thank you for your generous donation of $${donationAmount}!`);
      setTimeout(() => {
        setDonationMessage('');
      }, 5000);
    } else {
      setDonationMessage('Please enter a valid donation amount.');
    }
  };

  return (
    <div className="donate-container">
      <h1>Support Our Cause</h1>
      <p>Your donation helps us rescue and care for abandoned pets. Please consider making a donation to help us continue our mission.</p>
      <img src={donate}/>
      <div className="donation-options">
        <h2>Choose Your Donation Amount</h2>
        <button className="donate-button" onClick={() => handleDonation(10)}>Donate $10</button>
        <button className="donate-button" onClick={() => handleDonation(25)}>Donate $25</button>
        <button className="donate-button" onClick={() => handleDonation(50)}>Donate $50</button>
        <button className="donate-button" onClick={() => handleDonation(100)}>Donate $100</button>
      </div>

      <p>Or, you can donate any amount of your choice:</p>
      <input
        type="number"
        placeholder="Enter amount"
        className="donation-input"
        value={donationAmount}
        onChange={(e) => setDonationAmount(e.target.value)}
      />
      
      <button className="donate-button" onClick={handleCustomDonation}>Donate Now</button>

      {/* Show the donation message */}
      {donationMessage && <p className="thank-you-message">{donationMessage}</p>}

      <p>Thank you for your generous support!</p>
    </div>
  );
};

export default Donate;
