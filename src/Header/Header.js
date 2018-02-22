import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import classes from './Header.css';
import NavList from './NavList';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  scrollToId(ev, id) {
    ev.preventDefault();
    const offSet = 74;
    const target = document.getElementById(id)
    const targetOffset = target ? target.offsetTop - offSet : 0;
    let start = null;
    const duration = 750;
    const step = (timestamp) => {
      start = start || timestamp;
      const progress = timestamp - start;
      const time = Math.min(1, ((timestamp - start) / duration));
      const result = this.props.scrollTop - ((time * time) * (this.props.scrollTop - targetOffset));
      window.scrollTo(0, result);
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }
    window.requestAnimationFrame(step);
  };

  render() {
    const isMobile = window.innerWidth < 768;
    const scrollStyle = this.props.scrollTop !== 0 || (this.state.collapsed === false && isMobile === true) ? 'nav-opaque' : 'nav-transparent';
    return (
      <div>
        <Navbar light className={`navbar fixed-top navbar-toggleable-md ${classes[scrollStyle]}`}>
          <div className='container'>
            <NavbarBrand href="/">
              <img src="blockchainplus_header_brand.png" style={{ height: '50px' }}/>
            </NavbarBrand>
            <div style={{ display: 'inline', position: 'fixed', right: 0 }} className="mr-2">
              <NavbarToggler style={{ color: 'white' }} onClick={this.toggleNavbar} />
            </div>
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav className='ml-auto' navbar>
                <NavList
                  scrollToId={(ev, id) => {this.scrollToId(ev, id)}}
                  content={this.props.content} 
                />
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        {/* <nav className={`navbar fixed-top navbar-toggleable-md navbar-light ${classes[navStyle]}`}>
          <div className="container">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">
              <img src="blockchainplus_header_brand.png" style={{ height: '50px' }}/>
            </a>        
            <NavList
              content={this.props.content} 
            />
          </div>
        </nav> */}
      </div>
    )
  }
}

export default Header;
