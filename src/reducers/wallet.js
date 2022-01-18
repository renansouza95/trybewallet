// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { FETCH_CURRENCIES, ADD_EXPENSE, GET_CURRENCY_FAIL } from '../actions';

const INITIAL_STATE = {
  expenses: [],
  currencies: [],
  error: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case GET_CURRENCY_FAIL:
    return {
      ...state,
      error: 'DEU RUIM NA API',
    };
  default:
    return state;
  }
};

export default wallet;
