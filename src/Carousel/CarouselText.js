import React, { Component } from 'react';
import classes from './Carousel.css';

class CarouselText extends Component {
  render() {
    return (
      <div className={`${classes['carousel-text']} col-12 col-sm-6 p-3`}>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default CarouselText;