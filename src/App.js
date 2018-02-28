import React, { Component } from 'react';
import Header from './Header/Header';
import Section from './Section/Section';
import Hero from './Hero/Hero';
import Footer from './Footer/Footer';
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
        name: 'RNG',
        id: 'random-number'
      },
      {
        name: 'Team',
        id: 'team'
      }
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
          ]
        }
      },
      {
        id: 'carousel',
        backgroundColor: 'rgba(0,0,0,0.5)',
        header: null,
        body: {
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
          ]
        }
      },
      {
        id: 'faq',
        backgroundColor: 'rgba(0,0,0,0.5)',
        header: {
          title: 'Frequently Asked Questions',
          description: 'Some basic questions regarding Blockchain+'
        },
        body: {
          panels: [
            {
              question: 'In simple words, what are the benefits of Blockchain+ ?',
              answer: 'This research paper exploits an opportunity to implement private transactions in public, open-based blockchain architecture without compromising security, transparency or trust. It tackles problems we are facing presently, such as public vs. private blockchains, information being stored on “every node,” and the speed of execution. BlockChain+ offers a solution to these problems with an open-source, ledger-based approach. Information is only stored in participating nodes.'
            },
            {
              question: 'Why open BlockChains (Bitcoin, etc.) cannot perform ledger functions very well?',
              answer: 'As discussed in detail in this research paper, open blockchain architecture performs transactions by appending information to one massive blockchain. This database get bulky with time thereby compromising speed and raising questions regarding its effectiveness to execute transactions faster.'
            },
            {
              question: 'What is in it for investors ?',
              answer: 'Crypto ledger system are the reality of the future. It is expected that sooner or later, there will be a strong focus on operational aspects of blockchain, such as quick validation and execution. This is where BlockChain+ outshines and make itself useful for small businesses and individuals. As an investor, you get early access to the groundbreaking invention of Blockchain+. Reach out to us today by filling out the contact form to get updates or an answer to any question you might have.'
            }
          ]
        }
      },
      {
        id: 'random-number',
        backgroundColor: 'rgba(242,254,254,1)',
        header: {
          title: 'Random Number Teleportation',
          description: 'We generate our random numbers via the random movement of jellyfish.'
        },
        body: {}
        body: {
          text: 'Placeholder text',
          apps: ['randomNumber']
        }
      }
    ],
    footer: {
      brand: 'blockchainplus_logo.png',
      columns: [
        {
          title: 'Column',
          items: [
            {
              text: 'These',
              link: '#'
            },
            {
              text: 'Are',
              link: '#'
            },
            {
              text: 'Example',
              link: '#'
            },
            {
              text: 'Items',
              link: '#'
            }
          ]
        },
        {
          title: 'Learn',
          items: [
            {
              text: 'Whitepaper',
              link: '#'
            },
            {
              text: 'Roadmap',
              link: '#'
            },
            {
              text: 'Github',
              link: '#'
            }
          ]
        },
        {
          title: 'Company',
          items: [
            {
              text: 'About',
              link: '#'
            },
            {
              text: 'Careers',
              link: '#'
            },
            {
              text: 'Press',
              link: '#'
            },
            {
              text: 'Legal & Privacy',
              link: '#'
            },
            {
              text: 'Support',
              link: '#'
            }
          ]
        },
        {
          title: 'Social',
          items: [
            {
              text: 'Blog',
              link: '#'
            },
            {
              text: 'Twitter',
              link: '#'
            },
            {
              text: 'Facebook',
              link: '#'
            }
          ]
        }
      ],
      languages: [
        'English'
      ]
    }
  }

  componentDidMount() {
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
          "speed": 1.5,
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
          content={this.state.navItems}
        />
        <Parallax
          className={classes.parallax}
          offsetYMax={1500}
          offsetYMin={-1500}
          slowerScrollRate={true}
          tag="div"
        >
          <img src='jellyfish_constellation_small2.png' />
          <Particles
            params={params}
          />
        </Parallax>
        <Hero />
        {this.state.sections.map((section, index) => {
          return <Section
            key={index}
            content={section}
          />
        })}
        <Footer
          content={this.state.footer}
        />
      </div>
    );
  }
}

export default App;
