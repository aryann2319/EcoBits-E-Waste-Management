import React from 'react'
import '../styles/ScrapRates.css'
import { assets } from '../assets/assets'

const ScrapRates = () => { 
  return (
    <div>
      <div class="scrap-container">
        <div class="s-card">
          <img src={assets.laptop} alt="Collection"/>
          <h3>Laptop</h3>
          <p>350Rs (Piece)</p>
        </div>
        <div class="s-card">
          <img src={assets.phone} alt="Collection"/>
          <h3>Smart Phone</h3>
          <p>20Rs (Piece)</p>
        </div>
        <div class="s-card">
        <img src={assets.keypadPhone} alt="Collection"/>
          <h3>Keypad Phone</h3>
          <p>10Rs (Piece)</p>
        </div>
        <div class="s-card">
        <img src={assets.tablet} alt="Collection"/>
          <h3>Tablet</h3>
          <p>30Rs (Piece)</p>
        </div>
        <div class="s-card">
        <img src={assets.ups} alt="Collection"/>
          <h3>UPS</h3>
          <p>45Rs (Kg)</p>
        </div>
        <div class="s-card">
        <img src={assets.cpu} alt="Collection"/>
          <h3>CPU</h3>
          <p>350Rs (Piece)</p>
        </div>
        <div class="s-card">
        <img src={assets.microwave} alt="Collection"/>
          <h3>Microwave</h3>
          <p>200Rs (Piece)</p>
        </div>
        <div class="s-card">
        <img src={assets.fan} alt="Collection"/>
          <h3>Fan</h3>
          <p>250Rs (Peice)</p>
        </div>
        <div class="s-card">
        <img src={assets.lcd} alt="Collection"/>
          <h3>LCD</h3>
          <p>20Rs (Kg)</p>
        </div>
        <div class="s-card">
        <img src={assets.crtTV} alt="Collection"/>
          <h3>CRT TV</h3>
          <p>160Rs (Piece)</p>
        </div>
        <div class="s-card">
        <img src={assets.refrigerator} alt="Collection"/>
          <h3>Refrigerator</h3>
          <p>1200Rs (Peice)</p>
        </div>
        <div class="s-card">
        <img src={assets.printer} alt="Collection"/>
          <h3>Printer</h3>
          <p>30Rs (Kg)</p>
        </div>
        <div class="s-card">
        <img src={assets.mixer} alt="Collection"/>
          <h3>Mixer Grinder</h3>
          <p>20Rs (Kg)</p>
        </div>
        <div class="s-card">
        <img src={assets.motherboard} alt="Collection"/>
          <h3>Motherboard</h3>
          <p>100Rs (Piece)</p>
        </div>
        <div class="s-card">
        <img src={assets.ram} alt="Collection"/>
          <h3>Ram</h3>
          <p>10Rs (Piece)</p>
        </div>
        <div class="s-card">
        <img src={assets.hardDrive} alt="Collection"/>
          <h3>Computer Hard Disk</h3>
          <p>50Rs (Piece)</p>
        </div>
        <div class="s-card">
        <img src={assets.photopcoy} alt="Collection"/>
          <h3>Photo Copy Machine</h3>
          <p>25Rs (Kg)</p>
        </div>
        <div class="s-card">
        <img src={assets.battery} alt="Collection"/>
          <h3>Battery</h3>
          <p>80Rs (Kg)</p>
        </div>
        <div class="s-card">
        <img src={assets.AC} alt="Collection"/>
          <h3>Air Conditioner</h3>
          <p>1800Rs (Peice)</p>
        </div>
        <div class="s-card">
        <img src={assets.geyser} alt="Collection"/>
          <h3>Geyser</h3>
          <p>1000Rs (Peice)</p>
        </div>
      </div>
    </div>
  )
}

export default ScrapRates
