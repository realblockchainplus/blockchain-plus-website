import React, { Component } from 'react';
import classes from './Header.css';

class Header extends Component {
  scrollToID(element) {
    const id = element.dataset.id;
    const offSet = 74;
    const target = document.getElementById(id);
    const targetOffset = target.offsetTop - offSet;
    const htmlElement = document.documentElement;
    const currentScrollTop = htmlElement.scrollTop;
    console.log(currentScrollTop, targetOffset);
    htmlElement.animate([
      { scrollTop: currentScrollTop },
      { scrollTop: targetOffset }
    ], {
      duration: 750,
      iterations: 1
    });
  };

  render() {
    const navStyle = this.props.scrollTop === 0 ? 'nav-transparent' : 'nav-opaque';
    return (
      <div className={classes.Header}>
        <nav className={`navbar fixed-top navbar-toggleable-md navbar-light ${classes[navStyle]}`}>
          <div className="container">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">
              <img src="blockchainplus_header_brand.png" style={{ height: '50px' }}/>
            </a>        
            <div className={`${classes.white} collapse navbar-collapse`} id="mainNavbar">
              <ul className="nav ml-auto" role="tablist">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#sectionOne">Overview</a>
                </li>
                <li className="nav-item">
                  {/* <button className="nav-link" data-id="sectionTwo" onClick={(ev) => this.scrollToID(ev.target)}>Key Concepts</button> */}
                  <a className="nav-link" href="#sectionTwo">Overview</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#sectionThree">FAQ</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#sectionFour">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header;
