import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/filmLogo.svg";

const Nav = () => (
  <nav
    className='navbar navbar-expand-lg navbar-light pt-0 pb-0'
    style={{ backgroundColor: "#01A9DB" }}
  >
    <a className='navbar-brand' href='/'>
      <img
        alt='logo'
        src={logo}
        width='50'
        height='50'
        className='d-inline-block align-top mt-0 mb-0'
      />
    </a>
    <a className='navbar-brand' href='/'>
      Eric's Movie Database
    </a>
    <button
      className='navbar-toggler'
      type='button'
      data-toggle='collapse'
      data-target='#navbarSupportedContent'
      aria-controls='navbarSupportedContent'
      aria-expanded='false'
      aria-label='Toggle navigation'
    >
      <span className='navbar-toggler-icon'></span>
    </button>
    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
      <ul className='navbar-nav ml-auto'>
        <li className='nav-item '>
          <NavLink className='nav-link' to='/' exact>
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/about'>
            About
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/discover'>
            Discover
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/myrated'>
            My Rated
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/myfavourites'>
            My Favourites
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
