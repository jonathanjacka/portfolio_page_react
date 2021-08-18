import React from 'react';

export const Skills = () => {
  return (
    <div className='skills-wrapper'>
      <div className='py-5'>
        <div className='container'>
          <div className='row'>
            {/* -- */}
            <div className='col-md-3 col-sm-6'>
              <div className='skills-content-box'>
                <h3>Standards-based Teaching</h3>
                <p>
                  All of the concepts I teach are built on the CSTA K-12 CS
                  standards. Additionally, my lesson development follows Common
                  Core Standards and Universal Design for Learning principles.
                </p>
              </div>
            </div>
            {/* -- */}
            <div className='col-md-3 col-sm-6'>
              <div className='skills-content-box'>
                <h3>Instructional Strategies</h3>
                <p>
                  In the classroom, my focus is on the creation and
                  implementation of high-leverage instructional strategies to
                  promote collaborative learning and student engagement.
                </p>
              </div>
            </div>
            {/* -- */}
            <div className='col-md-3 col-sm-6'>
              <div className='skills-content-box'>
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
    </div>
  );
};
