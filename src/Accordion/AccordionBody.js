import React, { Component } from 'react';
import classes from './Accordion.css';

class AccordionBody extends Component {
  render() {
    const height = this.props.isActive ? { height: '160px' } : {}
    return (
      <div className={`${classes['accordion-body']} container`} style={height}>
        <p>{this.props.answer}</p>
      </div>
    );
  }
}

export default AccordionBody;