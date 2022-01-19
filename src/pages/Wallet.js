import React, { Component } from 'react';
import Header from '../components/Header';
import Expenses from '../components/Expenses';
import Tabela from '../components/Tabela';

class Wallet extends Component {
  render() {
    return (
      <>
        <Header />
        <Expenses />
        <Tabela />
      </>
    );
  }
}

export default Wallet;
