import React, { Component } from 'react';
import classes from './Roadmap.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/fontawesome-free-solid';

class RoadmapDot extends Component {
  render() {
    const { percentStyle, percentComplete, direction } = this.props;
    return (
      <div className={`${classes['roadmap-dot']} ${classes[`roadmap-dot-${direction}`]}`}>
        {percentComplete === 100 &&
          <FontAwesomeIcon size='2x' style={percentStyle} icon={faCheck} />
        }
        {percentComplete < 100 && <p style={percentStyle}>{percentComplete}%</p>}
      </div>
    );
  }
}

export default RoadmapDot;