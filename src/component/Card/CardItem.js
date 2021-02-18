import React from 'react'
import { Link } from 'react-router-dom'

const CardItem = ({ label, src, text }) => {
  return (
    <>
      <div className='cards__item'>
        <div className='cards__item__container'>
          <figure className='cards__item__pic-wrap' data-category={label}>
            <img src={src} alt={label} className='cards__item__img' />
          </figure>
          <div className='cards__item__info'>
            <p className='cards__item__text'>{text}</p>
            <div className='cards__item__buttons'>
              <Link to='#'>
                <button className='btn btn-primary'>Demo</button>
              </Link>
              <Link to='#'>
                <button className='btn btn-primary'>Code</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardItem
