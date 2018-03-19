import React, { Component } from 'react';
import SectionContainer from './SectionContainer';
import classes from './Section.css';

class Section extends Component {  
  render() {
    const { content, lang, scrollReveal } = this.props;
    const { id } = content;
    const heroSection = id === 'hero' ? 'section-hero' : '';
    return (
      <div className={`${classes['section']} ${classes[heroSection]} py-5`} id={id}>
        <SectionContainer
          content={content}
          lang={lang}
          scrollReveal={scrollReveal}
        />
      </div>
    );
  }
}

export default Section;