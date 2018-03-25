import React, { Component } from 'react';
import classes from './Roadmap.css';
// import TeamPortrait from '../Team/TeamPortrait';
// import TeamLink from '../Team/TeamLink';
import RoadmapContainer from './RoadmapContainer';

class RoadMap extends Component {
  groupByDate() {
    let dateObj = {};
    for (let i = 0; i < this.props.content.length; i++) {
      let milestone = this.props.content[i];
      milestone.id = i;
      let dateString = `${milestone.month}-${milestone.year}`;
      if (dateObj.hasOwnProperty(dateString)) {
        dateObj[dateString].push(milestone);
      }
      else {
        dateObj[dateString] = [milestone];
      }
    }
    return dateObj;
  }
  render() {
    let dates = this.groupByDate();
    return (
      <div className={`${classes['roadmap']} col-12`}>
        {Object.keys(dates).map((date, index) => {
          const milestones = dates[date];          
          const direction = index % 2 === 0 ? 'left' : 'right';
          return <RoadmapContainer
            key={index}
            id={date}
            content={milestones}
            index={index}
            direction={direction}
            lang={this.props.lang}            
          />
        })}
      </div>
    );
  }
}
export default RoadMap;