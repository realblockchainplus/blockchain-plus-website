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
      },
      viewOffset: {
        top: 0,
        right: 100,
        bottom: 0,
        left: 0
      }
    });
  }
  render() {
    return (
      <div className='box-anim col-12 col-md-4' id={`${this.props.category}-${this.props.id}`}>
        <div className={`${classes['box']}`}>
          <BoxImage
            title={this.props.title}
            image={this.props.image}
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