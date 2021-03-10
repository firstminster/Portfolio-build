import React from 'react'

import './Footer.scss'

const index = () => {
  return (
    <footer className='footer'>
      <p className='footer__text'>
        Designed with{' '}
        <img src='./images/heart.png' alt='heart' className='footer__heart' />{' '}
        by Firstminster {new Date().getFullYear()}
        &copy;
      </p>
    </footer>
  )
}

export default index
