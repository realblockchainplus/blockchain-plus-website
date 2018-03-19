import React, { Component } from 'react';
import FooterSelectOption from './FooterSelectOption';
import { translate } from 'react-i18next';

class FooterSelect extends Component {
  state = {
    currentValue: ''
  }
  handleChange(i18n, event) {
    this.setState({ currentValue: event.target.value }, () => {
      i18n.changeLanguage(this.state.currentValue);
    });
  }
  render() {
    const { i18n, content, lang } = this.props;
    return (
      <select value={this.state.currentValue} onChange={(ev) => this.handleChange(i18n, ev)}>
        {content.map((id, index) => {
          return <FooterSelectOption
            key={id}
            id={id}
            label={lang[id]}
          />
        })}
      </select>
    );
  }
}

export default translate()(FooterSelect);