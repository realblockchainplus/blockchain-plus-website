import React, { Component } from 'react';

class Presentation extends Component {
  componentDidMount() {
    window.open('blockchainplus_presentation.pdf', '_self');
  }
  render() {
    return <div className='presentation'></div>
  }
}

export default Presentation;