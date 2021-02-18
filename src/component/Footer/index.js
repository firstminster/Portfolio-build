import React from 'react'

import heartImg from '../../assets/images/heart.png'
import './Footer.scss'

const index = () => {
  return (
    <footer className='footer'>
      <p className='footer__text'>
        Created with{' '}
        <img src={heartImg} alt='heart' className='footer__heart' />{' '}
        Firstminster {new Date().getFullYear()}
        &copy;
      </p>
    </footer>
  )
}

export default index
