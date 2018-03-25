import React, { Component } from 'react';
import classes from './Hero.css'

class Hero extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div className={`${classes['hero-section']} col-12`} style={{ ...this.props.style }}>
        <div style={{ color: 'white' }} className={`${classes['hero-container']} text-center`}>
          {/* <svg id='svgout' /> */}
          <img className={`${classes['hero-image']}`} src="logo_text.svg" alt='Blockchain Plus Text Logo' style={{ marginBottom: '10px' }} />
          <h4 style={{ textTransform: 'uppercase' }}>{this.props.lang}</h4>
        </div>
      </div>
    );
  }
}

export default Hero;