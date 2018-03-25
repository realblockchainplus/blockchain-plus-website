import React, { Component } from 'react';
import Section from '../../Section/Section';
import Hero from '../../Hero/Hero';
import Particles from 'react-particles-js';
import ScrollReveal from 'scrollreveal';
// import { Parallax } from 'react-scroll-parallax';
import classes from './MainPage.css';

class MainPage extends Component {
  constructor() {
    super();
    window.sr = ScrollReveal({ duration: 1000 });
  }
  componentDidMount() {
    // const element = document.getElementById(this.props.id);
    // window.sr.reveal(element, {
    //   reset: true,
    //   mobile: false,
    //   delay: 100,
    //   viewFactor: 0
    // });
  }

  render() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    // let numValue = width < 992 ? 10 : 60;
    return (
      <div id={this.props.id} className={`${classes[this.props.id]}`}>
        <Hero 
          lang={this.props.lang.hero}
          style={{ height, width }}
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