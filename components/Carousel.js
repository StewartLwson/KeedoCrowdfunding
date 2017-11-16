// Importing React
import React from 'react';

// Importing ReactBootstrap carousel components
import Carousel from 'react-bootstrap/lib/Carousel';
import CarouselItem from 'react-bootstrap/lib/CarouselItem';
import CarouselCaption from 'react-bootstrap/lib/CarouselCaption';

export const AppCarousel = () => {
  return (
      <Carousel>
        <CarouselItem>
          <img width={900} height={500} alt="900x500" src="" />
          <CarouselCaption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </CarouselCaption>
        </CarouselItem>
        <CarouselItem>
          <img width={900} height={500} alt="900x500" src="" />
          <CarouselCaption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </CarouselCaption>
        </CarouselItem>
        <CarouselItem>
          <img width={900} height={500} alt="900x500" src="" />
          <CarouselCaption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </CarouselCaption>
        </CarouselItem>
      </Carousel>
    )
}
