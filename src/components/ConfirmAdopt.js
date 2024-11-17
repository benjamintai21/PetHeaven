import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "./Footer";

const ConfirmAdoption = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pet = location.state?.pet;

  const handleConfirmAdoption = () => {
    // Retrieve existing adopted pets from local storage or initialize as an empty array
    const adoptedPets = JSON.parse(localStorage.getItem('adoptedPets')) || [];

    // Add the newly adopted pet to the list
    adoptedPets.push(pet);

    // Save the updated list of adopted pets back to local storage
    localStorage.setItem('adoptedPets', JSON.stringify(adoptedPets));

    // After confirmation, navigate to the "My Adoptions" page
    navigate("/thankyou", { state: { pet } });
  };

  return (
    <div>
      <div className="confirm-container">
        <h1>Confirm Adoption</h1>
        {pet ? (
          <div>
            <h2>You're adopting: {pet.breeds?.[0]?.name || 'Unknown Breed'}</h2>
            <img className="image" src={pet.url} alt={pet.name} />
            <button className="adoptBtn" onClick={handleConfirmAdoption}>Confirm Adoption</button>
          </div>
        ) : (
          <p>No pet selected</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ConfirmAdoption;
