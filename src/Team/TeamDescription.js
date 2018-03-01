import React, { Component } from 'react';
import classes from './Team.css';

class TeamDescription extends Component {
  render() {
    return (
      <div className={`${classes['team-description']} card`}>
        <p className='m-0 p-2'>{this.props.description}</p>
      </div>
    );
  }
}

export default TeamDescription;