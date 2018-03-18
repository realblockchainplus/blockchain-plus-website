import React, { Component } from 'react';
import Hero from '../Hero/Hero';
import Box from '../Box/Box';
import CarouselContainer from '../Carousel/CarouselContainer';
import Accordion from '../Accordion/Accordion';
import RandomNumberContainer from '../RandomNumber/RandomNumberContainer';
import TeamContainer from '../Team/TeamContainer';
import classes from './Section.css';
import WhitepaperSection from '../Pages/Whitepaper/WhitepaperSection';
import RoadMap from '../Roadmap/Roadmap';

class SectionBody extends Component {
  render() {
    return (
      <div className={`${classes['section-body']} row`}>
        {this.props.id === 'hero' &&
          <Hero />
        }
        {this.props.content.boxes && 
          this.props.content.boxes.map((box, index) => {
            const { image, imageType, title, description, delay } = box;
            return <Box
              key={index}
              index={index}
              id={`box-${index}`}
              category={this.props.id}
              image={image}
              imageType={imageType}
              title={title}
              description={description}
              delay={delay}
              scrollReveal={this.props.scrollReveal}
            />
          })
        }
        {/* {this.props.content.slides &&
          <CarouselContainer
            content={this.props.content.slides}
          />
        } */}
        {this.props.content.panels &&
          <Accordion
            content={this.props.content.panels}
          />
        }
        {this.props.id === 'random-number' &&
          <RandomNumberContainer />
        }
        {this.props.content.teamSections &&
          <TeamContainer 
            content={this.props.content.teamSections}
          />
        }
        {this.props.content.partners &&
          this.props.content.partners.map((partner, index) => {
            const { name, image } = partner;
            return <Box
              key={index}
              id={`partner-${index}`}
              name={name}
              image={image}
              scrollReveal={this.props.scrollReveal}
            />
          })
        }
        {this.props.id === 'whitepaper' &&
          <WhitepaperSection />
        }
        {this.props.id === 'roadmap' &&
          <RoadMap
            content={this.props.content.milestones}
          />
        }
      </div>
    );
  }
}

export default SectionBody;