import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

import { service_id, template_id, user_id } from '../keys/keys';

export const Contact = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, r) => {
    console.log(data, r);
    sendEmail(
      service_id,
      template_id,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        message: data.message,
      },
      user_id
    );
    r.target.reset();
  };

  const sendEmail = (service_id, template_id, variables, user_id) => {
    emailjs
      .send(service_id, template_id, variables, user_id)
      .then(() => {
        setSuccessMessage(
          'Message sent successfully!  Please check your email.'
        );
        console.log(successMessage);
      })
      .catch((err) => console.error('Something went wrong: ' + err));
  };

  return (
    <div className='contact-wrapper'>
      <div className='contact-form-container'>
        <span></span>
        <div className='text-center'>
          <h1>Get in touch</h1>
          <p>Send me an email via this form.</p>
          <small>
            I will only use your details to respond to you. Nothing else.
          </small>
        </div>

        <div className='container'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row'>
              <div className='col-md-6 col-xs-12'>
                {/* NAME */}
                <input
                  className='form-control'
                  id='name-input'
                  placeholder='Name'
                  name='name'
                  type='text'
                  {...register('name', { required: true })}
                />
                <span className='form-error-message'>
                  {errors.name && 'Name is required'}
                </span>
                {/* PHONE */}
                <input
                  id='phone-input'
                  className='form-control'
                  placeholder='Contact Number'
                  name='phone'
                  type='text'
                  {...register('phone')}
                />
                {/* EMAIL */}
                <input
                  id='email-input'
                  className='form-control'
                  placeholder='Email'
                  name='email'
                  type='email'
                  {...register('email', {
                    required: true,
                    pattern:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
                <span className='form-error-message'>
                  {errors.email && 'Please enter a valid email'}
                </span>
                {/* SUBJECT */}
                <input
                  id='subject-input'
                  className='form-control'
                  placeholder='Subject'
                  name='subject'
                  type='text'
                  {...register('subject', { required: true })}
                />
                <span className='form-error-message'>
                  {errors.subject && 'Please enter a subject'}
                </span>
              </div>

              <div className='col-md-6 col-xs-12'>
                {/* TEXT AREA / MESSAGE */}
                <textarea
                  type='text'
                  className='form-control'
                  id='message-input'
                  name='message'
                  placeholder='Message'
                  {...register('message', { required: true })}
                ></textarea>
                <span className='form-error-message'>
                  {errors.subject && 'Please enter a message'}
                </span>
              </div>
              <button
                className='btn-main-offer contact-btn'
                type='submit'
                id='contact-form-btn'
              >
                <span></span>
                Send Message
              </button>
              <span className='form-success-message'>{successMessage}</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
