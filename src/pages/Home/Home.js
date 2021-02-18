import React from 'react'
import { Link } from 'react-router-dom'

import SocialMedia from '../../component/SocialMedia'
import './Home.scss'
import buzzMe from '../../assets/images/buzzme.jpg'

const Home = () => {
  return (
    <main className='home'>
      <div className='home__brief'>
        <h1>Welcome</h1>
        <p className='home__brief-text'>
          Hello Chinecherem Harry here, i’m a Software Developr seeking to join
          a positive and creative team. Design is my life so I’m dedicated to
          giving work to your needs for digital and visual communication.
          <span className='readmore-icon'>
            <Link to='/profile' className='home__brief-link'>
              Read More <i className='fas fa-chevron-right'></i>
            </Link>
          </span>
        </p>
        <button className='btn btn-primary'>Download CV</button>
      </div>
      <div className='home__content'>
        <img src={buzzMe} alt='buzz-me' />
      </div>
      <div className='home__social'>
        <SocialMedia />
      </div>
    </main>
  )
}

export default Home
