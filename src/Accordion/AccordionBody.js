import React, { Component } from 'react';
import classes from './Accordion.css';

class AccordionBody extends Component {
  state = {
    height: null,
    width: null
  }

  componentDidMount() {
    this.getHeight();
    window.addEventListener('resize', () => {
      this.getHeight();
    });
  }

  getHeight() {
    if (this.accordionText) {
      let height = this.accordionText.offsetHeight;
      height += 20 + height * 0.115;
      this.setState({ height });
    }
  }

  render() {
    const height = this.props.isActive ? { height: this.state.height } : {}
    return (
      <div className={`${classes['accordion-body']} container`} style={height}>
        <p ref={(accordionText) => { this.accordionText = accordionText }} className='py-2'>{this.props.answer}</p>
      </div>
    );
  }
}

export default AccordionBody;