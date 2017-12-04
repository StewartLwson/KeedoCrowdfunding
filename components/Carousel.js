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
          <img width={900} height={500} alt="900x500" src="./app/image/keedo_logo.png" />
          <CarouselCaption>
            <h3>First slide label</h3>
            <p>Placeholder</p>
          </CarouselCaption>
        </CarouselItem>
        <CarouselItem>
          <img width={900} height={500} alt="900x500" src="./app/image/keedo_logo.png" />
          <CarouselCaption>
            <h3>Second slide label</h3>
            <p>Placeholder</p>
          </CarouselCaption>
        </CarouselItem>
        <CarouselItem>
          <img width={900} height={500} alt="900x500" src="./app/image/keedo_logo.png" />
          <CarouselCaption>
            <h3>Third slide label</h3>
            <p>Placeholder</p>
          </CarouselCaption>
        </CarouselItem>
      </Carousel>
    )
}
