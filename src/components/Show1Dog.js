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
                    'x-api-key': 'api_key=live_ILpkpiXx0Iz53QUPmT4qotFbEF2lvWE2dXCmxxqxRtBEgkd994IXGEnUbSqza4t2'  
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





const Show1Dog = () => {

    const webURL = 'https://api.thedogapi.com/v1/images/search?limit=1&has_breeds=1&api_key=live_ILpkpiXx0Iz53QUPmT4qotFbEF2lvWE2dXCmxxqxRtBEgkd994IXGEnUbSqza4t2';
    
    const navigate = useNavigate(); // Initialize navigate

    // Function to handle the Adopt Now button
    const handleAdopt = (dog) => {
        // Navigate to SignUp page with the selected cat data
        navigate('/signup', { state: { pet: dog, type: 'dog' } });
    };

    const render = ( data ) => {

      if ( data.loading === true ) return <div className="loader">
        <p>Loading...</p>
      </div>
      console.log('Got the data', data );

   return (    data.trans.map( dog => (

    <div>
            <div key={dog.id} className="cell">
                <div className="cell-inner">
                    <div className="cell-front">
                        <img className='image' src={dog.url} alt='dog img' />
                    </div>
                    <div className="cell-back">
                        <h4>Breed: {dog.breeds && dog.breeds.length > 0 ? dog.breeds[0].name : 'Unknown'}</h4>
                        <p>Weight: {dog.breeds && dog.breeds.length > 0 ? dog.breeds[0].weight.metric + "kg" : 'Unknown'}</p>
                        <p>Height: {dog.breeds && dog.breeds.length > 0 ? dog.breeds[0].height.metric + "cm" : 'Unknown'}</p>
                        <p>Bred for: {dog.breeds && dog.breeds.length > 0 ? dog.breeds[0].bred_for : 'Unknown'}</p>
                        <p>Breed Group: {dog.breeds && dog.breeds.length > 0 ? dog.breeds[0].breed_group : 'No description available.'}</p>
                        <p>Life-span: {dog.breeds && dog.breeds.length > 0 ? dog.breeds[0].life_span + " years": 'Unknown'}</p>
                        <p>Temperament: {dog.breeds && dog.breeds.length > 0 ? dog.breeds[0].temperament : 'No temperament info.'}</p>
                        <img width="100px" height="100px" src={dog.url}/>
                    </div>
                </div>
            </div>
            <div className="">
            <button
                type="button"
                className="adoptBtn"
                onClick={() => handleAdopt(dog)} // Call handleAdopt with the selected cat
            >Adopt Now</button>

          </div>
        </div>
        )
   )

   )
  }



  return (
      <div className='each_pet'>

          <Resource path={ webURL  } render={ render } />

      </div>
  )
}






export default function App() {
  return (
    <>
   

      <Show1Dog />
    </>
  );
}