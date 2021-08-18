import React from 'react';

import flippedClassroom from '../assets/flippingClassroom.jpg';
import gameDesign from '../assets/gameDesign.jpg';
import resume from '../assets/resume.jpg';
import portfolio from '../assets/portfolio.jpg';

export const Portfolio = () => {
  return (
    <div className='portfolio-wrapper'>
      <div className='container'>
        <h1 className='text-uppercase text-center py-5'>Portfolio</h1>
        {/* -- */}
        <div className='image-box-wrapper ow justify-content-center'>
          <img className='portfolio-image' src={resume} alt='resume' />
        </div>
        {/* -- */}
        <div className='image-box-wrapper ow justify-content-center'>
          <img
            className='portfolio-image'
            src={gameDesign}
            alt='game design elective'
          />
        </div>
        {/* -- */}
        <div className='image-box-wrapper ow justify-content-center'>
          <img
            className='portfolio-image'
            src={flippedClassroom}
            alt='flipped classroom presentation'
          />
        </div>
        {/* -- */}
        <div className='image-box-wrapper ow justify-content-center'>
          <img className='portfolio-image' src={portfolio} alt='portfolio' />
        </div>
      </div>
    </div>
  );
};
