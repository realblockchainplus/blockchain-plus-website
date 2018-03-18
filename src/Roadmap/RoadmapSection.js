import React, { Component } from 'react';
import Aux from '../Aux';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSpinner, faCheck } from '@fortawesome/fontawesome-free-solid';
import classes from './Roadmap.css';

class RoadmapSection extends Component {
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
    const { id, title, description, teamMember, percentComplete, quarter, year } = content;
    const percentColor = this.getPercentColor(percentComplete);
    const percentStyle = {
      color: percentColor,
      textShadow: `0 0 4px ${percentColor}`
    };
    const alertClass = this.getAlertClass(percentComplete, quarter, year);
    return (
      <div className={`${classes['roadmap-container']} row no-gutters my-5`}>
        <div className={`${classes['roadmap-dot-container']} col-2 order-md-2`}>
          <div className={`${classes['roadmap-dot']}`}>
            {percentComplete === 100 && 
              <FontAwesomeIcon size='2x' style={percentStyle} icon={faCheck}/>
            }
            {percentComplete < 100 && <p style={percentStyle}>{percentComplete}%</p>}
          </div>
          <div className={`${classes['roadmap-dot-connector']}`}></div>
        </div>
        {direction === 'left' &&
          <Aux> 
            <div className={`${classes['roadmap-section-container-left']} col-10 col-md-5 order-md-1`}>          
                <div className={`${classes['roadmap-section']} ${classes['roadmap-section-left']} ${classes['left']} p-5`}>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>          
            </div>
            <div className='order-md-3 col-md-5 d-none d-sm-none d-md-block'></div>
            {/* <div className='order-md-3 col-md-5'>
              <div className={`${classes['projection']} alert alert-${alertClass} mr-auto`}>
                {`Estimated Completion Time: Q${quarter} ${year}`}
              </div>
            </div> */}
          </Aux>
        }
        {direction === 'right' &&
          <Aux>
            {/* <div className={`${classes['projection']} alert alert-${alertClass} ml-auto`}>
                {`Estimated Completion Time: Q${quarter} ${year}`}
              </div>
            </div> */}
            <div className='order-md-1 col-md-5 d-none d-sm-none d-md-block'></div>
            <div className={`${classes['roadmap-section-container-right']} col-10 col-md-5 order-md-3`}>            
              <div className={`${classes['roadmap-section']}  ${classes['roadmap-section-right']} ${classes['right']} p-5`}>
                <h4>{title}</h4>
                <p>{description}</p>
              </div>         
            </div>
          </Aux>
        }
      </div>
    );
  }
}

export default RoadmapSection;