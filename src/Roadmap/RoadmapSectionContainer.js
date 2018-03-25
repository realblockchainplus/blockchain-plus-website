import React, { Component } from 'react';
import Aux from '../Aux';
import RoadmapSection from './RoadmapSection';
import classes from './Roadmap.css';
import RoadmapProjection from './RoadmapProjection';
import RoadmapDate from './RoadmapDate';

class RoadmapSectionContainer extends Component {
  render() {
    const { lang, direction, order, id } = this.props;
    const oppositeDirection = direction === 'left' ? 'right' : 'left';
    const spacingOrder = order === 1 ? 3 : 1;
    return (
      <Aux>
        <div className={`${classes['roadmap-section-container']} ${classes[`roadmap-section-container-${direction}`]} col-10 col-lg-5 order-lg-${order}`}>
          <RoadmapDate
            id={id}
            direction={oppositeDirection}
          />
          {this.props.content.map((milestone, index) => {
            return <RoadmapSection
              key={index}
              content={milestone}
              lang={lang[this.props.index + index]}
            />
          })}
        </div>
        <div className={`order-lg-${spacingOrder} col-lg-5 d-none d-sm-none d-md-none d-lg-block`}></div>
      </Aux>
    );
  }
}

export default RoadmapSectionContainer;