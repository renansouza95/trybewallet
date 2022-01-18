import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { expenses, currenciesArray, getCurrencyThunk } from '../actions';
import getCurrencyAPI from '../services/fetchapi';

class Expenses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: 0,
      currency: '',
      tag: '',
      method: '',
      description: '',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const { saveCurrencies } = this.props;
    const response = await getCurrencyAPI();
    const coinArray = Object.keys(response).map((coin) => coin);
    const filterMyArray = coinArray.filter((coin) => coin !== 'USDT');
    saveCurrencies(filterMyArray);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  handleClick() {
    const { saveExpenses, saveExchangeRate } = this.props;
    saveExpenses(this.state);
    saveExchangeRate();
    this.setState({ value: 0 });
  }

  render() {
    const { value, currency, tag, method, description } = this.state;
    const { getCurrencies } = this.props;
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
            id="currency"
            value={ currency }
            data-testid="currency-input"
            onChange={ this.handleChange }
          >
            {getCurrencies.map((coin, index) => (
              <option
                key={ index }
                value={ coin }
              >
                { coin }
              </option>))}
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            name="tag"
            id="tag"
            value={ tag }
            data-testid="tag-input"
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <label htmlFor="method">
          Método
          <select
            name="method"
            id="method"
            value={ method }
            data-testid="method-input"
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
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
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  getCurrencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  saveExpenses: (payload) => dispatch(expenses(payload)),
  saveCurrencies: (payload) => dispatch(currenciesArray(payload)),
  saveExchangeRate: (payload) => dispatch(getCurrencyThunk(payload)),
});

Expenses.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  saveExpenses: PropTypes.func.isRequired,
  saveCurrencies: PropTypes.func.isRequired,
  saveExchangeRate: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
