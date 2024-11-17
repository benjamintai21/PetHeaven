import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from './Footer';
import heart from '../images/heart.png';

const ThankYou = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pet = location.state?.pet;

  const handleViewAdoptions = () => {
    navigate("/myadopt");
  };

  return (
    <div>
      <div className="thank-you-container">
        <div className='ty_content'>
            <h1>Thank You for adopting me!<img class="tyimage" src={heart}/></h1>
            
            <h2>Your adoption is being processed. We're thrilled to have you as part of our community!</h2>
            
            {pet && (
            <div>
                <p>You adopted: {pet.breeds?.[0]?.name || 'Unknown Breed'}</p>
                <img className="image1" src={pet.url} alt={pet.name} />
                <p>{pet.name}</p>
            </div>
            )}
            
            <button className="adoptBtm" onClick={handleViewAdoptions}>
            View All My Adoptions
            </button>
        </div>
        </div>
    <Footer />
    </div>
  );
};

export default ThankYou;
