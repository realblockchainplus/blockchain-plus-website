import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown, faAngleDoubleLeft } from '@fortawesome/fontawesome-free-solid';
import classes from './Accordion.css';

class AccordionHeader extends Component {
  render() {
    const expandIcon = this.props.isActive ? faAngleDoubleDown : faAngleDoubleLeft;
    return (
      <div 
        className={`${classes['accordion-header']} py-2`} 
        onClick={() => this.props.handleToggle(this.props.index)}
      >
        <h5>{this.props.question}</h5><FontAwesomeIcon icon={expandIcon} className='float-right'/>
      </div>
    );
  }
}

export default AccordionHeader;