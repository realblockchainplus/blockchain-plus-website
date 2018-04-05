import React, { Component } from 'react';
import LoadingScreen from './LoadingScreen/LoadingScreen';
import App from './App';
import Aux from './winAux';
// import { ParallaxProvider } from 'react-scroll-parallax';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationFrame: 0,
      animationLoaded: false
    };

    this.onNewAnimationFrame =  this.onNewAnimationFrame.bind(this);
  }

  componentDidMount() {
    // document.documentElement.style.overflow = 'visible';
    // document.body.style.overflow = 'visible';
    // if (process.env.NODE_ENV === 'development') { this.killLoadingScreen(); }
    // setTimeout(() => {
    //   this.killLoadingScreen();
    // }, 2000);
  }
  
  onNewAnimationFrame(frame) {   
    // this.setState({ animationFrame: frame }, () => {
    //   if (this.state.animationLoaded === false && this.state.animationFrame >= 130) {        
    //     this.killLoadingScreen();
    //   }
    // });
  }
  killLoadingScreen() {
    // document.getElementById('loading-screen').style.display = 'none';
    // document.documentElement.style.overflow = 'visible';
    // document.body.style.overflow = 'visible';
    // window.drift.show();
    // this.setState({ animationLoaded: true });
  }
  render() {
    return (
      <Aux>
        {/* { this.state.animationLoaded === false && <LoadingScreen frame={this.state.animationFrame} /> } */}
        <I18nextProvider i18n={ i18n } initialLanguage='en'>
          <App             
            animationLoaded={this.state.animationLoaded}
            onNewAnimationFrame={this.onNewAnimationFrame}
          />
        </I18nextProvider>
      </Aux>
    );
  }
}

export default AppContainer;