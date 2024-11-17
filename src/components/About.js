import React from 'react';
import image1 from '../images/c1.png';
import our_team from '../images/company.png';
import Footer from './Footer.js';

import c1 from '../images/jane_doe.jpg';
import c2 from '../images/john_smith.jpg';
import c3 from '../images/sarah_johnson.jpg';

import '../styles/styles.css';

const AboutUs = () => {
  return (
    <div>
    <div className ="about_wrapper">
      
      <div className='about_container'>
        

        <h1>Our milestones</h1>
        <div class="about_content">

          <div class='about_content2'>
            <h2>Built a network of <span class="ab_sp">50+</span>foster families</h2>
            <p>that provide temporary homes for animals in need.</p>
          </div>
          
          <div class='about_content2'>
            <h2>Partnered with more than <span class="ab_sp">10</span> local veterinary clinics</h2>
            <p>to provide affordable care for adopted pets.</p>
          </div>

          <div class='about_content2'>
            <h2>More than <span class="ab_sp">300</span> volunteers</h2>
            <p>that are actively rescuing animals.</p>
          </div>
        </div>
      </div>

      <div className='about_container1'>
        <div className='ac1_left'>
          <h1>Who we are</h1>
          <p>
            Pet Heaven Society is a dedicated non-profit organization focused on rescuing, rehabilitating, 
            and finding forever homes for abandoned pets, with a special focus on cats and dogs. We believe 
            that every animal deserves a second chance, 
            and our mission is to give them the opportunity to find a loving and caring home.
          </p>
          <p>
            We are a community of animal lovers, volunteers, 
            and supporters who are passionate about the welfare of animals. 
            Our work goes beyond just providing shelter — we aim to educate the public, 
            advocate for animal rights, and promote responsible pet ownership.
          </p>
          <h1>Our mission</h1>
          <p>Our mission is simple: to rescue, rehabilitate, and rehome pets in 
            need while advocating for the humane treatment of all animals. We strive to make 
            a difference in the lives of animals by providing them with medical care, training, 
            and a safe environment until they find their forever families.
            We believe that a healthy and happy pet is a lifelong companion, and our goal is to 
            make that possible for as many animals as we can. Whether it's rescuing a stray from the 
            streets or helping a pet owner in need, our commitment to animal welfare drives everything we do.
          </p>
          <h1>Our Values</h1>
          <p>
            Compassion: Treating every animal with kindness and respect.
            Transparency: Being open and honest with our supporters, adopters, and volunteers.
            Community: Working together with volunteers, donors, and adopters to create a strong support network for animals.
            Advocacy: Speaking up for the rights of animals and ensuring they receive the care they deserve.
            Responsibility: Promoting responsible pet ownership and the importance of lifelong commitment to animals.
          </p>
        </div>

        
        <div className='ac1_right'>
          <img src= {image1} />
        </div>
      </div>

  
      <div className='about_container1'>
        
        <div className='ac1_left'>
        <h1>What we do</h1>
        <p>
          Rescue & Rehome: We rescue abandoned, abused, or surrendered pets 
          and provide them with medical care, shelter, and love until they find a new home.
        </p>
        <p>
          Adoption: We facilitate the adoption process, matching each pet with the right 
          family to ensure a lifelong bond.
        </p>
        <p>Education & Awareness: We educate the community about responsible pet ownership, 
          the importance of spaying/neutering, and how to properly care for pets.
        </p>
        <p>Volunteer Programs: We offer volunteer opportunities for those who want to get involved, 
          from fostering animals to helping with events and outreach programs.
        </p>
        <p>Release & Surrender Support: Pet owners who can no longer care for their pets can safely 
          surrender them to our society, knowing they will be well taken care of and rehomed.
        </p>
        <p>Pet-Friendly Events: We organize and participate in local events to engage with the 
          community, including adoption days, training workshops, and educational talks.
        </p>
        </div>
      </div>

      <div className='about_team'>
        <div className='team_header'>
          <h1>Meet Our Team</h1>
          <img src={our_team}/>
        </div>
        
        <div class='team_con'>
          <div>
            <img src={c1}/>
              <h2>
              Jane Doe, Founder
              </h2>
          </div>

          <div>
            <img src={c2}/>
              <h2>
              John Smith, Co-Founder
              </h2>
          </div>

          <div>
            <img src={c3}/>
              <h2>
              Sarah Johnson, Volunteer Coordinator
              </h2>
          </div>
        </div>
      </div>

      <div className='about_get'>
      <h1>Get Involved</h1>
      <h2>
          We are always looking for passionate individuals who want to make a difference. Here's how you can help:
      </h2>
      <p>
          <span>Adopt a Pet: </span>Open your home and heart to a pet in need.
      </p>

      <p>
          <span>Volunteer: </span>Join our team of volunteers and help in various capacities, from fostering to event organization.
      </p>

      <p>
          <span>Donate: </span>Your contributions help us continue our work. Every donation goes towards medical care, food, and other essential needs for our animals.
      </p>

      <p>    
          <span>Sponsor a Pet: </span>Sponsor the care of a specific pet until they find their forever home.
      </p>

      <p>
          <span>Spread the Word: </span>Follow us on social media, share our stories, and help us raise awareness.
      </p>
        </div>
      
      
    </div>
    <Footer/>
    </div>
    
  );
};

export default AboutUs;
