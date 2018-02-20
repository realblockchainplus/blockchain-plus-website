import React, { Component } from 'react';
import classes from './Header.css';
import NavList from './NavList';

class Header extends Component {
  scrollToID(element) {
    const id = element.dataset.id;
    const offSet = 74;
    const target = document.getElementById(id);
    const targetOffset = target.offsetTop - offSet;
    const htmlElement = document.documentElement;
    const currentScrollTop = htmlElement.scrollTop;
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
            <NavList
              navItems={this.props.navItems} 
            />
          </div>
        </nav>
      </div>
    )
  }
}

export default Header;
