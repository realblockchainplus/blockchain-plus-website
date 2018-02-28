import React, { Component } from 'react';
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
    const fullName = [title, firstName, middleName, lastName].join(' ');
    const placeholderDesc = `This is the description of ${fullName} the ${jobTitle}`;
    return (
      <div className={`${classes['team-box']} col-6 col-md-3 text-center`}>
        <a href='#team' onClick={() => {handleMemberSelect(id, index)}}>
          <div className={`${classes['team-portrait']}`}>
            <img src={image} />
            <h4>{fullName}</h4>
          </div>
        </a>
        <div className={`${classes['team-links']}`}>
          {links.map((link, index) => {
            return <p>{link}</p>
          })}
        </div>
      </div>
    );
  }
}

export default TeamBox;