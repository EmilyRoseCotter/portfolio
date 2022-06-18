import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/NavBar.css';

function NavBar() {
  return (
    <div className='navbar'>
        <ul className='navbarLinks'>
            <NavLink to='/' className='navbarLinksLanding name'>
                <li>Emily Cotter</li>
            </NavLink>
            <NavLink to='/about' className='navbarLinksItems'>
                <li>About</li>
            </NavLink>
            <NavLink to='/projects' className='navbarLinksItems'>
                <li>Projects</li>
            </NavLink>
            <NavLink to='/contact' className='navbarLinksItems'>
                <li>Contact</li>
            </NavLink>
        </ul>
    </div>
  );
}

export default NavBar;