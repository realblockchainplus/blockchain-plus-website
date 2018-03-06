import React, { Component } from 'react';
import CarouselText from './CarouselText';
import CarouselImage from './CarouselImage';

class CarouselSlide extends Component {
  render() {
    const { images, title, description } = this.props;
    return (
      <div className='row no-gutters py-3'>
        <CarouselText 
          title={title}
          description={description}
        />
        <div className='col-12 col-md-6'>
          {images.map((image, index) => {
            return (
              <CarouselImage
                key={index}
                image={image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default CarouselSlide;