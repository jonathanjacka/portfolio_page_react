import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faCodepen,
} from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  const getDate = () => {
    const year = new Date().getFullYear();
    const monthNumber = new Date().getMonth();

    const monthList = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    return monthNumber >= 0 && monthNumber <= 11
      ? `${monthList[monthNumber]} ${year}`
      : year;
  };
  return (
    <div className='footer-wrapper'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className='d-flex'>Chicago, IL</div>
            <div className='d-flex'>jonathanjacka@gmail.com</div>
            <div className='d-flex' style={{ fontWeight: '600' }}>
              {getDate()}
            </div>
          </div>

          <div className='col-lg-4 col-md-2 col-sm-6'>
            <div className='row'>
              <div className='col'>
                <Link className='footer-nav' smooth={true} to='home' offset={0}>
                  Home
                </Link>
                <br />
                <Link
                  className='footer-nav'
                  smooth={true}
                  to='about'
                  offset={-90}
                >
                  About Me
                </Link>
                <br />
                <Link
                  className='footer-nav'
                  smooth={true}
                  to='experience'
                  offset={-90}
                >
                  Experience
                </Link>
              </div>
              <div className='col'>
                <Link
                  className='footer-nav'
                  smooth={true}
                  to='portfolio'
                  offset={-90}
                >
                  Portfolio
                </Link>
                <br />
                <Link
                  className='footer-nav'
                  smooth={true}
                  to='testimonials'
                  offset={-90}
                >
                  What students say
                </Link>
                <br />
                <Link
                  className='footer-nav'
                  smooth={true}
                  to='contact'
                  offset={-90}
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-3'>
            <div>
              <div className='footer-icon-set'>
                <a
                  href='https://twitter.com/JonnoJacka'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='footer-icon'>
                    <FontAwesomeIcon icon={faTwitter} size='3x' />
                  </i>
                </a>

                <a
                  href='https://github.com/jonathanjacka'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='footer-icon'>
                    <FontAwesomeIcon icon={faGithub} size='3x' />
                  </i>
                </a>

                <a
                  href='https://www.linkedin.com/in/jonathan-jacka-bab09771/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='footer-icon'>
                    <FontAwesomeIcon icon={faLinkedin} size='3x' />
                  </i>
                </a>

                <a
                  href='https://codepen.io/jonathanjacka'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='footer-icon'>
                    <FontAwesomeIcon icon={faCodepen} size='3x' />
                  </i>
                </a>

                <a
                  href='https://lanetech.org/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='footer-icon'>
                    <FontAwesomeIcon icon={faMapMarker} size='3x' />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
