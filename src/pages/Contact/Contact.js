import React, { useState, useEffect } from 'react'

import HashLoader from 'react-spinners/HashLoader'

import Form from './Form'
import SocialMedia from '../../component/SocialMedia/index'
import './Contact.scss'

const Contact = () => {
  const [loading, setLoading] = useState(false)
  let [color] = useState('#17ccca')

  // Loads when the components mounts
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 800)
  }, [])
  return (
    <main className='contact'>
      {loading ? (
        <HashLoader color={color} loading={loading} size={50} />
      ) : (
        <>
          <div className='contact__brief'>
            <h1 className='contact__brief-title'>Say Hello!</h1>
            <p className='contact__brief-text'>
              Please feel free to contact me if you have any question or
              inquiry. I am looking forward to working with you.
            </p>
            <h2 className='contact__brief-title2'>Contact us</h2>
            <p className='contact__brief-phone'>Phone: +46-720-193-671</p>
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
        </>
      )}
    </main>
  )
}

export default Contact
