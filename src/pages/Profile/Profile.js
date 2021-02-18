import React from 'react'

import SocialMedia from '../../component/SocialMedia'
import Minster from '../../assets/images/minister2.png'
import './Profile.scss'

const Profile = () => {
  return (
    <main className='profile'>
      <div className='profile__brief'>
        <h1 className='profile__brief-title'>Chinecherem Harry</h1>
        <p className='profile__brief-text'>
          A Software Developer, content creator, and an enthusiast with 8 years
          of experience building Graphic illustrations, 2D art, and character
          design, Animations, UI design, etc, Looking to collaborate with a
          passionate design team.
          <span className='getin-touch'>"Get in touch".</span>
        </p>
        <button className='btn btn-primary'>Download CV</button>
      </div>
      <div className='profile__image'>
        <img src={Minster} alt='profile-img' />
      </div>
      <div className='profile__paragraph1'>
        <article className='profile__paragraph1-text1'>
          <h3 className='profile__paragraph1-title1'>My Qualifications</h3>
          <p>
            BSc – Visual Arts and Visual Communication Design at Eastern
            Mediterranean University, North Cyprus, Turkey | 2012/2016 Masters –
            Applied Digital Media at Griffith College Dublin. | 2019/2020
          </p>
        </article>
        <article className='profile__paragraph1-text1'>
          <h3 className='profile__paragraph1-title2'>
            Why you should hire me?
          </h3>
          <p>
            Passion-driven design professional incredibly diligent in multimedia
            design practice and team collaborations. My years of experience and
            vast skills set are two things I am confident will be of great
            benefit to getting the job done. Because I enjoy what I do, I
            specialise in a vast area. Particularly, I’m an expert at creating
            and identifying good design looks. My mission is to turn dreams and
            imaginations into reality.
          </p>
        </article>
      </div>
      <div className='profile__paragraph2'>
        <article className='profile__paragraph2-text1'>
          <p>
            By unifying images, photography, and typography, my designs are
            usually highly reflective of the audience/client’s expectations. I
            also specialize in other Art forms like 2D Art and Character Design,
            Animation, Video Production.You would also find my strong research
            and project skills in graphic design is highly valuable to your team
            in developing my UI Design.
          </p>
        </article>
        <article className='profile__paragraph2-text2'>
          <p>
            Have a look at my portfolio and CV for your convenient review. Let’s
            discuss further about my contributions to your amazing projects.
          </p>
        </article>
        <article className='profile__paragraph2-text3'>
          <h3 className='profile__paragraph2-title2'>Skill Set</h3>
          <p>
            Illustrator, Photoshop, Adobe XD, Word Press, Elementor, CSS, Html5,
            Indesign, Moho, After-Effect, Adobe Premiere. Microsoft Package.
          </p>
        </article>
      </div>
      <div className='profile__social'>
        <SocialMedia />
      </div>
    </main>
  )
}

export default Profile
