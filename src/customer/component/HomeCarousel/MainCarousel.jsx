import React from 'react'
import { MainCarouselData } from './MainCarouselData';
import 'react-alice-carousel/lib/alice-carousel.css';
import ReactAliceCarousel from 'react-alice-carousel';

const MainCarousel = () => {

    const items = MainCarouselData.map((item)=> <img className='cursor-pointer z-10' 
    role='presentation' src={item.image} alt=""/>)


  return (
    <ReactAliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
  )
}

export default MainCarousel