import React, { Component } from 'react';
import Image from 'react';
import Header from './Header/Header';
import Section from './Section/Section';
import Panel from './Panel/Panel';
import Box from './Box/Box';
import Particles from 'react-particles-js';
import { Parallax } from 'react-scroll-parallax';
import ScrollReveal from 'scrollreveal';

import classes from './App.css';

class App extends Component {
  state = {
    direction: '',
    lastScrollPos: 0,
    navItems: [
      {
        name: 'Home',
        href: ''
      },
      {
        name: 'Overview',
        href: 'overview'
      },
      {
        name: 'Key Concepts',
        href: 'key-concepts'
      },
      {
        name: 'FAQ',
        href: 'faq'
      },
      {
        name: 'Contact',
        href: 'contact'
      },
    ],
    overview: [
      {
        image: 'lock.svg',
        header: 'Information Privacy',
        text: 'Unlike Blockchain, information is not stored on every node but instead only on participating nodes.'
      },
      {
        image: 'couple.svg',
        header: 'Small Business First',
        text: 'Practical and useful ledger system for transactional purposes.'
      },
      {
        image: 'racing.svg',
        header: 'Cutting Transaction Speed',
        text: 'Parallel transaction happens between transactional nodes, so there is no centralized blockchain.'
      }
    ],
    keyConcepts: [
      {
        image: 'connect.svg',
        header: 'Information not stored "everywhere"',
        text: 'Transactional information such as sender / receiver and amount is only stored on participating nodes, enabling both security and speed.'
      },
      {
        image: 'creativity.svg',
        header: 'Random Number Teleportation',
        text: 'Innovative concept of random number teleportation is used to generate the same random number on all nodes without transmitting to each other.'
      },
      {
        image: 'link.svg',
        header: 'Witness and Guarantor Nodes',
        text: 'Randomly selected witness and guarantor nodes are used in typical transactions for validation and execution purposes.'
      },
      {
        image: 'network-lock.svg',
        header: 'Mitigated Risk and Security Considerations',
        text: 'Discussed in detail, Blockchain+ made it very hard for hacker nodes to execute fraudulent transactions.'
      },
      {
        image: 'flame.svg',
        header: 'Fast Transaction Execution Speed',
        text: 'Parallel transactions happen on the Blockchain+ network, making execution speeds faster without compromising security concerns.'
      },
      {
        image: 'online-store.svg',
        header: 'Small Business-Focused Operation',
        text: 'At its heart, BlockChain+ overcomes the problems faced by open blockchains (Bitcoin, etc.) to make it useful for businesses to use this technology for their ledger system.'
      }
    ]
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

    window.sr = ScrollReveal({ duration: 1000 });
    const overviewDelays = [0, 500, 250];
    const keyConceptDelays = [0, 0, 0, 500, 500, 500];
    for (let i = 0; i < this.state.overview.length; i++) {
      window.sr.reveal(`#overview-box-${i}`, { delay: overviewDelays[i] });
    }
    for (let i = 0; i < this.state.keyConcepts.length; i++) {
      window.sr.reveal(`#key-concepts-box-${i}`, { delay: keyConceptDelays[i] });
    }

  };

  render() {
    const textStyle = {
      color: 'white',
      fontSize: '16px'
    };
    const params = {
      "particles": {
        "number": {
          "value": 100,
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
      backgroundSize: '100%'
    };
    const parallaxStyle = {
      // height: '100%'
    };
    return (
      <div id='app' className={classes.App}>
        <Header
          scrollTop={this.state.lastScrollPos}
          navItems={this.state.navItems}
        />
        <Parallax
          className={classes.parallax}
          offsetYMax={1000}
          offsetYMin={-1000}
          slowerScrollRate={true}
          // styleInner={parallaxStyle}
          // styleOuter={parallaxStyle}
          tag="div"
        >
          <Particles
            params={params}
            style={particlesStyle}
          />
        </Parallax>
        <Panel />
        <div className={`${classes['section']} py-5`} id="overview" style={{ backgroundColor: "#F2FEFE" }}>
          <div className={`${classes['box-container']} container`}>
            <div className={`${classes['box-row']} row`}>
              {this.state.overview.map((box, index) => {
                const { image, header, text } = box;
                return <Box
                  key={index}
                  id={`box-${index}`}
                  boxCategory={'overview'}
                  image={image}
                  header={header}
                  text={text}
                />
              })}
            </div>
          </div>
        </div>
        <div className={`${classes['section']} py-5`} id="sectionThree" style={{ color: 'white', backgroundColor: "rgba(0,0,0,0.25)" }}>
          <div className='container'>
            <div className='row'>
              <div className='col-6'>
                <h2>Public Blockchain With Benefits</h2>
                <p>Blockchain+ inherits the best from both public and private-based 
                Blockchain architecture. The ledger function is easy to implement for 
                small to enterprise-level firms and can provide security and transparency</p>
              </div>
              <div className='col-6'>
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
        <div className={`${classes['section']} py-5`} id="key-concepts" style={{ backgroundColor: "#F2FEFE" }}>
          <div className={`${classes['box-container']} container text-center`}>
            <h2>KEY CONCEPTS</h2>
            <p>Innovative concepts are what make BlockChain+ possible. Discussed in detail with a research paper, the following is an overview!</p>
            <div className={`${classes['box-row']} row`}>
              {this.state.keyConcepts.map((box, index) => {
                const { image, header, text } = box;
                return <Box
                  key={index}
                  id={`box-${index}`}
                  boxCategory={'key-concepts'}
                  image={image}
                  header={header}
                  text={text}
                />
              })}
            </div>
          </div>
        </div>
        <div style={{ height: '100%' }} id='content'></div>
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
