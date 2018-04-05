import React, { Component } from 'react';
import Aux from '../winAux';
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
        <div style={{ marginTop: '22.5px' }} className={`col-10 col-lg-5 order-lg-${order}`}>
          <RoadmapDate
            id={id}
            direction={oppositeDirection}
          />
          <div className={`${classes['roadmap-section-container']} ${classes[`roadmap-section-container-${direction}`]}`}> 
            {this.props.content.map((milestone, index) => {
              console.log(this.props.index, index);            
              return <RoadmapSection
                key={index}
                content={milestone}
                lang={lang.milestones[milestone.id]}
              />
            })}
          </div>
        </div>
        <div className={`order-lg-${spacingOrder} col-lg-5 d-none d-sm-none d-md-none d-lg-block`}></div>
      </Aux>
    );
  }
}

export default RoadmapSectionContainer;