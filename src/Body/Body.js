import React, { Component } from 'react';
// import { Route, Switch, withRouter } from 'react-router-dom';
import MainPage from '../Pages/MainPage/MainPage';
// import Whitepaper from '../Pages/Whitepaper/Whitepaper';
// import diff from 'deep-diff';
// import Fade from '../Transitions/Fade';
import classes from './Body.css';

// const duration = 300;

class Body extends Component {
  componentDidMount() {
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  render() {
    console.log('[Body] render called');
    return (
      <div className={`${classes['body']}`} style={this.props.style}>
        {/* <Switch
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
        </Switch> */}
        <MainPage
          id='main-page'
          content={this.props.content}
          lang={this.props.lang}
        />
      </div>
    );
  }
}

export default Body;