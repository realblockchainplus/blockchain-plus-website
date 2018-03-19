import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap';
import classes from './Header.css';
import NavList from './NavList';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      scrollTop: 0,
      direction: '',
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', (ev) => {
      let lastScrollPos = this.state.scrollTop;
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
        scrollTop: newScrollPos
      });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.scrollTop === 0 && nextState.scrollTop !== 0) {
      return true;
    }
    else if (this.state.scrollTop !== 0 && nextState.scrollTop === 0) {
      return true;
    }
    else if (this.state.collapsed !== nextState.collapsed) {
      return true
    }
    else if (this.props.lang !== nextProps.lang) {
      return true;
    }
    else {
      console.log(this.props, nextProps);
      return false;
    }
    return true;
  }

  toggleNavbar() {
    if (window.innerWidth < 992) {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }
  }

  scrollToId(ev, id) {
    const offSet = 74;
    const target = document.getElementById(id)
    const targetOffset = target ? target.offsetTop - offSet : 0;
    let start = null;
    let scrollTop = document.documentElement.scrollTop;
    const duration = 750;
    const step = (timestamp) => {
      start = start || timestamp;
      const progress = timestamp - start;
      const time = Math.min(1, ((timestamp - start) / duration));
      scrollTop = document.documentElement.scrollTop;
      const result = scrollTop - ((time * time) * (scrollTop - targetOffset));
      window.scrollTo(0, result);
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
      else {
        this.toggleNavbar();
      }
    }
    if (scrollTop !== targetOffset) {
      window.requestAnimationFrame(step);
    }
    else {
      this.toggleNavbar();
    }
  };

  render() {
    const isMobile = window.innerWidth < 992;
    const scrollStyle = this.state.scrollTop !== 0 || (this.state.collapsed === false && isMobile === true) ? 'nav-opaque' : 'nav-transparent';
    return (
      <div>
        <Navbar light className={`navbar fixed-top navbar-expand-md ${classes[scrollStyle]}`}>
          <div className='container'>
            <NavbarBrand href="/">
              <img src="blockchainplus_header_brand.png" alt="Blockchain Logo" style={{ height: '50px' }}/>
            </NavbarBrand>
            <NavbarToggler style={{ position: 'absolute', color: 'white' }} onClick={this.toggleNavbar} />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav className='ml-auto' navbar>
                <NavList
                  scrollToId={(ev, id) => {this.scrollToId(ev, id)}}
                  content={this.props.content}
                  lang={this.props.lang}
                />
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    )
  }
}

export default Header;
