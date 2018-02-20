import React, { Component } from 'react';

class NavListItem extends Component {
  render() {
    return (
      <li className="nav-item active">
        <a className="nav-link" href={`#${this.props.href}`}>{this.props.name}</a>
      </li>
    );
  }
}

export default NavListItem;