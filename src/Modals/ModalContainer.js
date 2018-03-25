import React, { Component } from 'react';
import Modal from 'react-modal';
import ContactForm from '../Forms/ContactForm';
import classes from './Modal.css';

class ModalContainer extends Component {
  render() {
    const { formName, title, isOpen, onRequestClose } = this.props;
    const opacity = isOpen ? 1 : 0;
    const ModalStyle = {
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'      
      },
      content: {
        transition: 'opacity 150ms',
        overflow: 'scroll',
        opacity
      }
    };
    const xButtonStyle = {
      top: 15,
      right: 15,
      position: 'absolute'
    };
    return (
      <Modal
        className={`${classes['modal-container']}`}
        style={ModalStyle}
        isOpen={isOpen}
        contentLabel="Modal"
        ariaHideApp={false}
        closeTimeoutMS={150}
      >
        {/* <img className={`${classes['modal-background-image']}`} src='jellyfish-background.svg' /> */}
        <h2 style={{ textTransform: 'uppercase' }}><strong>{title}</strong></h2>
        <hr/>
        {formName === 'contact' &&
          <ContactForm
            onRequestClose={onRequestClose}
          />
        }
        <button
          type="button"
          className="close"
          onClick={onRequestClose}
          style={xButtonStyle}
        >&times;</button>
      </Modal>
    );
  }
}

export default ModalContainer;