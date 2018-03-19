import React, { Component } from 'react';
import SectionHeader from './SectionHeader';
import SectionBody from './SectionBody';
import classes from './Section.css';

class SectionContainer extends Component {
  render() {
    const { content, lang } = this.props;
    const { id } = content;
    const { headerTitle, headerDescription, sectionLang } = lang;
    const overflowStyle = id === 'faq' ? { overflowY: 'hidden' } : {}
    return (
      <div className={`${classes['section-container']} container`} style={overflowStyle}>
        {headerTitle !== null &&
          <SectionHeader
            id={id}
            title={headerTitle}
            description={headerDescription}
          />
        }
        <SectionBody 
          id={id}
          content={content.body}
          lang={sectionLang}
          scrollReveal={this.props.scrollReveal}
        />
    </div>
    );
  }
}

export default SectionContainer;