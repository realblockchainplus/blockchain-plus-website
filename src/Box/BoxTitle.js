import React, { Component } from 'react';
import classes from './Box.css';

class BoxTitle extends Component {
  render() {
    return (
      <div className={classes['box-title']}>
        <h4>{this.props.title}</h4>
      </div>
    );
  }
}

export default BoxTitle;