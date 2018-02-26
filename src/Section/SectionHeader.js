import React, { Component } from 'react';
import classes from './Section.css';

class SectionHeader extends Component {
  render() {
    const { content, backgroundColor } = this.props;
    const { title, description } = content;
    const fontColor = backgroundColor === 'rgba(0,0,0,0.5)' ? 'rgba(242,254,254,1)' : 'black';
    return (
      <div className={`${classes['section-header']} text-center`} style={{ color: `${fontColor}`}}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  }
}

export default SectionHeader;