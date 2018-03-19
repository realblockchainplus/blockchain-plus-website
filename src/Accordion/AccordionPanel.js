import React, { Component } from 'react';
import AccordionHeader from './AccordionHeader';
import AccordionBody from './AccordionBody';
import classes from './Accordion.css';

class AccordionPanel extends Component {
  render() {
    const { index, isActive, handleToggle, lang } = this.props;
    const { question, answer } = lang;
    return (
      <div className={`${classes['accordion-panel']} col-12`}>
        <AccordionHeader
          question={question}
          isActive={isActive}
          index={index}
          handleToggle={handleToggle}
        />
        <AccordionBody
          answer={answer}
          isActive={isActive}
        />
      </div>
    );
  }
}

export default AccordionPanel;