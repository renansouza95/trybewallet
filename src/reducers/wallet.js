// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCY_SUCCESS } from '../actions';
// import INITIAL_STATE from './initialState';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCY_SUCCESS:
    return {
      ...state,
      wallet: {
        currencies: action.currencies,
      },
    };
  // case GET_CURRENCY_FAIL:
  //   return {
  //     ...state,
  //     error: 'DEU RUIM NA API',
  //   };
  default:
    return state;
  }
};

export default wallet;
