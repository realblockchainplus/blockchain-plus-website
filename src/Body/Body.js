import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import MainPage from '../Pages/MainPage/MainPage';
// import Whitepaper from '../Pages/Whitepaper/Whitepaper';
// import diff from 'deep-diff';
// import Fade from '../Transitions/Fade';
import classes from './Body.css';
import Whitepaper from '../Pages/WhitepaperPage/Whitepaper';
import CrowdsalePage from '../Pages/CrowdsalePage/CrowdsalePage';
import Presentation from '../Pages/PresentationPage/Presentation';

// const duration = 300;

class Body extends Component {
  componentDidMount() {
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Body] updated');
    return true;
  }
  render() {
    console.log('[Body] render called');
    return (
      <div className={`${classes['body']}`} style={this.props.style}>
        <Switch
          key={this.props.location.key}
          location={this.props.location}
        >
          <Route path='/' exact
            render={() => {
              return <MainPage
                id='main-page'
                content={this.props.content}
                lang={this.props.lang}
              />
            }}
          />
          <Route path='/crowdsale'
            render={() => {
              return <CrowdsalePage
                id='crowdsale'
                content={this.props.content}
              />
            }}
          />
          <Route path='/whitepaper'
            component={() => {
              window.location = 'https://s3-us-west-2.amazonaws.com/blockchainplus-whitepaper/blockchainplus_whitepaper.pdf';
            }}
          />
          <Route path='/presentation'
            component={() => {
              window.location = 'https://s3-us-west-2.amazonaws.com/blockchainplus-whitepaper/blockchainplus_presentation.pdf';
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Body);