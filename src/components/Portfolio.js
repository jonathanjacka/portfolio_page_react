import React from 'react';

import flippedClassroom from '../assets/flippingClassroom.jpg';
import gameDesign from '../assets/gameDesign.jpg';
import resume from '../assets/resume.jpg';
import portfolio from '../assets/portfolio.jpg';

export const Portfolio = () => {
  return (
    <div className='portfolio-wrapper'>
      <div className='container'>
        <h1 className='text-center py-5'>Some things I've done</h1>

        <div className='image-box-wrapper'>
          {/* -- */}

          <div className='portfolio-image-box'>
            <img className='portfolio-image' src={resume} alt='resume' />
            <h3>My resume</h3>
          </div>

          {/* -- */}

          <div className='portfolio-image-box'>
            <img
              className='portfolio-image'
              src={gameDesign}
              alt='game design elective'
            />
          </div>

          {/* -- */}

          <div className='portfolio-image-box'>
            <img
              className='portfolio-image'
              src={flippedClassroom}
              alt='flipped classroom presentation'
            />
          </div>

          {/* -- */}

          <div className='portfolio-image-box'>
            <img className='portfolio-image' src={portfolio} alt='portfolio' />
          </div>

          {/* -- */}
        </div>
      </div>
    </div>
  );
};
