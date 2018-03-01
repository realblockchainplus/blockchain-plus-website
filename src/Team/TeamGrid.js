import React, { Component } from 'react';
import TeamBox from './TeamBox';
import classes from './Team.css';

class TeamGrid extends Component {
  render() {
    const { content, handleMemberSelect } = this.props;
    const { id, title, description, members } = content;
    return (
      <div className={`${classes['team-section']} my-5 container`}>
        <div className={`${classes['team-section-header']} text-center`}>
          <h3>{title}</h3>
          <h5>{description}</h5>
        </div>
        <div className={`${classes['team-section-body']}`}>
          {members.map((member, index) => {
            return <TeamBox
              key={index}
              content={member}
              index={index}
              id={id}
              handleMemberSelect={handleMemberSelect}
            />
          })}
        </div>
      </div>    
    );
  }
}

export default TeamGrid;