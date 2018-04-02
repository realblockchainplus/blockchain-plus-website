import React, { PureComponent } from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import JellyfishContainer from './Jellyfish/JellyfishContainer';
// import { Parallax } from 'react-scroll-parallax';
// import bodymovin from 'bodymovin';
import { translate } from 'react-i18next';
import enUS from './lang/en-us.json';

import classes from './App.css';

class App extends PureComponent {
  state = {
    bodyHeight: null,
    navItems: [
      {
        page: '',
        id: 'home'
      },
      {
        page: '',
        id: 'benefits'
      },
      {
        page: '',
        id: 'faq'
      },
      {
        page: '',
        id: 'random-number'
      },
      {
        page: '',
        id: 'team'
      },
      {
        page: '',
        id: 'whitepaper'
      },
      {
        page: '',
        id: 'roadmap'
      },
      {
        page: '',
        id: 'partners'
      }
    ],
    sections: [
      {
        id: 'benefits',       
        body: {
          boxes: [
            {
              id: 'network-privacy',
              image: 'privacy.svg',           
              delay: 0
            },
            {
              id: 'immutable-records',
              image: 'immutable-records.svg',            
              delay: 500
            },
            {
              id: 'network-speed',
              image: 'flame_new.svg',          
              delay: 250
            },
            {
              id: 'network-versatility',
              image: 'versatile_icon.svg',           
              delay: 500
            },
            {
              id: 'open-source',
              image: 'open_source_new.svg',            
              delay: 500
            }
          ]
        }
      },
      {
        id: 'faq',
        body: {
          panels: [
            'what-is-blockchain-plus',
            'open-source',
            'permissioned',
            'consortium',
            'infrastructure',
            'validation',
            'different-ethereum',
            'different-ripple',
            'jellyfishes'
          ]
        }
      },
      {
        id: 'random-number',
        body: {}
      },
      {
        id: 'team',
        body: {
          teamSections: [
            {
              id: 'employees',
              title: 'Team',
              defaultImage: '',
              members: [
                {
                  id: 'jeevan-singh',
                  links: {
                    github: null,
                    linkedin: 'jeevan-j-singh-87a81725',
                    facebook: null,
                    googlePlus: null,
                    bitbucket: null,
                    blog: null
                  }
                },
                {
                  id: 'gabor-levai',
                  links: {
                    github: null,
                    linkedin: 'gaborlevai1972',
                    facebook: null,
                    googlePlus: null,
                    bitbucket: null,
                    blog: null
                  }
                },
                {
                  id: 'jaswinder-singh',
                  links: {                    
                    // github: 'mistletoe91',
                    linkedin: 'jdsingh1',
                    facebook: null,
                    googlePlus: null,
                    // bitbucket: 'mistletoe91',
                    blog: null
                  }
                },
                // {
                //   id: 'david-kiss',
                //   links: {
                //     github: null,
                //     linkedin: 'davidkiss',
                //     facebook: null,
                //     googlePlus: null,
                //     bitbucket: null,
                //     blog: null
                //   }
                // },
                // {
                //   id: 'gabor-szokoli',
                //   links: {
                //     github: null,
                //     linkedin: 'gabor-szokoli-25a16011',
                //     facebook: null,
                //     googlePlus: null,
                //     bitbucket: null,
                //     blog: null
                //   }
                // },
                // {
                //   id: 'lee-stecklov',
                //   links: {
                //     github: null,
                //     linkedin: 'leestecklov',
                //     facebook: null,
                //     googlePlus: null,
                //     bitbucket: null,
                //     blog: null
                //   }
                // },
                {
                  id: 'scott-donnelly',
                  links: {
                    // github: 'villith',
                    linkedin: 'scott-donnelly-527418125',
                    // facebook: 'scott.donnelly.315',
                    // googlePlus: '116327139909718037058',
                    // bitbucket: 'sdonnelly',
                    // blog: 'https://medium.com/@scott.donnelly790'
                  }
                },
                {
                  id: 'rajah-vijeyarajah',
                  links: {
                    // github: 'rajah19',
                    linkedin: 'rajah19',
                    facebook: null,
                    googlePlus: null,
                    // bitbucket: 'rajah19',
                    blog: null
                  }
                },
                {
                  id: 'sophia-wall',
                  links: {
                    github: null,
                    linkedin: '',
                    facebook: null,
                    googlePlus: null,
                    bitbucket: null,
                    blog: null
                  }
                }
              ]
            },
            {
              id: 'advisors',
              title: 'Advisors',
              defaultImage: '',
              members: [
                {
                  id: 'kundan-joshi',
                  links: {
                    github: null,
                    linkedin: 'kundan',
                    facebook: null,
                    googlePlus: null,
                    bitbucket: null,
                    blog: null
                  }
                },
                // {
                //   id: 'tamas-haiman',
                //   links: {
                //     github: null,
                //     linkedin: 'tamas-haiman-259620',
                //     facebook: null,
                //     googlePlus: null,
                //     bitbucket: null,
                //     blog: null
                //   }
                // },
                // {
                //   id: 'david-drake',
                //   links: {
                //     github: null,
                //     linkedin: 'ldjcaptial',
                //     facebook: null,
                //     googlePlus: null,
                //     bitbucket: null,
                //     blog: null
                //   }
                // },
                // {
                //   title: null,
                //   firstName: 'Norbert',
                //   middleName: null,
                //   lastName: 'Mocsai',
                //   jobTitle: 'Advisor',
                //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae nunc sed velit dignissim sodales ut eu sem integer. Quis commodo odio aenean sed adipiscing diam donec.',
                //   image:  'norbert_mocsai_headshot.jpg',
                //   links: {
                //     github: null,
                //     linkedin: 'norbert-mocsai-2113061b',
                //     facebook: null,
                //     googlePlus: null,
                //     bitbucket: null,
                //     blog: null
                //   }
                // },
                // {
                //   title: null,
                //   firstName: 'Advisor',
                //   middleName: null,
                //   lastName: 'Three',
                //   jobTitle: 'Number Three',
                //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam etiam erat velit scelerisque.',
                //   image:  '002-nun.svg',
                //   links: {
                //     github: 'villith',
                //     linkedin: '',
                //     facebook: null,
                //     googlePlus: '',
                //     bitbucket: 'sdonnelly',
                //     blog: null
                //   }
                // },
                // {
                //   title: null,
                //   firstName: 'Advisor',
                //   middleName: null,
                //   lastName: 'Four',
                //   jobTitle: 'Number Four',
                //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Orci phasellus egestas tellus rutrum tellus.',
                //   image:  '003-welder.svg',
                //   links: {
                //     github: 'villith',
                //     linkedin: null,
                //     facebook: null,
                //     googlePlus: null,
                //     bitbucket: 'sdonnelly',
                //     blog: ''
                //   }
                // },
                // {
                //   title: null,
                //   firstName: 'Advisor',
                //   middleName: null,
                //   lastName: 'Five',
                //   jobTitle: 'Number Five',
                //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                //   image:  '004-croupier.svg',
                //   links: {
                //     github: 'villith',
                //     linkedin: null,
                //     facebook: '',
                //     googlePlus: null,
                //     bitbucket: 'sdonnelly',
                //     blog: null
                //   }
                // },
                // {
                //   title: null,
                //   firstName: 'Advisor',
                //   middleName: null,
                //   lastName: 'Six',
                //   jobTitle: 'Number Six',
                //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis.',
                //   image:  '005-firefighter.svg',
                //   links: {
                //     github: 'villith',
                //     linkedin: '',
                //     facebook: null,
                //     googlePlus: null,
                //     bitbucket: 'sdonnelly',
                //     blog: null
                //   }
                // },
                // {
                //   title: null,
                //   firstName: 'Advisor',
                //   middleName: null,
                //   lastName: 'Seven',
                //   jobTitle: 'Number Seven',
                //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at consectetur lorem donec massa sapien. Mattis ullamcorper velit sed ullamcorper morbi.',
                //   image:  '006-stewardess.svg',
                //   links: {
                //     github: 'villith',
                //     linkedin: '',
                //     facebook: '',
                //     googlePlus: '',
                //     bitbucket: 'sdonnelly',
                //     blog: ''
                //   }
                // },
                // {
                //   title: null,
                //   firstName: 'Advisor',
                //   middleName: null,
                //   lastName: 'Eight',
                //   jobTitle: 'Number Eight',
                //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Augue mauris augue neque gravida in. Mi in nulla posuere sollicitudin aliquam ultrices.',
                //   image:  '007-showman.svg',
                //   links: {
                //     github: 'villith',
                //     linkedin: null,
                //     facebook: null,
                //     googlePlus: null,
                //     bitbucket: 'sdonnelly',
                //     blog: null
                //   }
                // }
              ]
            },
            // {
            //   id: 'community-members',
            //   title: 'Ambassadors',
            //   description: null,
            //   defaultImage: '',
            //   defaultTitle: '',
            //   members: [
            //     {
            //       title: null,
            //       firstName: 'Joe',
            //       middleName: null,
            //       lastName: 'Schmoe',
            //       jobTitle: 'Contributor',
            //       description: 'This is the description of the community member.',
            //       image: '011-boss.svg',
            //       links: {
            //         github: 'villith',
            //         linkedin: null,
            //         facebook: null,
            //         googlePlus: null,
            //         bitbucket: 'sdonnelly',
            //         blog: null
            //       }
            //     }
            //   ]
            // }
          ]
        }
      },
      {
        id: 'whitepaper',
        body: {}
      },
      {
        id: 'roadmap',
        body: {
          milestones: [
            {            
              percentComplete: 100,
              month: 6,
              year: 2017
            },
            {           
              percentComplete: 100,
              month: 12,
              year: 2017
            },
            {           
              percentComplete: 100,
              month: 12,
              year: 2017
            },
            {            
              percentComplete: 100,
              month: 1,
              year: 2018
            },
            {             
              percentComplete: 90,
              month: 2,
              year: 2018
            },
            {             
              percentComplete: 30,
              month: 2,
              year: 2018
            },
            {          
              percentComplete: 70,
              month: 2,
              year: 2018
            },
            {             
              percentComplete: 80,
              month: 2,
              year: 2018
            },
          ]
        }
      },
      {
        id: 'partners',
        body: {
          boxes: [
            {
              id: 'aird-berlis',
              title: 'Aird Berlis',
              image: 'aird-berlis-logo.png',
              delay: null
            },
            {
              id: 'app-lab',
              title: 'The App Labb',
              image: 'app_lab.jpg',
              delay: null
            },
            // {
            //   name: 'Trendency Online',
            //   image: 'trendency_logo.png'
            // }
          ]
        }
      }
      // #region state
      // {
      //   id: 'carousel',
      //   backgroundColor: 'rgba(32,86,107, 1)',
      //   header: null,
      //   body: {
      //     slides: [
      //       {
      //         key: 0,
      //         images: [
      //           {
      //             src: '1.png',
      //             altText: 'Image 1'
      //           },
      //           {
      //             src: '2.png',
      //             altText: 'Image 2'
      //           }
      //         ],
      //         title: 'Public Blockchain With Benefits',
      //         description: 'Blockchain+ inherits the best from both public and private-based Blockchain architecture. The ledger function is easy to implement for small to enterprise-level firms and can provide security & transparency.'
      //       },
      //       {
      //         key: 1,
      //         images: [
      //           {
      //             src: '3.png',
      //             altText: 'Image 3'
      //           },
      //           {
      //             src: '4.png',
      //             altText: 'Image 4'
      //           }
      //         ],
      //         title: 'Open Source-Based Operation',
      //         description: 'Avoiding centralized, traditional-based permissioned architecture. Blockchain+ has a backbone of small businesses, developers, BlockChain+ enthusiasts and even some end users to perform housekeeping tasks.'
      //       },
      //       {
      //         key: 2,
      //         images: [
      //           {
      //             src: '5.png',
      //             altText: 'Image 5'
      //           },
      //           {
      //             src: '6.png',
      //             altText: 'Image 6'
      //           }
      //         ],
      //         title: 'Witness & Guarantor-Based Ledger System',
      //         description: 'Two randomly selected witness & guarantor node pairs participate in a typical transaction. An innovative concept of random number teleportation is used to generate the same random number on all nodes without transmitting to each other.'
      //       },
      //       {
      //         key: 3,
      //         images: [
      //           {
      //             src: '7.png',
      //             altText: 'Image 7'
      //           },
      //           {
      //             src: '8.png',
      //             altText: 'Image 8'
      //           }
      //         ],
      //         title: 'Risk Assessment & Mitigation',
      //         description: 'Based on our risk assessment, even if BlockChain+ is used at the minimum configuration of 1,000 regular nodes, 100 guarantor nodes and assumed 5% hacker nodes, hackers have a minimum 50,000,000 to max 200,000,000 odds of succeeding. However as discussed in research paper, these risks are further mitigated to least level.'
      //       }
      //     ]
      //   }
      // },
      // {
      //   id: 'key-concepts',
      //   backgroundColor: 'rgba(242,254,254,1)',
      //   header: {
      //     title: 'Key Concepts',
      //     description: 'Innovative concepts are what make BlockChain+ possible. Discussed in detail with a research paper, the following is an overview!'
      //   },
      //   body: {
      //     boxes: [
      //       {
      //         image: 'connect.svg',
      //         title: 'Information not stored "everywhere"',
      //         description: 'Transactional information such as sender / receiver and amount is only stored on participating nodes, enabling both security and speed.',
      //         delay: 0
      //       },
      //       {
      //         image: 'creativity.svg',
      //         title: 'Random Number Teleportation',
      //         description: 'Innovative concept of random number teleportation is used to generate the same random number on all nodes without transmitting to each other.',
      //         delay: 0
      //       },
      //       {
      //         image: 'link.svg',
      //         title: 'Witness and partner Nodes',
      //         description: 'Randomly selected witness and partner nodes are used in typical transactions for validation and execution purposes.',
      //         delay: 0
      //       },
      //       {
      //         image: 'network-lock.svg',
      //         title: 'Mitigated Risk and Security Considerations',
      //         description: 'Discussed in detail, Blockchain+ made it very hard for hacker nodes to execute fraudulent transactions.',
      //         delay: 250
      //       },
      //       {
      //         image: 'flame.svg',
      //         title: 'Fast Transaction Execution Speed',
      //         description: 'Parallel transactions happen on the Blockchain+ network, making execution speeds faster without compromising security concerns.',
      //         delay: 250
      //       },
      //       {
      //         image: 'couple.svg',
      //         title: 'Small Business-Focused Operation',
      //         description: 'At its heart, BlockChain+ overcomes the problems faced by open blockchains (Bitcoin, etc.) to make it useful for businesses to use this technology for their ledger system.',
      //         delay: 250
      //       }
      //     ]
      //   }
      // },
      // #endregion
    ],
    footer: {
      brand: 'blockchainplus_logo.png',
      columns: [
        {
          id: 'learn',
          items: [
            {
              id: 'whitepaper',
              page: '',
              link: '#'
            },
            {
              id: 'roadmap',
              page: '',
              link: '#'
            },
            {
              id: 'github',
              page: '',
              link: '#'
            }
          ]
        },
        {
          id: 'company',
          items: [
            {
              id: 'about',
              page: '',
              link: '#'
            },
            {
              id: 'careers',
              page: '',
              link: '#'
            },
            {
              id: 'press',
              page: '',
              link: '#'
            },
            {
              id: 'legal-privacy',
              page: '',
              link: '#'
            },
            {
              id: 'support',
              page: '',
              link: '#'
            }
          ]
        },
        {
          id: 'social',
          items: [
            {
              id: 'blog',
              page: '',
              link: '#'
            },
            {
              id: 'twitter',
              page: '',
              link: '#'
            },
            {
              id: 'facebook',
              page: '',
              link: '#'
            }
          ]
        }
      ],
      languages: [
        'en',
        'gibberish'
      ]
    }
  }

