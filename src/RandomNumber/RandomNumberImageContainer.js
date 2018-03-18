import React, { Component } from 'react';
import RandomNumberImage from './RandomNumberImage';
import classes from './RandomNumber.css';

class RandomNumberImageContainer extends Component {
  render() {
    return (
      <div className={`${classes['random-number-image']} col-12 col-md-8`}>
        <div className='row'>
          <div className='col-4 col-md-4'>
            <RandomNumberImage
              src='jellyfish.svg'
              alt='jellyfish'
              classes=''
              operator={false}
            />
          </div>
          <div className='col-4 col-md-2'>
          <RandomNumberImage
              src='close.svg'
              alt='times sign'
              classes=''
              operator={true}
            />
          </div>
          <div className='col-4 col-md-4'>
          <RandomNumberImage
              src='binary-code.svg'
              alt='numbers'
              classes=''
              operator={false}
            />
          </div>
          <div className='col-12 col-md-2'>
          <RandomNumberImage
              src='equal-sign.svg'
              alt='equals sign'
              classes='my-5'
              operator={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default RandomNumberImageContainer;