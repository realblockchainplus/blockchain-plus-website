import React, { Component } from 'react';
import Hero from '../Hero/Hero';
import Box from '../Box/Box';
import Accordion from '../Accordion/Accordion';
import RandomNumberContainer from '../RandomNumber/RandomNumberContainer';
import TeamContainer from '../Team/TeamContainer';
import classes from './Section.css';
import WhitepaperSection from '../Whitepaper/WhitepaperSection';
import RoadMap from '../Roadmap/Roadmap';

class SectionBody extends Component {
  render() {
    const { id, content, lang, scrollReveal } = this.props;
    const sectionId = id;
    return (
      <div className={`${classes['section-body']} row`}>
        {sectionId === 'hero' &&
          <Hero
            lang={lang} />
        }
        {content.boxes && 
          content.boxes.map((box, index) => {
            const { id, image, title, link, delay } = box;
            return <Box
              key={index}
              index={index}
              lang={lang[id] || {}}
              sectionId={sectionId}
              id={id}
              image={image}              
              title={title}              
              link={link}
              delay={delay}
              scrollReveal={scrollReveal}
            />
          })
        }
        {content.panels &&
          <Accordion
            content={content.panels}
            lang={lang}
            sectionId={sectionId}
          />
        }
        {sectionId === 'random-number' &&
          <RandomNumberContainer
            lang={lang}
          />
        }
        {content.teamSections &&
          <TeamContainer
            content={content.teamSections}
            lang={lang}
          />
        }
        {sectionId === 'whitepaper' &&
          <WhitepaperSection
            lang={lang}
          />
        }
        {sectionId === 'roadmap' &&
          <RoadMap
            content={content.milestones}
            lang={lang}
          />
        }
      </div>
    );
  }
}

export default SectionBody;