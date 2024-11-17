import React from 'react'
import logo from '../images/logo-transparent-svg.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone , faEnvelope , faCircleQuestion } from "@fortawesome/free-solid-svg-icons"
import { faInstagram , faXTwitter  , faFacebook } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <>

      <footer class="privacy_wrapper">
        
          <hr></hr>
          <div class="privacy_container">

              <div class="p_content">

                  <div class="view_top">
                      <img src={logo} height="100%" width="100%"/>
                      
                  </div>
                  <div class="p_view">
                      <p><u>Our Locations</u></p>
                      <p>53 Ang Mo Kio Ave 3, Singapore 569933</p>
                      <p>3155 Commonwealth Ave W, #05-35/36/37, Singapore 129588</p>
                  </div>

                  <div class="p_view">
                      <p><u>Our Socials</u></p>
                      <p><b><a href="https://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></b></p>
                      <p><b><a href="https://www.x.com" target="_blank"><FontAwesomeIcon icon={faXTwitter} /> X (previously Twitter)</a></b></p>
                      <p><b><a href="https://www.facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></b></p>
                  </div>

                  <div class="p_view">
                      <p><u>Contact Us</u></p>
                      <p><b><a href="https://www.google.com" target="_blank"><FontAwesomeIcon icon={faPhone} /> 61234567</a></b></p>
                      <p><b><a href="mailto:info@petheaven.org" target="_blank"><FontAwesomeIcon icon={faEnvelope} /> info@petheaven.org</a></b></p>

                      <p><b><a href="FAQPage.html" target="_blank"><FontAwesomeIcon icon={faCircleQuestion} /> FAQS</a></b></p>

                  </div>
              </div>


              <hr></hr>

              <div class="c_content">
                  
                  <div class="pp">
                      <div class="ppheader">
                          <p>Copyright&copy; 2024 Pet Heaven Society. All rights reserved.</p>
                      </div>
                      
                      <div class="pplinks">
                          
                          <a href="PrivacyPage.html">Privacy Policy</a>|
                          <a href="TermsPage.html">Terms of Use</a>|
                          <a href="AboutPage.html">About</a>
                          
                      </div>
                      
                  </div>
              </div>

          </div>
      </footer>
    </>
  )
}

export default Footer