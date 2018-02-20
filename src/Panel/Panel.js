import React, { Component } from 'react';
import Section from '../Section/Section';

class Panel extends Component {
  componentDidMount() {
    // let s = Snap('#svgout');
    // let r = s.rect(100,100,100,100,20,20).attr({ stroke: '#123456', 'strokeWidth': 20, fill: 'red', 'opacity': 0.2 });

    // let t = s.text(100,50,'Snap("#svg") should reference an svg element, not a div. Or create it by supplying width,height Snap(100,100)');
  }
  render() {
    let divStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgba(0,0,0,0)'
    }
    let spanStyle = {
      fontSize: '40px',
      color: 'white'
    }
    return (
      <div style={divStyle}>
        {/* <svg id='svgout' /> */}
        <img src="logo_text.svg" style={{ height: '125px', marginBottom: '10px' }} />
      </div>
    );
  }
}

export default Panel;