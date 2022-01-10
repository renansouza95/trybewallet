// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCY_SUCCESS, GET_CURRENCY_FAIL } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
  error: '',
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCY_SUCCESS:
    return {
      ...state,
      currencies: action.currencies,
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

export default walletReducer;
