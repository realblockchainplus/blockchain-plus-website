import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPenSquare } from '@fortawesome/fontawesome-free-solid';
import { faLinkedin, faFacebook, faGithubSquare, faGooglePlusSquare, faBitbucket } from '@fortawesome/fontawesome-free-brands';
import classes from './Team.css';

const typeMap = {
  github: {
    icon: faGithubSquare,
    link: 'https://github.com/$profileId'
  },
  linkedin: {
    icon: faLinkedin,
    link: 'https://linkedin.com/in/$profileId'
  },
  facebook: {
    icon: faFacebook,
    link: 'https://facebook.com/$profileId'
  },
  googlePlus: {
    icon: faGooglePlusSquare,
    link: 'https://plus.google.com/$profileId'
  },
  blog: {
    icon: faPenSquare,
    link: '$profileId'
  },
  bitbucket: {
    icon: faBitbucket,
    link: 'https://bitbucket.org/$profileId'
  }
}

class TeamLink extends Component {
  createLink(type, profileId) {
    return typeMap[type].link.replace('$profileId', profileId);
  }
  render() {
    const { content, size } = this.props;
    const { type, profileId } = content;
    return (
      <div className={`${classes['team-link']}`}>
        <a target='_blank' href={this.createLink(type, profileId)}>
          <FontAwesomeIcon icon={typeMap[type].icon} size={size} />
        </a>
      </div>
    );
  }
}

export default TeamLink;