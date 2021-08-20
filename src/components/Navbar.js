import React from 'react';
import logo from '../assets/iconJ.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light'>
      <div className='container-fluid'>
        <Link className='navbar-brand' smooth={true} to='home'>
          <img className='navBar-logo' src={logo} alt='logo' />
        </Link>

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
              <Link smooth={true} to='home' className='nav-link'>
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link smooth={true} className='nav-link' to='about'>
                About me
              </Link>
            </li>

            <li className='nav-item'>
              <Link smooth={true} className='nav-link' to='experience'>
                Experience
              </Link>
            </li>

            <li className='nav-item'>
              <Link smooth={true} className='nav-link' to='portfolio'>
                Portfolio
              </Link>
            </li>

            <li className='nav-item'>
              <Link smooth={true} className='nav-link' to='testimonials'>
                What students say
              </Link>
            </li>

            <li className='nav-item'>
              <Link smooth={true} className='nav-link' to='contact'>
                Contact me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
