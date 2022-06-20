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
            <p>I am a software engineer, instructor, and coach.</p>
            <p>
              I am committed to developing learning experiences and environments
              with creative approaches to rigor, equity, and positive
              expectations for individuals of all backgrounds.
            </p>
            <p>
              I am convinced that the concepts and skills that we develop in
              this discipline should primarily be catalysts through which we
              exercise our abilities and passions to build and create.
            </p>

            <p>
              Most importantly, I believe that at its core, learning should be a
              tool of liberation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
