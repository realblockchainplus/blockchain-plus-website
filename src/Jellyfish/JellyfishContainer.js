import React, { Component } from 'react';
import Particles from 'react-particles-js';
import JellyfishConsole from './JellyfishConsole';
import classes from './Jellyfish.css';

class JellyfishContainer extends Component {
  componentDidMount() {
    window.addEventListener('animFrame', (ev) => {
      this.props.onNewAnimationFrame(ev.detail.frame);
    });
  }
  render() {
    let width = window.innerWidth;
    let numValue = Math.floor(width / 30);
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
          "type": "circle",
          "stroke": {
            "width": 1,
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
          "value": 2,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 160.3412060865523,
          "color": "#ffffff",
          "opacity": 0.46,
          "width": 1.763753266952075
        },
        "move": {
          "enable": true,
          "speed": 1.5,
          "direction": "top",
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
            "mode": "repulse"
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
      <div style={{ position: 'fixed', width: '100%', height: '100%' }}>
        <Particles
          className={classes.Particles}
          params={params}
        />
        <JellyfishConsole />
        <canvas style={{ position: 'absolute', top: 0 }} id="webgl-canvas"></canvas>
      </div>
    );
  }
}

export default JellyfishContainer;