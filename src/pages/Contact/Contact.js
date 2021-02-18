import React from 'react'

import Form from './Form'
import SocialMedia from '../../component/SocialMedia/index'
import './Contact.scss'

const Contact = () => {
  return (
    <main className='contact'>
      <div className='contact__brief'>
        <h1 className='contact__brief-title'>Say Hello!</h1>
        <p className='contact__brief-text'>
          Please feel free to contact me if you have any question or inquiry. I
          am looking forward to working with you.
        </p>
        <h2 className='contact__brief-title2'>Contact us</h2>
        <p className='contact__brief-phone'>Phone: +111-33-000-997</p>
        <p className='contact__brief-email'>
          Email: chinecherempharry@gmail.com
        </p>
      </div>
      <div className='inactive-icon'>
        <SocialMedia />
      </div>
      <div className='contact__content'>
        <h2 className='contact__content-title'>Get in Touch</h2>
        <Form />
      </div>
      <div className='contact__social'>
        <SocialMedia />
      </div>
    </main>
  )
}

export default Contact
