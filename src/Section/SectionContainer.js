import React, { Component } from 'react';
import SectionHeader from './SectionHeader';
import SectionBody from './SectionBody';
import classes from './Section.css';

class SectionContainer extends Component {
  render() {
    const { header, body } = this.props.content;
    return (
      <div className={`${classes['section-container']} container`}>
        {header !== null &&
          <SectionHeader
            content={header}
          />
        }
        <SectionBody 
          category={this.props.category}
          content={body}
          scrollReveal={this.props.scrollReveal}
        />
    </div>
    );
  }
}

export default SectionContainer;