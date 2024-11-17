import React from 'react';
import video from '../videos/video1.mp4';
import captions from '../captions/captions.vtt';
import dog1 from '../images/dog1.jpg';
import dog2 from '../images/dog2.jpg';
import dog3 from '../images/dog3.jpg';
import dog4 from '../images/dog4.jpg'


import r1 from '../images/r1.jpg';
import r2 from '../images/r2.jpg';
import r3 from '../images/r3.jpg';
import ShowCat from './ShowCat_Resource.js';

import Show1Cat from './Show1Cat.js';
import Show1Dog from './Show1Dog.js';

import Footer from './Footer.js';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const Home = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className='home_container'>
      <span>
        <div className='home_btm'>
          <h1>Welcome to Pet Heaven Society!</h1>
          <p>Pet Heaven is a charity society set up to give abandoned pets a second home, where they can find warmth, love, and the care they deserve. We are dedicated to rescuing, 
          rehabilitating, and rehoming pets in need, giving them a chance to thrive in safe, forever homes.</p>
          
          <Link to="/signup">
            <button className='bannerBtn'>Sign Up</button>
          </Link>

          <a href="#shelter" class="bannerLink">How Can I Help?</a>

        </div>
      </span>  
    </div>

    <div className='hc2'>
      <div className='hc2container'>
        <h1>Who are we?</h1>
          <p>
            Pet Heaven Society is Singapore's most trusted pet shelter, committed to providing a safe haven for 
            every animal. Our mission is to give every pet the chance to find a loving, forever home. Pet owners have the opportunity to release their pets back to society, while members can choose to adopt a pet in need of a loving home."
          </p>
          <button class="whoBtn" onClick={() => navigate('/signup')}>I Want To Help</button>
          <button class="whoBtn" onClick={() => navigate('/about')}>About Us</button>
        </div>
      </div>


    <div className='hc22'>
      <h1>More than 300 Pets rescued since 2023 and counting...</h1>
      <img src={dog1}/>
      <img src={dog2} />
      <img src={dog3} />
      <img src={dog4} />
      
    </div>

    <div class='hc23'>
      <h1>Join us in making a difference—consider adopting 
      a pet today and offer them the love they deserve.</h1>
      <div className='doggo'>
        <Show1Dog/>
        <Show1Cat/>
        <Show1Dog/>
      </div>

      <div className='doggo'>
        <Show1Cat/>
        <Show1Dog/>
        <Show1Cat/>
      </div>
      <Link to ="./adopt">
        <button class="adoptBtm">See all pets up for adoption -&gt;</button>
      </Link>
    </div>


    <div class="r_container">
        <div class="r_header">
            <h1>A Home for Every Paw</h1>
            <h2>Our Success Stories</h2>
        </div>
        
        <div class="r_content">
            <div class="r_item">
                <div class="r_review">
                  <img src={r1}/>
                  <h2>Story of Bella - A New Beginning</h2>
                    <blockquote>
                    "We found Bella at Pet Heaven Society, and she immediately captured our hearts. 
                    She was shy at first, but with time, she warmed up and became a playful, loving part of our family. 
                    We can't imagine our home without her happy barks and playful antics! Thank you, Pet Heaven, 
                    for giving us our furry best friend!"
                    
                    </blockquote>
                </div>

                <b>~ Mia & Samuel</b>
            </div>

            <div class="r_item">
                <div class="r_review">
                <img src={r2}/>
                  <h2>Story of Whiskers - From Street to Sweet</h2>
                    <blockquote>
                    "Whiskers was a stray cat who struggled to trust people. 
                    Pet Heaven Society gave him a second chance, and now he’s a snuggle expert! 
                    He loves curling up next to us while we read or watch TV. We never expected to have such a sweet and loyal companion."
                    </blockquote>
                </div>

                <b>~ Emily & David</b>
            </div>

            <div class="r_item">
                <div class="r_review">
                <img src={r3}/>
                  <h2>Story of Max - A Rescue Turned Hero</h2>
                    <blockquote>
                    "Max was rescued by Pet Heaven Society after a difficult start in life. 
                    Today, he's our son's best friend and guardian. Max has brought so much love and joy into our home, 
                    and we're grateful every day for the opportunity to adopt him. He's proof that every pet deserves a second chance."
                    </blockquote>
                </div>

                <b>~The Tan Family</b>
            </div>


      </div>
    </div>
        



    

    <div className='hc3'>
    <h1>Why is there a need for pet shelters?</h1>
      <blockquote><h2><i>"They're eating the dogs. They're eating the cats"</i></h2></blockquote>
      
      <p>- US President-Elect Donald Trump during his 2024 Presidential Debate</p>
      <video controls>
        <source src={video} type="video/mp4"/>
          <track
          label="English"
          kind="subtitles"
          srclang="en"
          src={captions}
          default />
          Your browser does not support the video tag.
      </video>
    </div>

    <div class="shelter" id="shelter">
      <div class="s_header">
        <h1>How can I help?</h1>
      </div>

      <div className="s_content">
  
        <div className="s1">
          <Link to="/signup">
            <button>Adopt a pet</button>
          </Link>
        </div>

        <div className="s1">
          <Link to="/signup">
            <button>Release your pet</button>
          </Link>
        </div>

        <div className="s1">
          <Link to="/donate">
            <button>Donate</button>
          </Link>
        </div>

      </div>


    </div>

    <Footer/>
    </>
  )
}

export default Home