import React, { Component } from 'react';
import classes from './Carousel.css';

class CarouselImage extends Component {
  render() {
    const { src, altText } = this.props.image;
    return (
      <div className={`${classes['carousel-img-container']} text-center`}>
        <img
          src={src}
          alt={altText}
        />
      </div>
    );
  }
}

export default CarouselImage;