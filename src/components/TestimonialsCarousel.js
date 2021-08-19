import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import avatar1 from '../assets/avatars/avatar1.png';
import avatar2 from '../assets/avatars/avatar2.png';
import avatar3 from '../assets/avatars/avatar3.png';
import avatar4 from '../assets/avatars/avatar4.png';
import avatar9 from '../assets/avatars/avatar9.png';
import avatar10 from '../assets/avatars/avatar10.png';

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
        <h3>Olivia</h3>
        <p>
          You injected joy into every lesson and played games with us and
          cracked jokes and just did so much to make sure that your classroom
          was a positive and happy space.
        </p>
      </div>
      {/* Testimonial Box 2 */}
      <div className='testimonal-box'>
        <img src={avatar10} alt='testimonial profile' />
        <h3>Ellen</h3>
        <p>
          Experiencing the shift from "I can't understand computer science" to
          "I can learn computer science" was so impactful because it opened my
          mind to new possibilities and encouraged me to try new challenges.
        </p>
      </div>
      {/* Testimonial Box 3 */}
      <div className='testimonal-box'>
        <img src={avatar2} alt='testimonial profile' />
        <h3>Blair</h3>
        <p>
          Me and (another student) would try to finish our work as early as
          possible so we could go outside and play ping pong during lunch. I
          felt guilty about not telling you.
        </p>
      </div>

      {/* Testimonial Box 4 */}
      <div className='testimonal-box'>
        <img src={avatar3} alt='testimonial profile' />
        <h3>Larry</h3>
        <p>
          You have been the epitome of flexibility, good human-to-human
          relations, and an overall strong support system as I navigate through
          my sophomore year, and I can't put to words how grateful I am to have
          had you as a teacher.
        </p>
      </div>
      {/* Testimonial Box 5 */}
      <div className='testimonal-box'>
        <img src={avatar4} alt='testimonial profile' />
        <h3>Melanie</h3>
        <p>
          I want to express my gratitude from the bottom of my heart because
          this has been one of, if not the first time that I have truly thought
          I could have a career to look forward to in the future.
        </p>
      </div>

      {/* Testimonial Box 6 */}
      <div className='testimonal-box'>
        <img src={avatar9} alt='testimonial profile' />
        <h3>Amisha</h3>
        <p>
          I am so grateful to you, you are seriously one of the best teachers
          I've ever had. Your enthusiasm is very contagious, and it's made me
          want to learn even more.
        </p>
      </div>
    </Carousel>
  );
};
