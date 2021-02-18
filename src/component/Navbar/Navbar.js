import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

import './Navbar.scss'

const Navbar = () => {
  const [click, setClick] = useState(false)

  // Toggle hamburger icon
  const handleClick = () => setClick(!click)
  // Close mobile menu-list
  const closeMobileMenu = () => setClick(false)

  return (
    <header className='navbar'>
      <nav className='navbar__container'>
        <NavLink to='/' className='navbar__logo' onClick={closeMobileMenu}>
          <i className='fas fa-code'></i>
        </NavLink>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <NavLink
              strict
              to='/'
              activeClassName='active'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/portfolio'
              activeClassName='active'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Portfolio
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/profile'
              activeClassName='active'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Profile
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/contact'
              activeClassName='active'
              className='nav-links '
              onClick={closeMobileMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <NavLink to='/profile' className='navbar__icon'>
          <img src='./images/firstminster.png' alt='profile' />
        </NavLink>
      </nav>
    </header>
  )
}

export default withRouter(Navbar)
