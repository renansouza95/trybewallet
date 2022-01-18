// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSE,
  FETCH_CURRENCIES,
  GET_EXCHANGE_SUCCESS } from '../actions';

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
  case GET_EXCHANGE_SUCCESS:
    console.log(action);
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
};

export default wallet;
