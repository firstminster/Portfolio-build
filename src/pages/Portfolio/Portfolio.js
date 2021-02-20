import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import HashLoader from 'react-spinners/HashLoader'

import Cards from '../../component/Card/Cards'
import SocialMedia from '../../component/SocialMedia'
import './Portfolio.scss'

const Portfolio = () => {
  const [loading, setLoading] = useState(false)
  let [color] = useState('#17ccca')

  // Loads when the components mounts
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 900)
  }, [])

  return (
    <main className='portfolio'>
      {loading ? (
        <HashLoader color={color} loading={loading} size={50} />
      ) : (
        <>
          <div className='portfolio__brief'>
            <h1 className='portfolio__brief-title'>Portfolio</h1>
            <p className='portfolio__brief-text'>
              These are some of the real world projects and fictional Projects I
              have worked on. I never stop Creating, so this section won't stop
              expanding.
              <span className='readmore-icon'>
                <Link to='/profile' className='portfolio__brief-link'>
                  Read More <i className='fas fa-chevron-right'></i>
                </Link>
              </span>
            </p>
            <button className='btn btn-primary'>Download CV</button>
          </div>
          <div className='portfolio__content'>
            <Cards />
          </div>
          <div className='portfolio__social'>
            <SocialMedia />
          </div>
        </>
      )}
    </main>
  )
}

export default Portfolio
