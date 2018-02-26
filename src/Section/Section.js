import React, { Component } from 'react';
import SectionContainer from './SectionContainer';
import classes from './Section.css';

class Section extends Component {
  render() {
    const { id, backgroundColor } = this.props.content;
    return (
      <div className={`${classes['section']} py-5`} id={id} style={{ backgroundColor: `${backgroundColor}` }}>
        <SectionContainer
          content={this.props.content}
          scrollReveal={this.props.scrollReveal}
        />
      </div>
    );
  }
}

export default Section;