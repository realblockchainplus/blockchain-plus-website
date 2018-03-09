import React, { Component } from 'react';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import MainPage from '../Pages/MainPage/MainPage';
import Whitepaper from '../Pages/Whitepaper/Whitepaper';
import Particles from 'react-particles-js';
import { Parallax } from 'react-scroll-parallax';
// import diff from 'deep-diff';
import { AnimatedSwitch } from 'react-router-transition';
// import Fade from '../Transitions/Fade';
import classes from './Body.css';

const duration = 300;

const defaultStyle = {
  transition: `all ${duration}ms`,
	transformStyle: 'preserve-3d'
};

const transitionStyles = {
  entering: { 
    transform: 'rotateX(-90deg) translateZ(-50px)'
  },
  entered: {
    transform: 'translateZ(50px)',
  },
  exiting: {
    transform: 'rotateX(90deg) translateZ(50px)'
  },
  exited: {
    transform: 'translateZ(-50px)',
  },
};

class Body extends Component {
  componentDidMount() {
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  render() {
    return (
      <div className={`${classes['body']}`}>
        <Switch
          key={this.props.location.key}
          location={this.props.location}
        >
          <Route path='/' exact
            render={() => {
              return <MainPage
                id='main-page'
                content={this.props.content}
              />
            }}
          />
          <Route path='/whitepaper'
            render={() => {
              return <Whitepaper
                id='whitepaper'
                content={this.props.content}
              />
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Body);