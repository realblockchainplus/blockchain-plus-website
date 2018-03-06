import React, { Component } from 'react';
import classes from './Hero.css'

class Hero extends Component {
  componentDidMount() {
    // let s = Snap('#svgout');
    // let r = s.rect(100,100,100,100,20,20).attr({ stroke: '#123456', 'strokeWidth': 20, fill: 'red', 'opacity': 0.2 });

    // let t = s.text(100,50,'Snap("#svg") should reference an svg element, not a div. Or create it by supplying width,height Snap(100,100)');
  }
  render() {
    return (
      <div className={`${classes['hero-section']}`}>
        <div style={{ color: 'white' }} className={`${classes['hero-container']} text-center`}>
          {/* <svg id='svgout' /> */}
          <img className={`${classes['hero-image']}`} src="logo_text.svg" alt='Blockchain Plus Text Logo' style={{ marginBottom: '10px' }} />
          <h4 style={{ textTransform: 'uppercase' }}>Next-generation distributed ledger system</h4>
        </div>
      </div>
    );
  }
}

export default Hero;