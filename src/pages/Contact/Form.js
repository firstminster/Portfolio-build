import React from 'react'

const Form = () => {
  return (
    <form>
      <input type='text' id='name' placeholder='Name' />
      <input type='text' id='email' placeholder='Email' />
      <input type='text' id='subject' placeholder='Subject' />
      <textarea
        name='#'
        id='message'
        cols='30'
        rows='10'
        placeholder='Message'
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
