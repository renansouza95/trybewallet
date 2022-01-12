// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSE, GET_CURRENCY } from '../actions';
// import INITIAL_STATE from './initialState';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: action.payload,
    };
  case GET_CURRENCY:
    return {
      ...state,
      wallet: {
        currencies: action.payload,
      },
    };
  default:
    return state;
  }
};

export default wallet;
