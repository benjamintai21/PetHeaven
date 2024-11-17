import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../styles/styles.css';
import './loader.css';

const Resource  = ( { path,  render  }    ) => {

    const initialState = {
        trans:[],
        loading: true,
        error: null
    }

    const [ state, setState ] = useState( initialState );

    const getData = async ( ) => {

        try {

            const result = await axios.get(path, {
                headers: {
                    'x-api-key': 'api_key=live_6qrwtqwMuahNsFhzTDTk4z9eb5HRwyRdw5fxBpsnyr9EOcGcZfgRjJ4th0stJWOC'  
                }
            });
       
            console.log(' result ', result );

            const newData = {
                trans: result.data,
                loading: false,
                error:null
            }

            setState( newData );
           
        } catch (error) {
           
            console.log('error in get data', error.message)
        }


    }  


    useEffect( () => {  

        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (

        <div  className='show1'>
           

          {   render( state )  }

        </div>
    )
}

const Show1Cat = () => {

    const webURL = 'https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1&api_key=live_6qrwtqwMuahNsFhzTDTk4z9eb5HRwyRdw5fxBpsnyr9EOcGcZfgRjJ4th0stJWOC';

    const navigate = useNavigate(); // Initialize navigate

    // Function to handle the Adopt Now button
    const handleAdopt = (cat) => {
        // Navigate to SignUp page with the selected cat data
        navigate('/signup', { state: { pet: cat, type: 'cat' } });
    };


    const render = (data) => {
    if (data.loading) {
        return <div className="loader"><p>Loading...</p></div>;
    }

    // Check if data contains breed information
    console.log('API Response:', data.trans); // Log to see what the API returns

    return data.trans.map(cat => (
        <div>
            <div key={cat.id} className="cell">
                <div className="cell-inner">
                    <div className="cell-front">
                        <img className='image' src={cat.url} alt='cat img' />
                    </div>
                    <div className="cell-back">
                        <h4>Breed: {cat.breeds && cat.breeds.length > 0 ? cat.breeds[0].name : 'Unknown'}</h4>
                        <p>Weight: {cat.breeds && cat.breeds.length > 0 ? cat.breeds[0].weight.metric + "kg" : 'Unknown'}</p>
                        <p>Origin: {cat.breeds && cat.breeds.length > 0 ? cat.breeds[0].origin : 'Unknown'}</p>
                        <p class="description">Description: {cat.breeds && cat.breeds.length > 0 ? cat.breeds[0].description : 'No description available.'}</p>
                        <p>Life-span: {cat.breeds && cat.breeds.length > 0 ? cat.breeds[0].life_span + " years": 'Unknown'}</p>
                        <p>Temperament: {cat.breeds && cat.breeds.length > 0 ? cat.breeds[0].temperament : 'No temperament info.'}</p>
                        
                        <div className='cat_btm'>
                            <div className='=cat_btm1'>
                                <h5>Ratings: (1-5)</h5>
                                <p>Indoor: {cat.breeds && cat.breeds.length > 0 ? (cat.breeds[0].indoor ? 'Yes' : 'No') : 'Unknown'}</p>
                                <p>Adaptability: {cat.breeds && cat.breeds.length > 0 ? cat.breeds[0].adaptability : 'Unknown'}</p>
                                <p>Affection Level: {cat.breeds && cat.breeds.length > 0 ? cat.breeds[0].affection_level : 'Unknown'}</p>
                                <p>Child Friendly: {cat.breeds && cat.breeds.length > 0 ? cat.breeds[0].child_friendly : 'Unknown'}</p>
                                <p>Energy Level: {cat.breeds && cat.breeds.length > 0 ? cat.breeds[0].energy_level : 'Unknown'}</p>
                                <p>Grooming: {cat.breeds && cat.breeds.length > 0 ? cat.breeds[0].grooming : 'Unknown'}</p>
                                <p>Intelligence: {cat.breeds && cat.breeds.length > 0 ? cat.breeds[0].intelligence : 'Unknown'}</p>
                                <p>Social Needs: {cat.breeds && cat.breeds.length > 0 ? cat.breeds[0].social_needs : 'Unknown'}</p>
                                <p>Stranger Friendly: {cat.breeds && cat.breeds.length > 0 ? cat.breeds[0].stranger_friendly : 'Unknown'}</p>
                            </div>

                            <div className='cat_btm2'>
                                <img width="100px" height="100px" src={cat.url}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
            <button
                type="button"
                className="adoptBtn"
                onClick={() => handleAdopt(cat)} // Call handleAdopt with the selected cat
            >Adopt Now</button>

          </div>
        </div>
        
    ));
};
  return (
      <div className='each_pet'>

          <Resource path={ webURL  } render={ render } />

      </div>
  )
}

export default function App() {
  return (
    <>


      <Show1Cat />
   
    </>
  );
}