import React from 'react';
import FadeIn from 'react-fade-in';

function Header() {
  return (
    <div className='header-wrapper'>
      <div className='header-main-info'>
        <FadeIn delay={700} transitionDuration={1000}>
          <h1>I am a teacher</h1>
        </FadeIn>
      </div>
    </div>
  );
}

export default Header;
