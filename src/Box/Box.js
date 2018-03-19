import React, { Component } from 'react';
import BoxImage from './BoxImage';
import BoxTitle from './BoxTitle';
import BoxDescription from './BoxDescription';
import { translate } from 'react-i18next';
import classes from './Box.css';

class Box extends Component {
  componentDidMount() {
    const element = document.getElementById(this.props.id);
    if (this.props.delay !== null) {
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
  }
  render() {
    const { id, sectionId, image, lang  } = this.props;
    const { title, description } = lang;

    const classList = this.props.index <= 2 ? 'col-md-6 col-lg-4' : 'col-md-6';
    return (
      <div className={`box-anim col-12 ${classList}`} id={this.props.id}>
        <div className={`${classes['box']}`}>
          <BoxImage
            title={title}
            image={image}
          />
          <BoxTitle
            title={title}
          />
          <BoxDescription
            description={description}
          />
        </div>
      </div>
    );
  }
}

export default Box;