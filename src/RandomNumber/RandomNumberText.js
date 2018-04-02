import React, { Component } from 'react';
import classes from './RandomNumber.css';
import webCrypto from 'webcrypto-shim';

class RandomNumberText extends Component {
  state = {
    testString: null,
    hashResult: 'Hashing...'
  }
  componentDidMount() {
    this.generateRandomString((randomString) => { this.sha256(randomString) });
  }
  encode(str) {
    var result;
  
    if ('undefined' === typeof Uint8Array) {
      result = this.utf8ToBytes(str);
    } else {
      result = new Uint8Array(this.utf8ToBytes(str));
    }
  
    return result;
  }
  utf8ToBytes(string, units) {
    units = units || Infinity
    var codePoint
    var length = string.length
    var leadSurrogate = null
    var bytes = []
    var i = 0
  
    for (; i < length; i++) {
      codePoint = string.charCodeAt(i)
  
      // is surrogate component
      if (codePoint > 0xD7FF && codePoint < 0xE000) {
        // last char was a lead
        if (leadSurrogate) {
          // 2 leads in a row
          if (codePoint < 0xDC00) {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
            leadSurrogate = codePoint
            continue
          } else {
            // valid surrogate pair
            codePoint = leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00 | 0x10000
            leadSurrogate = null
          }
        } else {
          // no lead yet
  
          if (codePoint > 0xDBFF) {
            // unexpected trail
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
            continue
          } else if (i + 1 === length) {
            // unpaired lead
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
            continue
          } else {
            // valid lead
            leadSurrogate = codePoint
            continue
          }
        }
      } else if (leadSurrogate) {
        // valid bmp char, but last char was a lead
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = null
      }
  
      // encode utf8
      if (codePoint < 0x80) {
        if ((units -= 1) < 0) break
        bytes.push(codePoint)
      } else if (codePoint < 0x800) {
        if ((units -= 2) < 0) break
        bytes.push(
          codePoint >> 0x6 | 0xC0,
          codePoint & 0x3F | 0x80
        )
      } else if (codePoint < 0x10000) {
        if ((units -= 3) < 0) break
        bytes.push(
          codePoint >> 0xC | 0xE0,
          codePoint >> 0x6 & 0x3F | 0x80,
          codePoint & 0x3F | 0x80
        )
      } else if (codePoint < 0x200000) {
        if ((units -= 4) < 0) break
        bytes.push(
          codePoint >> 0x12 | 0xF0,
          codePoint >> 0xC & 0x3F | 0x80,
          codePoint >> 0x6 & 0x3F | 0x80,
          codePoint & 0x3F | 0x80
        )
      } else {
        throw new Error('Invalid code point')
      }
    }
  
    return bytes
  }
  hex(buffer) {
    const hexCodes = [];
    const view = new DataView(buffer);
    for (let i = 0; i < view.byteLength; i += 4) {
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
    const buffer = this.encode(str);
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
      <div className={`${classes['random-number-text']} col-12 col-md-4`}>
        {/* <button className='btn btn-primary' onClick={() => this.generateRandomString((testString) => this.sha256(testString))}>Generate a Random Number</button> */}
        <div className='card bg-faded'>
          <div className='card-body'>{this.state.hashResult}</div>
        </div>
      </div>
    );
  }
}

export default RandomNumberText;