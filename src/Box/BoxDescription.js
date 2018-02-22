import React, { Component } from 'react';
import classes from './Box.css';

class BoxDescription extends Component {
  render() {
    return (
      <div className={classes['box-text']}>
        <p>{this.props.description}</p>
      </div>       
    );
  }
}

export default BoxDescription;