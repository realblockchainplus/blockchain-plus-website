import React, { Component } from 'react';
import classes from './Carousel.css';

class CarouselSlide extends Component {
  render() {
    const { images, title, description } = this.props;
    return (
      <div className='row no-gutters'>
        <div className='col-12 col-sm-6'>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className='col-12 col-sm-6'>
          {images.map((image, index) => {
            return (
              <div key={index} className={`${classes['carousel-img-container']} text-center`}>
                <img
                  src={image.src}
                  alt={image.altText}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CarouselSlide;