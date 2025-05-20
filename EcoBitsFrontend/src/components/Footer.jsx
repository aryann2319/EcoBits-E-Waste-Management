import React from "react"
import {assets} from '../assets/assets'
import '../styles/Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div id="footer">
      <div id="footer-section">
        <div id="foot-aboutus"> 
          <a href="/"><img src={assets.logo} alt="logo" id="logo-img"/></a><br/>
          <p>Sustainable eWaste recycling and upcycling for a greener future. Safe disposal, free home pickup, innovative reuse, and community awareness.</p>
          <ul>
            <li><FontAwesomeIcon icon={faInstagram} /></li>
            <li><FontAwesomeIcon icon={faEnvelope} /></li>
            <li><FontAwesomeIcon icon={faFacebook} /></li>
          </ul>
          
        </div>
        <div id="foot-quicklinks">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/pickup">Schedule a Pickup</a></li>
            <li><a href="/store">Shop Recycled Products</a></li>
            <li><a href="/contact">Collaborate</a></li>
          </ul>
        </div>
      </div>
      <div id="foot-copyright">
        <p>© 2025 EcoBits eWaste | All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
