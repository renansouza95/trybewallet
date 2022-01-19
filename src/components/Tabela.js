import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../actions';

class Tabela extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    const { despesas, editExpenses } = this.props;
    const filteredArray = despesas.filter((element) => element.id !== id);
    editExpenses(filteredArray);
  }

  render() {
    const { despesas } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {despesas.map((element) => (
            <tr key={ element.id }>
              <td>
                { element.description }
              </td>
              <td>
                { element.tag }
              </td>
              <td>
                { element.method }
              </td>
              <td>
                { element.value }
              </td>
              <td>
                { element.exchangeRates[element.currency].name.split('/')[0] }
              </td>
              <td>
                { Number(element.exchangeRates[element.currency].ask).toFixed(2) }
              </td>
              <td>
                { Number(element.value
                  * element.exchangeRates[element.currency].ask).toFixed(2) }
              </td>
              <td>
                Real
              </td>
              <td>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => this.handleClick(element.id) }
                >
                  Excluir
                </button>
              </td>
            </tr>))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  despesas: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  editExpenses: (payload) => dispatch(deleteExpense(payload)),
});

Tabela.propTypes = {
  despesas: PropTypes.arrayOf(PropTypes.object).isRequired,
  editExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabela);
