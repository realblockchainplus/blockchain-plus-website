import React, { Component } from 'react';
import TeamLinks from './TeamLinks';
import classes from './Team.css';

class TeamSingle extends Component {
  render() {
    const { content, setView } = this.props;
    const { firstName, middleName, lastName, jobTitle, image, links } = content;
    const fullName = [firstName, middleName, lastName].join(' ');
    return (
      <div className={`${classes['team-single']} container`}>
        <div className='row py-3'>
          <div className='col-6'>
            <a href='#team' onClick={() => setView('grid')}>Back to grid view</a>
            <h1>{fullName}</h1>
            <h3><span className='badge badge-default'>{jobTitle}</span></h3>
            <TeamLinks
              links={links}
              size={'3x'}
            />
            <div className='card'>
              <div className='card-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. A cras semper auctor neque vitae. Eleifend donec pretium vulputate sapien nec sagittis aliquam. Tempor commodo ullamcorper a lacus vestibulum sed. Mollis aliquam ut porttitor leo a. Nisl pretium fusce id velit ut. Nisl suscipit adipiscing bibendum est ultricies. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Morbi tempus iaculis urna id volutpat lacus. Diam sit amet nisl suscipit adipiscing bibendum est. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Varius morbi enim nunc faucibus. Mi eget mauris pharetra et ultrices neque ornare. Duis ut diam quam nulla porttitor massa. Facilisis sed odio morbi quis commodo odio. Non blandit massa enim nec dui nunc mattis. Leo urna molestie at elementum.</div>
            </div>
          </div>
          <div className='col-6'>
            <img src={image} alt='profile'/>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamSingle;