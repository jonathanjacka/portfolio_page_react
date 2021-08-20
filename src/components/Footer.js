import React from 'react';
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
                <a className='footer-nav'>Home</a>
                <br />
                <a className='footer-nav'>About Me</a>
                <br />
                <a className='footer-nav'>Experience</a>
              </div>
              <div className='col'>
                <a className='footer-nav'>Portfolio</a>
                <br />
                <a className='footer-nav'>What students say</a>
                <br />
                <a className='footer-nav'>Contact Me</a>
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
