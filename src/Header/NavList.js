import React, { Component } from 'react';
import NavListItem from './NavListItem';
import classes from './Header.css';

class NavList extends Component {
  render() {
    return (
      <div className={`${classes.white} collapse navbar-collapse`} id="mainNavbar">
        <ul className="nav ml-auto" role="tablist">
          {this.props.navItems.map((navItem, index) => {
            const { name, href } = navItem;
            return <NavListItem
              key={index}
              name={name}
              href={href}
            />
          })}
        </ul>
      </div>
    );
  }
}

export default NavList;