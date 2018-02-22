import React, { Component } from 'react';
import BoxImage from './BoxImage';
import BoxTitle from './BoxTitle';
import BoxDescription from './BoxDescription';
import ScrollReveal from 'scrollreveal';
import classes from './Box.css';

class Box extends Component {
  componentDidMount() {
    const element = document.getElementById(`${this.props.category}-${this.props.id}`);
    window.sr.reveal(element, { delay: this.props.delay });
  }
  render() {
    return (
      <div className='box-anim col-12 col-md-4' id={`${this.props.category}-${this.props.id}`}>
        <div className={`${classes['box']}`}>
          <BoxImage
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