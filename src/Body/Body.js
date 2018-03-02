import React, { Component } from 'react';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import MainPage from '../Pages/MainPage/MainPage';
import Whitepaper from '../Pages/Whitepaper/Whitepaper';
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
  render() {
    console.log(this.props);
    return (
      <div className={`${classes['body']}`}>
        <TransitionGroup>
          <CSSTransition
            appear
            classNames="fade"
            timeout={duration}
          >
            <Switch key={this.props.location.key} location={this.props.location}>
              <Route path='/' exact
                render={() => {
                  return <MainPage 
                    content={this.props.content}
                  />
                }}
              />
              <Route path='/whitepaper'
                render={() => {
                  return <Whitepaper />
                }}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default withRouter(Body);