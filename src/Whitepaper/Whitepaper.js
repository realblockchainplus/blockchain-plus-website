import React, { Component } from 'react';
import SectionHeader from '../../Section/SectionHeader';
import classes from './Whitepaper.css';

class Whitepaper extends Component {
  render() {
    const sectionHeaderContent = { title: 'Our Whitepaper', desc: null };
    const height = document.documentElement.clientHeight;
    const width = document.documentElement.clientWidth;
    return (
      <div id={this.props.id} className={`${classes[this.props.id]} container text-center`}>
        <div className={`${classes['whitepaper-container']}`}>
          <SectionHeader content={sectionHeaderContent} backgroundColor={'rgba(242,254,254,1)'} />
          <div className='row'>
            <div className='col-12'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio facilisis mauris sit amet. Elementum pulvinar etiam non quam lacus suspendisse faucibus.
            </div>
            <div className='col-12 hidden-md-down'>
              <iframe src = "/ViewerJS/#../pdf.pdf" width={ width / 2 } height={ height / 1.5 } allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Whitepaper;