import React, { Component } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

class LoadingScreen extends Component {
  componentDidMount() {
    console.log('[LoadingScreen] mounted');
  }
  render() {
    const { frame } = this.props;
    let loadPercent = Math.floor(frame / 1.5);
    return (
      <div style={{
        position: 'fixed',
        height: '100%',
        width: '100%',
        zIndex: 9999,
        opacity: 1,
        backgroundColor: 'rgba(242,254,254,1)'
      }}>
        <ProgressBar 
          style={{
            width: '160px',            
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
          loadPercent={loadPercent}
        />
      </div>
    );
  }
}

export default LoadingScreen;