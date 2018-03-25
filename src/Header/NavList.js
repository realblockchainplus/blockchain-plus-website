import React, { Component } from 'react';
import NavListItem from './NavListItem';
// import { Link } from 'react-router-dom';
// import classes from './Header.css';

class NavList extends Component {
  render() {
    return (
      this.props.content.map((navItem, index) => {
        const { id, page } = navItem;
        return <NavListItem
          key={index}
          page={page}
          id={id}
          label={this.props.lang[id]}
          scrollToId={this.props.scrollToId}
        />
      })
    );
  }
}

export default NavList;