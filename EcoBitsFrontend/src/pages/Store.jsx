import React from "react";
import "../styles/Store.css";
import Login from "./Login";
import { Link } from "react-router-dom";
import ComputerProducts from "../components/ComputerProducts";


const Store = () => {
  return (
    <div>
      <section class="store-hero-banner">
      <div class="user-actions">
          {/* <Link to="/Profile" class="store-icon">
            👤
          </Link> */}
          <Link to="/Cart" class="store-icon">
            🛒
          </Link>
          {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/store')}} className="login-btn">Logout</button>:
          <Link to="/Login">
          <button class="login-btn" onClick={Login}>
            Login
          </button>
          </Link>}
        </div>
        <div class="store-hero-content">
          <h1>
            Let's start thinking, buying &<br />
            gifting consciously
          </h1>
          <p>
            Sustainability is a conscious choice and we promote this through our
            recycled e-waste component range. Each of the products at econscious
            is curated with love and thoughtfulness. We bring an innovative
            range of recycled e-waste products in India to you. Check
            out our range.
          </p>
        </div>
      </section>
      <div id="store-filter-header">
          <div class="filter-line"></div>
          <h2>Shop Recycled Components</h2>
          <div class="filter-line"></div> 
      </div>
      <ComputerProducts/>
      {/* <div id="store-filter-header">
          <div class="filter-line"></div>
          <h2>Recycled E-Waste Plastic Components</h2>
          <div class="filter-line"></div> 
      </div>
      <PlasticProducts/> */}
    </div>
  );
};

export default Store;
