import React, { Component } from 'react';
import classes from './Accordion.css';

class AccordionBody extends Component {
  render() {
    const display = this.props.isActive ? 'block' : 'none';
    return (
      <div className={`${classes['accordion-body']}`} style={{ display: `${display}` }}>
        <p>{this.props.answer}</p>
      </div>
    );
  }
}

export default AccordionBody;