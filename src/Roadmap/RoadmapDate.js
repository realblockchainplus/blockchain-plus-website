import React, { Component } from 'react';
import { translate } from 'react-i18next';
import classes from './Roadmap.css';

class RoadmapDate extends Component {
  getMonthYear() {
    const { id } = this.props;
    return id.split('-');
  }
  render() {
    const { t, direction } = this.props;
    const [ month, year ] = this.getMonthYear();
    return (
      <div className={`${classes['roadmap-date']} ${classes[`roadmap-date-${direction}`]}`}>
        <h4 className={`p-2 float-${direction}`}>{t(`months.${month}.full`)} {year}</h4>
      </div>
    );
  }
}

export default translate()(RoadmapDate);