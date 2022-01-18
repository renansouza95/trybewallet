import getCurrencyAPI from '../services/fetchapi';

// Action Type
export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';
export const GET_CURRENCY_FAIL = 'GET_CURRENCY_FAIL';

// Action Creator
export const login = (payload) => ({ type: LOGIN, payload });
export const saveExpenses = (payload) => ({ type: ADD_EXPENSE, payload });
export const currenciesArray = (payload) => ({ type: FETCH_CURRENCIES, payload });
export const getExchangeFail = () => ({ type: GET_CURRENCY_FAIL });

// Thunk deve ser chamado apenas para popular currencies.exchangeRates
export const getCurrencyThunk = () => (dispatch) => getCurrencyAPI()
  .then((response) => dispatch(currenciesArray(response)))
  .catch(() => dispatch(getExchangeFail()));

export const saveExchangeThunk = () => (dispatch) => getCurrencyAPI()
  .then((response) => dispatch(saveExpenses(response)))
  .catch(() => dispatch(getExchangeFail()));
