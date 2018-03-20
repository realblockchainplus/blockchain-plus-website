import React, { Component } from 'react';
import classes from './Roadmap.css';

class RoadmapProjection extends Component {
  render() {
    const { alertClass, quarter, year } = this.props;
    return (
      <div className={`${classes['projection']} alert alert-${alertClass}`}>
        {`Estimated Completion Time: Q${quarter} ${year}`}
      </div>
    );
  }
}

export default RoadmapProjection;