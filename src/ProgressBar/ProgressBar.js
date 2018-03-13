import React, { Component } from 'react';

class ProgressBar extends Component {
  componentDidUpdate() {
    if (this.loadingBar) {
      if (this.loadingBar.ldBar) {
        console.log(this.props.loadPercent);
        this.loadingBar.ldBar.set(this.props.loadPercent + 5);
      }
    }
  }
  render() {
    return (
      <div ref={(loadingBar) => { this.loadingBar = loadingBar }} className="ldBar" style={this.props.style}data-value={this.props.loadPercent} data-type='fill' data-img='jellyfish.svg'></div>
    );
  }
}

export default ProgressBar;