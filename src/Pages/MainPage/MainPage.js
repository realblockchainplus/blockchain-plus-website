import React, { Component } from 'react';
import Section from '../../Section/Section';
import Hero from '../../Hero/Hero';
// import { Parallax } from 'react-scroll-parallax';
import classes from './MainPage.css';

class MainPage extends Component {
  componentDidMount() {
    console.log('[Main Page] mounted');
  }

  render() {
    return (
      <div id={this.props.id} className={`${classes[this.props.id]}`}>
        <Hero 
          lang={this.props.lang.hero}
        />
        {this.props.content.map((section, index) => {
          const lang = this.props.lang[section.id];
          return <Section
            key={index}
            content={section}
            lang={lang}        
          />
        })}
      </div>
    );
  }
}

export default MainPage;