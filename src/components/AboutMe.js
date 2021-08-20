import React from 'react';
import profile_pic from '../assets/jon1.jpg';

export const AboutMe = () => {
  return (
    <div className='container' id='about'>
      <div className='row py-5'>
        <div className='col-lg-6 col-xm-12'>
          <div className='about-me-photo-wrap'>
            <img
              className='about-me-profile-img'
              src={profile_pic}
              alt='profile'
            />
          </div>
        </div>
        <div className='col-lg-6 col-xm-12'>
          <div className='about-me-content'>
            <h1>My name is Jonathan.</h1>
            <p>I teach Computer Science.</p>
            <p>
              I am committed to developing learning experiences and environments
              with creative approaches to rigor, equity, and positive
              expectations for students of all backgrounds.
            </p>
            <p>
              I believe that the concepts and skills that students learn in this
              discipline should primarily be catalysts through which they
              exercise their abilities and passions to build and create.
            </p>

            <p>
              I don't only want every student to see themselves as a computer
              scientist; I would love to push us all into revolutionizing what a
              “computer scientist” means.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
