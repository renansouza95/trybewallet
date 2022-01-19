import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveExpenses, getCurrencyThunk } from '../actions';
import getCurrencyAPI from '../services/fetchapi';

class Expenses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      currency: 'USD',
      tag: 'Alimentação',
      method: 'Dinheiro',
      description: '',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.mapCurrencies = this.mapCurrencies.bind(this);
  }

  componentDidMount() {
    const { saveCurrencies } = this.props;
    saveCurrencies();
  }

  mapCurrencies() {
    const { getCurrencies } = this.props;
    const coinArray = Object.keys(getCurrencies).map((coin) => coin);
    const filteredArray = coinArray.filter((coin) => coin !== 'USDT');
    return filteredArray;
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  // Fiz sem o Thunk
  // Não consegui utilizar o this.setState antes de chamar addExpenses por causa da assincronicidade da atualizacao do estado React
  async handleClick() {
    const { addExpenses } = this.props;
    const response = await getCurrencyAPI();
    addExpenses({ ...this.state, exchangeRates: response });
    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: '',
      description: '',
    }));
  }

  render() {
    const { value, currency, tag, method, description } = this.state;
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
            {this.mapCurrencies().map((coin, index) => (
              <option
                key={ index }
                value={ coin }
                id="currency"
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
  addExpenses: (payload) => dispatch(saveExpenses(payload)),
  saveCurrencies: () => dispatch(getCurrencyThunk()),
  // saveExchange: () => dispatch(saveExchangeThunk()),
});

Expenses.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  addExpenses: PropTypes.func.isRequired,
  saveCurrencies: PropTypes.func.isRequired,
  // saveExchange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
