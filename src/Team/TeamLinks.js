import React, { Component } from 'react';
import TeamLink from './TeamLink';
import classes from './Team.css';

class TeamLinks extends Component {
  render() {
    const { links, size } = this.props;
    return (
      <div className={`${classes['team-links']}`}>
        {Object.keys(links).map((key, index) => {
          const link = {
            type: key,
            profileId: links[key]
          };
          if (link.profileId !== null) {
            return <TeamLink
              key={index}
              index={index}
              content={link}
              size={size}
            />
          }
        })}
      </div>
    );
  }
}

export default TeamLinks;