  componentDidMount() {
    // bodymovin.loadAnimation({
    //   container: document.getElementById('bm'),
    //   renderer: 'svg',
    //   loop: true,
    //   autoplay: true,
    //   path: 'morph.json'
    // });
  }

  componentDidUpdate() {
  }
  
  render() {
    // let width = window.innerWidth;
    // let numValue = Math.floor(width / 30);
    // let height = document.documentElement.scrollHeight + 1000;

    const { t } = this.props;
    let translatedHeader = t('header');
    let translatedBody = t('body');
    let translatedFooter = t('footer');

    // let translatedHeader = enUS.header;
    // let translatedBody = enUS.body;
    // let translatedFooter = enUS.footer;
    return (
      <div id='app' className={classes.App}>
        {/* <JellyfishContainer 
          onNewAnimationFrame={this.props.onNewAnimationFrame}
        /> */}
        {/* <Parallax
          className={classes.parallax}
          offsetYMax={height}
          offsetYMin={-height}
          slowerScrollRate={true}
          tag="div"
        
        </Parallax> */}
        <Header
          content={this.state.navItems}
          lang={translatedHeader}
        />
        <Body
          content={this.state.sections}
          lang={translatedBody}
        />
        <Footer
          content={this.state.footer}
          lang={translatedFooter}
        />
      </div>
    );
  }
}

export default translate()(App);
