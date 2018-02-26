import React, { Component } from 'react';
import Box from '../Box/Box';
import CarouselContainer from '../Carousel/CarouselContainer';
import Accordion from '../Accordion/Accordion';
import classes from './Section.css';

class SectionBody extends Component {
  render() {
    return (
      <div className={`${classes['section-body']} row`}>
        {this.props.content.boxes && 
          this.props.content.boxes.map((box, index) => {
            const { image, title, description, delay } = box;
            return <Box
              key={index}
              id={`box-${index}`}
              category={this.props.id}
              image={image}
              title={title}
              description={description}
              delay={delay}
              scrollReveal={this.props.scrollReveal}
            />
          })
        }
        {this.props.content.slides &&
          <CarouselContainer
            content={this.props.content.slides}
          />
        }
        {this.props.content.panels &&
          <Accordion
            content={this.props.content.panels}
          />
        }
      </div>
    );
  }
}

export default SectionBody;