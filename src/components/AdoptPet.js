import '../styles/styles.css';
import "./loader.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from "@fortawesome/free-solid-svg-icons"

import React, { useState } from 'react';
import ShowCat from './ShowCat_Resource';  // Assuming you have the ShowCat component
import ShowDog from './ShowDog_Resource';  // Assuming you have the ShowDog component
import Footer from './Footer';

const AdoptPet = () => {
  const [selectedPet, setSelectedPet] = useState(null); // Track selected pet type
  const [catKey, setCatKey] = useState(0); // Track the key to force re-rendering of ShowCat
  const [dogKey, setDogKey] = useState(0); // Track the key to force re-rendering of ShowDog

  const handleAdoptCat = () => {
    setSelectedPet('cat');  // Set selected pet to 'cat'
    setCatKey(prevKey => prevKey + 1); // Update the key to trigger re-fetch for cats
  };

  const handleAdoptDog = () => {
    setSelectedPet('dog');  // Set selected pet to 'dog'
    setDogKey(prevKey => prevKey + 1); // Update the key to trigger re-fetch for dogs
  };

  const handleReloadCats = () => {
    // Trigger re-fetch for cats by updating the catKey
    setCatKey(prevKey => prevKey + 1);
  };

  const handleReloadDogs = () => {
    // Trigger re-fetch for dogs by updating the dogKey
    setDogKey(prevKey => prevKey + 1);
  };

  return (
    <div className="adopt-wrapper">
      

        <div className="adopt-container">
        <h1>Adopt a Pet</h1>
            <div className="adopt-buttons">
                <button 
                onClick={handleAdoptCat} 
                className={`adoptBtnPage ${selectedPet === 'cat' ? 'active' : ''}`} // Only add 'active' to the clicked button
                >Adopt Cat</button>
                <button 
                onClick={handleAdoptDog} 
                className={`adoptBtnPage ${selectedPet === 'dog' ? 'active' : ''}`} // Only add 'active' to the clicked button
                >Adopt Dog</button>

                

            </div>

            <div className="adopt-display">
                <div class="reloadBtndiv">
                    {/* Conditionally render Reload buttons based on selected pet */}
                    {selectedPet === 'cat' && (
                        <button className="reloadBtn" onClick={handleReloadCats}><FontAwesomeIcon icon={faRotateRight} /> Refresh</button>
                    )}
                    {selectedPet === 'dog' && (
                        <button className="reloadBtn" onClick={handleReloadDogs}><FontAwesomeIcon icon={faRotateRight} /> Refresh</button>
                    )}
                </div>
                
                {/* Conditionally render based on selectedPet state */}
                {selectedPet === 'cat' && <ShowCat key={catKey} />} {/* Re-render ShowCat when catKey changes */}
                {selectedPet === 'dog' && <ShowDog key={dogKey} />} {/* Re-render ShowDog when dogKey changes */}
            </div>
        </div>

      <Footer />
    </div>
  );
};

export default AdoptPet;
