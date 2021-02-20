/* eslint-disable no-undef */
import React from 'react'

const Form = () => {
  return (
    <form
      name='contact-form'
      method='POST'
      data-netlify='true'
      action='/contact'
    >
      <input type='hidden' name='form-name' value='contact-form' />
      <input
        type='text'
        name='name'
        id='name-input'
        placeholder='Name'
        required
      />
      <input
        type='text'
        name='email'
        id='email-input'
        placeholder='Email'
        required
      />
      <input
        type='text'
        name='subject'
        id='subject-input'
        placeholder='Subject'
        required
      />
      <textarea
        name='message'
        id='message-input'
        cols='30'
        rows='10'
        placeholder='Message'
        required
      ></textarea>

      <div className='btn-form'>
        <button type='submit' className='btn btn-primary'>
          Send
        </button>
      </div>
    </form>
  )
}

export default Form
