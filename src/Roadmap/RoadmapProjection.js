import React, { Component } from 'react';
import classes from './Roadmap.css';

class RoadmapProjection extends Component {
  render() {
    const { projectionText, alertClass, quarter, year } = this.props;
    return (
      <div className={`${classes['projection']} alert alert-${alertClass}`}>
        {`${projectionText}: Q${quarter} ${year}`}
      </div>
    );
  }
}

export default RoadmapProjection;