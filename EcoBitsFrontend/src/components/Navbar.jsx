import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div class="navbar">
      <a href="/"><img src={assets.logo} alt="logo" class="logo" /></a>

      <ul id="nav-links">
        <NavLink to="/" class="nav-item">
          <p>HOME</p>
          <hr class="underline" />
        </NavLink>
        <NavLink to="/pickup" class="nav-item">
          <p>E-WASTE PICKUP</p>
          <hr class="underline" />
        </NavLink>
        <NavLink to="/store" class="nav-item">
          <p>SHOP</p>
          <hr class="underline" />
        </NavLink>
        <NavLink to="/contact" class="nav-item">
          <p>COLLABORATE</p>
          <hr class="underline" />
        </NavLink>
      </ul>
    </div>
  )
} 

export default Navbar
