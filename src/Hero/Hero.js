import React, { Component } from 'react';
import classes from './Hero.css'

class Hero extends Component {
  state = {
    height: 0,
    width: 0
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', () => {
      this.updateDimensions();
    })
  }
  updateDimensions() {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  }
  render() {
    console.log('[Hero] render called');
    return (
      <div className={`${classes['hero-section']} col-12`} style={{ ...this.state }}>
        <div style={{ color: 'white' }} className={`${classes['hero-container']} text-center`}>
          <img className={`${classes['hero-image']}`} src="blockchain_logo_hero.svg" alt='Blockchain Plus Text Logo' style={{ marginBottom: '10px' }} />
          <h4 style={{ textTransform: 'uppercase' }}>{this.props.lang}</h4>
        </div>
      </div>
    );
  }
}

export default Hero;