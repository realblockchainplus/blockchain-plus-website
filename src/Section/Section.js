import React, { Component } from 'react';
import classes from '../App.css';


class Section extends Component {
  render() {
    const textStyle = {
      color: 'white',
      fontSize: '16px'
    };
    return (
      <div className={`${classes['section']}`} id={this.props.id} style={{ height: '100%' }}>
        <div className={`container`} style={{ margin: 'auto auto' }}>
          <div className="row" style={{ display: 'flex', alignItems: 'center' }}>
            <div className="col-lg-6 col-12">
              <img src="logo_text.svg" style={{ height: '50px', marginBottom: '10px' }} />
              <p style={textStyle}>An evolution in blockchain. Solving the problem of private vs. public blockchain
                by utilizing a witness-based ledger system</p>
              <button className="btn btn-primary" data-toggle="modal" data-target="#investorModal">Investor Demonstration</button>
            </div>
            {/* <div className="col-lg-6">
              <iframe
                src="https://www.youtube.com/embed/KptUyn8Z5ps?rel=0&amp;controls=1&amp;showinfo=0"
                frameBorder="0"
                gesture="media"
                allow="encrypted-media"
                allowFullScreen="">
              </iframe>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Section;