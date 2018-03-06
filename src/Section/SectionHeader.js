import React, { Component } from 'react';
import classes from './Section.css';

class SectionHeader extends Component {
  render() {
    const { content } = this.props;
    const { title, description } = content;
    return (
      <div className={`${classes['section-header']} text-center`}>
        {title && <h1>{title}</h1>}
        {description && <p>{description}</p>}
      </div>
    );
  }
}

export default SectionHeader;