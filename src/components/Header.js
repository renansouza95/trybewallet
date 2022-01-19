import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);
    this.somarExpenses = this.somarExpenses.bind(this);
  }

  // Feito com ajuda do Procópio na monitoria de projeto
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  // ParseFloat para transformar string em number
  // Utilizei element.currency para pegar a moeda utilizada no input e a propriedade 'ask' do retorno da API para calcular o cambio da moeda
  somarExpenses() {
    const { expenses } = this.props;
    const somatoria = expenses.reduce((acc, element) => {
      const inputValue = parseFloat(element.value);
      const cambioMoeda = parseFloat(element.exchangeRates[element.currency].ask);
      return (inputValue * cambioMoeda) + acc;
    }, 0);
    return Number(somatoria).toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <h1>TrybeWallet</h1>
        <div className="user-info">
          <span data-testid="email-field">
            Email:
            { email }
          </span>
          <span data-testid="total-field">
            Despesa total:
            { this.somarExpenses() }
          </span>
          <span data-testid="header-currency-field">
            BRL
          </span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
