import React, { Component } from 'react';
import classes from './Roadmap.css';
import Aux from '../winAux';
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
          console.log(milestones);        
          const direction = index % 2 === 0 ? 'left' : 'right';          
          return (
            <Aux key={index}>              
              <RoadmapContainer                
                id={date}
                index={index}
                content={milestones}
                direction={direction}
                lang={this.props.lang}            
              />
              { index === 3 && <h2 style={{ color: 'rgba(245,254,254,1)', textShadow: 'rgba(0, 0, 0, 0.5) -2px 5px 1px' }} className='text-center py-5'>TO BE CONTINUED...</h2> }
            </Aux>
          );
        })}
      </div>
    );
  }
}
export default RoadMap;