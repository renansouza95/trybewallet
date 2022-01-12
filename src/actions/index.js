// Action Type
export const LOGIN = 'LOGIN';
export const GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS';
export const GET_CURRENCY_FAIL = 'GET_CURRENCY_FAIL';

// Action Creator
export const login = (payload) => ({ type: LOGIN, payload });

// Implementaçao do Thunk
