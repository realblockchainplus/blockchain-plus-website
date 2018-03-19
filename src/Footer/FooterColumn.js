import React, { Component } from 'react';
import classes from './Footer.css';
import FooterHeader from './FooterHeader';
import FooterItem from './FooterItem';

class FooterColumn extends Component {
  render() {
    const { content, lang } = this.props;
    const { title, items } = lang;
    return (
      <div className={`${classes['footer-column']} col-12 col-md-2`}>
        <FooterHeader 
          title={title}
        />
        {content.map((item, index) => {
          const { id, link } = item;
          console.log(id);
          return <FooterItem
            key={index}         
            id={id}
            link={link}
            label={items[id]}
          />
        })}        
      </div>
    );
  }
}

export default FooterColumn;