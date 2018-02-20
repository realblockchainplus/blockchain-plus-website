import React, { Component } from 'react';
import classes from '../App.css';

const Box = (props) => {
  return (
    <div className='box-anim col-xs-12 col-sm-4' id={`${props.boxCategory}-${props.id}`}>
      <div className={`${classes['box']}`}>
        <div className={classes['box-icon']}>
          <img src={props.image} />
        </div>
        <div className={classes['box-header']}>
          <h4>{props.header}</h4>
        </div>
        <div className={classes['box-text']}>
          <p>{props.text}</p>
        </div>        
      </div>
    </div>
  );
}

export default Box;