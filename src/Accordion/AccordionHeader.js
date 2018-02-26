import React, { Component } from 'react';
import classes from './Accordion.css';

class AccordionHeader extends Component {
  render() {
    return (
      <div 
        className={`${classes['accordion-header']} py-2`} 
        onClick={() => this.props.handleToggle(this.props.index)}
      >
        <h5>{this.props.question}</h5>
      </div>
    );
  }
}

export default AccordionHeader;