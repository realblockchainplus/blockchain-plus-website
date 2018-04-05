import React, { Component } from 'react';
import Aux from '../winAux';
import RoadmapSectionHeader from './RoadmapSectionHeader';
import RoadmapSectionDescription from './RoadmapSectionDescription';
import RoadmapProjection from './RoadmapProjection';
import classes from './Roadmap.css';

class RoadmapSection extends Component {
  render() {
    const { content, lang } = this.props;
    const { title, description } = lang;
    return (
      <Aux>
        <div className={`${classes['roadmap-section']} mx-5 py-2`}>      
          <RoadmapSectionHeader
            title={title}
          />
          { description && <RoadmapSectionDescription
            description={description}
          /> }
          {/* <RoadmapProjection
            alertClass={alertClass}
            quarter={quarter}
            year={year}
            projectionText={projectionText}
          /> */}
        </div>
      </Aux>
    );
  }
}

export default RoadmapSection;