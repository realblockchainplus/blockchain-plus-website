import React, { Component } from 'react';
import Box from '../Box/Box';
import classes from './Section.css';

class SectionBody extends Component {
  render() {
    return (
      <div className={`${classes['section-body']} row`}>
        {this.props.content.boxes.map((box, index) => {
          const { image, title, description } = box;
          return <Box
            key={index}
            id={`box-${index}`}
            delay={this.props.content.delays[index]}
            category={this.props.category}
            image={image}
            title={title}
            description={description}
            scrollReveal={this.props.scrollReveal}
          />
        })}
      </div>
    );
  }
}

export default SectionBody;