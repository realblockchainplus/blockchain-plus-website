import React, { Component } from 'react';
import NavListItem from './NavListItem';
import classes from './Header.css';

class NavList extends Component {
  render() {
    return (
      this.props.content.map((navItem, index) => {
        const { name, id } = navItem;
        return <NavListItem
          key={index}
          name={name}
          id={id}
          scrollToId={this.props.scrollToId}
        />
      })
    );
  }
}

export default NavList;