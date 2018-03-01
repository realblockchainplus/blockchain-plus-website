import React, { Component } from 'react';

class FooterItem extends Component {
  render() {
    const { text, link } = this.props.content;
    return (
      <div>
        <a href={link}>{text}</a>
      </div>
    );
  }
}

export default FooterItem;