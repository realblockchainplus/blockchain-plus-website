import React, { Component } from 'react';
import BoxImage from './BoxImage';
import BoxTitle from './BoxTitle';
import BoxDescription from './BoxDescription';
import classes from './Box.css';

class Box extends Component {
  componentDidMount() {
    const element = document.getElementById(`${this.props.category}-${this.props.id}`);
    window.sr.reveal(element, {
      mobile: false,
      delay: this.props.delay,
      rotate: {
        x: 0,
        y: 90,
        z: 0
      }
    });
  }
  render() {
    const classList = this.props.index <= 2 ? 'col-md-6 col-lg-4' : 'col-md-6';
    return (
      <div className={`box-anim col-12 ${classList}`} id={`${this.props.category}-${this.props.id}`}>
        <div className={`${classes['box']}`}>
          <BoxImage
            title={this.props.title}
            image={this.props.image}
            imageType={this.props.imageType}
          />
          <BoxTitle
            title={this.props.title}
          />
          <BoxDescription
            description={this.props.description}
          />
        </div>
      </div>
    );
  }
}

export default Box;