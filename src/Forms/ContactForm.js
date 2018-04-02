import React, { Component } from 'react';
import { Form, Text, TextArea, Select } from 'react-form';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import classes from './Form.css';

const options = [
 {
  label: 'Investor',
  value: 'investor'
 },
 {
  label: 'Company',
  value: 'company'
 },
 {
   label: 'Startup',
   value: 'startup'
 },
 {
  label: 'Dreamer',
  value: 'dreamer'
 }
];

class ContactForm extends Component {
  state = {
    isLoading: false,
    isSent: false
  }
  handleFormSubmit(values) {
    const mail = this.buildMail(values[0]);
    this.setState({ isLoading: true });
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'process.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = () => {
      if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        this.setState({ isSent: true, isLoading: false }, () => setTimeout(() => { this.props.onRequestClose()}, 1500));
      }
      else {
      }
    }
    xhr.send(`name=${mail.name}&email=${mail.email}&company=${mail.company}&category=${mail.category}&message=${mail.message}`);
  }
  buildMail(values) {
    const mailObj = {
      name: values.userName,
      email: values.userEmail,
      company: values.userCompany,
      category: values.userCategory,
      message: values.userMessage
    };
    return mailObj;
  }
  render() {
    const btnClass = this.state.isSent ? 'btn-success' : 'btn-primary';
    return (
      <div className='p-3'>
        <Form
          onSubmit={(values) => {
            const valueArray = [ values ];
            this.handleFormSubmit(valueArray);
          }}
          validate={values => {
            const { userName, userEmail } = values;
            return {
              userName: !userName ? 'Please enter your name' : undefined,
              userEmail: !userEmail ? 'Please enter your email' : undefined
            }
          }}
          render={({ submitForm }) => {
            return (
              <form onSubmit={submitForm}>
                <div className='row'>
                  <div className={`${classes['form-field']} col-12 col-lg-6 my-2`}>
                    <h5><strong>NAME</strong></h5>
                    <Text
                      field='userName'
                      name='name'
                      placeholder='Your Name'
                      className='form-control'
                    />
                  </div>
                  <div className={`${classes['form-field']} col-12 col-lg-6 my-2`}>
                    <h5><strong>EMAIL</strong></h5>                    
                    <Text
                      field='userEmail'
                      name='email'
                      placeholder='example@email.com'
                      className='form-control'
                    />
                  </div>
                  <div className={`${classes['form-field']} col-12 col-lg-6 my-2`}>
                    <h5><strong>COMPANY</strong></h5>                    
                    <Text
                      field='userCompany'
                      name='company'
                      placeholder='Company Name'
                      className='form-control'
                    />
                  </div>
                  <div className='col-12 col-lg-6 my-2'>
                    <h5><strong>CATEGORY</strong></h5>
                    <Select
                      field='userCategory'
                      options={options}
                      className='form-control'
                    />
                  </div>
                  <div className={`${classes['form-field']} col-12`}>
                    <h5><strong>MESSAGE</strong></h5>
                    <TextArea
                      field='userMessage'
                      name='message'
                      placeholder='Enter your message here...'
                      className='form-control'
                      rows={4}
                    />
                  </div>
                </div>
                <div className={`${classes['form-submit']} float-right my-3`}>
                  <button 
                    disabled={this.state.isLoading} 
                    className={`btn ${btnClass}`} 
                    type='submit'
                  >
                    {this.state.isLoading === false && this.state.isSent === false &&
                      'SEND REQUEST'
                    }
                    {this.state.isLoading === true &&
                      <div>SENDING... <FontAwesomeIcon size='1x' icon={faSpinner} spin={true}/></div>
                    }
                    {this.state.isSent === true &&
                      <div>SENT <FontAwesomeIcon size='1x' icon={faCheck}/></div>
                    }
                  </button>
                </div>
              </form>
            );
          }}
        ></Form>
      </div>
    );
  }
}

export default ContactForm;