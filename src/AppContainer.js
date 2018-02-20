import React, { Component } from 'react';
import App from './App';
import { ParallaxProvider } from 'react-scroll-parallax';

class AppContainer extends Component {
  render() {
    return (
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    );
  }
}

export default AppContainer;