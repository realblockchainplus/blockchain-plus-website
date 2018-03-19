import React, { Component } from 'react';

class FooterSelectOption extends Component {
  render() {
    const { id, label } = this.props;
    return (
      <option value={id}>{label}</option>
    );
  }
}

export default FooterSelectOption;