import React, { Component } from 'react';

class Panel extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  render() {
    return (
      <div>aaaaaa</div>
    );
  }
}

export default Panel;