import React from 'react';

export const Contact = () => {
  return (
    <div className='contact-wrapper'>
      <div className='text-center'>
        <h1>Get in touch</h1>
        <p>Send me an email via this form.</p>
        <small>PS: I won't save your details for anything. Ever.</small>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-xs-12'>
            {/* NAME */}
            <input
              className='form-control'
              id='name-input'
              placeholder='Name'
              name='name'
              type='text'
              required
            />
            {/* PHONE */}
            <input
              id='phone-input'
              className='form-control'
              placeholder='Contact Number'
              name='phone'
              type='text'
            />
            {/* EMAIL */}
            <input
              id='email-input'
              className='form-control'
              placeholder='Email'
              name='email'
              type='email'
              required
            />
            {/* SUBJECT */}
            <input
              id='subject-input'
              className='form-control'
              placeholder='Subject'
              name='subject'
              type='text'
              required
            />
          </div>

          <div className='col-md-6 col-xs-12'>
            {/* TEXT AREA / MESSAGE */}
            <textarea
              type='text'
              className='form-control'
              id='message-input'
              name='message'
              required
            ></textarea>
            <button
              className='btn-main-offer contact-btn'
              type='submit'
              id='contact-form-btn'
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
