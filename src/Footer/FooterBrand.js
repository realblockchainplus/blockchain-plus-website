import React, { Component } from 'react';
import classes from './Footer.css';

class FooterBrand extends Component {
  render() {
    return (
      <div className={`${classes['footer-brand']} col-12 col-md-2`}>
        <a href='/'><img src='logo_text_black.svg' alt='logo'/></a>
        <p><small>© 2018 Blockchain+</small></p>
      </div>
    );
  }
}

export default FooterBrand;