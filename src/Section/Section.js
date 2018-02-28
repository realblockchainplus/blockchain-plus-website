import React, { Component } from 'react';
import SectionContainer from './SectionContainer';
import classes from './Section.css';

class Section extends Component {
  
  render() {
    const { index, content, scrollReveal } = this.props;
    const { id, backgroundColor } = content;
    return (
      <div className={`${classes['section']} py-5`} id={id} style={{ backgroundColor: `${backgroundColor}` }}>
        <SectionContainer
          content={content}
          scrollReveal={scrollReveal}
          backgroundColor={backgroundColor}
        />
      </div>
    );
  }
}

export default Section;