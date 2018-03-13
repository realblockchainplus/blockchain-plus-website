import React, { Component } from 'react';
import classes from './Roadmap.css';

class RoadmapSection extends Component {
  render() {
    const { content, direction } = this.props;
    const { id, title, description, teamMember, links } = content;
    return (
      <div className={`${classes['roadmap-container']} row`}>
        <div className={`${classes['roadmap-section-left']} col-6`}>
          {direction === 'left' &&
            <div className={`${classes['roadmap-section']}`}>
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          }
          <div className={`${classes['roadmap-dot']}`}></div>
        </div>
        <div className={`${classes['roadmap-section-right']} col-6`}>
          {direction === 'right' &&
            <div className={`${classes['roadmap-section']}`}>
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default RoadmapSection;