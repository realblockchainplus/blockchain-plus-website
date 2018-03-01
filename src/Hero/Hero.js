import React, { Component } from 'react';
import classes from './Hero.css'

class Hero extends Component {
  state = {
    width: null
  }
  componentDidMount() {
    const width = window.innerWidth - 24;
    this.setState({ width });

    window.addEventListener('resize', () => {
      this.updateWidth();
    });
    // let s = Snap('#svgout');
    // let r = s.rect(100,100,100,100,20,20).attr({ stroke: '#123456', 'strokeWidth': 20, fill: 'red', 'opacity': 0.2 });

    // let t = s.text(100,50,'Snap("#svg") should reference an svg element, not a div. Or create it by supplying width,height Snap(100,100)');
  }
  updateWidth() {
    const width = window.innerWidth - 24;
    this.setState({ width });
  }
  render() {
    return (
      <div style={{ color: 'white' }} className={`${classes['hero-container']} text-center`}>
        {/* <svg id='svgout' /> */}
        <img src="logo_text.svg" alt='Blockchain Plus Text Logo' style={{ maxWidth: this.state.width, marginBottom: '10px' }} />
        <h4 style={{ textTransform: 'uppercase' }}>Next-generation distributed ledger system</h4>
      </div>
    );
  }
}

export default Hero;