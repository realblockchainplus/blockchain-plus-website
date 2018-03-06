import React, { Component } from 'react';
import classes from './Section.css';

class SectionHeader extends Component {
  render() {
    const { content, backgroundColor } = this.props;
    const { title, description } = content;
    const fontColor = backgroundColor === 'rgba(32,86,107,1)' ? 'rgba(242,254,254,1)' : '#292b2c';
    return (
      <div className={`${classes['section-header']} text-center`} style={{ color: `${fontColor}`}}>
        {title && <h1>{title}</h1>}
        {description && <p>{description}</p>}
      </div>
    );
  }
}

export default SectionHeader;