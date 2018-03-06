import React, { Component } from 'react';
import SectionHeader from './SectionHeader';
import SectionBody from './SectionBody';
import classes from './Section.css';

class SectionContainer extends Component {
  render() {
    const { content } = this.props;
    const { id, header, body } = content;
    const overflowStyle = id === 'faq' ? { overflowY: 'hidden' } : {}
    return (
      <div className={`${classes['section-container']} container my-auto`} style={overflowStyle}>
        {header !== null &&
          <SectionHeader
            content={header}
          />
        }
        <SectionBody 
          id={id}
          content={body}
          scrollReveal={this.props.scrollReveal}
        />
    </div>
    );
  }
}

export default SectionContainer;