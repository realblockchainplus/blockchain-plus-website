import React, { Component } from 'react';
import classes from './Roadmap.css';
import RoadmapDot from './RoadmapDot';
import RoadmapDotConnector from './RoadmapDotConnector';

class RoadmapDotContainer extends Component {
  render() {
    const { percentStyle, percentComplete, direction } = this.props;
    return (
      <div className={`${classes['roadmap-dot-container']} col-2 order-md-2`}>
        <RoadmapDot
          percentStyle={percentStyle}
          percentComplete={percentComplete}
          direction={direction}
        />
        <RoadmapDotConnector />
      </div>
    );
  }
}

export default RoadmapDotContainer;