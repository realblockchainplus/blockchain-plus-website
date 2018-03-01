import React, { Component } from 'react';
import classes from './RandomNumber.css';

class RandomNumberImage extends Component {
  render() {
    return (
      <div className={`${classes['random-number-image']} col-8`}>
        <div className='row'>
          <div className='col-5'>
            <img src='jellyfish.svg' alt='jellyfish' />
          </div>
          <div className='col-1'>
            <img src='close.svg' alt='times sign' />
          </div>
          <div className='col-5'>
            <img src='binary-code.svg' alt='numbers' />
          </div>
          <div className='col-1'>
            <img src='equal-sign.svg' alt='equals sign' />
          </div>
        </div>
      </div>
    );
  }
}

export default RandomNumberImage;