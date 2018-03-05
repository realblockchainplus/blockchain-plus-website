import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './AppContainer';
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const app = (
  <ParallaxProvider>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </ParallaxProvider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
