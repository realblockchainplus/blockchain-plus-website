import React, { Component } from 'react';
import RandomNumberImage from './RandomNumberImage';
import RandomNumberText from './RandomNumberText';
import classes from './RandomNumber.css';

class RandomNumberContainer extends Component {
  render() {
    return (
      <div className={`${classes['random-number-container']} col-12`}>
        <div className='row'>
          <RandomNumberImage />
          <RandomNumberText />
        </div>
      </div>
    );
  }
}

export default RandomNumberContainer;