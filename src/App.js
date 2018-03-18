import React, { Component } from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import LoadingScreen from './LoadingScreen/LoadingScreen';
import JellyfishContainer from './Jellyfish/JellyfishContainer';
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
        name: 'Whitepaper',
        page: '',
        id: 'whitepaper'
      },
      {
        name: 'Roadmap',
        page: '',
        id: 'roadmap'
      },
      {
        name: 'Partners',
        page: '',
        id: 'partners'
      },
      // {
      //   name: 'RNG',
      //   page: '',
      //   id: 'random-number'
      // },
    ],
    sections: [
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
              image: 'Eyeprivacy02.gif',
              title: 'Complete Privacy',
              description: 'Unlike traditional blockchains, only the sender and receiver know the complete details of the transactions. Information is only stored on participat nodes not on every node.',
              delay: 0
            },
            {
              image: 'network-lock.svg',
              title: 'Immutable Records',
              description: 'The nodes validating the transactions store immutable records through a one-way encryption key (Hash).',
              delay: 500
            },
            {
              image: 'flame.svg',
              title: 'Blazing Fast',
              description: 'Blockchain+ can complete a transaction in one second or less. Our closest competitor is ripple at 4 seconds per transaction.',
              delay: 250
            },
            {
              image: 'swiss-army-knife.svg',
              title: 'Absurdly Versatile',
              description: 'Blockchain+ is the first functional distributed ledger system. The use cases range from disintermediating cash to a convenient ledger system for SMB’s.',
              delay: 500
            },
            {
              image: 'meeting.svg',
              title: 'Open Source',
              description: 'Blockchain+ operates on an open source architecture. Entrepreneurs, companies and dreamers around the world are the backbone of our community.',
              delay: 500
            }
          ]
        }
      },
      {
        id: 'faq',
        backgroundColor: 'rgb(9, 120, 172)',
        header: {
          title: 'Frequently Asked Questions',
          description: 'Some basic questions regarding Blockchain+'
        },
        body: {
          panels: [
            {
              question: 'What is Blockchain+ ?',
              answer: 'Blockchain+ is a next-generation distributed database.'
            },
            {
              question: 'Are you open source?',
              answer: 'Yes. All of Blockchain+’s code is open source.'
            },
            {
              question: 'Are you a permissioned blockchain?',
              answer: 'Blockchain+ is not a permissioned blockchain. In our opinion, permissioned blockchains (where a central authority controls the operation) go against the very fabric of blockchains. Blockchain’s should be distributed and open!'
            },
            {
              question: 'Are you then a Consortium blockchain?',
              answer: 'Blockchain+ can be defined as a consortium because we limit our membership numbers. However, unlike traditional consortiums where membership is closed to the general public, everyone has the opportunity to be part of our network. Our members can vote to change the parameters by which future members can join be part of our network.'
            },
            {
              question: 'How hackable is Blockchain+’s infrastructure?',
              answer: 'Assuming a very minimum Blockchain+ network configuration of 5000 regular and 5000 partner nodes the minimum odds required to perform fraudulent activity is 1 in 99,990,000. With this minimum configuration the odds of performing fraudulent transaction is 923 times more than getting stuck with lightning in a given year. These odds are further mitigated by the fact that (a) BlockChain+ will be open-source, meaning bugs and security breaches will be reported and fixed faster; (b) BlockChain+ will be operating on a global network, which means the number of nodes will be much higher than above assumed ones which means odds will increase exponentially; and (c) the BlockChain+ Partner node community will be performing extensive tasks regularly, such as bad node reporting, random algorithm generation, and certification issuing and revoking. Thus the risk can be further reduced much more.'
            },
            {
              question: 'How does Blockchain+ validate transactions?',
              answer: 'In blockchain at very least every block is joined with other blockchain using hash however in blockchain+ we use hash to store transaction details in validating nodes. So essentially if you validated someone else`s transaction you will store hash of data which cannot be decrypted but can be used later to validate that the transaction you validated is legitimate. The hashes are stored in redundancy to provide data integrity.'
            },
            {
              question: 'How is Blockchain+ different from Ethereum?',
              answer: 'Blockchain+ is an attempt to create synergies by marrying public and private blockchains. Any public blockchain, including Ethereum, faces long term operational issues because transactions are settled by appending information to one massive blockchain. This architecture makes the database bulkier over time compromising speed and reducing the ability to effectively execute transactions long term. \n\nBlockchain+ will be implementing Ethereum’s smart contract feature long-term. Smart contracts are a genius concept!'
              
            },
            {
              question: 'How is Blockchain+ different from Ripple?',
              answer: 'Ripple is a permissioned blockchain which fundamentally goes against the grain of blockchains. Blockchain+ avoids the traditional permissioned based architecture by randomly selecting the nodes validating the transaction. Blockchain+ uses random number teleportation to generate a same random number on all nodes without transmitting to each other.'
            },
            {
              question: 'What\'s up with Jellyfishes?',
              answer: 'The core of Blockchain+’s random number generator relies on chaos theory. Chaotic behaviour occurs in natural systems like weather, climate and movements of jellyfish among many others. The wildly random jellyfish movements are just a start as Blockchain+ will be integrating many more chaotic elements to its random number generator.'
            }
          ]
        }
      },
      {
        id: 'random-number',
        backgroundColor: 'rgba(242,254,254,1)',
        header: {
          title: 'Random Number Teleportation',
          description: 'We generate random numbers via movements of jellyfishes in aquariums around the world. The number is then consumed by each and every node to generate another set of random number using ever changing algorithms and configuration data. The final random numbers are generated in such a way that they are impossible to predict, are purely random and same on all nodes without transmitting to each other.'
        },
        body: {}
      },
      {
        id: 'team',
        backgroundColor: 'rgb(9, 120, 172)',
        header: {
          title: 'Blockchain+ Team',
          description: null
        },
        body: {
          teamSections: [
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
                  middleName: 'J.',
                  lastName: 'Singh',
                  jobTitle: 'Chief Executive Officer',
                  description: 'Jeevan is a consummate entrepreneur. Jeevan’s most recent venture, tugboat.cc, was a unique hyper-local printing marketplace that boasted multiple Fortune 500 clients.',
                  image: 'jeevan_singh_headshot.jpg',
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
                  title: null,
                  firstName: 'Gabor',
                  middleName: null,
                  lastName: 'Levai',
                  jobTitle: 'President and Chief Operations Officer',
                  description: 'Gabor was the co-founder and COO of the largest private media company in Hungary. Their client list included top Fortune 500’s like Coca Cola and BMW, among many others.',
                  image: 'gabor_levai_headshot.jpg',
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
                  title: null,
                  firstName: 'Jaswinder',
                  middleName: null,
                  lastName: 'Singh',
                  jobTitle: 'Chief Technology Officer',
                  description: 'Jas is a super star engineer and has architected some of the largest E-Commerce applications in Canada. Jas has lead development teams for Canadian Tire, IBM & Presto.',
                  image: 'tugboat_jas_headshot.png',
                  links: {                    
                    // github: 'mistletoe91',
                    linkedin: 'jdsingh1',
                    facebook: null,
                    googlePlus: null,
                    // bitbucket: 'mistletoe91',
                    blog: null
                  }
                },
                {
                  title: null,
                  firstName: 'David',
                  middleName: null,
                  lastName: 'Kiss',
                  jobTitle: 'Engineer',
                  description: 'David is a senior development veteran with extensive expertise in building Fintech products. David is currently leading RBC Reward’s server-side development team.',
                  image: 'david_kiss_headshot.jpg',
                  links: {
                    github: null,
                    linkedin: 'davidkiss',
                    facebook: null,
                    googlePlus: null,
                    bitbucket: null,
                    blog: null
                  }
                },
                {
                  title: null,
                  firstName: 'Gabor',
                  middleName: null,
                  lastName: 'Szokoli',
                  jobTitle: 'Engineer',
                  description: 'Gabor is a veteran engineer with over 10 years experience, building and managing software for some of the world’s top companies like Siemens and GE Healthcare.',
                  image: 'gabor_szokoli_headshot.jpg',
                  links: {
                    github: null,
                    linkedin: 'gabor-szokoli-25a16011',
                    facebook: null,
                    googlePlus: null,
                    bitbucket: null,
                    blog: null
                  }
                },
                {
                  title: null,
                  firstName: 'Lee',
                  middleName: null,
                  lastName: 'Stecklov',
                  jobTitle: 'Engineer',
                  description: 'Lee is a software development veteran with over 20 years experience. Lee has managed build-outs of many workload automation products currently used by numerous Fortune 500’s',
                  image: 'lee_stecklov_headshot.jpg',
                  links: {
                    github: null,
                    linkedin: 'leestecklov',
                    facebook: null,
                    googlePlus: null,
                    bitbucket: null,
                    blog: null
                  }
                },
                {
                  title: null,
                  firstName: 'Scott',
                  middleName: null,
                  lastName: 'Donnelly',
                  jobTitle: 'Engineer',
                  description: 'Scott is a full stack engineer with over 3 years experience in developing software solutions for several clients.',
                  image: '008-farmer.svg',
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
                  title: null,
                  firstName: 'Rajah',
                  middleName: null,
                  lastName: 'Vijeyarajah',
                  jobTitle: 'Engineer',
                  description: 'Rajah is an engineer with over 5 years architecting, developing and deploying a wide array of software solutions.',
                  image: 'rajah_vijeyarajah_headshot.jpg',
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
                  title: null,
                  firstName: 'Sophia',
                  middleName: null,
                  lastName: 'Wall',
                  jobTitle: 'Graphic Designer',
                  description: 'Sophia is the soul behind all the current design at Blockchain+. Her ability to deliver on tight deadlines is uncanny.',
                  image: '002-nun.svg',
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
              description: null,
              defaultImage: '',
              defaultTitle: '',
              members: [
                {
                  title: null,
                  firstName: 'Kundan',
                  middleName: null,
                  lastName: 'Joshi',
                  jobTitle: 'Advisor',
                  description: 'Kundan is the founder and CEO of TheAppLabb. Kundan has grown the company to over 150 employees worldwide, making it one of the fastest growing software development companies in Toronto.',
                  image:  'kundan_joshi_headshot.jpg',
                  links: {
                    github: null,
                    linkedin: 'kundan',
                    facebook: null,
                    googlePlus: null,
                    bitbucket: null,
                    blog: null
                  }
                },
                {
                  title: null,
                  firstName: 'Tamas',
                  middleName: null,
                  lastName: 'Haiman',
                  jobTitle: 'Advisor',
                  description: 'Tamas is a senior banker with experience from tier-one banks like Barclays, CITI and Sberbank. Most recently Tamas was the Head of Global Markets for Sberbank (Switzerland) AG, where he brought the bank back into the black.',
                  image:  'tamas_haiman_headshot.jpg',
                  links: {
                    github: null,
                    linkedin: 'tamas-haiman-259620',
                    facebook: null,
                    googlePlus: null,
                    bitbucket: null,
                    blog: null
                  }
                },
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
        backgroundColor: 'rgba(245,254,254,1)',
        header: {
          title: null,
          description: null
        },
        body: {}
      },
      {
        id: 'roadmap',
        backgroundColor: 'rgb(9, 120, 172)',
        header: {
          title: 'Roadmap',
          description: null
        },
        body: {
          milestones: [
            {
              id: 'start',
              title: 'Blockchain+ was founded',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              percentComplete: 100,
              quarter: 0,
              year: 2018
            },
            {
              id: 'ico-one',
              title: 'Step One',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices.',
              percentComplete: 100,
              quarter: 0,
              year: 2018
            },
            {
              id: 'ico-two',
              title: 'Step Two',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt dui ut ornare lectus. Purus sit amet luctus venenatis lectus magna fringilla urna.',
              percentComplete: 100,
              quarter: 0,
              year: 2018
            },
            {
              id: 'ico-two',
              title: 'Step Three',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Consequat semper viverra nam libero justo laoreet sit amet cursus. Lectus proin nibh nisl condimentum id venenatis. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Morbi tristique senectus et netus et.',
              percentComplete: 90,
              quarter: 0,
              year: 2018
            },
            {
              id: 'ico-two',
              title: 'Step Four',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor.',
              percentComplete: 30,
              quarter: 0,
              year: 2018
            },{
              id: 'ico-two',
              title: 'Step Five',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Nec ullamcorper sit amet risus nullam eget felis eget nunc.',
              percentComplete: 70,
              quarter: 0,
              year: 2018
            }
            ,{
              id: 'ico-two',
              title: 'Step Six',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At augue eget arcu dictum varius duis at consectetur lorem. Ac turpis egestas maecenas pharetra. Adipiscing tristique risus nec feugiat.',
              percentComplete: 80,
              quarter: 0,
              year: 2018
            }
            ,{
              id: 'ico-two',
              title: 'Step Seven',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna sit amet purus gravida. Lectus sit amet est placerat in egestas erat imperdiet sed.',
              percentComplete: 0,
              quarter: 0,
              year: 2018
            }
          ]
        }
      },
      {
        id: 'partners',
        backgroundColor: 'rgb(9, 120, 172)',
        header: {
          title: 'Partners',
          description: null
        },
        body: {
          partners: [
            {
              name: 'Aird Berlis',
              image: 'aird-berlis-logo.png'
            },
            {
              name: 'The App Labb',
              image: 'app_lab.png'
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
    //   path: 'morph.json'
    // });
    setTimeout(() => {
      this.props.killLoadingScreen();
    }, 5000);
  }

  render() {
    let width = window.innerWidth;
    let numValue = Math.floor(width / 30);
    let height = document.documentElement.scrollHeight + 1000;

    return (
      <div id='app' className={classes.App}>
        <JellyfishContainer 
          onNewAnimationFrame={this.props.onNewAnimationFrame}
        />
        {/* <Parallax
          className={classes.parallax}
          offsetYMax={height}
          offsetYMin={-height}
          slowerScrollRate={true}
          tag="div"
        
        </Parallax> */}
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
