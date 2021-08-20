import React from 'react';
import logo from '../assets/iconJ.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          <img className='navBar-logo' src={logo} alt='logo' />
        </a>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <FontAwesomeIcon className='navbar-menu-icon' icon={faBars} />
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link' aria-current='page' href='#'>
                Home
              </a>
            </li>

            <li className='nav-item'>
              <a className='nav-link' href='#'>
                About me
              </a>
            </li>

            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Experience
              </a>
            </li>

            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Portfolio
              </a>
            </li>

            <li className='nav-item'>
              <a className='nav-link' href='#'>
                What students say
              </a>
            </li>

            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Contact me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
