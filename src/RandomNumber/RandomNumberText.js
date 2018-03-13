import React, { Component } from 'react';
import classes from './RandomNumber.css';

class RandomNumberText extends Component {
  state = {
    testString: null,
    hashResult: 'Hashing...'
  }
  componentDidMount() {
    this.generateRandomString((randomString) => { this.sha256(randomString) });
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
    this.setState({ hashResult });
  }
  sha256(str) {
    const buffer = new TextEncoder("utf-8").encode(str);
    return crypto.subtle.digest("SHA-256", buffer).then((hash) => {
      return this.hex(hash);
    });
  }
  generateRandomString(callback) {
    const image = () => {
      return <img src='jellyfish3.png' alt='' />
    }
    let string = btoa(image);
    let testString = string.substr(Math.floor(Math.random() * string.length));
    callback(testString);
  }

  render() {
    return (
      <div className={`${classes['random-number-text']} col-4`}>
        {/* <button className='btn btn-primary' onClick={() => this.generateRandomString((testString) => this.sha256(testString))}>Generate a Random Number</button> */}
        <div className='card bg-faded'>
          <div className='card-block'>{this.state.hashResult}</div>
        </div>
      </div>
    );
  }
}

export default RandomNumberText;