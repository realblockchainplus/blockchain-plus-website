import React, { Component } from 'react';
import FooterHeader from './FooterHeader';
import FooterSelect from './FooterSelect';

class FooterLanguage extends Component {
  render() {
    return (
      <div>
        <FooterHeader
          title={'Language'}
        />
        <FooterSelect
          content={this.props.content}
          lang={this.props.lang}
        />
      </div>
    );
  }
}

export default FooterLanguage;