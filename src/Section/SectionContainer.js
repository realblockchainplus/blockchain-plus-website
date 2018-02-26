import React, { Component } from 'react';
import SectionHeader from './SectionHeader';
import SectionBody from './SectionBody';
import classes from './Section.css';

class SectionContainer extends Component {
  render() {
    const { content, backgroundColor } = this.props;
    const { id, header, body } = content;
    return (
      <div className={`${classes['section-container']} container`}>
        {header !== null &&
          <SectionHeader
            content={header}
            backgroundColor={backgroundColor}
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