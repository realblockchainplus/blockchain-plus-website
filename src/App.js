import React, { Component } from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import Particles from 'react-particles-js';
import { Parallax } from 'react-scroll-parallax';
import bodymovin from 'bodymovin';

import classes from './App.css';

class App extends Component {
  state = {
    bodyHeight: null,
    navItems: [
      {
        name: 'Home',
        page: '',
        id: 'home'
      },
      {
        name: 'Benefits',
        page: '',
        id: 'benefits'
      },
      {
        name: 'Key Concepts',
        page: '',
        id: 'key-concepts'
      },
      {
        name: 'FAQ',
        page: '',
        id: 'faq'
      },
      {
        name: 'RNG',
        page: '',
        id: 'random-number'
      },
      {
        name: 'Team',
        page: '',
        id: 'team'
      },
      {
        name: 'Partners',
        page: '',
        id: 'partners'
      },
      {
        name: 'Whitepaper',
        page: 'whitepaper',
        id: 'whitepaper'
      }
    ],
    sections: [
      {
        id: 'hero',
        backgroundColor: 'rgba(0,0,0,0)',
        header: {},
        body: {}
      },
      {
        id: 'benefits',
        backgroundColor: 'rgba(242,254,254,1)',        
        header: {
          title: 'Benefits',
          description: null
        },
        body: {
          boxes: [
            {
              image: 'lock.svg',
              title: 'Complete Privacy',
              description: 'Unlike traditional blockchains, only the sender and receiver know the complete details of the transactions.',
              delay: 0
            },
            {
              image: 'couple.svg',
              title: 'Immutable Records',
              description: 'The nodes validating the transactions store immutable records through a one-way encryption key (Hash).',
              delay: 500
            },
            {
              image: 'flame.svg',
              title: 'Blazing Speed',
              description: 'Blockchain+ can complete a transaction in one second or less. Our closest competitor is Ripple at 4 seconds per transaction.',
              delay: 250
            }
          ]
        }
      },
      {
        id: 'carousel',
        backgroundColor: 'rgba(32,86,107, 1)',
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
        backgroundColor: 'rgba(32,86,107,1)',
        header: {
          title: 'Frequently Asked Questions',
          description: 'Some basic questions regarding Blockchain+'
        },
        body: {
          panels: [
            {
              question: 'What is Blockchain+ ?',
              answer: 'This research paper exploits an opportunity to implement private transactions in public, open-based blockchain architecture without compromising security, transparency or trust. It tackles problems we are facing presently, such as public vs. private blockchains, information being stored on “every node,” and the speed of execution. BlockChain+ offers a solution to these problems with an open-source, ledger-based approach. Information is only stored in participating nodes.'
            },
            {
              question: 'How secure is Blockchain+ infrastructure?',
              answer: 'As discussed in detail in this research paper, open blockchain architecture performs transactions by appending information to one massive blockchain. This database get bulky with time thereby compromising speed and raising questions regarding its effectiveness to execute transactions faster.'
            },
            {
              question: 'How does one-way encryption (Hash) work?',
              answer: 'Crypto ledger system are the reality of the future. It is expected that sooner or later, there will be a strong focus on operational aspects of blockchain, such as quick validation and execution. This is where BlockChain+ outshines and make itself useful for small businesses and individuals. As an investor, you get early access to the groundbreaking invention of Blockchain+. Reach out to us today by filling out the contact form to get updates or an answer to any question you might have.'
            },
            {
              question: 'How is Blockchain+ different from Ethereum?',
              answer: 'Crypto ledger system are the reality of the future. It is expected that sooner or later, there will be a strong focus on operational aspects of blockchain, such as quick validation and execution. This is where BlockChain+ outshines and make itself useful for small businesses and individuals. As an investor, you get early access to the groundbreaking invention of Blockchain+. Reach out to us today by filling out the contact form to get updates or an answer to any question you might have.'
            },
            {
              question: 'How is Blockchain+ different from Ripple?',
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
      },
      {
        id: 'team',
        backgroundColor: 'rgba(32,86,107,1)',
        header: {
          title: 'Blockchain+ Team',
          description: null
        },
        body: {
          teamSections: [
            {
              id: 'advisors',
              title: 'Advisors',
              description: null,
              defaultImage: '',
              defaultTitle: '',
              members: [
                {
                  title: 'Dr',
                  firstName: 'Mister',
                  middleName: null,
                  lastName: 'Bigshot',
                  jobTitle: 'Past Head Business Development @ IBM',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio facilisis mauris sit amet. Elementum pulvinar etiam non quam lacus suspendisse faucibus.',
                  image:  '009-doctor-1.svg',
                  links: {
                    github: 'villith',
                    linkedin: null,
                    facebook: null,
                    googlePlus: null,
                    bitbucket: 'sdonnelly',
                    blog: null
                  }
                },
                {
                  title: null,
                  firstName: 'Advisor',
                  middleName: null,
                  lastName: 'Two',
                  jobTitle: 'Number Two',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae nunc sed velit dignissim sodales ut eu sem integer. Quis commodo odio aenean sed adipiscing diam donec.',
                  image:  '001-diver.svg',
                  links: {
                    github: 'villith',
                    linkedin: '',
                    facebook: '',
                    googlePlus: null,
                    bitbucket: 'sdonnelly',
                    blog: null
                  }
                },
                {
                  title: null,
                  firstName: 'Advisor',
                  middleName: null,
                  lastName: 'Three',
                  jobTitle: 'Number Three',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam etiam erat velit scelerisque.',
                  image:  '002-nun.svg',
                  links: {
                    github: 'villith',
                    linkedin: '',
                    facebook: null,
                    googlePlus: '',
                    bitbucket: 'sdonnelly',
                    blog: null
                  }
                },
                {
                  title: null,
                  firstName: 'Advisor',
                  middleName: null,
                  lastName: 'Four',
                  jobTitle: 'Number Four',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Orci phasellus egestas tellus rutrum tellus.',
                  image:  '003-welder.svg',
                  links: {
                    github: 'villith',
                    linkedin: null,
                    facebook: null,
                    googlePlus: null,
                    bitbucket: 'sdonnelly',
                    blog: ''
                  }
                },
                {
                  title: null,
                  firstName: 'Advisor',
                  middleName: null,
                  lastName: 'Five',
                  jobTitle: 'Number Five',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                  image:  '004-croupier.svg',
                  links: {
                    github: 'villith',
                    linkedin: null,
                    facebook: '',
                    googlePlus: null,
                    bitbucket: 'sdonnelly',
                    blog: null
                  }
                },
                {
                  title: null,
                  firstName: 'Advisor',
                  middleName: null,
                  lastName: 'Six',
                  jobTitle: 'Number Six',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis.',
                  image:  '005-firefighter.svg',
                  links: {
                    github: 'villith',
                    linkedin: '',
                    facebook: null,
                    googlePlus: null,
                    bitbucket: 'sdonnelly',
                    blog: null
                  }
                },
                {
                  title: null,
                  firstName: 'Advisor',
                  middleName: null,
                  lastName: 'Seven',
                  jobTitle: 'Number Seven',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at consectetur lorem donec massa sapien. Mattis ullamcorper velit sed ullamcorper morbi.',
                  image:  '006-stewardess.svg',
                  links: {
                    github: 'villith',
                    linkedin: '',
                    facebook: '',
                    googlePlus: '',
                    bitbucket: 'sdonnelly',
                    blog: ''
                  }
                },
                {
                  title: null,
                  firstName: 'Advisor',
                  middleName: null,
                  lastName: 'Eight',
                  jobTitle: 'Number Eight',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Augue mauris augue neque gravida in. Mi in nulla posuere sollicitudin aliquam ultrices.',
                  image:  '007-showman.svg',
                  links: {
                    github: 'villith',
                    linkedin: null,
                    facebook: null,
                    googlePlus: null,
                    bitbucket: 'sdonnelly',
                    blog: null
                  }
                }
              ]
            },
            {
              id: 'employees',
              title: 'Team',
              description: null,
              defaultImage: '',
              defaultTitle: '',
              members: [
                {
                  title: null,
                  firstName: 'Jeevan',
                  middleName: null,
                  lastName: 'Singh',
                  jobTitle: 'CEO',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus scelerisque eleifend donec pretium vulputate sapien nec. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Ut eu sem integer vitae justo eget magna fermentum iaculis.',
                  image: '008-farmer.svg',
                  links: {
                    github: 'villith',
                    linkedin: null,
                    facebook: null,
                    googlePlus: null,
                    bitbucket: 'sdonnelly',
                    blog: null
                  }
                },
                {
                  title: null,
                  firstName: 'Jaswinder',
                  middleName: null,
                  lastName: 'Singh',
                  jobTitle: 'CTO',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                  image: 'tugboat_jas_headshot.png',
                  links: {
                    github: 'mistletoe91',
                    linkedin: '',
                    facebook: '',
                    googlePlus: null,
                    bitbucket: 'mistletoe91',
                    blog: null
                  }
                },
                {
                  title: null,
                  firstName: 'Scott',
                  middleName: null,
                  lastName: 'Donnelly',
                  jobTitle: 'Developer',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                  image: '008-farmer.svg',
                  links: {
                    github: 'villith',
                    linkedin: 'scott-donnelly-527418125',
                    facebook: 'scott.donnelly.315',
                    googlePlus: '116327139909718037058',
                    bitbucket: 'sdonnelly',
                    blog: 'https://medium.com/@scott.donnelly790'
                  }
                }
              ]
            },
            {
              id: 'community-members',
              title: 'Ambassadors',
              description: null,
              defaultImage: '',
              defaultTitle: '',
              members: [
                {
                  title: null,
                  firstName: 'Joe',
                  middleName: null,
                  lastName: 'Schmoe',
                  jobTitle: 'Contributor',
                  description: 'This is the description of the community member.',
                  image: '011-boss.svg',
                  links: {
                    github: 'villith',
                    linkedin: null,
                    facebook: null,
                    googlePlus: null,
                    bitbucket: 'sdonnelly',
                    blog: null
                  }
                }
              ]
            }
          ]
        }
      },
      {
        id: 'partners',
        backgroundColor: 'rgba(242,254,254,1)',
        header: {
          title: 'Partners',
          description: null
        },
        body: {
          partners: [
            {
              name: 'Aircare',
              image: 'aircare-logo-sm-grey.png'
            },
            {
              name: 'Altus Group',
              image: 'altus_group_icon.png'
            },
            {
              name: 'Workhaus',
              image: 'workhaus_icon.png'
            },
            {
              name: 'Zighra',
              image: 'zighra_icon.png'
            },
            {
              name: 'Aird Berlis',
              image: 'aird-berlis-logo.png'
            },
            {
              name: 'The App Labb',
              image: 'app_lab.png'
            }
          ]
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
              page: 'whitepaper',
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
    // bodymovin.loadAnimation({
    //   container: document.getElementById('bm'),
    //   renderer: 'svg',
    //   loop: true,
    //   autoplay: true,
    //   path: 'data3.json'
    // });
  }

  render() {
    let width = window.innerWidth;
    let numValue = Math.floor(width / 50);
    let height = document.documentElement.scrollHeight;
    console.log(height);
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
      <div id='app' className={classes.App}>
        <Parallax
          className={classes.parallax}
          offsetYMax={height}
          offsetYMin={-height}
          slowerScrollRate={true}
          tag="div"
        >
          <Particles
            params={params}
          />
          {/* <div id='bm' className={classes.bodymovin}></div> */}
          {/* <img src='jellyfish_constellation.png' alt='jellyfish constellation'/> */}
        </Parallax>
        <Header
          content={this.state.navItems}
        />
        <Body
          content={this.state.sections}
        />
        <Footer
          content={this.state.footer}
        />
      </div>
    );
  }
}

export default App;
