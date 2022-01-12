import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Header from '../components/Header';
import Expenses from '../components/Expenses';

class Wallet extends Component {
  render() {
    return (
      <>
        <Header />
        <Expenses />
      </>
    );
  }
}

export default Wallet;
