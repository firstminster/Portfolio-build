import React from 'react'
// import { Link } from 'react-router-dom'

import './SocialMedia.scss'

const index = ({ history }) => {
  return (
    <div className='social-icon'>
      <a
        href='https://www.linkedin.com/in/chinecherem-harry-5ba68ab2/'
        target='_blank'
        rel='noreferrer'
      >
        <i className='fab fa-linkedin fa-2x'></i>
      </a>
      <a
        href='https://github.com/firstminster'
        target='_blank'
        rel='noreferrer'
      >
        <i className='fab fa-github fa-2x'></i>
      </a>

      <a
        href='https://www.instagram.com/firstminster_/'
        target='_blank'
        rel='noreferrer'
      >
        <i className='fab fa-instagram fa-2x'></i>
      </a>
    </div>
  )
}

export default index
