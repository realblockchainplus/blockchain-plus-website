import React, { Component } from 'react';
import classes from './Footer.css';

class FooterItem extends Component {
  render() {
    const { label, link } = this.props.content;
    console.log(label);
    return (
      <div className={`${classes['footer-item']}`}>
        <a href={link}>{label}</a>
      </div>
    );
  }
}

export default FooterItem;