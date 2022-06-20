import React from 'react';
import { TestimonialsCarousel } from './TestimonialsCarousel';

export const Testimonials = () => {
  return (
    <div className='testimonials' id='testimonials'>
      <h1>What people say about me</h1>
      <div className='container'>
        <div className='testimonials-content'>
          <TestimonialsCarousel />
        </div>
      </div>
    </div>
  );
};
