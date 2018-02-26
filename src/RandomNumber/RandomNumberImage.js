import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTimes, faEquals } from '@fortawesome/fontawesome-free-solid';
import classes from './RandomNumber.css';

class RandomNumberImage extends Component {
  render() {
    return (
      <div className={`${classes['random-number-image']} col-8`}>
        <div className='row'>
          <div className='col-5'>
            <img src='jellyfish.svg' />
          </div>
          <div className='col-1'>
            <img src='close.svg' />
          </div>
          <div className='col-5'>
            <img src='binary-code.svg' />
          </div>
          <div className='col-1'>
            <img src='equal-sign.svg' />
          </div>
        </div>
      </div>
    );
  }
}

export default RandomNumberImage;