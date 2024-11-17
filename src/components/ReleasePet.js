import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';

const ReleasePet = () => {
  const [adoptedPets, setAdoptedPets] = useState([]);
  const [uploadedPets, setUploadedPets] = useState([]);
  const [petDetails, setPetDetails] = useState({ name: '', breed: '', description: '' });
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  // Fetch adopted and uploaded pets from local storage when the component mounts
  useEffect(() => {
    const pets = JSON.parse(localStorage.getItem('adoptedPets')) || [];
    const uploaded = JSON.parse(localStorage.getItem('uploadedPets')) || [];
    setAdoptedPets(pets);
    setUploadedPets(uploaded);
  }, []);

  // Function to handle releasing a pet (removes from adoptedPets)
  const handleReleasePet = (index) => {
    const updatedPets = [...adoptedPets];
    updatedPets.splice(index, 1); // Remove the selected pet from the array
    setAdoptedPets(updatedPets);
    localStorage.setItem('adoptedPets', JSON.stringify(updatedPets)); // Update local storage
  };

  // Function to handle releasing an uploaded pet (removes from uploadedPets)
  const handleReleaseUploadedPet = (index) => {
    const updatedUploaded = [...uploadedPets];
    updatedUploaded.splice(index, 1); // Remove the selected pet from the array
    setUploadedPets(updatedUploaded);
    localStorage.setItem('uploadedPets', JSON.stringify(updatedUploaded)); // Update local storage
  };

  // Handle input changes for the pet details
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPetDetails({ ...petDetails, [name]: value });
  };

  // Handle file upload change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  // Function to handle file upload and save the pet data
  const handleUploadPet = (event) => {
    event.preventDefault();
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newPet = {
          name: petDetails.name || 'My Own Dog',
          breed: petDetails.breed || 'Unknown Breed',
          description: petDetails.description || '',
          url: reader.result,
        };
        const updatedUploadedPets = [...uploadedPets, newPet];
        setUploadedPets(updatedUploadedPets);
        localStorage.setItem('uploadedPets', JSON.stringify(updatedUploadedPets)); // Save to local storage
        setPetDetails({ name: '', breed: '', description: '' }); // Reset form
        setFile(null); // Clear the file input
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="release-container">
        <h1>Release your Pet</h1>
        <p>If you're finding it challenging to care for your pet, you can consider giving them a chance to find a new, loving home.</p>

        {/* Section to Upload a New Dog Image */}
        <div className="upload-section">
          
          <form onSubmit={handleUploadPet}>
            <input
              type="text"
              name="name"
              placeholder="Enter your pet's name"
              value={petDetails.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="breed"
              placeholder="Enter your pets's breed"
              value={petDetails.breed}
              onChange={handleInputChange}
            />
            <textarea
              name="description"
              placeholder="Describe your pet"
              value={petDetails.description}
              onChange={handleInputChange}
            />
            <h2>Upload an image of your pet</h2>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
            <button type="submit">Release Pet</button>
          </form>
        </div>

        {/* Display Adopted Pets */}
        <div className="release-content">
          <h2>Adopted Pets</h2>
          {adoptedPets.length > 0 ? (
            <div className="adopted-pets-grid">
              {adoptedPets.map((pet, index) => (
                <div key={index} className="adopted-pet">
                  <h3>{pet.breeds?.[0]?.name || 'Unknown Breed'}</h3>
                  <img className="image1" src={pet.url} alt={pet.name} />
                  <p>{pet.name}</p>
                  <button
                    className="release-btn"
                    onClick={() => handleReleasePet(index)}
                  >
                    Release Pet
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p>You have not adopted any pets yet.</p>
          )}
        </div>

        {/* Display Uploaded Pets */}
        <div className="release-content">
          <h2>My pets released</h2>
          {uploadedPets.length > 0 ? (
            <div className="adopted-pets-grid">
              {uploadedPets.map((pet, index) => (
                <div key={index} className="adopted-pet">
                  <h3>{pet.breed}</h3>
                  <img className="image1" src={pet.url} alt={pet.name} />
                  <p>Name: {pet.name}</p>
                  <p>Description: {pet.description}</p>
                  {/* <button
                    className="release-btn"
                    onClick={() => handleReleaseUploadedPet(index)}
                  >
                    Release Pet
                  </button> */}
                </div>
              ))}
            </div>
          ) : (
            <p>You have not uploaded any pets yet.</p>
          )}
        </div>

        <button class="adopBtm"onClick={() => navigate("/adopt")}>
          <u>Back</u>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default ReleasePet;
