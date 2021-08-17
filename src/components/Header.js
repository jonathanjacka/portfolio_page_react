import React from 'react';
import FadeIn from 'react-fade-in';
import Particles from 'react-particles-js';

function Header() {
  return (
    <div className='header-wrapper'>
      <div className='header-main-info'>
        <Particles
          className='header-main-info-particles'
          params={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse',
                },
              },
            },
          }}
        />
        <FadeIn delay={700} transitionDuration={1000}>
          <h1>I am a teacher.</h1>
        </FadeIn>
      </div>
    </div>
  );
}

export default Header;
