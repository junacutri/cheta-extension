import React, { Component } from 'react';
import $ from 'jquery';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      uniqueCode: ''
    }
  }

  componentDidMount() {
    this.setState({
      uniqueCode: `ChETA${this.makeid(24)}`
    })
    this.loadJquery();
  }

  loadJquery = () => {

  }

  makeid = (length) => {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

  detectUniqueCode = () => {

  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>ChETA</h1>
          <p>Chrome Extension for Text Analysis</p>
        </div>
        <div className="contentBox">
          <div className="no-tf-dtctd">
            <p>No textfield detected</p>
            <p>To start analysing a textfield, <span className="resalted">follow the steps</span>:</p>
            <p>1. <span className="resalted">Locate the field</span> you want to analyse</p>
            <p>2. Replace or <span className="resalted">add</span> anywhere on the field <span className="resalted">the following code</span>:</p>
            <p>Code: <span className="resalted">{this.state.uniqueCode}</span></p>
            <p>3. When ready, click next</p>
            <a href="#" onClick={this.detectUniqueCode()}>Next</a>
          </div>
        </div>
      </div>
    )
  };
}

export default Home;
