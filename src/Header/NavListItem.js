import React, { Component } from 'react';
import classes from './Header.css';

class NavListItem extends Component {
  render() {
    return (
      <li className={`${classes['white']} nav-item active`}>
        <a className="btn nav-link" href='#' onClick={(ev) => { this.props.scrollToId(ev, this.props.id) }}>{this.props.name}</a>
      </li>
    );
  }
}

export default NavListItem;