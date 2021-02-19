import React from 'react'
import Carousel from 'react-elastic-carousel'

import CardItem from './CardItem'
import { data } from '../../projectData'

import './Cards.scss'

const Cards = () => {
  const breakpoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 },
  ]

  // { width: 1, itemsToShow: 1 },
  //   { width: 500, itemsToShow: 2 },
  //   { width: 768, itemsToShow: 3 },
  //   { width: 1200, itemsToShow: 4 },
  return (
    <div className='cards'>
      <div className='cards__items cards__desktop--active'>
        <Carousel
          breakPoints={breakpoints}
          pagination={false}
          className='cards__carousel'
        >
          {data.map(project => (
            <CardItem
              key={project._id}
              image={project.image}
              techstack={project.techstack}
              title={project.title}
              gitrepo={project.gitrepo}
              demo={project.demo}
            />
          ))}
        </Carousel>
      </div>
      {/* Cards display for mobile-screen*/}
      <div className='cards__items cards__mobile--active'>
        {data.map(project => (
          <CardItem
            key={project._id}
            image={project.image}
            techstack={project.techstack}
            title={project.title}
            gitrepo={project.gitrepo}
            demo={project.demo}
          />
        ))}
      </div>
    </div>
  )
}

export default Cards
