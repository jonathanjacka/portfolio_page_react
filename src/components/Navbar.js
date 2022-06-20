import React, { useState, useEffect } from 'react';
import logo from '../assets/iconJ.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    setShow(window.pageYOffset > 140);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${show && 'active'}`}>
      <div className='container-fluid'>
        <Link
          className='navbar-brand'
          smooth={true}
          spy={true}
          duration={100}
          offset={0}
          to='home'
        >
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
              <Link
                smooth={true}
                to='home'
                spy={true}
                duration={100}
                className='nav-link'
                offset={0}
              >
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                smooth={true}
                className='nav-link'
                spy={true}
                duration={100}
                to='about'
                offset={-90}
              >
                About me
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                smooth={true}
                className='nav-link'
                to='experience'
                offset={-90}
                spy={true}
                duration={100}
              >
                Experience
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                smooth={true}
                className='nav-link'
                to='portfolio'
                offset={-90}
                spy={true}
                duration={100}
              >
                Portfolio
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                smooth={true}
                className='nav-link'
                to='testimonials'
                offset={-90}
                spy={true}
                duration={100}
              >
                What students say
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                smooth={true}
                className='nav-link'
                to='contact'
                offset={-90}
                spy={true}
                duration={100}
              >
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
