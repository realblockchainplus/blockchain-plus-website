import React, { Component } from 'react';
import classes from './Roadmap.css';
// import TeamPortrait from '../Team/TeamPortrait';
// import TeamLink from '../Team/TeamLink';
import RoadmapContainer from './RoadmapContainer';

class RoadMap extends Component {
  render() {
    return (
      <div className={`${classes['roadmap']} col-12`}>
        {this.props.content.map((milestone, index) => {
          const direction = index % 2 === 0 ? 'left' : 'right';
          return <RoadmapContainer
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