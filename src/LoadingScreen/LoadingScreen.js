import React, { Component } from 'react';

class LoadingScreen extends Component {
  render() {
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
        }}><img style={{ maxWidth: '350px' }} src='logo_text_black.svg' />
        </div>
      </div>
    );
  }
}

export default LoadingScreen;