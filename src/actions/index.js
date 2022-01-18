import getCurrencyAPI from '../services/fetchapi';

// Action Type
export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';
export const GET_EXCHANGE_SUCCESS = 'GET_EXCHANGE_SUCCESS';
export const GET_EXCHANGE_FAIL = 'GET_EXCHANGE_FAIL';

// Action Creator
export const login = (payload) => ({ type: LOGIN, payload });
export const expenses = (payload) => ({ type: ADD_EXPENSE, payload });
export const currenciesArray = (payload) => ({ type: FETCH_CURRENCIES, payload });
export const getExchangeSuccess = (payload) => ({ type: GET_EXCHANGE_SUCCESS, payload });
export const getExchangeFail = () => ({ type: GET_EXCHANGE_FAIL });

// Thunk deve ser chamado apenas para popular currencies.exchangeRates
export const getCurrencyThunk = () => (dispatch) => getCurrencyAPI()
  .then((response) => dispatch(getExchangeSuccess(response)))
  .catch(() => dispatch(getExchangeFail()));
