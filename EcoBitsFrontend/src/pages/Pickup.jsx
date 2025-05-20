import React from "react";
import "../styles/Pickup.css";
import ScrapRates from "../components/ScrapRates";
import PickupForm from "../components/PickupForm";
import { assets } from "../assets/assets";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Pickup = () => {
  return (
    <div>
      <ToastContainer position="top-center" autoClose={2000} />
      <div id="pickup-img">
        <img src={assets.pickupImg} alt="pickuptruck" />
      </div>
      <PickupForm />

      <div id="scrap-rates">
        <div class="line"></div>
        <h2>Scrap Rates</h2>
        <div class="line"></div>
      </div>

      <ScrapRates />
    </div>
  );
};

export default Pickup;
