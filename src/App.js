import React, { Component } from 'react';
import Header from './Header/Header';
import Section from './Section/Section';
import Panel from './Panel/Panel';
import Particles from 'react-particles-js';
import { Parallax } from 'react-scroll-parallax';
import ScrollReveal from 'scrollreveal';

import classes from './App.css';

class App extends Component {
  constructor() {
    super();
    window.sr = ScrollReveal({ duration: 1000 });
  }
  state = {
    direction: '',
    lastScrollPos: 0,
    navItems: [
      {
        name: 'Home',
        id: 'home'
      },
      {
        name: 'Overview',
        id: 'overview'
      },
      {
        name: 'Key Concepts',
        id: 'key-concepts'
      },
      {
        name: 'FAQ',
        id: 'faq'
      },
      {
        name: 'Contact',
        id: 'contact'
      },
    ],
    sections: {
      overview: {
        header: null,
        body: {
          boxes: [
            {
              image: 'lock.svg',
              title: 'Information Privacy',
              description: 'Unlike Blockchain, information is not stored on every node but instead only on participating nodes.'
            },
            {
              image: 'couple.svg',
              title: 'Small Business First',
              description: 'Practical and useful ledger system for transactional purposes.'
            },
            {
              image: 'racing.svg',
              title: 'Cutting Transaction Speed',
              description: 'Parallel transaction happens between transactional nodes, so there is no centralized blockchain.'
            }
          ],
          delays: [0, 500, 250]
        }
      },
      keyConcepts: {
        header: {
          title: 'Key Concepts',
          description: 'Innovative concepts are what make BlockChain+ possible. Discussed in detail with a research paper, the following is an overview!'
        },
        body: {
          boxes: [
            {
              image: 'connect.svg',
              title: 'Information not stored "everywhere"',
              description: 'Transactional information such as sender / receiver and amount is only stored on participating nodes, enabling both security and speed.'
            },
            {
              image: 'creativity.svg',
              title: 'Random Number Teleportation',
              description: 'Innovative concept of random number teleportation is used to generate the same random number on all nodes without transmitting to each other.'
            },
            {
              image: 'link.svg',
              title: 'Witness and partner Nodes',
              description: 'Randomly selected witness and partner nodes are used in typical transactions for validation and execution purposes.'
            },
            {
              image: 'network-lock.svg',
              title: 'Mitigated Risk and Security Considerations',
              description: 'Discussed in detail, Blockchain+ made it very hard for hacker nodes to execute fraudulent transactions.'
            },
            {
              image: 'flame.svg',
              title: 'Fast Transaction Execution Speed',
              description: 'Parallel transactions happen on the Blockchain+ network, making execution speeds faster without compromising security concerns.'
            },
            {
              image: 'couple.svg',
              title: 'Small Business-Focused Operation',
              description: 'At its heart, BlockChain+ overcomes the problems faced by open blockchains (Bitcoin, etc.) to make it useful for businesses to use this technology for their ledger system.'
            }
          ],
          delays: [0, 0, 0, 500, 500, 500]
        }
      }
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', (ev) => {
      let lastScrollPos = this.state.lastScrollPos;
      let newScrollPos = document.documentElement.scrollTop;
      let direction = '';
      if (lastScrollPos < newScrollPos) {
        direction += 'down';
      }
      else {
        direction += 'up';
      }
      this.setState({
        direction,
        lastScrollPos: newScrollPos
      });
    });
  };

  render() {
    let width = window.innerWidth;
    let numValue = width < 768 ? 10 : 80;
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
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0,
            "sync": false
          }
        },
        "size": {
          "value": 5,
          "random": true,
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
          "speed": 0.5,
          "direction": "none",
          "random": true,
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
            "enable": true,
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
    const particlesStyle = {
      backgroundImage: 'url(world_map.svg)',
      backgroundSize: 'cover'
    };
    return (
      <div id='app' className={classes.App}>
        <Header
          scrollTop={this.state.lastScrollPos}
          content={this.state.navItems}
        />
        <Parallax
          className={classes.parallax}
          offsetYMax={1000}
          offsetYMin={-1000}
          slowerScrollRate={true}
          tag="div"
        >
          <Particles
            params={params}
            style={particlesStyle}
          />
        </Parallax>
        <Panel />
        <Section
          id={'overview'}
          category={'overview'}
          content={this.state.sections.overview}
          backgroundColor={'#F2FEFE'}
        />
        <div className={`${classes['section']} py-5`} id="sectionThree" style={{ color: 'white', backgroundColor: "rgba(0,0,0,0.25)" }}>
          <div className='container'>
            <div className='row no-gutters'>
              <div className='col-12 col-sm-6'>
                <h2>Public Blockchain With Benefits</h2>
                <p>Blockchain+ inherits the best from both public and private-based 
                Blockchain architecture. The ledger function is easy to implement for 
                small to enterprise-level firms and can provide security and transparency</p>
              </div>
              <div className='col-12 col-sm-6'>
                <div className={`${classes['carousel-img-container']} text-center`}>
                  <img src='1.png'/>
                </div>
                <div className={`${classes['carousel-img-container']} text-center`}>
                  <img src='2.png'/>
                </div>
              </div>
            </div>
            <div className='row'>
            </div>
          </div>
        </div>
        <Section
          id={'key-concepts'}
          category={'key-concepts'}
          content={this.state.sections.keyConcepts}
          backgroundColor={'#F2FEFE'}
        />
        <div className="modal fade" tabIndex="-1" role="dialog" id="investorModal">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">Save changes</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
