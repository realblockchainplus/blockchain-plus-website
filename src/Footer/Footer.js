import React, { Component } from 'react';
import FooterColumn from './FooterColumn';
import FooterBrand from './FooterBrand';
import FooterLanguage from './FooterLanguage';
import classes from './Footer.css';

class Footer extends Component {
  render() {
    const { columns } = this.props.content;
    return (
      <div className={`${classes['footer']}`}>
        <div className={`${classes['footer-container']} container py-3`}>
          <div className='row'>
            <FooterBrand />
            {columns.map((column, index) => {
              return <FooterColumn
                key={index}
                content={column}
                index={index}
              />
            })}
            <FooterLanguage />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;