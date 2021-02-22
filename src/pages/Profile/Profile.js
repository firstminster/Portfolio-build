import React, { useState, useEffect } from 'react'
import HashLoader from 'react-spinners/HashLoader'

import SocialMedia from '../../component/SocialMedia'
import './Profile.scss'

const Profile = () => {
  const [loading, setLoading] = useState(false)
  let [color] = useState('#17ccca')

  // Loads when the components mounts
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <main className='profile'>
      {loading ? (
        <HashLoader color={color} loading={loading} size={50} />
      ) : (
        <>
          <div className='profile__brief'>
            <h1 className='profile__brief-title'>Chinecherem Harry</h1>
            <p className='profile__brief-text'>
              A software developer, with an outstanding experience in front-end
              and a great technical understanding of the backend. I anticipate
              to collaborate with a passionate team to make positive and lasting
              impact.
              <span className='getin-touch'>"Get in touch".</span>
            </p>
            <button className='btn btn-primary'>Download CV</button>
          </div>
          <div className='profile__image'>
            <img
              src='./images/minister2.png'
              alt='profile-img'
              loading='lazy'
            />
          </div>
          <div className='profile__paragraph1'>
            <article className='profile__paragraph1-text1'>
              <h3 className='profile__paragraph1-title1'>My Qualifications</h3>
              <p>
                BSc – Information Technology at Eastern Mediterranean
                University, North Cyprus, Turkey | 2014/2018. Masters – IT and
                Management in Informatics at University West, Sweden. |
                2019/Present.
              </p>
            </article>
            <article className='profile__paragraph1-text1'>
              <h3 className='profile__paragraph1-title2'>
                Why you should hire me?
              </h3>
              <p>
                Passion-driven software professional incredibly diligent in
                Full-Stack development and team collaborations with several
                freelance projects and satisfied customers under my belt. My
                years of experience and journey in Software Development and the
                vast skills set are two things I am confident will be of great
                benefit to getting the job done. Because I enjoy what I do, I
                specialise in a vast area. Particularly, my proficiency to
                create dynamic and user friendly
              </p>
            </article>
          </div>
          <div className='profile__paragraph2'>
            <article className='profile__paragraph2-text1'>
              <p>
                web applications which helps to digitalize certain typical
                processes that delivers contemporary services to users is what I
                am most fascinated about. My mission is to turn dreams and
                imaginations into reality.
              </p>
            </article>
            <article className='profile__paragraph2-text2'>
              <p>
                Have a look at my portfolio and CV for your convenient review.
                Let’s discuss further about my contributions to your amazing
                projects.
              </p>
            </article>
            <article className='profile__paragraph2-text3'>
              <h3 className='profile__paragraph2-title2'>Skill Set</h3>
              <p style={{ fontWeight: '400' }}>Front-end Stacks:</p>
              <span>
                ReactJs, Typescript, Javascript, CSS3, Sass, HTML5, Redux,
                Context API, Material-UI, Bootstrap, Adobe Photoshop.
              </span>
              <p style={{ fontWeight: '400' }}>Backend Stacks:</p>
              <span>Express, Firebase, MongoDb, MySql, NodeJs.</span>
            </article>
          </div>
          <div className='profile__social'>
            <SocialMedia />
          </div>
        </>
      )}
    </main>
  )
}

export default Profile
