import React, { Component } from 'react';
import Aux from '../Aux';
import RoadmapProjection from './RoadmapProjection';
import classes from './Roadmap.css';

class RoadmapSectionContainer extends Component {
  render() {
    const { direction, title, description, quarter, year, order, alertClass } = this.props;
    const spacingOrder = order === 1 ? 3 : 1;
    return (
      <Aux>
        <div className={`${classes['roadmap-section-container']} ${classes[`roadmap-section-container-${direction}`]} col-10 col-md-5 order-md-${order}`}>
          <div className={`${classes['roadmap-section']} px-5 py-4`}>
            <h4>{title}</h4>
            <p>{description}</p>
            <RoadmapProjection
              alertClass={alertClass}
              quarter={quarter}
              year={year}
            />
          </div>
        </div>
        <div className={`order-md-${spacingOrder} col-md-5 d-none d-sm-none d-md-block`}></div>
      </Aux>
    );
  }
}

export default RoadmapSectionContainer;