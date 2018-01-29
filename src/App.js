import React, { Component } from 'react';
import Header from './Header/Header';
import Particles from 'react-particles-js';
import classes from './App.css';

class App extends Component {
  state = {
    direction: '',
    lastScrollPos: 0
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
    const textStyle = {
      color: 'white',
      fontSize: '16px'
    };
    return (
      <div className={classes.App}>
        <Header 
          scrollTop={this.state.lastScrollPos}
        />
        <Particles
          params={{
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
                  "src": "blockchainplus_logo.png",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.6573989449548644,
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
          }}
          style={{
            height: '100%',
            width: '100%',
            display: 'block',
            position: 'absolute',
            backgroundColor: '#3b8298'
          }}
        />
        <div className={`${classes['section']}`} id="sectionOne" style={{ height: '100%' }}>
          <div className={`container`} style={{ margin: 'auto auto' }}>
            <div className="row" style={{ display: 'flex', alignItems: 'center' }}>
              <div className="col-lg-6 col-12">
                <img src="logo_text.png" style={{ height: '50px', marginBottom: '10px' }} />
                <p style={textStyle}>An evolution in blockchain. Solving the problem of private vs. public blockchain
                  by utilizing a witness-based ledger system</p>
                <button className="btn btn-primary" data-toggle="modal" data-target="#investorModal">Investor Demonstration</button>
              </div>
              <div className="col-lg-6">
                <iframe
                  src="https://www.youtube.com/embed/KptUyn8Z5ps?rel=0&amp;controls=1&amp;showinfo=0"
                  frameBorder="0"
                  gesture="media"
                  allow="encrypted-media"
                  allowFullScreen="">
                </iframe>
              </div>
            </div>
          </div>
        </div>
        <div className={`${classes['section']} py-5`} id="sectionTwo" style={{ backgroundColor: "#F2FEFE" }}>
          <div className={`${classes['box-container']} container`}>
            <div className={`${classes['box-row']} row`}>
              <div className={`${classes['box']} col-xs-12 col-sm-4`} id="boxOne">
                <div className={classes['box-icon']}>
                  <img src="INFORMATION-PRIVACY.png" />
                </div>
                <div className={classes['box-header']}>
                  <h4>INFORMATION PRIVACY</h4>
                </div>
                <div className={classes['box-text']}>
                  <p>Unlike Blockchain, information is not stored on every node but instead only on participating nodes</p>
                </div>
              </div>
              <div className={`${classes['box']} col-xs-12 col-sm-4`} id="boxTwo">
                <div className={classes['box-icon']}>
                  <img src="SMALL-BUSINESS-FIRST.png" />
                </div>
                <div className={classes['box-header']}>
                  <h4>SMALL BUSINESS FIRST</h4>
                </div>
                <div className={classes['box-text']}>
                  <p>Practical and useful ledger system for transactional purposes.</p>
                </div>
              </div>
              <div className={`${classes['box']} col-xs-12 col-sm-4`} id="boxThree">
                <div className={classes['box-icon']}>
                  <img src="CUTTING-TRANSACTION-SPEED.png" />
                </div>
                <div className={classes['box-header']}>
                  <h4>CUTTING TRANSACTION SPEED</h4>
                </div>
                <div className={classes['box-text']}>
                  <p>Parallel transaction happens between transactional nodes, so there is no centralized blockchain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={`${classes['section']} py-5`} id="sectionThree" style={{ backgroundColor: "#333" }}>          
        </div>
        <div className={`${classes['section']} py-5`} id="sectionFour" style={{ backgroundColor: "#444" }}>
        </div> */}
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
