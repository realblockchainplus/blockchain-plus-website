import React, { Component } from 'react';
// import Aux from '../winAux';
import RoadmapDotContainer from './RoadmapDotContainer';
import classes from './Roadmap.css';
import RoadmapSectionContainer from './RoadmapSectionContainer';

class RoadmapContainer extends Component {
  componentDidMount() {
    const element = document.getElementById(`roadmap-${this.props.content.id}`);
    window.sr.reveal(element, {
      mobile: false,
      delay: 0,
      opacity: 0,
      scale: 0.9
    });
  }
  getPercentColor(percent) {
    let h = percent * 1.2;
    let s = 70;
    let l = 70;
    let hsl = `hsl(${h}, ${s}%, ${l}%)`;
    return hsl;
  }
  getAvgPercent() {
    return Math.floor(this.props.content.reduce((a, cv) => { return a + cv.percentComplete; }, 0) / this.props.content.length);
  }
  getAlertClass(percent, month, year) {
    const currentDate = new Date().getTime();
    if ( percent === 100 ) {
      return 'success';
    }
    else if ( currentDate > new Date(year, 1, 1).getTime() ) {
      return 'danger';
    }
    else if ( currentDate < new Date(year, month, 1).getTime()) {
      return 'warning';
    }
  }
  render() {
    const { content, index, direction, lang, id } = this.props;
    const percentComplete = this.getAvgPercent();
    const percentColor = this.getPercentColor(percentComplete);
    const percentStyle = {
      color: percentColor,
      textShadow: `0 0 4px ${percentColor}`
    };
    // const alertClass = this.getAlertClass(percentComplete, month, year);
    const order = direction === 'left' ? 1 : 3;
    const blurredStyle = index >= 4 ? { filter: 'blur(5px)' } : {};
    console.log(blurredStyle);
    return (
      <div className={`${classes['roadmap-container']} row no-gutters`} id={`roadmap-${id}`} style={blurredStyle}>
        <RoadmapDotContainer
          percentStyle={percentStyle}
          percentComplete={percentComplete}
          direction={direction}
          order={order}
        />
        <RoadmapSectionContainer
          content={this.props.content}
          lang={lang}
          index={this.props.index}
          direction={direction}
          order={order}
          id={id}
        />
      </div>
    );
  }
}

export default RoadmapContainer;