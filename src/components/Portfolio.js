import React from 'react';
import MediaCard from './MediaCard';

import backend1 from '../assets/backend1.jpg';
import blog from '../assets/blog1.jpg';
import eCommerce from '../assets/ecommerce.jpg';
import resume from '../assets/resume.jpg';
import liveEvents from '../assets/liveEvents1.jpg';
import portfolio from '../assets/portfolio.jpg';
import newsGrid from '../assets/newsGrid1.jpg';
import handShake from '../assets/chat1.jpg';

export const Portfolio = () => {
  return (
    <div className='portfolio-wrapper' id='portfolio'>
      <div className='container'>
        <h1 className='text-center py-5'>Some things I've done</h1>
        <div className='card-box-wrapper'>
          <a
            href='https://drive.google.com/file/d/1NqEnAudX6xnRPy6Q4y7DaD7MWAgQ_Dn1/view'
            target='_blank'
            rel='noreferrer'
          >
            <MediaCard image={resume} title='Resume' content='My Resume' />
          </a>

          <a
            href='https://github.com/jonathanjacka/proshop_mern_ecommerce'
            target='_blank'
            rel='noreferrer'
          >
            <MediaCard
              image={eCommerce}
              title='mern-ecommerce'
              content='E-Commerce Site: MERN Stack'
            />
          </a>

          <a
            href='https://github.com/jonathanjacka/devcamper_api'
            target='_blank'
            rel='noreferrer'
          >
            <MediaCard
              image={backend1}
              title='Backend API'
              content='
              DevCamper Restful API: NodeJS/Express
              '
            />
          </a>

          <a
            href='https://github.com/jonathanjacka/devspace-blog'
            target='_blank'
            rel='noreferrer'
          >
            <MediaCard
              image={blog}
              title='liveEvents'
              content='DevSpace Blog: Next.JS and TailwindCSS'
            />
          </a>

          <a
            href='https://github.com/jonathanjacka/live-events-frontend'
            target='_blank'
            rel='noreferrer'
          >
            <MediaCard
              image={liveEvents}
              title='liveEvents'
              content='Live Events: Next.JS and Strapi'
            />
          </a>

          <a
            href='https://github.com/jonathanjacka/portfolio_sass'
            target='_blank'
            rel='noreferrer'
          >
            <MediaCard
              image={portfolio}
              title='liveEvents'
              content='Portfolio Design: HTML, JavaScript, Sass'
            />
          </a>

          <a
            href='https://github.com/jonathanjacka/news_grid_website'
            target='_blank'
            rel='noreferrer'
          >
            <MediaCard
              image={newsGrid}
              title='newsGrid'
              content='NewsGrid Website: Study in CSS Grid'
            />
          </a>

          <a
            href='https://github.com/jonathanjacka/handshake_video_chat_app'
            target='_blank'
            rel='noreferrer'
          >
            <MediaCard
              image={handShake}
              title='handShake'
              content='HandShake Video Chat App: Socket.io'
            />
          </a>
        </div>
      </div>
    </div>
  );
};
