import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const MyAdopt = () => {
  const [adoptedPets, setAdoptedPets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the adopted pets from local storage
    const pets = JSON.parse(localStorage.getItem('adoptedPets')) || [];
    setAdoptedPets(pets);
  }, []);

  return (
    <div>
      <div className="my-adopt-container">
        <div className="my-adopt-header">
          <h1>My Adoptions</h1>
        </div>
        <div className="my-adopt-content">
          {adoptedPets.length > 0 ? (
            <div className="adopted-pets-grid">
              {adoptedPets.map((pet, index) => (
                <div key={index} className="adopted-pet">
                  <h2>{pet.breeds?.[0]?.name || 'Unknown Breed'}</h2>
                  <img className="image1" src={pet.url} alt={pet.name} />
                  <p>{pet.name}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>You have not adopted any pets yet.</p>
          )}
        </div>
        <button class="adoptBtm" onClick={() => navigate("/adopt")}>Back</button>
      </div>
      <Footer />
    </div>
  );
};

export default MyAdopt;
