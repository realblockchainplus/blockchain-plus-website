import React, { Component } from 'react';
import classes from './Team.css';

class TeamPortrait extends Component {
  render() {
    const { id, name, jobTitle } = this.props;
    let ext = 'jpg';
    if (id === 'scott-donnelly' || id === 'sophia-wall') {
      ext = 'svg';
    }
    return (
      <div className={`${classes['team-portrait']} my-1`}>
        {/* <a href='#team' onClick={() => {handleMemberSelect(id, index)}}> */}
          <div className={`${classes['team-portrait-img-container']} my-3 mx-auto`}>
            <img src={`${id}_headshot.${ext}`} alt='profile' />
          </div>
          {name && <h4>{name}</h4>}
          {jobTitle && <small>{jobTitle}</small>}
        {/* </a> */}
      </div>
    );
  }
}

export default TeamPortrait;