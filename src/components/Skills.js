import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode,
  faShapes,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

export const Skills = () => {
  return (
    <div className='skills-wrapper'>
      <div className='container'>
        <div className='row'>
          {/* -- */}
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='skills-content-box'>
              <div className='skills-icon laptop'>
                <FontAwesomeIcon icon={faLaptopCode} size='3x' />
              </div>

              <h3 className='skills-content-box-h3-box1'>
                Standards-based Teaching
              </h3>
              <p>
                All of the concepts I teach are based on the CSTA K-12 CS
                standards. Additionally, my lesson development follows Common
                Core Standards and Universal Design for Learning principles.
              </p>
            </div>
          </div>
          {/* -- */}
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='skills-content-box'>
              <div className='skills-icon shapes'>
                <FontAwesomeIcon icon={faShapes} size='3x' />
              </div>
              <h3>Instructional Strategies</h3>
              <p>
                In the classroom, my focus is on the creation and implementation
                of high-leverage instructional strategies to promote
                collaborative learning and student engagement.
              </p>
            </div>
          </div>
          {/* -- */}
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='skills-content-box'>
              <div className='skills-icon group'>
                <FontAwesomeIcon icon={faUsers} size='3x' />
              </div>
              <h3>Positive Collaboration</h3>
              <p>
                I am dedicated to building positive collaboration between
                colleagues as one of the most effective tools to produce
                high-quality teaching, learning, and continued motivation.
              </p>
            </div>
          </div>
          {/* -- */}
        </div>
      </div>
    </div>
  );
};
