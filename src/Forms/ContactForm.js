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
    height: 0,
    width: 0,
    isLoading: false,
    isSent: false
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', () => {
      this.updateDimensions();
    });
  }
  updateDimensions() {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
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
    const formControlClass = window.matchMedia('(min-width: 992px)').matches ? 'form-control' : 'form-control-sm';
    const numRows = window.matchMedia('(min-width: 992px)').matches ? 4 : 2;
    console.log(formControlClass);
    return (
      <div className='p-sm-3'>
        <Form
          onSubmit={(values) => {
            const valueArray = [ values ];
            this.handleFormSubmit(valueArray);
          }}
          validate={(values) => {
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
                  <div className={`${classes['form-field']} col-12 col-sm-6 my-2 form-group`}>
                    <label htmlFor='name'><h5><strong>NAME</strong></h5></label>
                    <Text
                      field='userName'
                      name='name'
                      id='name'
                      placeholder='Your Name'
                      className={`${formControlClass}`}
                    />
                  </div>
                  <div className={`${classes['form-field']} col-12 col-sm-6 my-2`}>
                    <label htmlFor='email'><h5><strong>EMAIL</strong></h5></label>
                    <Text
                      field='userEmail'
                      name='email'
                      id='email'
                      placeholder='example@email.com'
                      className={`${formControlClass}`}
                    />
                  </div>
                  <div className={`${classes['form-field']} col-12 col-sm-6 my-2`}>
                    <label htmlFor='company'><h5><strong>COMPANY</strong></h5></label>
                    <Text
                      field='userCompany'
                      name='company'
                      id='company'
                      placeholder='Company Name'
                      className={`${formControlClass}`}
                    />
                  </div>
                  <div className={`${classes['form-field']} col-12 col-sm-6 my-2`}>
                    <label htmlFor='category'><h5><strong>CATEGORY</strong></h5></label>
                    <Select
                      field='userCategory'
                      name='category'
                      id='category'
                      options={options}
                      className={`${formControlClass}`}
                    />
                  </div>
                  <div className={`${classes['form-field']} col-12`}>
                    <label style={{ display: 'inline-block' }} htmlFor='message'><h5><strong>MESSAGE</strong></h5></label>
                    <TextArea
                      field='userMessage'
                      name='message'
                      id='message'
                      placeholder='Enter your message here...'
                      className={`${formControlClass}`}
                      rows={numRows}
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