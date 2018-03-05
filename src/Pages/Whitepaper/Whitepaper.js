import React, { Component } from 'react';
import SectionHeader from '../../Section/SectionHeader';
import classes from './Whitepaper.css';

class Whitepaper extends Component {
  render() {
    const sectionHeaderContent = { title: 'Our Whitepaper', desc: null };
    return (
      <div id={this.props.id} className={`${classes[this.props.id]} container text-center`}>
        <div className={`${classes['whitepaper-container']}`}>
          <SectionHeader content={sectionHeaderContent} backgroundColor={'rgba(242,254,254,1)'} />
          <div className='row'>
            <div className='col-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio facilisis mauris sit amet. Elementum pulvinar etiam non quam lacus suspendisse faucibus.
            </div>
            <div className='col-4'>
              <img src='file.svg'/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Whitepaper;