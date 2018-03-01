import React, { Component } from 'react';
import classes from './Footer.css';
import FooterHeader from './FooterHeader';
import FooterItem from './FooterItem';

class FooterColumn extends Component {
  render() {
    const { title, items } = this.props.content;
    return (
      <div className={`${classes['footer-column']} col-12 col-md-2`}>
        <FooterHeader 
          title={title}
        />
        {items.map((item, index) => {
          return <FooterItem
            key={index}
            content={item}
            index={index}
          />
        })}        
      </div>
    );
  }
}

export default FooterColumn;