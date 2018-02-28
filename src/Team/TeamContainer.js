import React, { Component } from 'react';
import TeamGrid from './TeamGrid';
import TeamSingle from './TeamSingle';
import classes from './Team.css';

class TeamContainer extends Component {
  state = {
    view: 'grid',
    sectionId: null,
    memberId: null
  }
  setSingleId(sectionId, memberId) {
    this.setState({ sectionId, memberId });
    this.setView('single');
  }
  setView(view) {
    this.setState({ view });
  }
  render() {
    return (
      <div className={`${classes['team-container']}`}>
        {this.state.view === 'grid' && 
          this.props.content.map((section, index) => {
            return <TeamGrid
              key={index}
              content={section}
              index={index}
              handleMemberSelect={(sectionId, memberId) => this.setSingleId(sectionId, memberId)}
            />
          })}
          {this.state.view === 'single' &&
            this.props.content.map((section, index) => {
              if (section.id === this.state.sectionId) {
                const member = section.members[this.state.memberId];
                return <TeamSingle
                  content={member}
                  setView={(view) => this.setView(view)}
                />
              }
            })
          }
      </div>
    );
  }
}

export default TeamContainer;