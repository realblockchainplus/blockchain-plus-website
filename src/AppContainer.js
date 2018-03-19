import React, { Component } from 'react';
import LoadingScreen from './LoadingScreen/LoadingScreen';
import App from './App';
import Aux from './Aux';
import { ParallaxProvider } from 'react-scroll-parallax';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

class AppContainer extends Component {
  state = {
    animationFrame: 0,
    animationLoaded: false
  }

  componentDidMount() {
    this.killLoadingScreen();
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
    console.log(i18n);
    return (
      <Aux>
        { this.state.animationLoaded === false && <LoadingScreen frame={this.state.animationFrame} /> }
        <I18nextProvider i18n={ i18n } initialLanguage='en'>
          <App 
            animationFrame={this.state.animationFrame}
            animationLoaded={this.state.animationLoaded}
            killLoadingScreen={this.killLoadingScreen.bind(this)}
            onNewAnimationFrame={this.onNewAnimationFrame.bind(this)}
          />
        </I18nextProvider>
      </Aux>
    );
  }
}

export default AppContainer;