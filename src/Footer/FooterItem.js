import React, { Component } from 'react';
import classes from './Footer.css';

class FooterItem extends Component {
  render() {
    const { text, link } = this.props.content;
    return (
      <div className={`${classes['footer-item']}`}>
        <a href={link}>{text}</a>
      </div>
    );
  }
}

export default FooterItem;