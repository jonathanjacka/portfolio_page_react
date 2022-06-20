import React from 'react';
import FadeIn from 'react-fade-in';

function Header() {
  return (
    <div className='header-wrapper' id='home'>
      <div className='header-main-info'>
        <FadeIn delay={700} transitionDuration={1000}>
          <h1>Science is just toddler curiosity with ceremony</h1>
        </FadeIn>

        <FadeIn delay={1000} transitionDuration={1000}>
          <h2>Dr Amy Ko</h2>
        </FadeIn>
      </div>
    </div>
  );
}

export default Header;
