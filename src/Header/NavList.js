import React, { Component } from 'react';
import NavListItem from './NavListItem';
import { Link } from 'react-router-dom';

class NavList extends Component {
  render() {
    return (
      <div>
        {this.props.content.map((navItem, index) => {
          const { name, id } = navItem;
          return <NavListItem
            key={index}
            name={name}
            id={id}
            scrollToId={this.props.scrollToId}
          />
        })}
        <Link to='/'>Home</Link>,
        <Link to='/whitepaper'>Whitepaper</Link>
      </div>
    );
  }
}

export default NavList;