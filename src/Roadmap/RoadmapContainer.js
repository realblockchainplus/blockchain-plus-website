import React, { Component } from 'react';
// import Aux from '../Aux';
import RoadmapDotContainer from './RoadmapDotContainer';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import { faSpinner, faCheck } from '@fortawesome/fontawesome-free-solid';
import classes from './Roadmap.css';
import RoadmapSectionContainer from './RoadmapSectionContainer';

class RoadmapContainer extends Component {
  componentDidMount() {
    const element = document.getElementById(`roadmap-${this.props.content.id}`);
    window.sr.reveal(element, {
      mobile: false,
      delay: 0,
      opacity: 0,
      scale: 1.2
    });
  }
  getPercentColor(percent) {
    let h = percent * 1.2;
    let s = 70;
    let l = 70;
    let hsl = `hsl(${h}, ${s}%, ${l}%)`;
    return hsl;
  }
  getAlertClass(percent, quarter, year) {
    const quarters = [3, 6, 9, 12];
    const quarterMonth = quarters[quarter];
    const currentDate = new Date().getTime();
    if ( percent === 100 ) {
      return 'success';
    }
    else if ( currentDate > new Date(year, 1, 1).getTime() ) {
      return 'danger';
    }
    else if ( currentDate < new Date(year, quarterMonth, 1).getTime()) {
      return 'warning';
    }
  }
  render() {
    const { content, direction } = this.props;
    const { id, title, description, percentComplete, quarter, year } = content;
    const percentColor = this.getPercentColor(percentComplete);
    const percentStyle = {
      color: percentColor,
      textShadow: `0 0 4px ${percentColor}`
    };
    const alertClass = this.getAlertClass(percentComplete, quarter, year);
    const order = direction === 'left' ? 1 : 3;  
    return (
      <div className={`${classes['roadmap-container']} row no-gutters`} id={`roadmap-${id}`}>
        <RoadmapDotContainer
          percentStyle={percentStyle}
          percentComplete={percentComplete}
          direction={direction}
          order={order}
        />
        <RoadmapSectionContainer
          direction={direction}
          title={title}
          description={description}
          quarter={quarter}
          year={year}
          order={order}
          alertClass={alertClass}
        />
      </div>
    );
  }
}

export default RoadmapContainer;