import React, { Component } from 'react';
import classes from './RandomNumber.css';

class RandomNumberImage extends Component {
  render() {
    const operatorStyle = this.props.operator ? { maxHeight: '35px' } : { maxHeight: '200px' };
    return (
      <img className={`${classes['random-number-image']} ${this.props.classes}`} src={this.props.src} alt={this.props.alt} style={operatorStyle} />
    );
  }
}

export default RandomNumberImage;