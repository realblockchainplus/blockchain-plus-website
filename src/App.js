import React, { Component } from 'react';
import Header from './Header/Header';
import Section from './Section/Section';
import Hero from './Hero/Hero';
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
    sections: [
      {
        id: 'overview',
        backgroundColor: 'rgba(242,254,254,1)',        
        header: null,
        body: {
          boxes: [
            {
              image: 'lock.svg',
              title: 'Information Privacy',
              description: 'Unlike Blockchain, information is not stored on every node but instead only on participating nodes.',
              delay: 0
            },
            {
              image: 'couple.svg',
              title: 'Small Business First',
              description: 'Practical and useful ledger system for transactional purposes.',
              delay: 500
            },
            {
              image: 'racing.svg',
              title: 'Cutting Transaction Speed',
              description: 'Parallel transaction happens between transactional nodes, so there is no centralized blockchain.',
              delay: 250
            }
          ],
          slides: null
        }
      },
      {
        id: 'carousel',
        backgroundColor: 'rgba(0,0,0,0.25)',
        header: null,
        body: {
          boxes: null,
          slides: [
            {
              key: 0,
              images: [
                {
                  src: '1.png',
                  altText: 'Image 1'
                },
                {
                  src: '2.png',
                  altText: 'Image 2'
                }
              ],
              title: 'Public Blockchain With Benefits',
              description: 'Blockchain+ inherits the best from both public and private-based Blockchain architecture. The ledger function is easy to implement for small to enterprise-level firms and can provide security & transparency.'
            },
            {
              key: 1,
              images: [
                {
                  src: '3.png',
                  altText: 'Image 3'
                },
                {
                  src: '4.png',
                  altText: 'Image 4'
                }
              ],
              title: 'Open Source-Based Operation',
              description: 'Avoiding centralized, traditional-based permissioned architecture. Blockchain+ has a backbone of small businesses, developers, BlockChain+ enthusiasts and even some end users to perform housekeeping tasks.'
            },
            {
              key: 2,
              images: [
                {
                  src: '5.png',
                  altText: 'Image 5'
                },
                {
                  src: '6.png',
                  altText: 'Image 6'
                }
              ],
              title: 'Witness & Guarantor-Based Ledger System',
              description: 'Two randomly selected witness & guarantor node pairs participate in a typical transaction. An innovative concept of random number teleportation is used to generate the same random number on all nodes without transmitting to each other.'
            },
            {
              key: 3,
              images: [
                {
                  src: '7.png',
                  altText: 'Image 7'
                },
                {
                  src: '8.png',
                  altText: 'Image 8'
                }
              ],
              title: 'Risk Assessment & Mitigation',
              description: 'Based on our risk assessment, even if BlockChain+ is used at the minimum configuration of 1,000 regular nodes, 100 guarantor nodes and assumed 5% hacker nodes, hackers have a minimum 50,000,000 to max 200,000,000 odds of succeeding. However as discussed in research paper, these risks are further mitigated to least level.'
            }
          ]
        }
      },
      {
        id: 'key-concepts',
        backgroundColor: 'rgba(242,254,254,1)',
        header: {
          title: 'Key Concepts',
          description: 'Innovative concepts are what make BlockChain+ possible. Discussed in detail with a research paper, the following is an overview!'
        },
        body: {
          boxes: [
            {
              image: 'connect.svg',
              title: 'Information not stored "everywhere"',
              description: 'Transactional information such as sender / receiver and amount is only stored on participating nodes, enabling both security and speed.',
              delay: 0
            },
            {
              image: 'creativity.svg',
              title: 'Random Number Teleportation',
              description: 'Innovative concept of random number teleportation is used to generate the same random number on all nodes without transmitting to each other.',
              delay: 0
            },
            {
              image: 'link.svg',
              title: 'Witness and partner Nodes',
              description: 'Randomly selected witness and partner nodes are used in typical transactions for validation and execution purposes.',
              delay: 0
            },
            {
              image: 'network-lock.svg',
              title: 'Mitigated Risk and Security Considerations',
              description: 'Discussed in detail, Blockchain+ made it very hard for hacker nodes to execute fraudulent transactions.',
              delay: 250
            },
            {
              image: 'flame.svg',
              title: 'Fast Transaction Execution Speed',
              description: 'Parallel transactions happen on the Blockchain+ network, making execution speeds faster without compromising security concerns.',
              delay: 250
            },
            {
              image: 'couple.svg',
              title: 'Small Business-Focused Operation',
              description: 'At its heart, BlockChain+ overcomes the problems faced by open blockchains (Bitcoin, etc.) to make it useful for businesses to use this technology for their ledger system.',
              delay: 250
            }
          ],
          slides: null
        }
      },
      // {
      //   id: 'faq',
      //   backgroundColor: 'rgba(0,0,0,0.25)',
      //   header: {
      //     title: 'Frequently Asked Questions',
      //     description: 'This section will have collapsible panels that contain frequently asked questions and their answers'
      //   },
      //   body: {
      //     panels: [
      //       {
      //         question: 'This is a test question',
      //         answer: 'This is a test answer!'
      //       },
      //       {
      //         question: 'This is a test question',
      //         answer: 'This is a test answer!'
      //       },
      //       {
      //         question: 'This is a test question',
      //         answer: 'This is a test answer!'
      //       },
      //       {
      //         question: 'This is a test question',
      //         answer: 'This is a test answer!'
      //       }
      //     ]
      //   }
      // },
      // {
      //   id: 'random-number',
      //   backgroundColor: 'rgba(242,254,254,1)',
      //   header: {
      //     title: 'Random Number Teleportation',
      //     description: 'This is the section where random number generation via jellyfish movement will be demonstrated'
      //   },
      //   body: {
      //     text: 'Placeholder text'
      //   }
      // }
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
        <Hero />
        {this.state.sections.map((section, index) => {
          return <Section
            key={index}
            content={section}
          />
        })}
      </div>
    );
  }
}

export default App;
