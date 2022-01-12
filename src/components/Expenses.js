import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { expenses } from '../actions';

class Expenses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      currency: '',
      tag: '',
      method: '',
      description: '',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  render() {
    const { value, currency, tag, method, description } = this.state;
    const { saveExpenses } = this.props;
    return (
      <form className="expenses">
        <label htmlFor="value">
          Valor
          <input
            type="text"
            name="value"
            value={ value }
            data-testid="value-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            name="currency"
            value={ currency }
            data-testid="currency-input"
            onChange={ this.handleChange }
          >
            <option value="USD">USD</option>
            <option value="CAD">CAD</option>
            <option value="GBP">GBP</option>
            <option value="ARS">ARS</option>
            <option value="BTC">BTC</option>
            <option value="LTC">LTC</option>
            <option value="EUR">EUR</option>
            <option value="JPY">JPY</option>
            <option value="CHF">CHF</option>
            <option value="AUD">AUD</option>
            <option value="CNY">CNY</option>
            <option value="ILS">ILS</option>
            <option value="ETH">ETH</option>
            <option value="XRP">XRP</option>
            <option value="DOGE">DOGE</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            name="tag"
            value={ tag }
            data-testid="tag-input"
            onChange={ this.handleChange }
          >
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
        <label htmlFor="method">
          Método
          <select
            name="method"
            value={ method }
            data-testid="method-input"
            onChange={ this.handleChange }
          >
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            value={ description }
            data-testid="description-input"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          onClick={ () => {
            saveExpenses(this.state);
          } }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveExpenses: (payload) => dispatch(expenses(payload)),
});

Expenses.propTypes = {
  saveExpenses: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Expenses);
