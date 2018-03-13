import React, { Component } from 'react';
import classes from './Section.css';

class SectionHeader extends Component {
  render() {
    const { id, content, backgroundColor } = this.props;
    const { title, description } = content;
    const fontColor = backgroundColor === 'rgb(9, 120, 172)' ? 'rgba(242,254,254,1)' : '#292b2c';
    const pAlign = id === 'random-number' ? 'text-justify' : '';
    return (
      <div className={`${classes['section-header']} text-center`} style={{ color: `${fontColor}`}}>
        {title && <h1>{title}</h1>}
        {description && <p className={`${pAlign}`}>{description}</p>}
      </div>
    );
  }
}

export default SectionHeader;