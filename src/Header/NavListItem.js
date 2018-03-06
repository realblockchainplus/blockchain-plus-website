import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.css';

class NavListItem extends Component {
  addDelay(ev) {
    setTimeout(() => { this.props.scrollToId(ev, this.props.id) }, 1);
  }
  render() {
    const pagePath = `/${this.props.page}`;
    return (
      <li className={`${classes['white']} ${classes['nav-item']}`}>
        <NavLink activeClassName='active' className={`btn nav-link ${classes['nav-link']}`} to={pagePath} onClick={(ev) => { this.addDelay(ev) }}>{this.props.name}</NavLink>
      </li>
    );
  }
}

export default NavListItem;