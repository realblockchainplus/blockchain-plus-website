import React, { Component } from 'react';
import classes from './Footer.css';

class FooterItem extends Component {
  render() {
    const { link, label } = this.props;
    return (
      <div className={`${classes['footer-item']}`}>
        <a href={link}>{label}</a>
      </div>
    );
  }
}

export default FooterItem;