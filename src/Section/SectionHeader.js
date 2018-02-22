import React, { Component } from 'react';
import classes from './Section.css';

class SectionHeader extends Component {
  render() {
    const { title, description } = this.props.content;
    return (
      <div className={`${classes['section-header']} text-center`}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  }
}

export default SectionHeader;