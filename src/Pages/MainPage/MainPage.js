import React, { Component } from 'react';
import Section from '../../Section/Section';
import Hero from '../../Hero/Hero';
import Particles from 'react-particles-js';
import ScrollReveal from 'scrollreveal';
import { Parallax } from 'react-scroll-parallax';
import classes from './MainPage.css';

class MainPage extends Component {
  constructor() {
    super();
    window.sr = ScrollReveal({ duration: 1000 });
  }
  render() {
    let width = window.innerWidth;
    let numValue = width < 768 ? 10 : 60;
    return (
      <div id={this.props.id} className={`${classes[this.props.id]}`}>
        {this.props.content.map((section, index) => {
          return <Section
            key={index}
            content={section}
          />
        })}
      </div>
    );
  }
}

export default MainPage;