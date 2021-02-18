import React from 'react'
import Carousel from 'react-elastic-carousel'

import CardItem from './CardItem'
import projImg from '../../assets/images/electron-app.png'
import projImg2 from '../../assets/images/devcon.png'

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
          <CardItem
            src={projImg}
            text='React, Typescript, Material UI, SCSS, Flex, Figma, Typescript, Material UI'
            label='E-commerce App'
          />

          <CardItem
            src={projImg2}
            text='React, Typescript, Material UI, SCSS, Flex Material UI, SCSS, Flex'
            label='DevConnector App'
          />
          <CardItem
            src={projImg2}
            text='React, Typescript, Material UI, SCSS, Flex Material UI, SCSS, Flex'
            label='DevConnector App'
          />
          <CardItem
            src={projImg2}
            text='React, Typescript, Material UI, SCSS, Flex Material UI, SCSS, Flex'
            label='DevConnector App'
          />
        </Carousel>
      </div>
      {/* Cards display for mobile */}
      <div className='cards__items cards__mobile--active'>
        <CardItem
          src={projImg}
          text='React, Typescript, Material UI, SCSS, Flex, Figma, Typescript, Material UI'
          label='E-commerce App'
        />

        <CardItem
          src={projImg2}
          text='React, Typescript, Material UI, SCSS, Flex Material UI, SCSS, Flex'
          label='DevConnector App'
        />
        <CardItem
          src={projImg2}
          text='React, Typescript, Material UI, SCSS, Flex Material UI, SCSS, Flex'
          label='DevConnector App'
        />
        <CardItem
          src={projImg2}
          text='React, Typescript, Material UI, SCSS, Flex Material UI, SCSS, Flex'
          label='DevConnector App'
        />
        {/* </Carousel> */}
      </div>
    </div>
  )
}

export default Cards
