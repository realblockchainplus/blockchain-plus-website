import React, { Component } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

class LoadingScreen extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.frame === nextProps.frame) {
      return false;
    }
    return true;
  }
  render() {
    const { frame } = this.props;
    let loadPercent = Math.floor(frame / 2);
    return (
      <div style={{
        position: 'fixed',
        height: '100%',
        width: '100%',
        zIndex: 9999,
        opacity: 1,
        backgroundColor: 'rgba(242,254,254,1)'
      }}>
        <div style={{
          position: 'absolute',
          color: 'black',
          fontSize: '50px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <ProgressBar 
            style={{ maxWidth: '350px' }}
            loadPercent={loadPercent}
          />
        </div>
      </div>
    );
  }
}

export default LoadingScreen;