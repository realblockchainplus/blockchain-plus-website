import React, { Component } from 'react';
import classes from './Box.css';

class BoxImage extends Component {
  render() {
    return (
      <div className={`${classes['box-image']}`}>
        <img src={this.props.image} alt={this.props.title} />
      </div>
    );
  }
}

export default BoxImage;