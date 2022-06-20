import React from 'react';

export const Experience = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: '#839BFF',
  };

  return (
    <div className='experience-wrapper' id='experience'>
      <div className='d-flex justify-content-center'>
        <h1>Recent Experience</h1>
      </div>

      <div className='container experience-content-wrapper'>
        {/* -- */}
        <div className='timeline-block timeline-block-left'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>
              2022-present:
              <a
                href='https://www.multiverse.io/en-US'
                target='_blank'
                rel='noreferrer'
                style={linkStyle}
              >
                Multiverse.io
              </a>
            </h3>
            <p>
              I teach software engineering to cohorts of non-college career
              starters who are completing engineering apprenticeships with
              companies such as Google, Verison, and AMEX.
            </p>
            <p>
              Multiverse is a mission-driven start up that seeks to provide
              those seeking a career in tech with an outstanding alternative to
              the traditional college-job route through formal apprenticeships.
              Best part is, the ENTIRE program is free for the apprentice. This
              means that cost is not longer a barrier to learning skills to a
              lucrative, in-demand career.
            </p>
            <p>
              Interested in joining a cohort, or working with me? Reach out!
            </p>
          </div>
        </div>

        {/* -- */}
        <div className='timeline-block timeline-block-right'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>2021-2022: Lane Tech College Prep</h3>
            <p>
              I joined one of the most prominent high school Computer Science
              departments in the country, where I currently teach Exploring
              Computer Science and Programming: Media and Computation.
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
      </div>
    </div>
  );
};
