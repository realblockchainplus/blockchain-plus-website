import React, { Component } from 'react';
import Web3 from 'web3';
import classes from './CrowdsalePage.css';

class CrowdsalePage extends Component {
  constructor() {
    super();
    this.state = {
      contractAddress: '0xB31E221D444b809CefE0b139d04909fa002F8BBa',
      ethInContract: 0
    }
    this.web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/SG3z8qbWkyg2PEQUJGXi'));
    this.updateInterval = null;
  }
  componentDidMount() {
    let ethInContract = 0;
    this.web3.eth.getBalance('0x7beA89576840D73F5E63B8e99bb2B666C8AdC018').then(result => {
      ethInContract = this.web3.utils.fromWei(result);
      console.log('updated ethInContract');
      this.setState({ ethInContract });
    });
    this.updateInterval = setInterval(() => {
      this.updateEthInContract();
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval);
  }

  updateEthInContract() {
    let ethInContract = 0;
    this.web3.eth.getBalance('0x7beA89576840D73F5E63B8e99bb2B666C8AdC018').then(result => {
      ethInContract = this.web3.utils.fromWei(result);
      console.log('updated ethInContract');
      this.setState({ ethInContract });
    });
  }

  render() {
    return (
      <div id={this.props.id} className='container' style={{ paddingTop: '70px' }}>
        <div className={`${classes[this.props.id]} p-5 text-center`} style={{ backgroundColor: 'rgba(245, 254, 254, 1)' }}>
          <div className='jumbotron text-center'>
            <h1 className='display-5'>Blockchain+ Test Crowdsale</h1>
            <p className='lead'><strong>{this.state.contractAddress}</strong></p>
            <h1 className='display-5'>Total Raised</h1>
            <p className='lead'><strong>{this.state.ethInContract} ETH</strong></p>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-6'>
                <h4>Presale Rate</h4>
                <p>1 ETH = 5 TT</p>
                <h4>Max Supply</h4>
                <p>100 TT</p>
                <h4>Goal</h4>
                <p>2 ETH</p>
              </div>
              <div className='col-6'>
                <h4>Start Date</h4>
                <p>start date</p>
                <h4>End Date</h4>
                <p>end date</p>
                <h4>Hard Cap</h4>
                <p>500 ETH</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CrowdsalePage;