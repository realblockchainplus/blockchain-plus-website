import React, { Component } from 'react';
import classes from './Footer.css';

class FooterHeader extends Component {
  render() {
    return (
      <div className={`${classes['footer-header']}`}>
        <p><strong>{this.props.title}</strong></p>
      </div>
    );
  }
}

export default FooterHeader;