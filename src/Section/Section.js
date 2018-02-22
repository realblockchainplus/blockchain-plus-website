import React, { Component } from 'react';
import SectionContainer from './SectionContainer';
import classes from './Section.css';

class Section extends Component {
  render() {
    const backgroundColor = this.props.backgroundColor;
    return (
      <div className={`${classes['section']} py-5`} id={this.props.id} style={{ backgroundColor: `${backgroundColor}` }}>
        <SectionContainer
          content={this.props.content}
          category={this.props.category}
          scrollReveal={this.props.scrollReveal}
        />
      </div>
    );
  }
}

export default Section;