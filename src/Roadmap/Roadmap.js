import React, { Component } from 'react';
import classes from './Roadmap.css';
import TeamPortrait from '../Team/TeamPortrait';
import TeamLink from '../Team/TeamLink';
import RoadmapSection from './RoadmapSection';

class RoadMap extends Component {
  render() {
    return (
      <div className={`${classes['roadmap']}`}>
        {this.props.content.map((milestone, index) => {
          const direction = index % 2 === 0 ? 'right' : 'left';
          return <RoadmapSection
            key={index}
            content={milestone}
            direction={direction}
          />
        })}
      </div>
    );
  }
}
export default RoadMap;