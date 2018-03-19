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
        {/* <NavLink activeClassName='active' className={`btn nav-link ${classes['nav-link']}`} to={pagePath} onClick={(ev) => { this.addDelay(ev) }}>{this.props.name}</NavLink> */}
        <a className={`btn nav-link ${classes['nav-link']}`} onClick={(ev) => { this.props.scrollToId(ev, this.props.id)}}>{this.props.label}</a>
      </li>
    );
  }
}

export default NavListItem;