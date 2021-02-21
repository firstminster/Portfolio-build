import React from 'react'

const CardItem = ({ image, techstack, title, gitrepo, demo, ...props }) => {
  return (
    <div className='cards__item' key={props.key} onClick={props.handleClick}>
      <div className='cards__item__container'>
        <figure className='cards__item__pic-wrap' data-category={title}>
          <img
            src={image}
            alt={title}
            className='cards__item__img'
            loading='lazy'
          />
        </figure>
        <div className='cards__item__info'>
          <p className='cards__item__text'>{techstack}</p>
          <div className='cards__item__buttons'>
            <a href={demo} target='_blank' rel='noreferrer'>
              <button className='btn btn-primary'>Demo</button>
            </a>
            <a href={gitrepo} target='_blank' rel='noreferrer'>
              <button className='btn btn-primary'>Code</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardItem
