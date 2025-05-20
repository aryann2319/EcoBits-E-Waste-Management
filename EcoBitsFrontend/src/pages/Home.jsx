import React from 'react'
import { assets } from '../assets/assets'
import '../styles/Home.css'

const Home = () => { 
  return (
    <div>
       <div id="banner-section">
        <div id="banner-text">
          <h2>One step closer<br />to a sustainable <br />world!</h2>
          <p>
            India recycles only around 33% of its generated <br /> e-waste. Let's change these statistics!
          </p>
        </div>
        <div id="banner-image">
          <img src={assets.bannerMountain} alt="banner" />
        </div>
      </div>

      <div id="who-section">
        <div id="who-section-header">
          <div class="who-line"></div>
          <h2>Who are we?</h2>
          <div class="who-line"></div>
        </div>
        <div id="who-section-content">
        <p id="who-section-text">
          At EcoBits eWaste, we provide responsible and sustainable eWaste recycling solutions using 
          state-of-the-art technology to ensure safe disposal while minimizing environmental impact. 
          Beyond recycling, we upcycle discarded electronics into innovative products, reducing landfill waste.
          <br /><br />
          With dedicated disposal facilities and collection stalls, we make eWaste disposal easy for individuals 
          and businesses while ensuring compliance with environmental regulations. We also educate communities 
          through awareness programs, seminars, and workshops, promoting responsible eWaste management. Our public 
          engagement initiatives, including collection drives, empower people to combat eWaste pollution. 
          EcoBits is more than a recycling company, we’re a movement for a greener future.
        </p>
        <div id="who-section-image">
          <img src={assets.whoSectionImg} alt="who-section" />
        </div>
        </div>
      </div>

      <div id="why-section">
        <div class="why-section-header">
          <div className="why-line"></div>
          <h2> Why EcoBits </h2>
          <div className="why-line"></div>
        </div>

        <div class="card-container">
          <div className="card">
            <div className="icon">💰</div>
            <h3>Best Rates</h3>
            <p>Our competitive rates ensure you receive the best value for your Sell E-Waste scrap online, making sustainability profitable.</p>
          </div>

          <div className="card">
            <div className="icon">✅</div>
            <h3>Verified E-Waste Pickup Team</h3>
            <p>Our executives come to your doorstep for pickup on the date and time of your choice.</p>
          </div>

          <div className="card">
            <div className="icon">♻️</div>
            <h3>Eco-Friendly Disposal</h3>
            <p>We deliver all materials to certified recycling centers, contributing to a cleaner environment.</p>
          </div>

          <div className="card">
            <div className="icon">🛍️</div>
            <h3>Circular Economy</h3>
            <p>Plastic and Metal components are upcycled & transformed into functional products like desks, pots, home decor, etc.</p>
          </div>
        </div>
      </div>
      <div class="stats-container">
        <div class="stat-box">
            <img src={assets.customers} alt="Happy Customers"/>
            <div class="stat-number">20000+</div>
            <div class="stat-text">HAPPY CUSTOMERS</div>
        </div>
        <div class="stat-box">
            <img src={assets.satisfaction} alt="Customer Satisfaction"/>
            <div class="stat-number">100%</div>
            <div class="stat-text">CUSTOMER SATISFACTION</div>
        </div>
        <div class="stat-box">
            <img src={assets.recycle} alt="Scrap Recycled"/>
            <div class="stat-number">4 Lakh+ Kg</div>
            <div class="stat-text">TOTAL E-WASTE RECYCLED</div>
        </div>
        <div class="stat-box">
            <img src={assets.experince} alt="Years of Business"/>
            <div class="stat-number">7+</div>
            <div class="stat-text">YEARS OF BUSINESS</div>
        </div>
    </div>
    
        <div class="why-section-header">
          <div class="why-line"></div>
          <h2>After Collection</h2>
          <div class="why-line"></div>
        </div>
        <div class="card-container">
        <div class="card">
            <img src={assets.collection} alt="Collection"/>
            <h3>Collection</h3>
            <p>E-waste is picked up from households, businesses, and institutions through scheduled pickups and drop-off points.</p>
        </div>
        <div class="card">
            <img src={assets.sorting} alt="Sorting"/>
            <h3>Sorting and Separation</h3>
            <p>E-waste is sorted into different categories like metals, plastics, and electronics components.</p>
        </div>
        <div class="card">
            <img src={assets.processing} alt="Processing"/>
            <h3>Processing</h3>
            <p>Metals are melted, plastics is shredded & melted, electronics components are disassembled for gold, silver, copper recovery.</p>
        </div>
        <div class="card">
            <img src={assets.recycle} alt="Recycling"/>
            <h3>Recycling and Reuse</h3>
            <p>The recovered materials are used in manufacturing new products, while reducing the need for raw materials.</p>
        </div>
      </div>


      <div id= "pickup-dropoff-section-home">
        <div id="who-section-header">
            <div class="who-line"></div>
            <h2>Schedule a Pickup</h2>
            <div class="who-line"></div> 
        </div>
        <div id="pickup-dropoff-content">
          <div id="pickup-section-home">
            <h2>Schedule a Pickup on the date of your choice! <br/>Our Executives will collect your E-Waste from your doorstep.</h2>
            <button id="pickup-button-home"><a href="/pickup">Schedule Pickup</a></button>
          </div>
        </div>
      </div>

      {/* <div id="collaborate-section">
        <div class="why-section-header">
          <div class="why-line"></div>
          <h2>Collaborate with us</h2>
          <div class="why-line"></div>
        </div>
        <div id="collaborate-section-content">
        <p id="collaborate-section-text">
          At EcoBits, we believe in the power of collaboration to drive meaningful environmental change. We partner with colleges, corporates, and schools to conduct awareness drives, workshops, and seminars that inspire sustainable action. Our collaborations extend to setting up eco-stalls at events and exhibitions, where we engage with the public, promote sustainable products, and spread awareness about pressing environmental issues.
          <br /><br />
          Through these initiatives, we aim to educate, empower, and encourage individuals and organizations to adopt eco-friendly practices. Whether it’s through campus programs, corporate sustainability initiatives, or school-driven green campaigns, we work together to create a lasting impact. If you are interested in collaborating with us, let’s join hands to build a cleaner, greener future.
        </p>
        <div id="collaborate-section-image">
          <img src={assets.collaboratehomeimage} alt="collaborate-image" />
        </div>
        </div> 

      </div> */}

    </div>
  )
}

export default Home
