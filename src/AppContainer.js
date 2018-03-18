import React, { Component } from 'react';
import LoadingScreen from './LoadingScreen/LoadingScreen';
import App from './App';
import Aux from './Aux';
import { ParallaxProvider } from 'react-scroll-parallax';

class AppContainer extends Component {
  state = {
    animationFrame: 0,
    animationLoaded: false
  }
  
  onNewAnimationFrame(frame) {
    this.setState({ animationFrame: frame }, () => {
      if (this.state.animationLoaded === false && this.state.animationFrame >= 130) {        
        this.killLoadingScreen();
      }
    });
  }
  killLoadingScreen() {
    document.documentElement.style.overflow = 'visible';
    document.body.style.overflow = 'visible';
    window.drift.show();
    this.setState({ animationLoaded: true });
  }
  render() {
    return (
      <Aux>
        { this.state.animationLoaded === false && <LoadingScreen frame={this.state.animationFrame} /> }
        <App 
          animationFrame={this.state.animationFrame}
          animationLoaded={this.state.animationLoaded}
          killLoadingScreen={this.killLoadingScreen.bind(this)}
          onNewAnimationFrame={this.onNewAnimationFrame.bind(this)}
        />
      </Aux>
    );
  }
}

export default AppContainer;