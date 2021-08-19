import React from 'react';
import MediaCard from './MediaCard';

import flippedClassroom from '../assets/flippingClassroom.jpg';
import gameDesign from '../assets/gameDesign.jpg';
import resume from '../assets/resume.jpg';
import portfolio from '../assets/portfolio.jpg';

export const Portfolio = () => {
  return (
    <div className='portfolio-wrapper'>
      <div className='container'>
        <h1 className='text-center py-5'>Some things I've done</h1>
        <div className='card-box-wrapper'>
          <a
            href='https://drive.google.com/file/d/1NqEnAudX6xnRPy6Q4y7DaD7MWAgQ_Dn1/view'
            target='_blank'
            rel='noreferrer'
          >
            <MediaCard image={resume} title='Resume' content='My Resume' />
          </a>

          <a
            href='https://drive.google.com/drive/folders/1sr988AoGSg_Dpqe7LPhqjoJytonCRGsQ'
            target='_blank'
            rel='noreferrer'
          >
            <MediaCard
              image={portfolio}
              title='Portfolio'
              content='Portfolio of Lesson Examples'
            />
          </a>

          <a
            href='https://www.youtube.com/watch?v=XhJE8EpCiLY&feature=youtu.be'
            target='_blank'
            rel='noreferrer'
          >
            <MediaCard
              image={flippedClassroom}
              title='Flipped Class'
              content='
              CPS Tech Talk 2019:
              Flipping your classroom
              '
            />
          </a>

          <a
            href='https://www.youtube.com/watch?v=bKFBEni4UJ4&feature=youtu.be'
            target='_blank'
            rel='noreferrer'
          >
            <MediaCard
              image={gameDesign}
              title='Game Design'
              content='Class Elective Promo: Game Design with Unity'
            />
          </a>
        </div>
      </div>
    </div>
  );
};
