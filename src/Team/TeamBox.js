import React, { Component } from 'react';
import TeamPortrait from './TeamPortrait';
import TeamLinks from './TeamLinks';
import TeamDescription from './TeamDescription';
import classes from './Team.css';

class TeamBox extends Component {
  componentDidMount() {
    // const element = document.getElementById(`${this.props.category}-${this.props.id}`);
    // window.sr.reveal(element, {
    //   mobile: false,
    //   delay: this.props.delay,
    //   rotate: {
    //     x: 0,
    //     y: 90,
    //     z: 0
    //   },
    //   viewOffset: {
    //     top: 0,
    //     right: 100,
    //     bottom: 0,
    //     left: 0
    //   }
    // });
  }
  render() {
    const { content, index, id, handleMemberSelect } = this.props;
    const { firstName, middleName, lastName, title, jobTitle, description, image, links } = content;
    const fullName = [title, firstName, middleName, lastName].filter(name => name !== null).join(' ');
    return (
      <div className={`${classes['team-box']} px-2 my-3 text-center`}>
        <TeamPortrait
          id={id}
          index={index}
          name={fullName}
          image={image}
          jobTitle={jobTitle}
          handleMemberSelect={handleMemberSelect}
        />
        <TeamLinks
          links={links}
          size={'2x'}
        /> 
        <TeamDescription
          description={description}
        />
      </div>
    );
  }
}

export default TeamBox;