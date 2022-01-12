// Action Type
export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const GET_CURRENCY = 'GET_CURRENCY_SUCCESS';
// export const GET_CURRENCY_FAIL = 'GET_CURRENCY_FAIL';

// Action Creator
export const login = (payload) => ({ type: LOGIN, payload });
export const expenses = (payload) => ({ type: ADD_EXPENSE, payload });
export const currencies = (payload) => ({ type: GET_CURRENCY, payload });

// Implementaçao do Thunk
