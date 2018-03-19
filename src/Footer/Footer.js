import React, { Component } from 'react';
import FooterColumn from './FooterColumn';
import FooterBrand from './FooterBrand';
import FooterLanguage from './FooterLanguage';
import classes from './Footer.css';

class Footer extends Component {
  render() {
    const { content, lang } = this.props;
    const { brand, columns, languages } = content;
    return (
      <div className={`${classes['footer']}`}>
        <div className={`${classes['footer-container']} container py-3`}>
          <div className='row'>
            <FooterBrand brand={brand} />
            {columns.map((column, index) => {
              const { id, items } = column;
              console.log(id);
              return <FooterColumn
                key={index}
                content={items}
                lang={lang.columns[id]}
              />
            })}
            <FooterLanguage 
              content={languages}
              lang={lang.languages} />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;