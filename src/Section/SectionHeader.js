import React, { Component } from 'react';
import classes from './Section.css';

class SectionHeader extends Component {
  render() {
    const { id, title, description } = this.props;
    const pAlign = id === 'random-number' ? 'text-justify' : '';
    return (
      <div className={`${classes['section-header']} text-center`}>
        {title && <h1>{title}</h1>}
        {description && <p className={`${pAlign}`}>{description}</p>}
      </div>
    );
  }
}

export default SectionHeader;