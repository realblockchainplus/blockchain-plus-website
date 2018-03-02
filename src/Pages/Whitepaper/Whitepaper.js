import React, { Component } from 'react';
import classes from './Whitepaper.css';

class Whitepaper extends Component {
  render() {
    return (
      <div className={`${classes['whitepaper']} container`} style={{ ...this.props.style }}>
        aaaaaa
      </div>
    );
  }
}

export default Whitepaper;