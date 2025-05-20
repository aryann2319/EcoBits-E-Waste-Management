import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'
import '../styles/NavbarAdmin.css'

const NavbarAdmin = () => {
  return (
    <div className="navbar-admin">
      <img src={assets.logo} alt="" className="nav-admin-logo" />
      <ul id="nav-admin-links">
        <NavLink to="/" className="nav-admin-item">
          <p>PICKUPS</p>
          <hr className="underline-nav-admin" />
        </NavLink>
        <NavLink to="/addproducts" className="nav-admin-item">
          <p>ADD PRODUCTS</p>
          <hr className="underline-nav-admin" />
        </NavLink>
        <NavLink to="/allproducts" className="nav-admin-item">
          <p>ALL PRODUCTS</p>
          <hr className="underline-nav-admin" />
        </NavLink>
        <NavLink to="/collaborations-admin" className="nav-admin-item">
          <p>COLLABORATIONS</p>
          <hr className="underline-nav-admin" />
        </NavLink>
      </ul>
    </div>
  )
} 

export default NavbarAdmin
