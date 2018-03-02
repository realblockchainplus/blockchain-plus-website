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
    const params = {
      "particles": {
        "number": {
          "value": numValue,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "image",
          "stroke": {
            "width": 0,
            "color": "#ffffff"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "blockchainplus_logo.png"
          }
        },
        "opacity": {
          "value": 1,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0,
            "sync": false
          }
        },
        "size": {
          "value": 5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 160.3412060865523,
          "color": "#ffffff",
          "opacity": 0.46,
          "width": 1.763753266952075
        },
        "move": {
          "enable": true,
          "speed": 1.5,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "bubble"
          },
          "onclick": {
            "enable": false,
            "mode": "repulse"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 350,
            "size": 10,
            "duration": 0,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    };
    return (
      <div className={`${classes['main-page']}`} style={{ ...this.props.style }}>
        <Parallax
          className={classes.parallax}
          offsetYMax={3000}
          offsetYMin={-3000}
          slowerScrollRate={true}
          tag="div"
        >
          <Particles
            params={params}
          />
          {/* <div id='bm' className={classes.bodymovin}></div> */}
          <img src='jellyfish_constellation.png' alt='jellyfish constellation'/>
        </Parallax>
        <Hero />
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