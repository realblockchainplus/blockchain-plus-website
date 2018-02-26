import React, { Component } from 'react';
import classes from './RandomNumber.css';

class RandomNumberText extends Component {
  state = {
    testString: 'That is a jellyfish!',
    hashResult: 'Hashing...'
  }
  componentDidMount() {
    this.sha256(this.state.testString);
  }
  hex(buffer) {
    const hexCodes = [];
    const view = new DataView(buffer);
    for (var i = 0; i < view.byteLength; i += 4) {
      const value = view.getUint32(i);
      const stringValue = value.toString(16);
      const padding = '00000000';
      const paddedValue = (padding + stringValue).slice(-padding.length);
      hexCodes.push(paddedValue);
    }

    const hashResult = hexCodes.join("");
    this.setState({
      hashResult
    });
  }
  sha256(str) {
    const buffer = new TextEncoder("utf-8").encode(str);
    return crypto.subtle.digest("SHA-256", buffer).then((hash) => {
      return this.hex(hash);
    });
  }
  render() {
    return (
      <div className={`${classes['random-number-text']} col-4`}>
        <div className='card bg-faded'>
          <div className='card-block'>{this.state.hashResult}</div>
        </div>
      </div>
    );
  }
}

export default RandomNumberText;