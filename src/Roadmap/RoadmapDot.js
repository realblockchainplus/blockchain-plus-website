import React, { Component } from 'react';
import classes from './Roadmap.css';
import Aux from '../winAux';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

class RoadmapDot extends Component {
  render() {
    const { percentStyle, percentComplete, direction } = this.props;
    return (
      <Aux>        
        <div className={`${classes['roadmap-dot']} ${classes[`roadmap-dot-${direction}`]}`}>
          {percentComplete === 100 &&
            <FontAwesomeIcon size='2x' style={percentStyle} icon={faCheck} />
          }
          {percentComplete === 0 &&
            <FontAwesomeIcon size='2x' style={percentStyle} icon={faTimes} />
          }
          {percentComplete < 100 && percentComplete > 0 && <p style={percentStyle}>{percentComplete}%</p>}
        </div>
      </Aux>
    );
  }
}

export default RoadmapDot;