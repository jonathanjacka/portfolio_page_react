import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import avatar1 from '../assets/avatars/avatar1.png';
import avatar2 from '../assets/avatars/avatar2.png';
import avatar3 from '../assets/avatars/avatar3.png';
import avatar4 from '../assets/avatars/avatar4.png';
import avatar5 from '../assets/avatars/avatar4.png';

export const TestimonialsCarousel = () => {
  return (
    <Carousel
      autoPlay={true}
      swipeable={true}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      showArrows={false}
    >
      {/* Testimonial Box 1 */}
      <div className='testimonal-box'>
        <img src={avatar1} alt='testimonial profile' />
        <h3>John D.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      {/* Testimonial Box 2 */}
      <div className='testimonal-box'>
        <img src={avatar2} alt='testimonial profile' />
        <h3>Jane D.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      {/* Testimonial Box 3 */}
      <div className='testimonal-box'>
        <img src={avatar3} alt='testimonial profile' />
        <h3>Juan D.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Testimonial Box 4 */}
      <div className='testimonal-box'>
        <img src={avatar4} alt='testimonial profile' />
        <h3>Jean D.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      {/* Testimonial Box 5 */}
      <div className='testimonal-box'>
        <img src={avatar5} alt='testimonial profile' />
        <h3>Joelle D.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </Carousel>
  );
};
