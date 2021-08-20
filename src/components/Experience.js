import React from 'react';

export const Experience = () => {
  return (
    <div className='experience-wrapper' id='experience'>
      <div className='d-flex justify-content-center'>
        <h1>Recent Experience</h1>
      </div>

      <div className='container experience-content-wrapper'>
        {/* -- */}
        <div className='timeline-block timeline-block-right'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>2016-2019: Solorio Academy High School</h3>
            <p>
              Aside from teaching both Computer Science and English Literature,
              I was part of the Professional Development Leadership Team where
              we planned, organized and executed a two-year-long professional
              development program for teaching staff in line with school- and
              district-wide STEM performance goals.
            </p>
            <p>
              I was also one of the founding members of the school's CS
              department.
            </p>
          </div>
        </div>

        {/* -- */}
        <div className='timeline-block timeline-block-left'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>2019-2021: Walter Payton College Prep</h3>
            <p>
              I taught both Exploring Computer Science and AP Computer Science
              Principles, and introduced the school's first AP Computer Science
              A class in 2020. Furthermore, I was the head coach of the school's
              Robotics Team (FirstRobotics - FTC), which qualified for the State
              Championships in 2021.
            </p>
          </div>
        </div>

        {/* -- */}
        <div className='timeline-block timeline-block-right'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>2021-Present: Lane Tech College Prep</h3>
            <p>
              I joined one of the most prominent high school Computer Science
              departments in the country, where I currently teach Exploring
              Computer Science and Programming: Media and Computation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
