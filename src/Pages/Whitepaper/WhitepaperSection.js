import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import ModalContainer from '../../Modals/ModalContainer';
import classes from './Whitepaper.css';

class WhitepaperSection extends Component {
  constructor() {
    super();
    this.state = {
      isContactModalOpen: false
    }
  }

  handleOpenModal() {
    this.setState({ isContactModalOpen: true });
  }
  handleCloseModal() {
    this.setState({ isContactModalOpen: false });
  }
  render() {
    return (
      <div className={`${classes['whitepaper-section']} row py-5`}>
        <div className='col-12 col-md-6 py-5'>
          <img src='text-lines.svg' alt='whitepaper icon'/>
        </div>
        <div className='col-12 col-md-6 py-5 text-center'>
          <h2>Want to get more details?</h2>
          <p>Read our whitepaper</p>
          {/* <a download href='/pdf.pdf' target='_blank'><button className='btn btn-primary p-3'>Request our Whitepaper</button></a> */}
          <button className='btn btn-primary p-3' onClick={() => this.handleOpenModal()}>Request our Whitepaper</button>
        </div>
        <ModalContainer
          formName='contact'
          title='Request Whitepaper'
          isOpen={this.state.isContactModalOpen}
          onRequestClose={() => this.handleCloseModal()}
        />
      </div>
    );
  }
}

export default WhitepaperSection;