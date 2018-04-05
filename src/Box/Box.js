import React, { Component } from 'react';
import BoxImage from './BoxImage';
import BoxTitle from './BoxTitle';
import BoxDescription from './BoxDescription';
import classes from './Box.css';

class Box extends Component {
  componentDidMount() {
    const element = document.getElementById(this.props.id);
    // if (this.props.delay !== null) {
    //   window.sr.reveal(element, {
    //     mobile: false,
    //     delay: this.props.delay,
    //     rotate: {
    //       x: 0,
    //       y: 90,
    //       z: 0
    //     }
    //   });
    // }
  }
  render() {
    const { image, lang, sectionId, link  } = this.props;
    const { title, description } = lang;
    const benefitBoxClasses = this.props.index <= 2 ? 'col-md-6 col-lg-4' : 'col-md-6';
    const partnerBoxClasses = 'col-md-6';
    const classList = sectionId === 'partners' ? partnerBoxClasses : benefitBoxClasses;
    const box = (
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
    );
    if (link) {
      return (
        <div className={`box-anim col-12 ${classList}`} id={this.props.id}>
          <a href={link} target='_blank'>
            {box}
          </a>
        </div>
      );
    }
    return (
      <div className={`box-anim col-12 ${classList}`} id={this.props.id}>
        {box}
      </div>
    );
  }
}

export default Box;