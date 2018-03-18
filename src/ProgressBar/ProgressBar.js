import React, { Component } from 'react';

class ProgressBar extends Component {
  componentDidMount() {
    console.log('[ProgressBar] mounted');
  }
  componentDidUpdate() {
    if (this.loadingBar) {
      if (this.loadingBar.ldBar) {
        this.loadingBar.ldBar.set(this.props.loadPercent + 5);
      }
    }
  }
  render() {
    let loadPercent = this.props.loadPercent || 0;
    return (
      <div ref={(loadingBar) => { this.loadingBar = loadingBar }} style={{...this.props.style}} className="ldBar" data-value={loadPercent} data-type='fill' data-img='loading_logo_only.svg'></div>
    );
  }
}

export default ProgressBar;