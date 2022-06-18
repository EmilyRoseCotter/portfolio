import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className='navbar'>
        <ul>
            <NavLink to='/' className='navbarLinks'>
                <li>Emily Cotter</li>
            </NavLink>
            <NavLink to='/about' className='navbarLinks'>
                <li>About</li>
            </NavLink>
            <NavLink to='/projects' className='navbarLinks'>
                <li>Projects</li>
            </NavLink>
            <NavLink to='/contact' className='navbarLinks'>
                <li>Contact</li>
            </NavLink>
        </ul>
    </div>
  );
}

export default NavBar;