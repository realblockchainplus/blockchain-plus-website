import React, { Component } from 'react';
import NavListItem from './NavListItem';
import { Link } from 'react-router-dom';
import classes from './Header.css';

class NavList extends Component {
  render() {
    return (
      this.props.content.map((navItem, index) => {
        const { name, page, id } = navItem;
        return <NavListItem
          key={index}
          name={name}
          page={page}
          id={id}
          scrollToId={this.props.scrollToId}
        />
      })
    );
  }
}

export default NavList;