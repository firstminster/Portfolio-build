import React from 'react'

const Form = () => {
  return (
    <form action='POST' data-netlify='true'>
      <input type='text' name='name' id='name' placeholder='Name' required />
      <input type='text' name='email' id='email' placeholder='Email' required />
      <input
        type='text'
        name='subject'
        id='subject'
        placeholder='Subject'
        required
      />
      <textarea
        name='message'
        id='message'
        cols='30'
        rows='10'
        placeholder='Message'
        required
      ></textarea>
      <input
        type='file'
        name='myfile'
        id='myfile'
        placeholder='Upload File'
        rows='7'
        style={{ border: 'none' }}
      />
      <div className='' data-netlify-recaptcha='true'></div>
      <div className='btn-form'>
        <button type='submit' className='btn btn-primary'>
          Send
        </button>
      </div>
    </form>
  )
}

export default Form
